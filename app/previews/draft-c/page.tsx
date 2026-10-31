import type { Metadata } from "next";
import Image from "next/image";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { stadtteile } from "@/lib/data/stadtteile";
import { seoHubs } from "@/lib/data/seo-hubs";
import { wohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entwurf C · Studio",
  robots: { index: false, follow: false },
};

const stadt = stadtteile.find((s) => s.slug === "bad-vilbel-kernstadt")!;
const hub = seoHubs.find((h) => h.slug === "moeblierte-wohnungen")!;
const artikel = ratgeber.find((a) => a.slug === "mietpreise-bad-vilbel-2025")!;
const wohnung = wohnungen[0];

export default function DraftC() {
  return (
    <div className={`${interTight.variable} ${instrumentSerif.variable} draft-c`}>
      <style>{`
        .draft-c {
          --snow: #FBFAF7;
          --ink: #111111;
          --ink-70: rgba(17,17,17,0.68);
          --ink-50: rgba(17,17,17,0.5);
          --ink-20: rgba(17,17,17,0.18);
          --ink-10: rgba(17,17,17,0.1);
          --sage: #8CA38F;
          --sage-deep: #5F7A66;
          --burnt: #C96F3B;
          --clay: #F0E8DC;
          background: var(--snow);
          color: var(--ink);
          font-family: var(--font-inter-tight), system-ui, sans-serif;
          font-feature-settings: "ss01","cv11";
        }
        .draft-c .serif { font-family: var(--font-instrument-serif), Georgia, serif; }
        .draft-c h1, .draft-c h2, .draft-c h3, .draft-c h4 {
          font-family: var(--font-inter-tight), system-ui, sans-serif;
          font-weight: 500;
          letter-spacing: -0.035em;
        }
        .draft-c .label { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; color: var(--ink-70); }
        .draft-c .num { font-variant-numeric: tabular-nums; }
        .draft-c .hair { border-color: var(--ink-20); }
        .draft-c .link { position: relative; }
        .draft-c .link::after { content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 1px; background: var(--ink); }
        .draft-c .link:hover::after { background: var(--burnt); }
        .draft-c .link:hover { color: var(--burnt); }
        .draft-c .btn {
          display: inline-flex; align-items: center; gap: .6rem;
          padding: .75rem 1.25rem; border: 1px solid var(--ink);
          font-size: 13px; font-weight: 500; color: var(--ink);
          transition: all .2s ease;
        }
        .draft-c .btn:hover { background: var(--ink); color: var(--snow); }
        .draft-c .btn-ink { background: var(--ink); color: var(--snow); border-color: var(--ink); }
        .draft-c .btn-ink:hover { background: var(--burnt); border-color: var(--burnt); }
        .draft-c .dot { width: 6px; height: 6px; border-radius: 999px; display: inline-block; background: var(--sage); }
      `}</style>

      {/* ============== Masthead ============== */}
      <header className="px-5 sm:px-8 py-6 border-b hair">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 border-2 border-ink inline-flex items-center justify-center font-semibold">r</span>
            <span className="text-sm font-medium">roomluxe <span className="serif italic text-ink-70">· studio</span></span>
          </div>
          <nav className="hidden sm:flex items-center gap-7 text-sm">
            <a href="#" className="link">Wohnungen</a>
            <a href="#" className="link">Stadtteile</a>
            <a href="#" className="link">Ratgeber</a>
            <a href="#" className="btn btn-ink">Anfragen →</a>
          </nav>
        </div>
      </header>

      {/* ============== 01 · HOMEPAGE HERO ============== */}
      <section className="px-5 sm:px-8 pt-16 pb-24 border-b hair">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <span className="dot" />
            <span className="label">01 · Startseite</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <h1 className="text-6xl sm:text-7xl lg:text-[9rem] font-medium leading-[0.92]">
                Wohnen<br/>
                in Bad&nbsp;Vilbel.<br/>
                <span className="serif italic font-normal" style={{ color: "var(--burnt)" }}>Ohne Umwege.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xl leading-snug" style={{ color: "var(--ink-70)" }}>
                Sechs Apartments. Direkt vom Eigentümer vermietet.
                Zwanzig Minuten S-Bahn nach Frankfurt.
                Keine Agentur. Keine Provision.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn btn-ink">Wohnungen ansehen →</a>
                <a href="#" className="btn">069 678 306 125</a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 relative aspect-[16/10]">
              <Image src="/images/wohnung/apt-01.jpg" alt="Apartment" fill priority sizes="66vw" className="object-cover" />
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-6">
                <StatC k="4.83" l="Bewertung" />
                <StatC k="72" l="Rezensionen" />
                <StatC k="20 min" l="→ Frankfurt" />
                <StatC k="0 €" l="Provision" />
              </div>
              <div className="mt-8 pt-8 border-t hair">
                <p className="label mb-3">Vor Ort</p>
                <p className="text-base" style={{ color: "var(--ink-70)" }}>
                  Bad Vilbel · Kurpark · Marktplatz<br/>
                  Rhein-Main-Gebiet · Hessen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== 02 · STADTTEIL ============== */}
      <section className="px-5 sm:px-8 py-24 border-b hair">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <span className="dot" />
            <span className="label">02 · Stadtteil</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <p className="label mb-5">Quartier · 61118</p>
              <h2 className="text-6xl sm:text-7xl font-medium leading-[0.95]">
                {stadt.name}<span style={{ color: "var(--sage)" }}>.</span>
              </h2>
              <p className="mt-4 serif italic text-2xl" style={{ color: "var(--ink-70)" }}>
                {stadt.tagline}
              </p>
              <p className="mt-10 text-lg leading-[1.65] max-w-prose" style={{ color: "var(--ink-70)" }}>
                {stadt.intro}
              </p>

              <table className="mt-14 w-full border-t border-b hair text-left">
                <tbody>
                  {[
                    ["S-Bahn", stadt.sbahn],
                    ["Fahrzeit", stadt.sbahnTime],
                    ["Mietpreis", stadt.priceRange],
                    ["Charakter", stadt.characterShort],
                    ["Nachbarn", stadt.neighbors.join(", ")],
                  ].map(([k, v], i) => (
                    <tr key={i} className="border-t hair">
                      <th className="label py-4 w-40 align-top">{k}</th>
                      <td className="py-4">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <aside className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image src="/images/wohnung/apt-05.jpg" alt={stadt.name} fill sizes="40vw" className="object-cover" />
              </div>
              <div className="mt-6 p-6 border hair" style={{ background: "var(--clay)" }}>
                <p className="label">Alles was fußläufig geht</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {stadt.bullets.slice(0, 4).map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="num text-xs mt-0.5" style={{ color: "var(--burnt)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============== 03 · HUB ============== */}
      <section className="px-5 sm:px-8 py-24 border-b hair" style={{ background: "var(--clay)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <span className="dot" />
            <span className="label">03 · Wohnform</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-6xl sm:text-7xl font-medium leading-[0.95]">
                Möblierte<br/>
                Wohnungen,<br/>
                <span className="serif italic font-normal" style={{ color: "var(--burnt)" }}>sofort bezugsfertig.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-lg leading-[1.65] mt-4" style={{ color: "var(--ink-70)" }}>
              {hub.intro}
            </p>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {["apt-02","apt-04","apt-07","apt-12"].map((f, i) => (
              <article key={f}>
                <div className="relative aspect-[4/5]">
                  <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="25vw" className="object-cover" />
                </div>
                <p className="mt-4 num label">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 text-xl font-medium">
                  {["Studio Kernstadt","Suite Dortelweil","Apartment Heilsberg","Loft Nidda"][i]}
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--ink-50)" }}>ab 99 €/Nacht · 45–85 m²</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 04 · RATGEBER ============== */}
      <section className="px-5 sm:px-8 py-24 border-b hair">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-10">
            <span className="dot" />
            <span className="label">04 · Ratgeber</span>
          </div>
          <p className="label mb-4">
            {artikel.category} · {artikel.readTime} · <span className="num">15. März 2026</span>
          </p>
          <h2 className="text-5xl sm:text-7xl font-medium leading-[0.95] max-w-3xl">
            Was eine Wohnung in Bad Vilbel wirklich kostet<span style={{ color: "var(--burnt)" }}>.</span>
          </h2>

          <div className="mt-16 columns-1 md:columns-2 gap-12 text-lg leading-[1.7]" style={{ color: "var(--ink-70)" }}>
            <p className="mb-6">
              Zwischen 11 und 17 Euro pro Quadratmeter — damit ließe sich der aktuelle
              Mietspiegel Bad Vilbels in einem einzigen Satz zusammenfassen. Was er
              nicht erklärt, ist die Streuung dazwischen. Zwei nahezu identische
              Dreizimmerwohnungen können am gleichen Markt um zwei Euro auseinanderliegen.
            </p>
            <p className="mb-6">
              Es ist selten der Grundriss, der den Unterschied macht, und es ist fast
              immer der Stadtteil. Die Kernstadt bleibt die teuerste Lage. Dortelweil
              liegt dicht dahinter. Gronau und Massenheim sind spürbar günstiger — bei
              kaum geringerer Lebensqualität.
            </p>
            <p className="mb-6">
              Wer S-Bahn-Nähe gegen zehn Fahrradminuten tauscht, zahlt bis zu zwanzig
              Prozent weniger für vergleichbare Ausstattung. Das Preisgefüge hat sich
              2026 kaum bewegt. Was sich verändert hat, ist die Verweildauer am Markt.
            </p>
          </div>

          <aside className="mt-16 p-8 border hair" style={{ background: "var(--clay)" }}>
            <p className="label">Kurz beantwortet</p>
            <p className="mt-4 serif italic text-2xl leading-snug">
              11–17 €/m² · Kernstadt am teuersten · Massenheim am günstigsten ·
              Preisgefüge 2026 stabil · neue Angebote gehen in Tagen.
            </p>
          </aside>

          <a href="#" className="link text-sm font-medium mt-14 inline-block">
            Weiterlesen · Ratgeber-Übersicht →
          </a>
        </div>
      </section>

      {/* ============== 05 · WOHNUNG ============== */}
      <section className="px-5 sm:px-8 py-24 border-b hair">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <span className="dot" />
            <span className="label">05 · Objekt</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="relative aspect-[16/10]">
                <Image src={wohnung.images[0]?.src || "/images/wohnung/apt-01.jpg"} alt="" fill sizes="66vw" className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {["apt-02","apt-04","apt-07","apt-12"].map((f) => (
                  <div key={f} className="relative aspect-[4/3]">
                    <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="16vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4">
              <p className="label">Objekt N° <span className="num">01</span> · {wohnung.stadtteilName}</p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-medium leading-[0.95]">
                3 Zimmer<span style={{ color: "var(--sage)" }}>.</span><br/>
                <span className="serif italic font-normal" style={{ color: "var(--burnt)" }}>Mit Balkon.</span>
              </h2>
              <p className="mt-5 text-sm flex items-center gap-2" style={{ color: "var(--ink-70)" }}>
                <span style={{ color: "var(--burnt)" }}>★</span>
                <span className="num">{wohnung.rating}</span>
                <span>· {wohnung.reviewCount} Bewertungen</span>
              </p>

              <table className="w-full mt-10 border-t border-b hair text-sm">
                <tbody>
                  <tr className="border-t hair"><th className="label py-3 text-left w-32">Preis / Nacht</th><td className="py-3 num text-right text-xl font-medium">{wohnung.pricePerNight} €</td></tr>
                  <tr className="border-t hair"><th className="label py-3 text-left">Größe</th><td className="py-3 num text-right">{wohnung.sizeM2} m²</td></tr>
                  <tr className="border-t hair"><th className="label py-3 text-left">Zimmer</th><td className="py-3 num text-right">{wohnung.rooms}</td></tr>
                  <tr className="border-t hair"><th className="label py-3 text-left">Gäste</th><td className="py-3 num text-right">bis {wohnung.maxGuests}</td></tr>
                  <tr className="border-t hair"><th className="label py-3 text-left">Betten</th><td className="py-3 num text-right">{wohnung.beds} · {wohnung.bathrooms} Bad</td></tr>
                  <tr className="border-t hair"><th className="label py-3 text-left">Etage</th><td className="py-3 text-right">{wohnung.floor}</td></tr>
                </tbody>
              </table>

              <p className="label mt-10">Ausstattung</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {wohnung.amenities.slice(0, 10).map((a, i) => (
                  <li key={i} className="px-2.5 py-1 border hair text-xs">{a}</li>
                ))}
              </ul>

              <a href="#" className="btn btn-ink w-full justify-center mt-10">Anfrage senden →</a>
            </aside>
          </div>

          <div className="mt-24">
            <div className="flex items-end justify-between gap-6 mb-10">
              <h3 className="text-3xl font-medium">Was Gäste schreiben</h3>
              <p className="label">
                {wohnung.rating} / 5 · {wohnung.reviewCount} Rezensionen
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {wohnung.reviews?.slice(0, 3).map((r, i) => (
                <blockquote key={i} className="border-t hair pt-6">
                  <p className="label">{r.name} · {r.date}</p>
                  <p className="mt-4 text-base leading-[1.65]" style={{ color: "var(--ink-70)" }}>
                    „{r.text.slice(0, 180)}..."
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== 06 · KONTAKT ============== */}
      <section className="px-5 sm:px-8 py-24" style={{ background: "var(--ink)", color: "var(--snow)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <span className="dot" style={{ background: "var(--burnt)" }} />
            <span className="label" style={{ color: "rgba(251,250,247,0.65)" }}>06 · Kontakt</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-6xl sm:text-7xl font-medium leading-[0.95]">
                Direkt<br/>
                <span className="serif italic font-normal" style={{ color: "var(--burnt)" }}>vom Eigentümer.</span>
              </h2>
              <p className="mt-8 text-xl max-w-xl" style={{ color: "rgba(251,250,247,0.72)" }}>
                Antwort in der Regel innerhalb einer Stunde. Keine Agentur dazwischen.
                Keine Provision.
              </p>
              <div className="mt-14 space-y-6 text-sm">
                <KvC k="Telefon" v="+49 69 678 306 125" />
                <KvC k="E-Mail" v="kontakt@roomluxe.de" />
                <KvC k="Postadresse" v="Allerheiligentor 2–4 · 60311 Frankfurt am Main" />
                <KvC k="Betrieb" v="DA Vermögensverwaltung GmbH" />
              </div>
            </div>
            <form className="lg:col-span-5 p-8 border" style={{ borderColor: "rgba(251,250,247,0.15)", background: "rgba(251,250,247,0.03)" }}>
              <p className="label" style={{ color: "rgba(251,250,247,0.65)" }}>Nachricht senden</p>
              <div className="mt-6 space-y-6">
                <FieldC label="Name" />
                <FieldC label="E-Mail" />
                <FieldC label="Nachricht" multi />
                <button type="button" className="w-full py-3 text-sm font-medium" style={{ background: "var(--burnt)", color: "var(--snow)" }}>
                  Senden →
                </button>
              </div>
            </form>
          </div>

          <p className="label mt-20 pt-8 border-t" style={{ borderColor: "rgba(251,250,247,0.15)", color: "rgba(251,250,247,0.5)" }}>
            roomluxe · Studio-Entwurf · gesetzt in Inter Tight & Instrument Serif
          </p>
        </div>
      </section>
    </div>
  );
}

function StatC({ k, l }: { k: string; l: string }) {
  return (
    <div>
      <p className="text-4xl font-medium num">{k}</p>
      <p className="label mt-2">{l}</p>
    </div>
  );
}

function KvC({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-3 gap-6 border-t pt-4" style={{ borderColor: "rgba(251,250,247,0.15)" }}>
      <dt className="label" style={{ color: "rgba(251,250,247,0.65)" }}>{k}</dt>
      <dd className="col-span-2">{v}</dd>
    </div>
  );
}

function FieldC({ label, multi }: { label: string; multi?: boolean }) {
  return (
    <label className="block">
      <span className="label" style={{ color: "rgba(251,250,247,0.65)" }}>{label}</span>
      {multi ? (
        <textarea rows={4} className="mt-2 w-full bg-transparent border-b py-2 outline-none focus:border-[var(--burnt)]" style={{ borderColor: "rgba(251,250,247,0.3)", color: "var(--snow)" }} />
      ) : (
        <input type="text" className="mt-2 w-full bg-transparent border-b py-2 outline-none focus:border-[var(--burnt)]" style={{ borderColor: "rgba(251,250,247,0.3)", color: "var(--snow)" }} />
      )}
    </label>
  );
}
