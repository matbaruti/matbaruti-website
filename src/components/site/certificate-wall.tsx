import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";
import { X, ZoomIn, Lock } from "lucide-react";
import type { CertificateDocument } from "@/content/certificates";
import { Reveal } from "@/components/site/reveal";

const block = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

/** View-only rendering: no source file, no download, no drag, no context menu. */
function ProtectedImage({
  src,
  alt,
  className,
  rotate = false,
}: {
  src: string;
  alt: string;
  className?: string;
  rotate?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${
        rotate ? "min-h-[70vh] min-w-full" : ""
      }`}
      onContextMenu={block}
    >
      <div
        className={
          rotate
            ? "flex items-center justify-center rotate-90"
            : "w-full"
        }
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          onDragStart={block}
          className={`pointer-events-none select-none ${
            rotate
              ? "h-auto max-h-[85vw] w-auto max-w-[70vh] object-contain"
              : "w-full"
          } ${className ?? ""}`}
        />
      </div>

      <div className="absolute inset-0" aria-hidden />
    </div>
  );
}

export function CertificateWall({ documents }: { documents: CertificateDocument[] }) {
  const [active, setActive] = useState<CertificateDocument | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc, i) => (
          <Reveal key={doc.id} delay={Math.min(i, 6) * 50}>
            <button
              type="button"
              onClick={() => setActive(doc)}
              className="group block w-full overflow-hidden rounded-3xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="relative overflow-hidden border-b border-border bg-muted">
                <ProtectedImage
                  src={doc.image}
                  alt={`${doc.title} — view-only document`}
                  className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs text-muted-foreground backdrop-blur">
                  <ZoomIn className="size-3.5" strokeWidth={1.75} />
                  View
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {doc.kind}
                </p>
                <h3 className="mt-2 text-base font-medium tracking-tight">{doc.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{doc.issuer}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" strokeWidth={1.75} />
        Documents are published as view-only renderings. Original files are not downloadable or
        editable.
      </p>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-full w-full max-w-3xl overflow-auto rounded-3xl border border-border bg-card p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium tracking-tight">{active.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{active.issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent"
              >
                <X className="size-4" strokeWidth={1.75} />
              </button>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted">
              <ProtectedImage
  src={active.image}
  alt={`${active.title} — view-only document`}
  rotate={Boolean(active.landscape)}
  className={active.landscape ? "h-auto w-auto" : "h-auto w-full"}
/>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
