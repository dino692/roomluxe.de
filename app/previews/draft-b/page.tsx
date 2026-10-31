import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import { stadtteile } from "@/lib/data/stadtteile";
import { seoHubs } from "@/lib/data/seo-hubs";
import { wohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entwurf B · Residence",
  robots: { index: false, follow: false },
};

const stadt = stadtteile.find((s) => s.slug === "bad-vilbel-kernstadt")!;
const hub = seoHubs.find((h) => h.slug === "moeblierte-wohnungen")!;
const artikel = ratgeber.find((a) => a.slug === "mietpreise-bad-vilbel-2025")!;
const wohnung = wohnungen[0];

export default function DraftB() {
  return (
    <div className={`${playfair.variable} ${instrument.variable} draft-b`}>
      <style>{`
        .draft-b {
          --charcoal: #15110D;
          --smoke: #241E17;
          --ivory: #F3EBDC;
          --champagne: #D4B878;
          --champagne-dim: #8C7849;
          --wine: #4A1F2B;
          --hair: rgba(212,184,120,0.28);
          --hair-strong: rgba(212,184,120,0.55);
          background: var(--charcoal);
          color: var(--ivory);
          font-family: var(--font-instrument), system-ui, sans-serif;
          letter-spacing: 0.005em;
        }
        .draft-b h1, .draft-b h2, .draft-b h3, .draft-b h4 {
          font-family: var(--font-playfair), Georgia, serif;
          font-weight: 500;
          letter-spacing: -0.015em;
        }
        .draft-b .serif { font-family: var(--font-playfair), Georgia, serif; letter-spacing: -0.015em; }
        .draft-b .mono-upper { font-family: var(--font-instrument), system-ui, sans-serif; letter-spacing: 0.3em; text-transform: uppercase; font-size: 11px; font-weight: 500; }
        .draft-b .hair-b { border-bottom: 1px solid var(--hair); }
        .draft-b .hair-t { border-top: 1px solid var(--hair); }
        .draft-b .hair-y { border-top: 1px solid var(--hair); border-bottom: 1px solid var(--hair); }
        .draft-b .btn {
          display: inline-flex; align-items: center; gap: .6rem; padding: .95rem 2rem;
          border: 1px solid var(--champagne); color: var(--champagne);
          font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
          transition: all .25s ease;
        }
        .draft-b .btn:hover { background: var(--champagne); color: var(--charcoal); }
        .draft-b .btn-filled { background: var(--champagne); color: var(--charcoal); }
        .draft-b .btn-filled:hover { background: var(--ivory); border-color: var(--ivory); }
        .draft-b .monogram {
          font-family: var(--font-playfair), serif; font-style: italic; font-weight: 400;
          color: var(--champagne);
        }
        .draft-b .num { font-variant-numeric: oldstyle-nums; }
        .draft-b .star { color: var(--champagne); }
      `}</style>

      {/* ============== Masthead ============== */}
      <header className="px-5 sm:px-8 pt-14 pb-10 text-center">
        <p className="monogram text-5xl">℟</p>
        <p className="mono-upper mt-6" style={{ color: "var(--champagne-dim)" }}>est. mmxxiv · bad vilbel · frankfurt am main</p>
        <h1 className="serif mt-5 text-6xl sm:text-7xl lg:text-8xl tracking-tight">
          <span className="italic">r</span>oomluxe
          <span className="italic serif" style={{ color: "var(--champagne)" }}> residences</span>
        </h1>
        <div className="mx-auto mt-10 max-w-md hair-y py-3 mono-upper" style={{ color: "var(--champagne-dim)" }}>
          <span>Private · Owner-Direct · No Commission</span>
        </div>
      </header>

      {/* ============== I · HOMEPAGE HERO ============== */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[21/9] min-h-[70vh]">
          <Image
            src="/images/wohnung/apt-01.jpg"
            alt="Residence"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(0.55) saturate(0.95) contrast(1.05)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(21,17,13,0.5) 0%, rgba(21,17,13,0.2) 50%, rgba(21,17,13,0.95) 100%)" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
            <p className="mono-upper" style={{ color: "var(--champagne)" }}>Chapter one · the residences</p>
            <h2 className="serif mt-8 text-5xl sm:text-7xl lg:text-8xl leading-[1.02] text-ivory max-w-5xl">
              A quiet address<br/>
              <span className="italic" style={{ color: "var(--champagne)" }}>twenty minutes from Frankfurt.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(243,235,220,0.78)" }}>
              Sechs sorgfältig geführte Apartments in Bad Vilbel.
              Direkt vom Eigentümer — ohne Agentur, ohne Provision,
              mit einem persönlichen Ansprechpartner, der tatsächlich antwortet.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="btn btn-filled">Reserve Your Stay</a>
              <a href="#" className="btn">Neighbourhood Guide</a>
            </div>
          </div>
        </div>
        {/* Pillars */}
        <div className="hair-y" style={{ background: "var(--smoke)" }}>
          <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4">
            {[
              { k: "VI", l: "Residences" },
              { k: "4.83", l: "Guest Rating" },
              { k: "20 min", l: "To Frankfurt Hbf" },
              { k: "0 €", l: "Commission" },
            ].map((p, i) => (
              <div key={i} className="px-6 py-10 text-center border-r last:border-r-0" style={{ borderColor: "var(--hair)" }}>
                <p className="serif num text-5xl" style={{ color: "var(--champagne)" }}>{p.k}</p>
                <p className="mt-3 mono-upper" style={{ color: "var(--champagne-dim)" }}>{p.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== II · STADTTEIL ============== */}
      <section className="px-5 sm:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionLabel num="II" label="Neighbourhood Guide" />
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative aspect-[4/5]">
              <Image src="/images/wohnung/apt-05.jpg" alt={stadt.name} fill sizes="40vw" className="object-cover" style={{ filter: "brightness(0.85) saturate(0.9)" }} />
              <div className="absolute left-5 top-5 mono-upper px-3 py-1.5" style={{ background: "var(--charcoal)", color: "var(--champagne)" }}>
                Quartier {stadt.name}
              </div>
            </div>
            <div className="lg:col-span-7">
              <h3 className="serif text-5xl sm:text-6xl leading-[1.05]">
                {stadt.name}
                <span className="block italic text-3xl mt-3" style={{ color: "var(--champagne)" }}>— {stadt.tagline}</span>
              </h3>
              <p className="mt-8 text-lg leading-[1.75]" style={{ color: "rgba(243,235,220,0.78)" }}>
                {stadt.intro}
              </p>
              <dl className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6">
                <KvRow k="S-Bahn" v={stadt.sbahn} />
                <KvRow k="Transit Time" v={stadt.sbahnTimeShort} />
                <KvRow k="Rent (€/m²)" v={stadt.priceRange} />
                <KvRow k="Character" v={stadt.characterShort} />
              </dl>
              <div className="hair-t mt-14 pt-10">
                <p className="mono-upper" style={{ color: "var(--champagne-dim)" }}>Points of Interest</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm leading-relaxed">
                  {stadt.bullets.slice(0, 6).map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="serif italic shrink-0 num" style={{ color: "var(--champagne)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ color: "rgba(243,235,220,0.78)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== III · HUB · WOHNFORM ============== */}
      <section className="px-5 sm:px-8 py-24 hair-y" style={{ background: "var(--smoke)" }}>
        <div className="mx-auto max-w-7xl">
          <SectionLabel num="III" label="Serviced Residences · Fully Furnished" />
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <h3 className="serif text-5xl sm:text-6xl leading-[1.05]">
                Checked in by nightfall.<br/>
                <span className="italic" style={{ color: "var(--champagne)" }}>Just arrive with a suitcase.</span>
              </h3>
            </div>
            <p className="lg:col-span-5 text-base leading-[1.75]" style={{ color: "rgba(243,235,220,0.78)" }}>
              {hub.intro}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {["apt-02","apt-04","apt-07","apt-12"].map((f, i) => (
              <article key={f} className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="25vw" className="object-cover transition duration-700 group-hover:scale-105" style={{ filter: "brightness(0.9)" }} />
                </div>
                <div className="pt-5">
                  <p className="mono-upper" style={{ color: "var(--champagne-dim)" }}>Residence {String(i + 1).padStart(2, "0")}</p>
                  <h4 className="serif mt-2 text-xl">
                    {["Suite Kurpark", "Suite Dortelweil", "Suite Heilsberg", "Suite Nidda"][i]}
                  </h4>
                  <p className="mt-1 text-sm" style={{ color: "rgba(243,235,220,0.6)" }}>from <span className="num">99</span> €/night</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== IV · RATGEBER ============== */}
      <section className="px-5 sm:px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionLabel num="IV" label="The Journal" />
          <p className="mono-upper" style={{ color: "var(--champagne-dim)" }}>{artikel.category} · {artikel.readTime} · 15. März 2026</p>
          <h2 className="serif mt-6 text-5xl sm:text-6xl leading-[1.05]">
            What a residence in<br/>
            <span className="italic" style={{ color: "var(--champagne)" }}>Bad Vilbel actually costs.</span>
          </h2>
          <div className="mt-14 hair-t pt-10 space-y-7 text-lg leading-[1.8]" style={{ color: "rgba(243,235,220,0.82)" }}>
            <p>
              Zwischen 11 und 17 Euro pro Quadratmeter — damit ließe sich der Mietspiegel
              Bad Vilbels in einem Satz zusammenfassen. Was er nicht erklärt, ist die
              Streuung dazwischen. Zwei nahezu identische Dreizimmerwohnungen können am
              gleichen Markt um zwei Euro auseinanderliegen. Es ist selten der Grundriss,
              und es ist fast immer der Stadtteil.
            </p>
            <p>
              Die Kernstadt bleibt die teuerste Lage. Dortelweil liegt dicht dahinter.
              Gronau und Massenheim sind spürbar günstiger, bei kaum geringerer
              Lebensqualität. Wer S-Bahn-Nähe gegen zehn Fahrradminuten tauscht, zahlt
              bis zu zwanzig Prozent weniger für vergleichbare Ausstattung.
            </p>
          </div>
          <blockquote className="serif italic text-3xl leading-snug mt-14 py-8 border-y" style={{ borderColor: "var(--hair)", color: "var(--champagne)" }}>
            „Ein Mietpreis ist ein Vorschlag, keine Tatsache. Entscheidend ist die
            Begründung, die mit ihm geliefert wird."
          </blockquote>
          <a href="#" className="btn mt-14">Continue reading →</a>
        </div>
      </section>

      {/* ============== V · WOHNUNG ============== */}
      <section className="px-5 sm:px-8 py-24 hair-y" style={{ background: "var(--smoke)" }}>
        <div className="mx-auto max-w-7xl">
          <SectionLabel num="V" label={`The Residence · ${wohnung.stadtteilName}`} />
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3]">
                <Image src={wohnung.images[0]?.src || "/images/wohnung/apt-01.jpg"} alt="" fill sizes="60vw" className="object-cover" style={{ filter: "brightness(0.92)" }} />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {["apt-02","apt-04","apt-07","apt-12"].map((f) => (
                  <div key={f} className="relative aspect-[4/3]">
                    <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="15vw" className="object-cover" style={{ filter: "brightness(0.9)" }} />
                  </div>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-5">
              <p className="mono-upper" style={{ color: "var(--champagne-dim)" }}>Residence N° I</p>
              <h3 className="serif mt-4 text-4xl sm:text-5xl leading-[1.05]">
                Suite <span className="italic" style={{ color: "var(--champagne)" }}>Kurpark</span>
              </h3>
              <p className="mt-6 flex items-center gap-3 text-sm">
                <span className="star serif text-lg">★</span>
                <span className="num" style={{ color: "var(--ivory)" }}>{wohnung.rating}</span>
                <span style={{ color: "rgba(243,235,220,0.5)" }}>· {wohnung.reviewCount} reviews</span>
              </p>
              <p className="mt-6 text-base leading-[1.75]" style={{ color: "rgba(243,235,220,0.78)" }}>
                {wohnung.description.intro}
              </p>

              <dl className="mt-10 hair-y py-6 grid grid-cols-2 gap-x-6 gap-y-5">
                <KvRow k="Per Night" v={`${wohnung.pricePerNight} €`} large />
                <KvRow k="Size" v={`${wohnung.sizeM2} m²`} large />
                <KvRow k="Rooms" v={`${wohnung.rooms}`} large />
                <KvRow k="Guests" v={`up to ${wohnung.maxGuests}`} large />
              </dl>

              <p className="mono-upper mt-10" style={{ color: "var(--champagne-dim)" }}>Amenities · selection</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {wohnung.amenities.slice(0, 10).map((a, i) => (
                  <li key={i} className="px-3 py-1 text-xs border rounded-none" style={{ borderColor: "var(--hair)", color: "rgba(243,235,220,0.8)" }}>{a}</li>
                ))}
              </ul>

              <a href="#" className="btn btn-filled mt-10">Reserve This Residence</a>
            </aside>
          </div>

          <div className="mt-20 hair-t pt-16">
            <p className="mono-upper mb-10" style={{ color: "var(--champagne-dim)" }}>Guest Letters</p>
            <div className="grid md:grid-cols-3 gap-8">
              {wohnung.reviews?.slice(0, 3).map((r, i) => (
                <blockquote key={i} className="border-l pl-6" style={{ borderColor: "var(--hair-strong)" }}>
                  <p className="serif italic text-xl leading-[1.5]" style={{ color: "var(--ivory)" }}>
                    „{r.text.slice(0, 180)}..."
                  </p>
                  <footer className="mono-upper mt-4" style={{ color: "var(--champagne)" }}>
                    {r.name} · {r.date}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== VI · CONCIERGE / KONTAKT ============== */}
      <section className="px-5 sm:px-8 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="monogram text-5xl">℟</p>
          <SectionLabel num="VI" label="Concierge" center />
          <h2 className="serif mt-6 text-5xl sm:text-6xl leading-[1.05]">
            Reserve a residence or<br/>
            <span className="italic" style={{ color: "var(--champagne)" }}>simply tell us what you need.</span>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-lg" style={{ color: "rgba(243,235,220,0.78)" }}>
            Antwort in der Regel innerhalb einer Stunde — persönlich,
            vom Eigentümer, ohne Zwischenstationen.
          </p>

          <form className="mt-14 max-w-2xl mx-auto space-y-6 text-left">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" />
              <Field label="Email" />
            </div>
            <Field label="Message" multi />
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button type="button" className="btn btn-filled">Send to Concierge</button>
              <a href="tel:+496967830 6125" className="btn">+49 69 678 306 125</a>
            </div>
          </form>

          <p className="mono-upper mt-20 pt-8 border-t" style={{ color: "var(--champagne-dim)", borderColor: "var(--hair)" }}>
            Operated by DA Vermögensverwaltung GmbH · Frankfurt am Main
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ num, label, center }: { num: string; label: string; center?: boolean }) {
  return (
    <div className={`mb-12 flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      <span className="serif italic num text-2xl" style={{ color: "var(--champagne)" }}>{num}</span>
      <span className="h-px flex-1 max-w-24" style={{ background: "var(--hair-strong)" }} />
      <span className="mono-upper" style={{ color: "var(--champagne-dim)" }}>{label}</span>
      <span className="h-px flex-1 max-w-24" style={{ background: "var(--hair-strong)" }} />
    </div>
  );
}

function KvRow({ k, v, large }: { k: string; v: string; large?: boolean }) {
  return (
    <div>
      <dt className="mono-upper" style={{ color: "var(--champagne-dim)" }}>{k}</dt>
      <dd className={`mt-1 serif num ${large ? "text-3xl" : "text-lg"}`} style={{ color: "var(--ivory)" }}>{v}</dd>
    </div>
  );
}

function Field({ label, multi }: { label: string; multi?: boolean }) {
  return (
    <label className="block">
      <span className="mono-upper" style={{ color: "var(--champagne-dim)" }}>{label}</span>
      {multi ? (
        <textarea rows={4} className="mt-2 w-full bg-transparent border-b py-3 serif text-lg outline-none focus:border-[var(--champagne)]" style={{ borderColor: "var(--hair-strong)", color: "var(--ivory)" }} />
      ) : (
        <input type="text" className="mt-2 w-full bg-transparent border-b py-3 serif text-lg outline-none focus:border-[var(--champagne)]" style={{ borderColor: "var(--hair-strong)", color: "var(--ivory)" }} />
      )}
    </label>
  );
}
