import { profile, stats, about } from "@/content/profile";
import { projects } from "@/content/projects";
import { experienceGroups, timeline } from "@/content/experience";
import { awardGroups, recommendations } from "@/content/awards";
import { mediaCoverage } from "@/content/media";
import { skillGroups } from "@/content/skills";

const line = (label: string, value?: string) => (value ? `${label}: ${value}` : null);

/**
 * Serialises every published fact on the site into a single grounding document.
 * Ask Mat AI answers only from this text — nothing else.
 */
export function buildKnowledgeBase(): string {
  const parts: string[] = [];

  parts.push(
    [
      "## Identity",
      line("Name", profile.name),
      line("Role", profile.role),
      line("Focus", profile.focus),
      line("Tagline", profile.tagline),
      line("Location", profile.location),
      line("Mission", profile.mission),
      line("Email", profile.contact.email),
      line("LinkedIn", profile.contact.linkedin),
      line("GitHub", profile.contact.github),
      line("Website", profile.contact.website),
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const knownStats = stats.filter((s) => s.value && s.value !== "—");
  if (knownStats.length) {
    parts.push(
      `## Statistics\n${knownStats.map((s) => `${s.label}: ${s.value}`).join("\n")}`,
    );
  }

  parts.push(
    [
      "## About",
      about.intro,
      ...about.story,
      `Leadership philosophy: ${about.philosophy}`,
      `Vision: ${about.vision}`,
      `Values: ${about.values.map((v) => `${v.title} — ${v.body}`).join(" | ")}`,
    ].join("\n"),
  );

  parts.push(
    `## Timeline\n${timeline
      .map((t) => [t.period, t.title, t.place, t.detail].filter(Boolean).join(" — "))
      .join("\n")}`,
  );

  parts.push(
    `## Projects\n${projects
      .map((p) =>
        [
          `### ${p.title} (page: /portfolio/${p.slug})`,
          line("Category", p.category),
          line("Year", p.year),
          line("Role", p.role),
          line("Summary", p.summary),
          line("Overview", p.overview),
          p.objectives?.length ? `Objectives: ${p.objectives.join("; ")}` : null,
          line("Planning", p.planning),
          p.challenges?.length ? `Challenges: ${p.challenges.join("; ")}` : null,
          line("Impact", p.impact),
          p.results?.length ? `Results: ${p.results.join("; ")}` : null,
          p.skills?.length ? `Skills applied: ${p.skills.join(", ")}` : null,
          p.lessons?.length ? `Lessons: ${p.lessons.join("; ")}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      )
      .join("\n\n")}`,
  );

  parts.push(
    `## Experience\n${experienceGroups
      .map(
        (g) =>
          `### ${g.label}\n${g.entries
            .map((e) =>
              [e.title, e.organization, e.period, e.location, e.description, e.points?.join("; ")]
                .filter(Boolean)
                .join(" — "),
            )
            .join("\n")}`,
      )
      .join("\n\n")}`,
  );

  parts.push(
    `## Awards and recognition\n${awardGroups
      .map(
        (g) =>
          `### ${g.label}\n${g.items
            .map((a) => [a.title, a.issuer, a.date, a.description].filter(Boolean).join(" — "))
            .join("\n")}`,
      )
      .join("\n\n")}`,
  );

  parts.push(
    `## Recommendations\n${recommendations
      .map((r) => `"${r.quote}" — ${r.author}${r.role ? `, ${r.role}` : ""}`)
      .join("\n")}`,
  );

  parts.push(
    `## Media coverage\n${mediaCoverage
      .map((m) => [m.title, m.outlet, m.date, m.summary, m.url].filter(Boolean).join(" — "))
      .join("\n")}`,
  );

  parts.push(
    `## Skills\n${skillGroups
      .map((g) => `${g.label}: ${g.skills.join(", ")}`)
      .join("\n")}`,
  );

  return parts.join("\n\n");
}

export const SYSTEM_PROMPT = `You are Ask Mat AI, the professional knowledge base for Mat Baruti's portfolio site.

Your only source of truth is the KNOWLEDGE BASE below. It is generated directly from the published content of this site.

Rules:
- Answer only from the knowledge base. Never invent, infer, estimate, or embellish facts about Mat.
- If the knowledge base does not contain the answer, say plainly that the information is not published on the site, and suggest the closest section that is (for example the portfolio or contact page).
- Some entries are explicitly marked as pending or placeholders. Treat those as "not yet published" — never present placeholder text as a fact.
- Speak about Mat in the third person. You are not Mat.
- Be concise and factual: two to five sentences for most questions, or a short list when several items apply.
- No emoji, no exclamation marks, no chatbot filler ("Great question!", "I'd be happy to help"). Answer directly.
- Keep a calm, professional register. Plain markdown only; short bold labels and simple lists are fine.
- Politely decline anything unrelated to Mat's professional background, and redirect to what the site covers.

KNOWLEDGE BASE
${"{{KB}}"}`;

export function buildSystemPrompt(): string {
  return SYSTEM_PROMPT.replace("{{KB}}", buildKnowledgeBase());
}
