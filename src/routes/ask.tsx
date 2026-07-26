import { createFileRoute } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/ask")({
  head: () => ({
    meta: [
      { title: "Ask Mat AI — Mat Baruti's Knowledge Base" },
      {
        name: "description",
        content:
          "Ask questions about Mat Baruti's projects, experience, awards, and interests. Answers come only from his documented professional record.",
      },
      { property: "og:title", content: "Ask Mat AI — Mat Baruti's Knowledge Base" },
      {
        property: "og:description",
        content:
          "A professional knowledge base answering questions from Mat Baruti's documented record.",
      },
    ],
  }),
  component: Ask,
});

const suggestions = [
  "What is Mat working on right now?",
  "Summarise Mat's leadership experience.",
  "Which projects involve AI and healthcare?",
  "What tools does Mat work with?",
];

function Ask() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState(() => `ask-${Date.now()}`);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { messages, sendMessage, status, setMessages } = useChat({
    id: sessionId,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (err) => {
      const message = err.message ?? "";
      if (message.includes("429")) {
        setError("Too many questions at once. Please wait a moment and try again.");
      } else if (message.includes("402")) {
        setError("The assistant is temporarily unavailable. Please try again later.");
      } else {
        setError("Something went wrong reaching the assistant. Please try again.");
      }
    },
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (!busy) textareaRef.current?.focus();
  }, [busy, sessionId]);

  const submit = (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    setError(null);
    setInput("");
    void sendMessage({ text: value });
  };

  const reset = () => {
    setMessages([]);
    setError(null);
    setInput("");
    setSessionId(`ask-${Date.now()}`);
  };

  return (
    <div className="mx-auto flex min-h-[100svh] w-full max-w-3xl flex-col px-6 pb-10 pt-28">
      <header className="flex items-start justify-between gap-6 border-b border-border pb-6">
        <div>
          <p className="text-eyebrow text-primary">Ask Mat AI</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {profile.name}'s knowledge base
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Answers are drawn strictly from Mat's documented professional record on this site. If
            something isn't published here, it will say so.
          </p>
        </div>
        {messages.length > 0 ? (
          <button
            type="button"
            onClick={reset}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="size-3.5" strokeWidth={1.75} />
            New
          </button>
        ) : null}
      </header>

      <Conversation className="flex-1">
        <ConversationContent className="gap-6 px-0 py-8">
          {messages.length === 0 ? (
            <div className="py-6">
              <p className="text-sm text-muted-foreground">Try asking</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => submit(suggestion)}
                    className="rounded-2xl border border-border bg-card px-4 py-3.5 text-left text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground hover:shadow-lift"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {messages.map((message) => {
            const text = message.parts
              .map((part) => (part.type === "text" ? part.text : ""))
              .join("");
            if (!text) return null;
            return (
              <Message from={message.role} key={message.id}>
                <MessageContent
                  className={
                    message.role === "user"
                      ? "bg-foreground text-background"
                      : "bg-transparent px-0 text-foreground"
                  }
                >
                  <MessageResponse>{text}</MessageResponse>
                </MessageContent>
              </Message>
            );
          })}

          {status === "submitted" ? (
            <Shimmer className="text-sm">Consulting the record...</Shimmer>
          ) : null}

          {error ? (
            <p className="rounded-2xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
              {error}
            </p>
          ) : null}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <PromptInput
        onSubmit={(_message, event) => {
          event.preventDefault();
          submit(input);
        }}
        className="sticky bottom-4"
      >
        <PromptInputTextarea
          ref={textareaRef}
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
          placeholder="Ask about Mat's projects, experience, or interests"
        />
        <PromptInputFooter className="justify-end">
          <PromptInputSubmit status={status} disabled={!input.trim() || busy} />
        </PromptInputFooter>
      </PromptInput>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Ask Mat AI answers only from published information on this site.
      </p>
    </div>
  );
}
