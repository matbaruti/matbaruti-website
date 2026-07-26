import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, stats } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { timeline } from "@/content/experience";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeading } from "@/components/site/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mat Baruti — AI Enthusiast Exploring AI × Healthcare" },
      {
        name: "description",
        content:
          "Mat Baruti is an artificial intelligence enthusiast from Pristina, Kosovo, exploring AI × healthcare and building technology for human impact.",
      },
      { property: "og:title", content: "Mat Baruti — AI Enthusiast Exploring AI × Healthcare" },
      {
        property: "og:description",
        content:
          "Leadership, technology, and continuous learning in service of others — projects, experience, and a knowledge base you can question directly.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <FeaturedWork />
      <TimelinePreview />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <p className="text-eyebrow text-muted-foreground">{profile.location}</p>
          <h1 className="mt-6 text-display">{profile.name}</h1>
          <p className="mt-6 max-w-xl text-xl leading-snug text-foreground sm:text-2xl">
            {profile.role}
            <span className="text-muted-foreground"> · {profile.focus}</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.mission}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/portfolio"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-background transition-opacity hover:opacity-90"
            >
              Explore portfolio
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
            <Link
              to="/ask"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-border px-7 text-[0.9375rem] font-medium text-foreground transition-colors hover:bg-accent"
            >
              Ask Mat AI
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Headshot />
        </Reveal>
      </div>
    </section>
  );
}

function Headshot() {
  if (!profile.headshot) {
    return (
      <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-dashed border-border bg-surface">
        <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Professional headshot pending.
            <br />
            Upload it and set{" "}
            <code className="rounded bg-background px-1.5 py-0.5 text-xs">profile.headshot</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-surface shadow-soft">
      <img
        src={profile.headshot}
        alt={`Portrait of ${profile.name}`}
        className="size-full object-cover"
        width={640}
        height={800}
      />
    </div>
  );
}

function Statistics() {
  return (
    <Section muted>
      <Reveal>
        <p className="text-eyebrow text-muted-foreground">By the numbers</p>
      </Reveal>
      <Reveal delay={80}>
        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

function FeaturedWork() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected work"
          title="A few things worth showing"
          intro="Projects in technology, leadership, and community — each documented in full."
        />
        <Reveal>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            All projects
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 70}>
            <Link
              to="/portfolio/$slug"
              params={{ slug: project.slug }}
              className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div>
                <p className="text-eyebrow text-primary">{project.category}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                Read the case
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
  );
}

function TimelinePreview() {
  const entries = timeline.slice(0, 4);
  return (
    <Section muted>
      <SectionHeading
        eyebrow="Journey"
        title="How the work has unfolded"
        intro="A short view of the path so far. The full chronology lives on the About page."
      />
      <ol className="mt-12 space-y-0 border-t border-border">
        {entries.map((entry, i) => (
          <Reveal as="li" key={`${entry.period}-${entry.title}`} delay={i * 60}>
            <div className="grid gap-2 border-b border-border py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <p className="text-sm tabular-nums text-muted-foreground">{entry.period}</p>
              <div>
                <p className="font-medium">{entry.title}</p>
                {entry.detail ? (
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {entry.detail}
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-10">
        <Link
          to="/about"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
        >
          Read the full story
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.75}
          />
        </Link>
      </Reveal>
    </Section>
  );
}

function ClosingCta() {
  return (
    <Section>
      <Reveal className="rounded-[2rem] border border-border bg-card px-8 py-16 text-center sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Ask anything about this record
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Ask Mat AI answers from Mat's documented professional background — projects, experience,
          awards, and interests. Concise, factual, and sourced from this site.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/ask"
            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[0.9375rem] font-medium text-background transition-opacity hover:opacity-90"
          >
            Ask Mat AI
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-7 text-[0.9375rem] font-medium transition-colors hover:bg-accent"
          >
            Get in touch
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
