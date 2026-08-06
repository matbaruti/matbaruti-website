import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { buildSystemPrompt } from "@/lib/knowledge-base";

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as ChatRequestBody;

          if (!Array.isArray(messages)) {
            return new Response("Messages are required", {
              status: 400,
            });
          }

          const key = process.env.GEMINI_API_KEY;

          if (!key) {
            return new Response("Gemini API key missing", {
              status: 500,
            });
          }

          const google = createGoogleGenerativeAI({
            apiKey: key,
          });

          const result = streamText({
            model: google("gemini-2.5-flash-lite"),
            system: buildSystemPrompt(),
            messages: await convertToModelMessages(
              messages as UIMessage[]
            ),
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (error) {
          console.error("CHAT ERROR:", error);

          return new Response(
            JSON.stringify({
              error: String(error),
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      },
    },
  },
});