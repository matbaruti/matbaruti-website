import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
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

          const key = process.env.OPENROUTER_API_KEY;

          if (!key) {
            return new Response("OpenRouter API key missing", {
              status: 500,
            });
          }

          const openrouter = createOpenAICompatible({
            name: "openrouter",
            apiKey: key,
            baseURL: "https://openrouter.ai/api/v1",
          });

          const result = streamText({
            model: openrouter("openrouter/free"),
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