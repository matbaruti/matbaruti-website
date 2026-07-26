import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { Reveal } from "@/components/site/reveal";
import { PendingNote, Section } from "@/components/site/section";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Mat Baruti` : "Project — Mat Baruti";
    const description = loaderData?.summary ?? "A project by Mat Baruti.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjectDetail,
});

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-b border-border py-9 sm:grid-cols-[11rem_1fr] sm:gap-10">
      <h2 className="text-eyebrow text-muted-foreground">{label}</h2>
      <div className="max-w-2xl text-base leading-[1.8] text-muted-foreground">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectDetail() {
  const project = Route.useLoaderData() as Project;
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <header className="mx-auto w-full max-w-6xl px-6 pt-32 sm:pt-40">
        <Reveal>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft
              className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              strokeWidth={1.75}
            />
            Portfolio
          </Link>
          <p className="mt-10 text-eyebrow text-primary">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h1 className="mt-4 max-w-3xl text-title">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          {project.tags?.length ? (
            <ul className="mt-8 flex flex-wrap gap-2">
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
        </Reveal>
      </header>

      <Section>
        <div className="border-t border-border">
          {project.overview ? <Field label="Overview">{project.overview}</Field> : null}
          {project.objectives?.length ? (
            <Field label="Objectives">
              <List items={project.objectives} />
            </Field>
          ) : null}
          {project.planning ? <Field label="Planning & execution">{project.planning}</Field> : null}
          {project.challenges?.length ? (
            <Field label="Challenges">
              <List items={project.challenges} />
            </Field>
          ) : null}
          {project.impact ? <Field label="Impact">{project.impact}</Field> : null}
          {project.results?.length ? (
            <Field label="Results">
              <List items={project.results} />
            </Field>
          ) : null}
          {project.skills?.length ? (
            <Field label="Skills applied">
              <ul className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-surface px-3.5 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Field>
          ) : null}
          {project.lessons?.length ? (
            <Field label="Lessons learned">
              <List items={project.lessons} />
            </Field>
          ) : null}
        </div>

        {project.gallery?.length ? (
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image) => (
              <Reveal key={image.src}>
                <figure className="overflow-hidden rounded-3xl bg-surface">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {image.caption ? (
                    <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-14 block">
            <PendingNote>
              Photos for this project will appear here once the images from the portfolio document
              are added.
            </PendingNote>
          </Reveal>
        )}
      </Section>

      <Section muted>
        <Reveal>
          <p className="text-eyebrow text-muted-foreground">Next project</p>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="group mt-4 block max-w-2xl"
          >
            <h2 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-4xl">
              {next.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">{next.summary}</p>
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
