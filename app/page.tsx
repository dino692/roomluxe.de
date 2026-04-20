import { Shield, ZapOff, MessageCircle, KeyRound } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { StadtteilTable } from "@/components/sections/stadtteil-table";
import { ThemenUebersicht } from "@/components/sections/themen-uebersicht";
import { WohnungsCard } from "@/components/sections/wohnungs-card";
import { RatgeberCard } from "@/components/sections/ratgeber-card";
import { Hero } from "@/components/sections/hero";
import { FeaturedStrip } from "@/components/sections/featured-strip";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { StatBar } from "@/components/sections/stat-bar";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { availableWohnungen } from "@/lib/data/wohnungen";
import { ratgeber } from "@/lib/data/ratgeber";
import { homeFaq } from "@/lib/data/faq";

export default function HomePage() {
  const wohnungen = availableWohnungen();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Hero />

      <FeaturedStrip />

      {/* Stat Bar */}
      <StatBar />

      {/* INTRO + STADTTEIL TABLE */}
      <section className="px-5 sm:px-8 mt-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
          <Reveal as="div" className="lg:col-span-5">
            <Eyebrow>Wer wir sind</Eyebrow>
            <h2 className="mt-5 text-4xl sm:text-5xl leading-tight text-ink-900 font-display">
              Wohnung mieten in Bad&nbsp;Vilbel –{" "}
              <span className="italic text-gold-700">direkt vom Eigentümer</span>
            </h2>
            <p className="mt-6 text-ink-700 leading-relaxed">
              Bad Vilbel ist eine der gefragtesten Wohnstädte im Rhein-Main-Gebiet.
              Die Kurstadt im Wetteraukreis verbindet urbane Infrastruktur mit
              grünen Wohnlagen und einer hervorragenden S-Bahn-Anbindung nach
              Frankfurt. Wir vermieten Ihnen unsere Wohnungen direkt – ohne Makler,
              ohne Provision.
            </p>
            <div className="mt-8">
              <ButtonLink href="/mietwohnung-bad-vilbel" variant="outline" withArrow>
                Alle Informationen zu Mietwohnungen
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal as="div" delay={0.1} className="lg:col-span-7">
            <p className="font-display text-lg text-ink-900 mb-4">
              Mietpreise nach Stadtteil
            </p>
            <StadtteilTable />
          </Reveal>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="px-5 sm:px-8 mt-24">
        <div className="mx-auto max-w-7xl">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Reveal>
              <Trust icon={<Shield className="size-5" />} title="Privat" subtitle="Kein Makler" />
            </Reveal>
            <Reveal>
              <Trust icon={<ZapOff className="size-5" />} title="0 € Provision" subtitle="Garantiert" />
            </Reveal>
            <Reveal>
              <Trust icon={<MessageCircle className="size-5" />} title="Direkt" subtitle="Schnelle Antwort" />
            </Reveal>
            <Reveal>
              <Trust icon={<KeyRound className="size-5" />} title="Direkt vom" subtitle="Eigentümer" />
            </Reveal>
          </Stagger>
        </div>
      </section>

      {/* WOHNUNGEN */}
      <section id="wohnungen" className="px-5 sm:px-8 mt-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <Eyebrow>Unsere Wohnungen</Eyebrow>
                <h2 className="mt-4 text-4xl sm:text-5xl leading-tight text-ink-900 font-display">
                  Persönlich betreut, <span className="italic text-gold-700">provisionsfrei</span> und sofort verfügbar
                </h2>
                <p className="mt-4 text-ink-700 max-w-xl">
                  Entdecken Sie Ihr neues Zuhause in Bad Vilbel.
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full bg-white/80 backdrop-blur-sm ring-1 ring-ink-900/10 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-ink-900">
                    <span className="font-semibold tabular-nums">{wohnungen.length}</span>{" "}
                    <span className="text-ink-600">verfügbar</span>
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wohnungen.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.06}>
                <WohnungsCard wohnung={w} priority={i === 0} />
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      <ProcessSteps />

      <Testimonials />

      {/* RATGEBER */}
      <section className="px-5 sm:px-8 mt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <Eyebrow>Ratgeber & Tipps</Eyebrow>
                <h2 className="mt-4 text-4xl sm:text-5xl leading-tight text-ink-900 font-display">
                  Alles rund ums Wohnen <span className="italic text-gold-700">in Bad Vilbel</span>
                </h2>
              </div>
              <ButtonLink href="/ratgeber" variant="outline" withArrow>
                Alle Artikel ansehen
              </ButtonLink>
            </div>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {ratgeber.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <RatgeberCard a={a} />
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* THEMEN-ÜBERSICHT */}
      <section className="px-5 sm:px-8 mt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-14">
              <Eyebrow>Alle Themen auf einen Blick</Eyebrow>
              <h2 className="mt-4 text-4xl sm:text-5xl text-ink-900 font-display">
                Wohnungen <span className="italic text-gold-700">in Bad Vilbel</span> entdecken
              </h2>
              <p className="mt-4 text-ink-700 max-w-2xl mx-auto">
                Von Stadtteilen über Wohnformen bis hin zu Ratgeber-Artikeln – finden Sie genau die Informationen, die Sie suchen.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ThemenUebersicht />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 mt-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="text-center mb-10">
              <Eyebrow>Häufige Fragen</Eyebrow>
              <h2 className="mt-4 text-4xl sm:text-5xl text-ink-900 font-display">
                Die wichtigsten <span className="italic text-gold-700">Antworten</span> rund um Ihre Mietwohnung
              </h2>
            </div>
            <FaqAccordion items={homeFaq} />
          </Reveal>
        </div>
      </section>

    </>
  );
}

function Trust({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl bg-cream-50 border border-gold-300/40 p-5 flex items-center gap-4 hover:border-gold-700/40 hover:shadow-card transition">
      <div className="size-11 rounded-xl bg-gold-100 grid place-items-center text-gold-700">
        {icon}
      </div>
      <div>
        <p className="font-medium text-ink-900 leading-tight">{title}</p>
        <p className="text-xs text-ink-500">{subtitle}</p>
      </div>
    </div>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-cream-200 text-ink-700 text-xs font-medium">
      {children}
    </span>
  );
}
