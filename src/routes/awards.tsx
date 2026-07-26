import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { awardGroups, recommendations, referenceAvailability } from "@/content/awards";
import { certificateDocuments } from "@/content/certificates";
import { CertificateWall } from "@/components/site/certificate-wall";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, Section, SectionHeading } from "@/components/site/section";


export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Recognition — Mat Baruti" },
      {
        name: "description",
        content:
          "Awards, certificates, competition placements, publications, and recommendations recognising Mat Baruti's work.",
      },
      { property: "og:title", content: "Awards & Recognition — Mat Baruti" },
      {
        property: "og:description",
        content: "Awards, certificates, competitions, publications, and recommendations.",
      },
    ],
  }),
  component: Awards,
});

function Awards() {
  return (
    <>
      <PageHeader
        eyebrow="Recognition"
        title="Awards, certificates, and words from others."
        intro="Recognition recorded plainly, without embellishment."
      />

      {awardGroups.map((group, gi) => (
        <Section key={group.id} muted={gi % 2 === 1}>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{group.label}</h2>
            {group.description ? (
              <p className="mt-3 max-w-xl text-base text-muted-foreground">{group.description}</p>
            ) : null}
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {group.items.map((item, i) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                    {item.url ? (
                      <ArrowUpRight
                        className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.75}
                      />
                    ) : null}
                  </div>
                  {item.issuer || item.date ? (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {[item.issuer, item.date].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                </>
              );

              const className =
                "group block h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift";

              return (
                <Reveal key={`${item.title}-${i}`} delay={Math.min(i, 5) * 60}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className={className}>
                      {inner}
                    </a>
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Section>
      ))}

      <Section muted={awardGroups.length % 2 === 1}>
        <SectionHeading
          eyebrow="Evidence archive"
          title="Original documents"
          intro="Scanned certificates, awards, and school references, shown as view-only records."
        />
        <CertificateWall documents={certificateDocuments} />
      </Section>

      <Section muted={awardGroups.length % 2 === 0}>
        <SectionHeading eyebrow="References" title="Professional references" />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {recommendations.map((rec, i) => (

            <Reveal key={i} delay={i * 70}>
              <figure className="h-full rounded-3xl border border-border bg-card p-8">
                <blockquote className="text-lg leading-relaxed text-foreground">
                  “{rec.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{rec.author}</span>
                  {rec.role ? ` · ${rec.role}` : ""}
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8">
              <ul className="space-y-3 text-foreground">
                {referenceAvailability.sources.map((source) => (
                  <li key={source} className="leading-relaxed">
                    {source}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {referenceAvailability.note}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

    </>
  );
}
