import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { stadtteile } from "@/lib/data/stadtteile";
import { seoHubs } from "@/lib/data/seo-hubs";
import { wohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entwurf D · Direct",
  robots: { index: false, follow: false },
};

const stadt = stadtteile.find((s) => s.slug === "bad-vilbel-kernstadt")!;
const hub = seoHubs.find((h) => h.slug === "moeblierte-wohnungen")!;
const artikel = ratgeber.find((a) => a.slug === "mietpreise-bad-vilbel-2025")!;
const wohnung = wohnungen[0];

export default function DraftD() {
  return (
    <div className={`${geist.variable} ${geistMono.variable} draft-d`}>
      <style>{`
        .draft-d {
          --off: #FAFAF9;
          --ink: #0A0A0A;
          --ink-80: rgba(10,10,10,0.82);
          --ink-70: rgba(10,10,10,0.68);
          --ink-55: rgba(10,10,10,0.55);
          --ink-40: rgba(10,10,10,0.4);
          --ink-15: rgba(10,10,10,0.14);
          --ink-10: rgba(10,10,10,0.08);
          --ink-5: rgba(10,10,10,0.04);
          --pine: #1F5F3A;
          --pine-700: #164A2C;
          --pine-100: #E8F0EA;
          --stone: #F5F2EE;
          --stone-200: #ECE7DF;
          --dot: #10B981;
          --amber: #B45309;
          background: var(--off);
          color: var(--ink);
          font-family: var(--font-geist), system-ui, sans-serif;
          font-feature-settings: "ss01","cv11","ss03";
          letter-spacing: -0.005em;
        }
        .draft-d h1, .draft-d h2, .draft-d h3, .draft-d h4 {
          font-family: var(--font-geist), system-ui, sans-serif;
          letter-spacing: -0.03em;
          font-weight: 500;
          line-height: 1.05;
        }
        .draft-d .mono { font-family: var(--font-geist-mono), monospace; font-feature-settings: "tnum" 1; }
        .draft-d .num { font-variant-numeric: tabular-nums; }
        .draft-d .eyebrow { font-size: 12px; letter-spacing: 0.02em; color: var(--ink-55); font-weight: 500; }
        .draft-d .chip {
          display: inline-flex; align-items: center; gap: .375rem;
          padding: .3rem .625rem; border-radius: 999px; font-size: 12px; font-weight: 500;
          background: var(--off); border: 1px solid var(--ink-10); color: var(--ink-80);
        }
        .draft-d .chip-dark { background: var(--ink); color: var(--off); border-color: var(--ink); }
        .draft-d .chip-pine { background: var(--pine-100); color: var(--pine-700); border-color: color-mix(in oklab, var(--pine) 25%, transparent); }
        .draft-d .btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
          padding: .75rem 1.25rem; border-radius: .75rem; font-size: 14px; font-weight: 500;
          background: var(--ink); color: var(--off); transition: transform .15s ease, background .15s ease;
        }
        .draft-d .btn-primary:hover { background: var(--pine); }
        .draft-d .btn-ghost {
          display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
          padding: .75rem 1.25rem; border-radius: .75rem; font-size: 14px; font-weight: 500;
          background: transparent; color: var(--ink); border: 1px solid var(--ink-15);
          transition: border-color .15s ease, background .15s ease;
        }
        .draft-d .btn-ghost:hover { background: var(--ink-5); border-color: var(--ink); }
        .draft-d .card {
          background: var(--off); border: 1px solid var(--ink-10); border-radius: 1rem;
          transition: border-color .15s ease, box-shadow .2s ease, transform .2s ease;
        }
        .draft-d .card:hover { border-color: var(--ink-15); box-shadow: 0 4px 14px rgba(10,10,10,0.04), 0 10px 32px -12px rgba(10,10,10,0.08); }
        .draft-d .hair { border-color: var(--ink-10); }
        .draft-d .star { color: var(--ink); }
        .draft-d .verified-dot {
          display: inline-block; width: 7px; height: 7px; border-radius: 999px;
          background: var(--dot); box-shadow: 0 0 0 3px color-mix(in oklab, var(--dot) 20%, transparent);
        }
      `}</style>

      {/* ============== Masthead · schlanke Nav ============== */}
      <header className="px-5 sm:px-8 py-5 border-b hair">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-ink text-off inline-flex items-center justify-center text-sm font-semibold" style={{ background: "var(--ink)", color: "var(--off)" }}>r</span>
            <span className="font-medium">roomluxe</span>
            <span className="chip chip-pine ml-1"><span className="verified-dot" /> Private · Verified</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: "var(--ink-70)" }}>
            <a href="#" className="hover:text-black">Wohnungen</a>
            <a href="#" className="hover:text-black">Stadtteile</a>
            <a href="#" className="hover:text-black">Ratgeber</a>
            <a href="#" className="hover:text-black">Kontakt</a>
          </nav>
          <div className="flex items-center gap-2.5">
            <a href="tel:+496967830 6125" className="btn-ghost mono text-xs hidden sm:inline-flex">069 678 306 125</a>
            <a href="#" className="btn-primary text-xs">Verfügbarkeit prüfen</a>
          </div>
        </div>
      </header>

      {/* ============== 01 · HOMEPAGE HERO ============== */}
      <section className="px-5 sm:px-8 pt-16 pb-20 border-b hair">
        <div className="mx-auto max-w-7xl">
          <SectionLabel num="01" text="Startseite" />
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="chip chip-pine"><span className="verified-dot" /> 6 Wohnungen verfügbar</span>
                <span className="chip">Bad Vilbel · Rhein-Main</span>
                <span className="chip">★ 4,83 · 72 Rezensionen</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-medium leading-[0.98]">
                Wohnen in Bad Vilbel.<br/>
                <span style={{ color: "var(--ink-55)" }}>Direkt vom Eigentümer.</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed max-w-2xl" style={{ color: "var(--ink-70)" }}>
                Sechs sorgfältig geführte Apartments in Bad Vilbel — vermietet
                vom Eigentümer, ohne Agentur, ohne Provision. 20 Minuten
                S-Bahn nach Frankfurt. Antwort in der Regel innerhalb einer Stunde.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#" className="btn-primary">Verfügbarkeit prüfen →</a>
                <a href="#" className="btn-ghost">Alle Wohnungen ansehen</a>
                <a href="tel:+496967830 6125" className="btn-ghost mono text-xs">069 678 306 125</a>
              </div>
              <div className="mt-14 grid grid-cols-4 gap-6 pt-8 border-t hair">
                <StatD k="4,83" sub="★ · 72 Bewertungen" />
                <StatD k="20 min" sub="S-Bahn → Frankfurt" />
                <StatD k="< 1 h" sub="Antwortzeit" />
                <StatD k="0 €" sub="Makler · Provision" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/images/wohnung/apt-01.jpg" alt="" fill priority sizes="42vw" className="object-cover" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="chip chip-dark"><span className="verified-dot" /> Jetzt verfügbar</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="rounded-xl p-3 backdrop-blur-md" style={{ background: "rgba(250,250,249,0.92)" }}>
                    <p className="eyebrow">Vorschau</p>
                    <p className="text-sm font-medium mt-0.5">3-Zimmer · Kernstadt · Balkon</p>
                    <p className="mono text-xs mt-0.5" style={{ color: "var(--ink-55)" }}>75 m² · bis 4 Gäste</p>
                  </div>
                  <p className="rounded-xl px-3 py-2 mono text-sm font-medium" style={{ background: "var(--ink)", color: "var(--off)" }}>
                    99 €<span style={{ color: "var(--ink-40)" }}>/Nacht</span>
                  </p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {["apt-02","apt-03","apt-04","apt-05","apt-07"].map((f) => (
                  <div key={f} className="relative aspect-square rounded-md overflow-hidden">
                    <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="8vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 02 · STADTTEIL ============== */}
      <section className="px-5 sm:px-8 py-20 border-b hair">
        <div className="mx-auto max-w-7xl">
          <SectionLabel num="02" text="Stadtteil · Neighbourhood" />
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h2 className="text-5xl sm:text-6xl font-medium">
                  {stadt.name}
                </h2>
                <div className="flex gap-2">
                  <span className="chip">PLZ 61118</span>
                  <span className="chip chip-pine mono">{stadt.priceRange}</span>
                </div>
              </div>
              <p className="mt-3 text-lg" style={{ color: "var(--ink-55)" }}>{stadt.tagline}</p>
              <p className="mt-8 text-base leading-[1.75] max-w-prose" style={{ color: "var(--ink-70)" }}>
                {stadt.intro}
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-3">
                <KpiCard title="S-Bahn" value={stadt.sbahnTimeShort} sub="nach Frankfurt HBF" />
                <KpiCard title="Linien" value="S1 · S6" sub="ab Bahnhof Bad Vilbel" />
                <KpiCard title="Charakter" value={stadt.characterShort} sub="urban, zentral" />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/images/wohnung/apt-05.jpg" alt={stadt.name} fill sizes="42vw" className="object-cover" />
              </div>
              <div className="mt-4 card p-5">
                <p className="eyebrow">In Gehweite</p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {stadt.bullets.slice(0, 5).map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mono text-xs mt-1" style={{ color: "var(--pine)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ color: "var(--ink-80)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============== 03 · HUB · Filter + Grid ============== */}
      <section className="px-5 sm:px-8 py-20 border-b hair" style={{ background: "var(--stone)" }}>
        <div className="mx-auto max-w-7xl">
          <SectionLabel num="03" text="Wohnform · Filter" />
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <h2 className="text-5xl sm:text-6xl font-medium">Möbliert · sofort verfügbar.</h2>
              <p className="mt-3 text-lg max-w-xl" style={{ color: "var(--ink-70)" }}>{hub.intro}</p>
            </div>
          </div>

          <div className="card p-3 grid grid-cols-2 md:grid-cols-5 gap-2 mb-10">
            <FilterCell label="Anreise" value="Flexibel" />
            <FilterCell label="Abreise" value="Flexibel" />
            <FilterCell label="Gäste" value="2 Erwachsene" />
            <FilterCell label="Preis" value="bis 150 €/Nacht" />
            <button type="button" className="btn-primary">Suchen →</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["apt-02","apt-04","apt-07","apt-12"].map((f, i) => (
              <article key={f} className="card overflow-hidden group">
                <div className="relative aspect-[4/5]">
                  <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="25vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute top-3 left-3 chip chip-dark"><span className="verified-dot" /> Frei</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-medium text-base">
                      {["Studio Kernstadt","Suite Dortelweil","Apartment Heilsberg","Loft Nidda"][i]}
                    </h3>
                    <span className="mono text-xs flex items-center gap-1" style={{ color: "var(--ink-70)" }}>
                      <span className="star">★</span>{(4.78 + i * 0.02).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: "var(--ink-55)" }}>
                    {["45 m² · 1 Zi.","62 m² · 2 Zi.","78 m² · 3 Zi.","85 m² · 3 Zi."][i]} · bis {[2,2,4,4][i]} Gäste
                  </p>
                  <div className="mt-4 pt-4 border-t hair flex items-end justify-between">
                    <p className="mono text-sm">
                      <span className="font-medium">{[89,109,119,129][i]} €</span>
                      <span style={{ color: "var(--ink-55)" }}>/Nacht</span>
                    </p>
                    <span className="text-xs" style={{ color: "var(--ink-55)" }}>Details →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 04 · RATGEBER ============== */}
      <section className="px-5 sm:px-8 py-20 border-b hair">
        <div className="mx-auto max-w-6xl">
          <SectionLabel num="04" text="Ratgeber · Artikel" />
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <aside className="lg:col-span-3 lg:sticky lg:top-24">
              <p className="eyebrow mb-3">Inhalt</p>
              <ol className="text-sm space-y-2">
                {["Mietspiegel 2026","Nach Stadtteil","Wo Preise anziehen","Fazit · TL;DR"].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mono text-xs mt-0.5" style={{ color: "var(--ink-40)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <a href="#" className="hover:text-black" style={{ color: i === 0 ? "var(--ink)" : "var(--ink-55)" }}>{t}</a>
                  </li>
                ))}
              </ol>
              <div className="mt-10 pt-8 border-t hair">
                <p className="eyebrow mb-3">Von</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium" style={{ background: "var(--ink)", color: "var(--off)" }}>D</div>
                  <div>
                    <p className="text-sm font-medium">Dino Lalic</p>
                    <p className="text-xs mono" style={{ color: "var(--ink-55)" }}>15. März 2026 · 6 Min</p>
                  </div>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-9">
              <div className="flex gap-2 mb-4">
                <span className="chip">{artikel.category}</span>
                <span className="chip mono">{artikel.readTime}</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-medium">
                Was eine Wohnung in Bad Vilbel wirklich kostet.
              </h2>
              <p className="mt-6 text-xl leading-[1.6]" style={{ color: "var(--ink-70)" }}>
                11 bis 17 Euro pro Quadratmeter — damit lässt sich der aktuelle
                Mietspiegel Bad Vilbels in einem Satz zusammenfassen. Was er nicht
                erklärt, ist die Streuung dazwischen.
              </p>

              <div className="mt-10 p-6 rounded-2xl" style={{ background: "var(--pine-100)" }}>
                <p className="eyebrow" style={{ color: "var(--pine-700)" }}>Kurz beantwortet</p>
                <ul className="mt-3 space-y-1.5 text-sm" style={{ color: "var(--ink-80)" }}>
                  <li>· Spanne: <span className="mono">11–17 €/m²</span> je nach Stadtteil</li>
                  <li>· Teuerste Lage: <span className="font-medium">Kernstadt</span> und Dortelweil</li>
                  <li>· Günstigste Lage: <span className="font-medium">Massenheim</span>, Gronau</li>
                  <li>· Preisgefüge <span className="mono">2026</span> stabil, Angebote gehen in Tagen</li>
                </ul>
              </div>

              <div className="prose-content mt-10 space-y-6 text-base leading-[1.75]" style={{ color: "var(--ink-80)" }}>
                <p>
                  Zwei nahezu identische Dreizimmerwohnungen können am gleichen Markt
                  um zwei Euro auseinanderliegen. Es ist selten der Grundriss, der den
                  Unterschied macht, und es ist fast immer der Stadtteil. Die Kernstadt
                  bleibt die teuerste Lage. Dortelweil liegt dicht dahinter. Gronau und
                  Massenheim sind spürbar günstiger — bei kaum geringerer Lebensqualität.
                </p>
                <p>
                  Wer S-Bahn-Nähe gegen zehn Fahrradminuten tauscht, zahlt bis zu zwanzig
                  Prozent weniger für vergleichbare Ausstattung. Das Preisgefüge hat sich
                  2026 kaum bewegt. Was sich verändert hat, ist die Verweildauer am Markt.
                </p>
              </div>

              <div className="mt-14 pt-8 border-t hair flex items-center justify-between flex-wrap gap-4">
                <p className="eyebrow">Verwandte Artikel</p>
                <div className="flex gap-2">
                  <a href="#" className="chip">Pendeln nach Frankfurt</a>
                  <a href="#" className="chip">Wohnlagen im Vergleich</a>
                  <a href="#" className="chip">Nebenkosten erklärt</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============== 05 · WOHNUNG-DETAIL ============== */}
      <section className="px-5 sm:px-8 py-20 border-b hair">
        <div className="mx-auto max-w-7xl">
          <SectionLabel num="05" text="Wohnung · Detail" />
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="chip chip-pine"><span className="verified-dot" /> Verfügbar</span>
                <span className="chip">★ {wohnung.rating} · {wohnung.reviewCount} Rezensionen</span>
                <span className="chip">{wohnung.stadtteilName} · 61118</span>
                <span className="chip">Superhost</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium">3-Zimmer in der Kernstadt mit Balkon</h2>
            </div>
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-2 aspect-[2/1] rounded-2xl overflow-hidden">
            <div className="col-span-2 row-span-2 relative">
              <Image src={wohnung.images[0]?.src || "/images/wohnung/apt-01.jpg"} alt="" fill priority sizes="50vw" className="object-cover" />
            </div>
            {["apt-02","apt-04","apt-07","apt-12"].map((f) => (
              <div key={f} className="relative">
                <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <p className="eyebrow">Über diese Wohnung</p>
              <p className="mt-3 text-lg leading-[1.75]" style={{ color: "var(--ink-80)" }}>
                {wohnung.description.intro}
              </p>

              <div className="mt-10">
                <p className="eyebrow mb-4">Eckdaten</p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {[
                    ["Zimmer", String(wohnung.rooms)],
                    ["Betten", String(wohnung.beds)],
                    ["Bäder", String(wohnung.bathrooms)],
                    ["Größe", `${wohnung.sizeM2} m²`],
                    ["Gäste", `bis ${wohnung.maxGuests}`],
                    ["Etage", wohnung.floor],
                  ].map(([k, v]) => (
                    <div key={k} className="card p-3 text-center">
                      <p className="mono text-base font-medium">{v}</p>
                      <p className="eyebrow mt-1">{k}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="eyebrow mb-4">Diese Unterkunft bietet</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm" style={{ color: "var(--ink-80)" }}>
                  {wohnung.amenities.slice(0, 12).map((a, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--pine)" }} />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14 pt-10 border-t hair">
                <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
                  <div>
                    <p className="eyebrow mb-1">Bewertungen</p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-medium mono">{wohnung.rating}</span>
                      <span className="text-sm" style={{ color: "var(--ink-55)" }}>· {wohnung.reviewCount} Rezensionen</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {wohnung.subRatings?.slice(0, 3).map((r) => (
                      <span key={r.label} className="chip mono">{r.label} · {r.value}</span>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {wohnung.reviews?.slice(0, 3).map((r, i) => (
                    <div key={i} className="card p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full text-xs font-medium flex items-center justify-center" style={{ background: "var(--ink)", color: "var(--off)" }}>{r.name[0]}</div>
                        <div>
                          <p className="text-sm font-medium">{r.name}</p>
                          <p className="text-xs mono" style={{ color: "var(--ink-55)" }}>{r.date}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-[1.65]" style={{ color: "var(--ink-80)" }}>
                        {r.text.length > 180 ? r.text.slice(0, 180) + "…" : r.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking-Widget rechts */}
            <aside className="lg:col-span-4">
              <div className="card p-6 lg:sticky lg:top-24">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-medium mono">{wohnung.pricePerNight} €</span>
                  <span className="text-sm" style={{ color: "var(--ink-55)" }}>/Nacht</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5 text-sm">
                  <span className="star">★</span>
                  <span className="mono font-medium">{wohnung.rating}</span>
                  <span style={{ color: "var(--ink-55)" }}>· {wohnung.reviewCount} Rez.</span>
                </div>

                <div className="mt-5 border hair rounded-xl overflow-hidden text-sm">
                  <div className="grid grid-cols-2 border-b hair">
                    <div className="p-3 border-r hair">
                      <p className="eyebrow">Anreise</p>
                      <p className="mono mt-1">Flexibel</p>
                    </div>
                    <div className="p-3">
                      <p className="eyebrow">Abreise</p>
                      <p className="mono mt-1">Flexibel</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="eyebrow">Gäste</p>
                    <p className="mono mt-1">2 Erwachsene</p>
                  </div>
                </div>

                <a href="#" className="btn-primary w-full mt-4">Anfrage senden</a>

                <ul className="mt-5 space-y-2.5 text-sm" style={{ color: "var(--ink-70)" }}>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--pine)" }} /> Keine Vorabkosten · keine Provision</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--pine)" }} /> Antwort in der Regel &lt; 1 h</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--pine)" }} /> Flexible Stornierung</li>
                </ul>

                <div className="mt-5 pt-5 border-t hair flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium" style={{ background: "var(--stone-200)" }}>{wohnung.host?.initials}</div>
                  <div className="text-sm">
                    <p className="font-medium flex items-center gap-1.5">{wohnung.host?.name} <span className="chip chip-pine text-[10px] py-0.5">Superhost</span></p>
                    <p className="mono text-xs" style={{ color: "var(--ink-55)" }}>Antwort · {wohnung.host?.responseRate}% · {wohnung.host?.responseTime}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============== 06 · KONTAKT ============== */}
      <section className="px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel num="06" text="Kontakt" />
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="text-5xl sm:text-6xl font-medium">
                Schreiben Sie uns.<br/>
                <span style={{ color: "var(--ink-55)" }}>Antwort in der Regel &lt; 1 h.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: "var(--ink-70)" }}>
                Keine Agentur dazwischen, keine automatische Weiterleitung,
                keine Hotline. Sie schreiben — der Eigentümer antwortet.
              </p>

              <form className="mt-10 card p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FieldD label="Name" placeholder="Vor- & Nachname" />
                  <FieldD label="E-Mail" placeholder="ihre@mail.de" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FieldD label="Telefon · optional" placeholder="+49 ..." />
                  <FieldD label="Wunsch-Zeitraum" placeholder="z. B. ab April" />
                </div>
                <FieldD label="Nachricht" placeholder="Für welche Wohnung interessieren Sie sich?" multi />
                <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
                  <p className="text-xs mono" style={{ color: "var(--ink-55)" }}>Datenschutz · Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verwendet.</p>
                  <button type="button" className="btn-primary">Nachricht senden →</button>
                </div>
              </form>
            </div>

            <aside className="lg:col-span-5">
              <div className="card p-6">
                <p className="eyebrow">Direktkontakt</p>
                <ul className="mt-5 space-y-5">
                  <ContactLine k="Telefon" v="069 678 306 125" mono />
                  <ContactLine k="E-Mail" v="kontakt@roomluxe.de" mono />
                  <ContactLine k="Verwaltung" v="DA Vermögensverwaltung GmbH" />
                  <ContactLine k="Adresse" v="Allerheiligentor 2–4 · 60311 Frankfurt a. M." />
                </ul>
                <div className="mt-6 pt-6 border-t hair flex flex-wrap gap-2">
                  <span className="chip chip-pine"><span className="verified-dot" /> Antwort &lt; 1 h</span>
                  <span className="chip">DSGVO-konform</span>
                  <span className="chip mono">★ 4,83 / 5</span>
                </div>
              </div>

              <div className="card p-6 mt-5" style={{ background: "var(--stone)" }}>
                <p className="eyebrow">Lieber direkt sprechen?</p>
                <p className="mt-3 text-2xl font-medium mono">069 678 306 125</p>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-55)" }}>Mo–Fr · 9–18 Uhr · persönlich erreichbar</p>
                <a href="tel:+496967830 6125" className="btn-ghost w-full mt-5">Jetzt anrufen →</a>
              </div>
            </aside>
          </div>

          <p className="eyebrow mt-20 pt-6 border-t hair">
            roomluxe · Entwurf D "Direct" · gesetzt in Geist & Geist Mono
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="mono text-xs font-medium" style={{ color: "var(--ink-55)" }}>{num}</span>
      <span className="h-px w-6" style={{ background: "var(--ink-15)" }} />
      <span className="eyebrow">{text}</span>
    </div>
  );
}

function StatD({ k, sub }: { k: string; sub: string }) {
  return (
    <div>
      <p className="text-3xl font-medium mono tracking-tight">{k}</p>
      <p className="mt-1.5 eyebrow">{sub}</p>
    </div>
  );
}

function KpiCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="card p-4">
      <p className="eyebrow">{title}</p>
      <p className="mt-2 text-xl font-medium mono">{value}</p>
      <p className="mt-1 text-xs" style={{ color: "var(--ink-55)" }}>{sub}</p>
    </div>
  );
}

function FilterCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-2.5 rounded-lg hover:bg-black/5 cursor-pointer transition">
      <p className="eyebrow">{label}</p>
      <p className="mono text-sm font-medium mt-0.5">{value}</p>
    </div>
  );
}

function FieldD({ label, placeholder, multi }: { label: string; placeholder?: string; multi?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {multi ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className="mt-1.5 w-full px-3 py-2.5 text-sm bg-transparent border rounded-lg outline-none focus:border-black transition"
          style={{ borderColor: "var(--ink-15)" }}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="mt-1.5 w-full px-3 py-2.5 text-sm bg-transparent border rounded-lg outline-none focus:border-black transition"
          style={{ borderColor: "var(--ink-15)" }}
        />
      )}
    </label>
  );
}

function ContactLine({ k, v, mono }: { k: string; v: string; mono?: boolean }) {
  return (
    <li>
      <p className="eyebrow">{k}</p>
      <p className={`mt-1 text-base ${mono ? "mono" : ""}`}>{v}</p>
    </li>
  );
}
