import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, Section } from "@/components/site/section";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Projects by Mat Baruti" },
      {
        name: "description",
        content:
          "Case studies across artificial intelligence, healthcare, entrepreneurship, and community leadership — with context, role, and outcomes.",
      },
      { property: "og:title", content: "Portfolio — Projects by Mat Baruti" },
      {
        property: "og:description",
        content: "Selected projects in AI, healthcare, entrepreneurship, and community leadership.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects, programs, and the thinking behind them."
        intro="Each entry documents the context, the role played, and what actually came of it."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i, 6) * 60}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: project.slug }}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-eyebrow text-primary">{project.category}</p>
                    {project.year ? (
                      <p className="text-xs tabular-nums text-muted-foreground">{project.year}</p>
                    ) : null}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight">{project.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  {project.tags?.length ? (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                  View details
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.75}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
