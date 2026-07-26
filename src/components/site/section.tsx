import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  children,
  className,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section className={cn(muted && "bg-surface", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">{children}</div>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto w-full max-w-6xl px-6 pb-4 pt-32 sm:pt-40">
      <Reveal>
        {eyebrow ? <p className="text-eyebrow text-primary">{eyebrow}</p> : null}
        <h1 className="mt-4 text-title max-w-3xl">{title}</h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        {children}
      </Reveal>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      {eyebrow ? <p className="text-eyebrow text-primary">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </Reveal>
  );
}

/** Honest empty state used wherever real content has not been supplied yet. */
export function PendingNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-8 text-sm leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}
