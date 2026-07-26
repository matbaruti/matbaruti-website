import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { mediaCoverage } from "@/content/media";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, Section } from "@/components/site/section";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media Coverage — Mat Baruti" },
      {
        name: "description",
        content:
          "Articles, interviews, and publications featuring Mat Baruti's projects and leadership work.",
      },
      { property: "og:title", content: "Media Coverage — Mat Baruti" },
      {
        property: "og:description",
        content: "Articles, interviews, and publications featuring Mat Baruti.",
      },
    ],
  }),
  component: Media,
});

function Media() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Where the work has been written about."
        intro="Articles, interviews, and publications, listed with their source."
      />

      <Section>
        <div className="border-t border-border">
          {mediaCoverage.map((item, i) => {
            const inner = (
              <div className="grid gap-3 py-8 sm:grid-cols-[13rem_1fr] sm:gap-10">
                <div>
                  {item.outlet ? (
                    <p className="text-sm text-muted-foreground">{item.outlet}</p>
                  ) : null}
                  {item.date ? (
                    <p className="mt-1 text-xs tabular-nums text-muted-foreground/70">
                      {item.date}
                    </p>
                  ) : null}
                </div>
                <div>
                  <h2 className="flex items-start gap-2 text-lg font-medium tracking-tight">
                    <span>{item.title}</span>
                    {item.url ? (
                      <ArrowUpRight
                        className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.75}
                      />
                    ) : null}
                  </h2>
                  {item.summary ? (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>
                  ) : null}
                </div>
              </div>
            );

            return (
              <Reveal key={`${item.title}-${i}`} delay={Math.min(i, 6) * 60}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block border-b border-border transition-colors hover:bg-surface"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="border-b border-border">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
