import Link from "next/link";

const drafts = [
  {
    slug: "draft-e",
    letter: "E",
    name: "Suite",
    pitch: "Boutique-Hotel · 21st",
    desc: "Playfair Display + Instrument Sans · dunkler Hero · Property Preview Cards aus dem 21st-Katalog (@shadcnspace/card-02) · Thumbnail Image Viewer (@ibrandify) · Date Range Picker (@bidyut10).",
    accent: "#171717",
    bg: "#f5f5f4",
    fg: "#0a0a0a",
    components: ["Property Preview Card", "Thumbnail Viewer", "Date Range Picker"],
  },
  {
    slug: "draft-f",
    letter: "F",
    name: "Journey",
    pitch: "Travel-Lifestyle · 21st",
    desc: "Fraunces + Inter · warme Terrakotta-Palette · Place Cards mit Image-Carousel (@ravikatiyar162/card-22) · Thumbnail Image Viewer · Date Range Picker Card.",
    accent: "#9A3412",
    bg: "#FFF7ED",
    fg: "#1C1917",
    components: ["Place Card (Carousel)", "Thumbnail Viewer", "Date Range Picker"],
  },
  {
    slug: "draft-g",
    letter: "G",
    name: "Loft",
    pitch: "Modern · 3D · 21st",
    desc: "Inter Tight + Geist Mono · Split-Screen-Hero mit Grid-Hintergrund · 3D-Flip-Property-Cards (@shadcnspace/card-14) · Thumbnail Viewer · Date Range Picker · Live-Dot.",
    accent: "#10B981",
    bg: "#FAFAFA",
    fg: "#0A0A0A",
    components: ["3D Flip Card", "Thumbnail Viewer", "Date Range Picker"],
  },
  {
    slug: "draft-h",
    letter: "H",
    name: "Agency",
    pitch: "Real-Estate · 21st",
    desc: "DM Serif Display + Inter · Real Estate Search Hero mit Search-Bar (@felipemenezes098/hero-09) · Hotel Cards horizontal (@lavikatiyar/card) · Thumbnail Viewer · Date Range Picker.",
    accent: "#78716C",
    bg: "#FAFAF9",
    fg: "#1C1917",
    components: ["Hero09 Search", "Hotel Card", "Thumbnail Viewer", "Date Range Picker"],
  },
];

export default function PreviewsIndex() {
  return (
    <section className="px-5 sm:px-8 py-16" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] uppercase text-black/50">
          Interne Vorschau · noindex · Entwürfe aus dem 21st.dev-Katalog
        </p>
        <h1 className="mt-3 text-5xl sm:text-6xl font-serif leading-tight text-black">
          roomluxe · 4 Design-Richtungen aus dem 21st-Katalog
        </h1>
        <p className="mt-5 max-w-2xl text-black/70">
          Alle vier Varianten nutzen echte 21st.dev-Komponenten (Property Cards, Hero-Sections,
          Date-Picker, Gallery) auf dem shadcn/ui-Fundament. Jede Variante hat eigene Palette und
          Typografie, aber dieselben echten roomluxe-Daten (Wohnungen, Stadtteil, Rezensionen).
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {drafts.map((d) => (
            <Link
              key={d.slug}
              href={`/previews/${d.slug}`}
              className="group rounded-2xl overflow-hidden border border-black/10 hover:border-black/40 transition shadow-sm hover:shadow-xl flex flex-col"
              style={{ background: d.bg, color: d.fg }}
            >
              <div className="aspect-[4/3] relative flex items-start justify-start p-6">
                <span className="text-7xl font-serif leading-none" style={{ color: d.accent }}>
                  {d.letter}
                </span>
                <span
                  className="absolute bottom-6 right-6 text-xs tracking-[0.2em] uppercase"
                  style={{ color: d.accent }}
                >
                  {d.pitch}
                </span>
              </div>
              <div className="px-6 py-5 border-t flex-1 flex flex-col" style={{ borderColor: d.accent + "40", background: "color-mix(in oklab, white 85%, transparent)" }}>
                <h2 className="font-serif text-2xl text-black">{d.name}</h2>
                <p className="mt-2 text-sm text-black/70 leading-relaxed flex-1">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.components.map((c) => (
                    <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-black/5 text-black/70">
                      {c}
                    </span>
                  ))}
                </div>
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
            <li>Alle vier Varianten einmal durchscrollen.</li>
            <li>Entscheide, welche Richtung weitergeht (E, F, G oder H) oder welche Elemente ich mischen soll.</li>
            <li>Nach der Wahl: PR #12 schliessen und löschen (laut 2c), gewählte Richtung in eigenem PR in alle echten Templates einziehen.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
