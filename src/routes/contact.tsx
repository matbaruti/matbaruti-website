import { createFileRoute } from "@tanstack/react-router";
import { 
  Facebook,
  Github, 
  Globe, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin, 
  Phone,
} from "lucide-react";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, PendingNote, Section } from "@/components/site/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mat Baruti" },
      {
        name: "description",
        content:
          "Get in touch with Mat Baruti about collaboration, speaking, programmes, and projects in AI and healthcare.",
      },
      { property: "og:title", content: "Contact — Mat Baruti" },
      {
        property: "og:description",
        content: "Reach Mat Baruti about collaboration, speaking, and projects.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { contact, cvUrl, location } = profile;
const channels = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
  { icon: Linkedin, label: "LinkedIn", value: contact.linkedin, href: contact.linkedin },
  { icon: Github, label: "GitHub", value: contact.github, href: contact.github },
  { icon: Instagram, label: "Instagram", value: contact.instagram, href: contact.instagram },
  { icon: Facebook, label: "Facebook", value: contact.facebook, href: contact.facebook },
  { icon: Globe, label: "Website", value: contact.website, href: contact.website },
].filter((channel) => channel.value);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Open to conversations that lead somewhere useful."
        intro="Collaboration, programmes, speaking, or a question about the work — all welcome."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-eyebrow text-muted-foreground">Direct</p>
            {channels.length === 0 ? (
              <div className="mt-6">
                <PendingNote>
                  Contact details are not published yet. Add email, phone, LinkedIn, or GitHub in
                  the profile content file and they will appear here.
                </PendingNote>
              </div>
            ) : (
              <ul className="mt-6 border-t border-border">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 border-b border-border py-5 transition-colors hover:bg-surface"
                    >
                      <channel.icon
                        className="size-[18px] text-muted-foreground"
                        strokeWidth={1.75}
                      />
                      <span className="text-sm text-muted-foreground">{channel.label}</span>
                      <span className="ml-auto truncate text-sm font-medium">{channel.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="size-[18px]" strokeWidth={1.75} />
              {location}
            </div>

            {cvUrl ? (
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-[0.9375rem] font-medium transition-colors hover:bg-accent"
              >
                Download CV
              </a>
            ) : null}
          </Reveal>


        </div>
      </Section>
    </>
  );
}
