import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { galleryAlbums } from "@/content/gallery";
import { Reveal } from "@/components/site/reveal";
import { PageHeader, PendingNote, Section } from "@/components/site/section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mat Baruti" },
      {
        name: "description",
        content:
          "Photographs from projects, international exchanges, events, leadership work, presentations, and travel.",
      },
      { property: "og:title", content: "Gallery — Mat Baruti" },
      {
        property: "og:description",
        content: "Photographs from projects, exchanges, events, leadership work, and travel.",
      },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<string>("all");

  const albums = active === "all" ? galleryAlbums : galleryAlbums.filter((a) => a.id === active);
  const images = albums.flatMap((album) =>
    album.images.map((image) => ({ ...image, album: album.label })),
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from the work."
        intro="Grouped into albums. Captions carry the context."
      />

      <Section>
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {[{ id: "all", label: "All" }, ...galleryAlbums].map((album) => (
              <button
                key={album.id}
                type="button"
                onClick={() => setActive(album.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  active === album.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {album.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12">
          {images.length === 0 ? (
            <Reveal>
              <PendingNote>
                No photographs have been added yet. Once the images from the portfolio document are
                uploaded, they will appear here inside their albums.
              </PendingNote>
            </Reveal>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((image, i) => (
                <Reveal key={`${image.src}-${i}`} delay={Math.min(i, 8) * 40} className="mb-4 block break-inside-avoid">
                  <figure className="overflow-hidden rounded-2xl bg-surface">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full object-cover"
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
          )}
        </div>
      </Section>
    </>
  );
}
