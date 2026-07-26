import { Link } from "@tanstack/react-router";
import { profile } from "@/content/profile";

const columns = [
  {
    label: "Work",
    links: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/experience", label: "Experience" },
      { to: "/skills", label: "Skills" },
    ],
  },
  {
    label: "Record",
    links: [
      { to: "/awards", label: "Awards" },
      { to: "/media", label: "Media coverage" },
      { to: "/gallery", label: "Gallery" },
    ],
  },
  {
    label: "More",
    links: [
      { to: "/about", label: "About" },
      { to: "/ask", label: "Ask Mat AI" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <p className="text-[0.9375rem] font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {profile.focus}. {profile.tagline}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{profile.location}</p>
        </div>

        {columns.map((column) => (
          <div key={column.label}>
            <p className="text-eyebrow text-muted-foreground">{column.label}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-border px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.mission.split(".")[0]}.</p>
      </div>
    </footer>
  );
}
