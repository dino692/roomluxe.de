// 21st.dev: @ibrandify/thumbnail-image-viewer
// Simplified for our use: controlled by images prop with real roomluxe photos.
"use client";

import * as React from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  location?: string;
  credit?: string;
};

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));

function ChevronLeft({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function ChevronRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export interface ThumbnailImageViewerProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  images: GalleryImage[];
  className?: string;
}

export default function ThumbnailImageViewer({
  title = "Fotostrecke",
  subtitle = "Alle Räume auf einen Blick.",
  eyebrow = "Collected / Vol. 01",
  images,
  className = "",
}: ThumbnailImageViewerProps) {
  const [active, setActive] = React.useState(0);
  const current = images[active];
  const tabs = React.useRef<HTMLDivElement>(null);
  const id = React.useId().replace(/:/g, "");

  const choose = (n: number) => {
    const next = (n + images.length) % Math.max(1, images.length);
    setActive(clamp(next, 0, images.length - 1));
  };

  return (
    <section className={`w-full max-w-[760px] mx-auto rounded-2xl border border-border bg-card text-card-foreground p-6 sm:p-8 shadow-sm transition-colors ${className}`}>
      <header className="flex items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</span>
          <h2 className="text-2xl sm:text-[26px] font-semibold tracking-tight text-foreground mt-1 mb-1">{title}</h2>
          <p className="text-xs text-muted-foreground max-w-[380px] leading-relaxed">{subtitle}</p>
        </div>
        <div className="font-mono text-xs font-semibold text-foreground bg-muted/80 px-2.5 py-1 rounded-md border border-border/50 shrink-0">
          {String(active + 1).padStart(2, "0")}
          <span className="text-muted-foreground font-normal"> / {String(images.length).padStart(2, "0")}</span>
        </div>
      </header>

      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted isolate group shadow-inner border border-border/40" id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`}>
        {current ? (
          <img key={current.src} src={current.src} alt={current.alt} draggable={false} className="w-full h-full object-cover select-none transition-all duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">Keine Bilder</div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        {current?.location && (
          <span className="absolute left-4 sm:left-5 bottom-4 sm:bottom-5 text-white/90 text-[11px] sm:text-xs font-medium tracking-wide z-10 drop-shadow">{current.location}</span>
        )}
        <div className="absolute right-4 bottom-4 flex items-center gap-1.5 z-10">
          <button type="button" aria-label="Vorheriges Bild" disabled={images.length < 2} onClick={() => choose(active - 1)} className="w-8 h-8 rounded-full bg-background/90 text-foreground backdrop-blur-sm shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none border border-border/30">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button type="button" aria-label="Nächstes Bild" disabled={images.length < 2} onClick={() => choose(active + 1)} className="w-8 h-8 rounded-full bg-background/90 text-foreground backdrop-blur-sm shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none border border-border/30">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 my-4" aria-live="polite">
        <h3 className="text-sm sm:text-base font-semibold tracking-tight text-foreground">{current?.title}</h3>
        <span className="text-[11px] text-muted-foreground whitespace-nowrap">Foto / {current?.credit ?? "Collection"}</span>
      </div>

      <div
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 pt-1"
        role="tablist"
        aria-label="Foto wählen"
        ref={tabs}
        onKeyDown={(e) => {
          let next = active;
          if (e.key === "ArrowRight") next = (active + 1) % images.length;
          else if (e.key === "ArrowLeft") next = (active - 1 + images.length) % images.length;
          else if (e.key === "Home") next = 0;
          else if (e.key === "End") next = images.length - 1;
          else return;
          e.preventDefault();
          choose(next);
          tabs.current?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
        }}
      >
        {images.map((im, i) => {
          const isSelected = active === i;
          return (
            <button
              key={im.src || i}
              type="button"
              id={`${id}-tab-${i}`}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${id}-panel`}
              aria-label={im.title}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => choose(i)}
              className={`relative flex-1 min-w-[55px] max-w-[150px] aspect-[3/2] rounded-lg overflow-hidden transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100 shadow-sm" : "opacity-50 hover:opacity-85 border border-border/60"}`}
            >
              <img src={im.src} alt="" draggable={false} className="w-full h-full object-cover" />
              <span className="absolute bottom-1 left-1.5 text-[9px] font-mono font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <footer className="flex items-center justify-between gap-4 flex-wrap mt-6 pt-4 border-t border-border text-[11px] text-muted-foreground">
        <span>Alle Fotos der Wohnung.</span>
        <span>Pfeiltasten oder Thumbnails</span>
      </footer>
    </section>
  );
}
