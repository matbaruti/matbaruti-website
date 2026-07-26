import { createFileRoute } from "@tanstack/react-router";
import { about, profile } from "@/content/profile";
import { timeline } from "@/content/experience";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, Section, SectionHeading } from "@/components/site/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mat Baruti" },
      {
        name: "description",
        content:
          "The story, values, leadership philosophy, and vision behind Mat Baruti's work in artificial intelligence, healthcare, and community.",
      },
      { property: "og:title", content: "About — Mat Baruti" },
      {
        property: "og:description",
        content:
          "Journey, values, leadership philosophy, and a full chronology of Mat Baruti's work.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Curious about how technology can quietly improve people's lives."
        intro={about.intro}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-eyebrow text-muted-foreground">Mission</p>
            <p className="mt-5 text-xl leading-relaxed sm:text-2xl">{profile.mission}</p>
            <p className="mt-8 text-sm text-muted-foreground">{profile.location}</p>
          </Reveal>
          <Reveal delay={80} className="space-y-6">
            {about.story.map((paragraph, i) => (
              <p key={i} className="text-base leading-[1.8] text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Values" title="What the work is built on" />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {about.values.map((value, i) => (
            <Reveal key={value.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <h3 className="text-lg font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-eyebrow text-primary">Leadership philosophy</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {about.philosophy}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-eyebrow text-primary">Vision</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{about.vision}</p>
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Timeline" title="The path so far" />
        <ol className="mt-12 border-t border-border">
          {timeline.map((entry, i) => (
            <Reveal as="li" key={`${entry.period}-${entry.title}`} delay={Math.min(i, 6) * 50}>
              <div className="group grid gap-3 border-b border-border py-8 transition-colors sm:grid-cols-[11rem_1fr] sm:gap-8">
                <div>
                  <p className="text-sm tabular-nums text-muted-foreground">{entry.period}</p>
                  {entry.place ? (
                    <p className="mt-1 text-xs text-muted-foreground/70">{entry.place}</p>
                  ) : null}
                </div>
                <div>
                  <p className="text-lg font-medium tracking-tight">{entry.title}</p>
                  {entry.detail ? (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {entry.detail}
                    </p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
