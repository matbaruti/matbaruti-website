import { createFileRoute } from "@tanstack/react-router";
import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, Section } from "@/components/site/section";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tools — Mat Baruti" },
      {
        name: "description",
        content:
          "Areas of practice across artificial intelligence, leadership, research, and the tools used day to day.",
      },
      { property: "og:title", content: "Skills & Tools — Mat Baruti" },
      {
        property: "og:description",
        content: "Areas of practice across AI, leadership, research, and everyday tools.",
      },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Practices, not proficiency bars."
        intro="Grouped by the kind of work they serve. Nothing here is scored out of ten."
      />

      <Section>
        <div className="border-t border-border">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={Math.min(i, 5) * 70}>
              <div className="grid gap-5 border-b border-border py-10 sm:grid-cols-[15rem_1fr] sm:gap-10">
                <div>
                  <h2 className="text-lg font-medium tracking-tight">{group.label}</h2>
                  {group.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>
                  ) : null}
                </div>
                <ul className="flex flex-wrap gap-2 self-start">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
