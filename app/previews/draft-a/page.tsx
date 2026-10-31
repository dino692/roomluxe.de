import type { Metadata } from "next";
import Image from "next/image";
import { Fraunces, Inter } from "next/font/google";
import { stadtteile } from "@/lib/data/stadtteile";
import { seoHubs } from "@/lib/data/seo-hubs";
import { wohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Entwurf A · Editorial",
  robots: { index: false, follow: false },
};

const stadt = stadtteile.find((s) => s.slug === "bad-vilbel-kernstadt")!;
const hub = seoHubs.find((h) => h.slug === "moeblierte-wohnungen")!;
const artikel = ratgeber.find((a) => a.slug === "mietpreise-bad-vilbel-2025")!;
const wohnung = wohnungen[0];

export default function DraftA() {
  return (
    <div
      className={`${fraunces.variable} ${inter.variable} draft-a`}
      style={{ fontFeatureSettings: '"ss01", "liga"', WebkitFontSmoothing: "antialiased" }}
    >
      <style>{`
        .draft-a {
          --paper: #F5EFE0;
          --cream: #EDE4D0;
          --rust: #C2583B;
          --rust-deep: #9F3F26;
          --walnut: #2A1F17;
          --olive: #7A5C3F;
          --ink-70: rgba(42,31,23,0.72);
          --ink-50: rgba(42,31,23,0.55);
          --hairline: rgba(42,31,23,0.18);
          background: var(--paper);
          color: var(--walnut);
          font-family: var(--font-inter), system-ui, sans-serif;
          font-feature-settings: "ss01", "liga";
        }
        .draft-a h1, .draft-a h2, .draft-a h3, .draft-a h4 {
          font-family: var(--font-fraunces), Georgia, serif;
          font-weight: 500;
          letter-spacing: -0.015em;
        }
        .draft-a .serif { font-family: var(--font-fraunces), Georgia, serif; }
        .draft-a .serif-italic { font-family: var(--font-fraunces), Georgia, serif; font-style: italic; font-variation-settings: "SOFT" 100, "opsz" 72; }
        .draft-a .chap { font-family: var(--font-fraunces), serif; letter-spacing: 0.4em; text-transform: uppercase; font-size: 11px; color: var(--rust-deep); font-weight: 500; }
        .draft-a .rule { border-top: 1px solid var(--hairline); }
        .draft-a .thickrule { border-top: 2px solid var(--walnut); }
        .draft-a .dropcap::first-letter {
          float: left; font-family: var(--font-fraunces), serif; font-weight: 700; font-size: 5.5rem;
          line-height: 0.85; padding-right: .5rem; padding-top: .4rem; color: var(--rust);
          font-variation-settings: "SOFT" 100, "opsz" 144;
        }
        .draft-a .oldstyle { font-variant-numeric: oldstyle-nums; }
        .draft-a .link-u { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px; text-decoration-color: var(--rust); }
        .draft-a .link-u:hover { color: var(--rust); }
        @media (min-width: 768px) {
          .draft-a .pullquote::before { content: "“"; font-family: var(--font-fraunces), serif; font-size: 7rem; line-height: 0; color: var(--rust); vertical-align: -0.4em; margin-right: .25rem; }
        }
      `}</style>

      {/* ============== Masthead ============== */}
      <header className="px-5 sm:px-8 pt-14 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="chap">N° 01 · Herbst 2026</p>
              <h1 className="serif mt-3 text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                <span style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}>r</span>
                <span className="serif-italic">oomluxe</span>
              </h1>
            </div>
            <p className="hidden sm:block text-right text-xs oldstyle" style={{ color: "var(--ink-50)" }}>
              Ein Wohn-Journal<br/>Bad Vilbel · Rhein-Main<br/>Herausgegeben vom Eigentümer
            </p>
          </div>
          <div className="thickrule mt-10" />
          <div className="rule mt-[3px]" />
        </div>
      </header>

      {/* ============== I · HOMEPAGE HERO ============== */}
      <section className="px-5 sm:px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          <ChapterMark num="I" title="Mietwohnungen, direkt vom Eigentümer" />
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                Wohnen in <span className="serif-italic" style={{ color: "var(--rust)" }}>Bad Vilbel</span>,
                <br />ohne Umwege
              </h2>
              <p className="dropcap mt-10 text-lg leading-relaxed max-w-prose" style={{ color: "var(--ink-70)" }}>
                Zwanzig Minuten mit der S-Bahn, und man steht am Frankfurter Hauptbahnhof.
                Zwanzig Minuten in die andere Richtung — und man ist zuhause. Zwischen
                Kurpark, Nidda-Auen und einem Marktplatz, der am Samstag noch so klingt
                wie Marktplätze zu klingen haben, vermieten wir unsere Wohnungen selbst.
                Ohne Makler. Ohne Provision. Mit einem Namen am Türschild, der tatsächlich
                abhebt, wenn Sie anrufen.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full"
                  style={{ background: "var(--walnut)", color: "var(--paper)" }}
                >
                  <span className="serif text-sm tracking-wider">Freie Wohnungen ansehen</span>
                  <span>→</span>
                </a>
                <a href="#" className="link-u serif-italic text-lg">oder direkt anrufen · 069 678 306 125</a>
              </div>
              <div className="rule mt-14 pt-6 grid grid-cols-3 gap-6 text-sm">
                <Fact k="4,83" l="Bewertung · 72 Rezensionen" />
                <Fact k="20 Min." l="S-Bahn nach Frankfurt" />
                <Fact k="0 €" l="Makler · Provision" />
              </div>
            </div>
            <div className="lg:col-span-5 relative aspect-[3/4] w-full">
              <Image
                src="/images/wohnung/apt-01.jpg"
                alt="Wohnzimmer mit Esstisch"
                fill
                sizes="(max-width:1024px) 100vw, 42vw"
                className="object-cover"
                style={{ filter: "contrast(1.02) saturate(0.92)" }}
              />
              <div className="absolute left-4 top-4 px-3 py-1.5 chap" style={{ background: "var(--paper)" }}>
                Tafel I · Wohnzimmer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== II · STADTTEIL ============== */}
      <section className="px-5 sm:px-8 py-20" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl">
          <ChapterMark num="II" title={`Stadtteil-Porträt · ${stadt.name}`} dark />
          <div className="grid lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-3">
              <p className="chap">Dossier</p>
              <h3 className="serif mt-3 text-3xl leading-tight">
                <span className="serif-italic">{stadt.name}</span>,<br/>
                <span className="serif-italic" style={{ color: "var(--rust)" }}>{stadt.tagline}</span>
              </h3>
              <dl className="mt-8 text-sm space-y-4">
                <DlRow k="S-Bahn" v={stadt.sbahn} />
                <DlRow k="Fahrzeit" v={stadt.sbahnTime} />
                <DlRow k="Mietpreis" v={stadt.priceRange} />
                <DlRow k="Charakter" v={stadt.characterShort} />
                <DlRow k="PLZ" v="61118" />
              </dl>
            </aside>
            <div className="lg:col-span-9">
              <p className="dropcap serif text-xl leading-[1.55]" style={{ color: "var(--walnut)" }}>
                {stadt.intro}
              </p>
              <blockquote className="pullquote serif-italic mt-14 text-3xl leading-snug max-w-3xl" style={{ color: "var(--walnut)" }}>
                Wer eine Wohnung in Bad Vilbel sucht, sucht in der Regel nach einem Takt,
                der zwischen Frankfurt und Wetterau liegt — nicht nach einem Kompromiss.
              </blockquote>
              <div className="mt-14 grid sm:grid-cols-2 gap-10">
                <div>
                  <p className="chap">Was spricht dafür</p>
                  <ul className="mt-5 space-y-3 text-base" style={{ color: "var(--ink-70)" }}>
                    {stadt.bullets.slice(0, 4).map((b, i) => (
                      <li key={i} className="flex gap-4 serif text-lg leading-snug border-b pb-3" style={{ borderColor: "var(--hairline)" }}>
                        <span className="chap mt-1 shrink-0 w-6">{String(i + 1).padStart(2, "0")}</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/5]">
                  <Image src="/images/wohnung/apt-05.jpg" alt="Stadtteil-Impression" fill sizes="50vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== III · HUB · WOHNFORM ============== */}
      <section className="px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <ChapterMark num="III" title={hub.breadcrumbLabel} />
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <h3 className="serif text-5xl sm:text-6xl leading-[1.05]">
                {hub.h1.split("–")[0]}
                <span className="serif-italic block" style={{ color: "var(--rust)" }}>
                  — sofort einziehen.
                </span>
              </h3>
              <p className="mt-8 serif text-xl leading-[1.6] max-w-prose" style={{ color: "var(--walnut)" }}>
                {hub.intro}
              </p>
            </div>
            <aside className="lg:col-span-4 border-l pl-8" style={{ borderColor: "var(--hairline)" }}>
              <p className="chap">Lebenssituation</p>
              <ul className="mt-5 text-sm space-y-3" style={{ color: "var(--ink-70)" }}>
                {hub.sections[1]?.bullets?.slice(0, 3).map((b, i) => (
                  <li key={i} className="pb-3 border-b serif text-base" style={{ borderColor: "var(--hairline)" }}>
                    <span className="chap mr-2">{String(i + 1).padStart(2, "0")}</span>{b}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <figure key={i} className="relative aspect-[3/4]">
                <Image src={`/images/wohnung/apt-0${i+1}.jpg`} alt="" fill sizes="25vw" className="object-cover" style={{ filter: "contrast(1.02)" }} />
                <figcaption className="absolute left-2 bottom-2 chap px-2 py-1" style={{ background: "var(--paper)" }}>
                  Tafel {["II","III","IV","V"][i-1]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============== IV · RATGEBER-ARTIKEL ============== */}
      <section className="px-5 sm:px-8 py-20" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-4xl">
          <ChapterMark num="IV" title="Aus dem Journal" dark />
          <p className="chap">{artikel.category} · {artikel.readTime}</p>
          <h2 className="serif mt-5 text-5xl sm:text-6xl leading-[1.05]">
            Was eine Wohnung in Bad Vilbel <span className="serif-italic" style={{ color: "var(--rust)" }}>wirklich kostet</span>
          </h2>
          <p className="chap mt-6 oldstyle">15. März 2026 · von D. Lalic</p>
          <p className="dropcap mt-10 serif text-xl leading-[1.65]" style={{ color: "var(--walnut)" }}>
            Zwischen elf und siebzehn Euro pro Quadratmeter: so lässt sich der aktuelle
            Mietspiegel in Bad Vilbel in einen Satz pressen. Was er nicht erklärt, ist
            die Streuung dazwischen — und warum zwei äußerlich identische Dreizimmer-
            wohnungen am selben Markt um zwei Euro auseinanderliegen können. Das hat
            selten mit Grundriss zu tun und oft mit dem Stadtteil.
          </p>
          <div className="rule mt-12 pt-10 grid sm:grid-cols-2 gap-10 serif text-lg leading-[1.6]" style={{ color: "var(--ink-70)" }}>
            <p>
              Die Kernstadt bleibt die teuerste Lage, Dortelweil liegt dicht dahinter,
              Gronau und Massenheim sind spürbar günstiger. In Zahlen heißt das: wer
              auf S-Bahn-Nähe und Marktplatz verzichten kann, zahlt für die gleiche
              Wohnqualität bis zu <span className="serif-italic" style={{ color: "var(--rust)" }}>zwanzig Prozent weniger</span>.
            </p>
            <p>
              Das Preisgefüge hat sich 2026 kaum bewegt. Was sich verändert hat, ist
              die Verweildauer der Angebote. Was lange am Markt lag, geht heute binnen
              Tagen — vorausgesetzt, der Preis stimmt und das Inserat erzählt eine
              ganze Geschichte, nicht nur drei Zahlen und einen Grundriss.
            </p>
          </div>
          <blockquote className="pullquote serif-italic mt-16 text-3xl leading-snug" style={{ color: "var(--walnut)" }}>
            Ein Mietpreis ist ein Vorschlag, keine Tatsache. Entscheidend ist die
            Begründung, die mit ihm geliefert wird.
          </blockquote>
        </div>
      </section>

      {/* ============== V · WOHNUNG-DETAIL ============== */}
      <section className="px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <ChapterMark num="V" title="Wohnungs-Porträt" />
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3]">
                <Image src={wohnung.images[0]?.src || "/images/wohnung/apt-01.jpg"} alt="" fill sizes="60vw" className="object-cover" style={{ filter: "contrast(1.03)" }} />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {["apt-02","apt-04","apt-12"].map((f) => (
                  <div key={f} className="relative aspect-[4/3]">
                    <Image src={`/images/wohnung/${f}.jpg`} alt="" fill sizes="20vw" className="object-cover" style={{ filter: "contrast(1.03)" }} />
                  </div>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-5">
              <p className="chap">Objekt N° I · {wohnung.stadtteilName}</p>
              <h3 className="serif mt-4 text-4xl sm:text-5xl leading-[1.05]">
                Drei Zimmer, <span className="serif-italic" style={{ color: "var(--rust)" }}>Balkon,</span><br/>
                Blick auf den Kurpark
              </h3>
              <p className="mt-6 text-base leading-[1.65]" style={{ color: "var(--ink-70)" }}>
                {wohnung.description.intro}
              </p>
              <dl className="mt-10 rule pt-8 grid grid-cols-2 gap-6 oldstyle">
                <DlRow k="Preis / Nacht" v={`${wohnung.pricePerNight} €`} big />
                <DlRow k="Größe" v={`${wohnung.sizeM2} m²`} big />
                <DlRow k="Zimmer" v={`${wohnung.rooms}`} big />
                <DlRow k="Gäste" v={`bis ${wohnung.maxGuests}`} big />
                <DlRow k="Bewertung" v={`${wohnung.rating} · ${wohnung.reviewCount}`} big />
                <DlRow k="Status" v={wohnung.status === "available" ? "frei" : "belegt"} big />
              </dl>
              <div className="mt-10">
                <p className="chap">Ausstattung · Auswahl</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {wohnung.amenities.slice(0, 10).map((a, i) => (
                    <li key={i} className="px-3 py-1.5 serif text-sm" style={{ border: "1px solid var(--hairline)" }}>{a}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {wohnung.reviews?.slice(0, 3).map((r, i) => (
              <blockquote key={i} className="pb-6 border-b" style={{ borderColor: "var(--hairline)" }}>
                <p className="chap">{r.name} · {r.date}</p>
                <p className="mt-4 serif text-lg leading-[1.6]" style={{ color: "var(--walnut)" }}>
                  „{r.text}"
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VI · KONTAKT ============== */}
      <section className="px-5 sm:px-8 py-24" style={{ background: "var(--walnut)", color: "var(--paper)" }}>
        <div className="mx-auto max-w-5xl">
          <p className="chap" style={{ color: "var(--rust)" }}>Kapitel VI · Korrespondenz</p>
          <h2 className="serif mt-6 text-5xl sm:text-6xl leading-[1.05]">
            Schreiben Sie uns.<br/>
            <span className="serif-italic" style={{ color: "var(--rust)" }}>Oder rufen Sie einfach an.</span>
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <Field label="Name" />
              <Field label="E-Mail" />
              <Field label="Nachricht" multi />
              <button type="button" className="serif text-sm tracking-wider px-7 py-3.5 rounded-full" style={{ background: "var(--rust)", color: "var(--paper)" }}>
                Senden →
              </button>
            </form>
            <div className="rule-dark pt-8 border-t serif text-lg leading-[1.6]" style={{ borderColor: "rgba(245,239,224,0.2)" }}>
              <p className="chap" style={{ color: "var(--rust)" }}>Kolophon</p>
              <p className="mt-4">
                <span className="serif-italic">roomluxe</span><br/>
                DA Vermögensverwaltung GmbH<br/>
                Allerheiligentor 2–4<br/>
                60311 Frankfurt am Main
              </p>
              <p className="mt-6">
                Telefon · <a className="link-u" style={{ color: "var(--paper)", textDecorationColor: "var(--rust)" }} href="tel:+496967830 6125">069 678 306 125</a><br/>
                E-Mail · <a className="link-u" style={{ color: "var(--paper)", textDecorationColor: "var(--rust)" }} href="mailto:kontakt@roomluxe.de">kontakt@roomluxe.de</a>
              </p>
            </div>
          </div>
          <p className="mt-16 pt-6 text-xs chap oldstyle" style={{ color: "rgba(245,239,224,0.5)", borderTop: "1px solid rgba(245,239,224,0.2)" }}>
            N° 01 · Herbst 2026 · gesetzt in Fraunces & Inter · gedruckt am Main
          </p>
        </div>
      </section>
    </div>
  );
}

function ChapterMark({ num, title, dark }: { num: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6 pb-5" style={{ borderBottom: `1px solid ${dark ? "rgba(42,31,23,0.25)" : "rgba(42,31,23,0.18)"}` }}>
      <p className="serif text-6xl sm:text-7xl leading-none" style={{ color: "var(--rust)" }}>{num}</p>
      <p className="chap text-right">{title}</p>
    </div>
  );
}

function Fact({ k, l }: { k: string; l: string }) {
  return (
    <div>
      <p className="serif text-3xl oldstyle" style={{ color: "var(--walnut)" }}>{k}</p>
      <p className="mt-1 chap">{l}</p>
    </div>
  );
}

function DlRow({ k, v, big }: { k: string; v: string; big?: boolean }) {
  return (
    <div>
      <dt className="chap">{k}</dt>
      <dd className={`mt-1 serif ${big ? "text-2xl" : "text-base"} leading-tight`} style={{ color: "var(--walnut)" }}>{v}</dd>
    </div>
  );
}

function Field({ label, multi }: { label: string; multi?: boolean }) {
  return (
    <label className="block">
      <span className="chap" style={{ color: "var(--rust)" }}>{label}</span>
      {multi ? (
        <textarea rows={4} className="mt-2 w-full bg-transparent border-b py-2 serif text-lg outline-none" style={{ borderColor: "rgba(245,239,224,0.3)", color: "var(--paper)" }} />
      ) : (
        <input type="text" className="mt-2 w-full bg-transparent border-b py-2 serif text-lg outline-none" style={{ borderColor: "rgba(245,239,224,0.3)", color: "var(--paper)" }} />
      )}
    </label>
  );
}
