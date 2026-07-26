import { createFileRoute } from "@tanstack/react-router";
import { experienceGroups } from "@/content/experience";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, Section } from "@/components/site/section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mat Baruti" },
      {
        name: "description",
        content:
          "Leadership roles, volunteer work, organizations, international programmes, and education in Mat Baruti's record.",
      },
      { property: "og:title", content: "Experience — Mat Baruti" },
      {
        property: "og:description",
        content:
          "Leadership, volunteering, organizations, international programmes, and education.",
      },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Responsibility, taken on early and carried carefully."
        intro="Grouped by the kind of commitment rather than a single flat list."
      />

      {experienceGroups.map((group, gi) => (
        <Section key={group.id} muted={gi % 2 === 1}>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{group.label}</h2>
            {group.description ? (
              <p className="mt-3 max-w-xl text-base text-muted-foreground">{group.description}</p>
            ) : null}
          </Reveal>

          <div className="mt-10 border-t border-border">
            {group.entries.map((entry, i) => (
              <Reveal key={`${entry.title}-${i}`} delay={Math.min(i, 5) * 60}>
                <article className="grid gap-3 border-b border-border py-8 sm:grid-cols-[13rem_1fr] sm:gap-10">
                  <div>
                    <p className="text-sm text-muted-foreground">{entry.organization}</p>
                    {entry.period ? (
                      <p className="mt-1 text-xs tabular-nums text-muted-foreground/70">
                        {entry.period}
                      </p>
                    ) : null}
                    {entry.location ? (
                      <p className="mt-1 text-xs text-muted-foreground/70">{entry.location}</p>
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{entry.title}</h3>
                    {entry.description ? (
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {entry.description}
                      </p>
                    ) : null}
                    {entry.points?.length ? (
                      <ul className="mt-4 space-y-2.5">
                        {entry.points.map((point, pi) => (
                          <li key={pi} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
