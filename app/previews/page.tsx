import Link from "next/link";

const drafts = [
  {
    slug: "draft-d",
    letter: "D",
    name: "Direct",
    pitch: "Hospitality-Tech · meine Empfehlung",
    desc: "Geist Sans + Geist Mono. Off-White, Deep Ink, Pine Green, Warm Stone. Rounded Cards, Pill-Chips, Trust-Signale, Buchungs-Widget. Zielgefühl: Blueground / Sonder / Vercel — professionell, direkt, Zahlen führen.",
    accent: "#1F5F3A",
    bg: "#FAFAF9",
    fg: "#0A0A0A",
    recommended: true,
  },
  {
    slug: "draft-a",
    letter: "A",
    name: "Editorial",
    pitch: "Living-Magazin",
    desc: "Fraunces + Inter. Terrakotta, Papier, Walnut. Nummerierte Rubriken, Dropcap, Italic-Headlines, Zweispalter. Zielgefühl: Vogue Living, Wohn-Journal.",
    accent: "#C2583B",
    bg: "#F5EFE0",
    fg: "#2A1F17",
    recommended: false,
  },
  {
    slug: "draft-b",
    letter: "B",
    name: "Residence",
    pitch: "Boutique-Hotel, dunkel",
    desc: "Playfair + Instrument Sans. Charcoal, Champagne, Ivory. Monogramm „R\", Hairline-Borders, Luxus-Vokabular. Zielgefühl: Fünf-Sterne-Residenz, exklusiv.",
    accent: "#D4B878",
    bg: "#15110D",
    fg: "#F3EBDC",
    recommended: false,
  },
  {
    slug: "draft-c",
    letter: "C",
    name: "Studio",
    pitch: "Scandi-Minimal",
    desc: "Inter Tight + Instrument Serif. Snow, Ink, Sage, Burnt. Grotesk-only, strenge Grids, 01/02-Nummerierung, Hairlines. Zielgefühl: Studio-Objekt, zeitlos.",
    accent: "#C96F3B",
    bg: "#FBFAF7",
    fg: "#111111",
    recommended: false,
  },
];

export default function PreviewsIndex() {
  return (
    <section className="px-5 sm:px-8 py-16" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-black/50">
          Interne Vorschau · noindex · wird nicht ausgeliefert
        </p>
        <h1 className="mt-3 text-5xl sm:text-6xl font-serif leading-tight text-black">
          roomluxe · 4 Design-Richtungen
        </h1>
        <p className="mt-5 max-w-2xl text-black/70">
          Freistoß plus eine zusätzliche Empfehlung (D · „Direct"). Jede
          Variante mit eigener Palette, Typografie und Komponenten-Sprache.
          Jede Vorschau zeigt alle 6 Template-Typen als Scroll-Showcase mit
          echten Daten (Homepage · Stadtteil · Wohnform-Hub · Ratgeber-Artikel ·
          Wohnung-Detail · Kontakt).
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {drafts.map((d) => (
            <Link
              key={d.slug}
              href={`/previews/${d.slug}`}
              className="group rounded-2xl overflow-hidden border border-black/10 hover:border-black/40 transition shadow-sm hover:shadow-xl"
              style={{ background: d.bg, color: d.fg }}
            >
              <div className="aspect-[4/3] relative flex items-start justify-start p-6">
                <span
                  className="text-7xl font-serif leading-none"
                  style={{ color: d.accent }}
                >
                  {d.letter}
                </span>
                {d.recommended && (
                  <span className="absolute top-6 right-6 text-[10px] tracking-[0.15em] uppercase font-semibold px-2 py-1 rounded-full" style={{ background: d.accent, color: "#fff" }}>
                    Empfehlung
                  </span>
                )}
                <span
                  className="absolute bottom-6 right-6 text-xs tracking-[0.2em] uppercase"
                  style={{ color: d.accent }}
                >
                  {d.pitch}
                </span>
              </div>
              <div
                className="px-6 py-5 border-t"
                style={{ borderColor: d.accent + "40", background: "color-mix(in oklab, white 85%, transparent)" }}
              >
                <h2 className="font-serif text-2xl text-black">{d.name}</h2>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">{d.desc}</p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold tracking-wider uppercase group-hover:translate-x-1 transition">
                  Vorschau öffnen →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-black/10 p-6 text-sm text-black/70">
          <p className="font-semibold text-black mb-2">So gehst du vor</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Alle drei Varianten einmal durchscrollen.</li>
            <li>Entscheide, welche Richtung weitergeht (A, B oder C).</li>
            <li>Danach: ich ziehe die gewählte Richtung in alle echten Templates (Homepage/Stadtteil/Hub/Ratgeber/Wohnung/Kontakt) ein — oder wir mischen Elemente aus zweien.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
