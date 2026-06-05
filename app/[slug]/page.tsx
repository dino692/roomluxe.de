import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowRight, Phone, MapPin, Train, Euro } from "lucide-react";
import { stadtteile, stadtteilBySlug } from "@/lib/data/stadtteile";
import { seoHubs, seoHubBySlug } from "@/lib/data/seo-hubs";
import { wohnungenInStadtteil, availableWohnungen } from "@/lib/data/wohnungen";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ButtonLink, Button } from "@/components/ui/button";
import { WohnungsCard } from "@/components/sections/wohnungs-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { ThemenUebersicht } from "@/components/sections/themen-uebersicht";
import { seoFaq } from "@/lib/data/faq";
import { site } from "@/lib/site";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return [
    ...stadtteile.map((s) => ({ slug: s.slug })),
    ...seoHubs.map((h) => ({ slug: h.slug })),
  ];
}

function trimDescription(s: string, max = 155): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return cut.slice(0, lastSpace > 100 ? lastSpace : max - 1).trimEnd() + "…";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const url = `${site.url}/${slug}`;
  const stadtteil = stadtteilBySlug(slug);
  if (stadtteil) {
    const title = `Wohnung mieten Bad Vilbel ${stadtteil.name}`;
    const description = trimDescription(
      `Mietwohnungen in Bad Vilbel ${stadtteil.name}: ${stadtteil.priceRange}, ${stadtteil.sbahnTimeShort} nach Frankfurt. ${stadtteil.characterShort}. Privat vermietet, ohne Provision.`,
    );
    return {
      title,
      description,
      alternates: { canonical: `/${slug}` },
      openGraph: { title, description, url },
    };
  }
  const hub = seoHubBySlug(slug);
  if (hub) {
    return {
      title: hub.metaTitle,
      description: trimDescription(hub.metaDescription),
      alternates: { canonical: `/${slug}` },
      openGraph: {
        title: hub.metaTitle,
        description: trimDescription(hub.metaDescription),
        url,
      },
    };
  }
  return {};
}

export default async function SlugPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const stadtteil = stadtteilBySlug(slug);
  if (stadtteil) return <StadtteilPage slug={slug} />;
  const hub = seoHubBySlug(slug);
  if (hub) return <HubPage slug={slug} />;
  notFound();
}

// Approximate Bad Vilbel district coordinates (for Place schema)
const stadtteilGeo: Record<string, { lat: number; lng: number }> = {
  "bad-vilbel-kernstadt": { lat: 50.18, lng: 8.738 },
  "bad-vilbel-dortelweil": { lat: 50.199, lng: 8.745 },
  "bad-vilbel-heilsberg": { lat: 50.172, lng: 8.755 },
  "bad-vilbel-gronau": { lat: 50.16, lng: 8.73 },
  "bad-vilbel-massenheim": { lat: 50.187, lng: 8.769 },
  "bad-vilbel-soedel": { lat: 50.193, lng: 8.78 },
};

// ----- STADTTEIL -----
function StadtteilPage({ slug }: { slug: string }) {
  const s = stadtteilBySlug(slug)!;
  const wohnungen = wohnungenInStadtteil(slug);
  const neighbors = s.neighbors.map(stadtteilBySlug).filter(Boolean) as NonNullable<ReturnType<typeof stadtteilBySlug>>[];
  const geo = stadtteilGeo[slug];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
      { "@type": "ListItem", position: 2, name: "Wohnungen", item: `${site.url}/mietwohnung-bad-vilbel` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${site.url}/${s.slug}` },
    ],
  };

  const placeLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${site.url}/${s.slug}#place`,
    name: `Bad Vilbel ${s.name}`,
    description: s.intro,
    url: `${site.url}/${s.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bad Vilbel",
      addressRegion: s.name,
      addressCountry: "DE",
    },
    ...(geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.lat,
            longitude: geo.lng,
          },
        }
      : {}),
    containedInPlace: {
      "@type": "City",
      name: "Bad Vilbel",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bad Vilbel",
        addressRegion: "Hessen",
        addressCountry: "DE",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeLd) }}
      />
      {/* Hero */}
      <section className="px-5 sm:px-8 pt-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { href: "/", label: "roomluxe.de" },
              { href: "/mietwohnung-bad-vilbel", label: "Wohnungen" },
              { label: s.name },
            ]}
          />
          <div className="mt-8 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Bad Vilbel · {s.name}</Eyebrow>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-tight text-ink-900">
                Wohnung mieten Bad Vilbel {s.name} –<br />
                <span className="italic text-gold-700">{s.tagline}</span>
              </h1>
              <p className="mt-6 text-lg text-ink-700 leading-relaxed">{s.intro}</p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <Quick label="S-Bahn" value={s.sbahnTimeShort} hint="nach Frankfurt HBF" icon={<Train className="size-5" />} />
              <Quick label="Ø Mietpreis" value={s.priceRange} hint="Kaltmiete" icon={<Euro className="size-5" />} />
            </div>
          </div>
        </div>
      </section>

      {/* Lage & Charakter */}
      <section className="px-5 sm:px-8 mt-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div className="rounded-3xl bg-cream-50 border border-gold-300/30 shadow-card p-8">
            <Eyebrow>Lage & Anbindung</Eyebrow>
            <ul className="mt-5 space-y-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-gold-700 shrink-0" />
                  <span className="text-ink-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-cream-50 border border-gold-300/30 shadow-card p-8">
            <Eyebrow>Charakter des Stadtteils</Eyebrow>
            <p className="mt-5 text-ink-700 leading-relaxed">{s.charakter}</p>
            <Eyebrow>{`Mietpreise in ${s.name}`}</Eyebrow>
            <p className="mt-3 text-ink-700 leading-relaxed">{s.preise}</p>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="px-5 sm:px-8 mt-16">
        <div className="mx-auto max-w-7xl rounded-3xl overflow-hidden bg-cream-200 border border-gold-300/30 aspect-[16/7] grid place-items-center text-ink-500">
          <div className="text-center">
            <MapPin className="mx-auto size-8 text-gold-700" />
            <p className="mt-3 font-display text-lg text-ink-900">
              Google Maps – {s.name}, Bad Vilbel
            </p>
            <p className="text-sm">Wird mit API-Key eingebunden</p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-6 flex flex-wrap gap-3">
          <ButtonLink href="#wohnungen" withArrow>Wohnungen ansehen</ButtonLink>
          <a href={`tel:${site.phoneE164}`}>
            <Button variant="outline">
              <Phone className="size-4" /> Jetzt anrufen
            </Button>
          </a>
        </div>
      </section>

      {/* Wohnungen */}
      <section id="wohnungen" className="px-5 sm:px-8 mt-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Unsere Wohnungen in {s.name}</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl text-ink-900">
            Verfügbare Mietwohnungen in {s.name}
          </h2>
          {wohnungen.length > 0 ? (
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wohnungen.map((w) => (
                <WohnungsCard key={w.slug} wohnung={w} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl bg-cream-50 border border-gold-300/30 p-8 text-center">
              <p className="text-ink-700">
                Aktuell keine freien Wohnungen in {s.name} – schauen Sie auch in Nachbarstadtteilen.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {neighbors.map((n) => (
                  <ButtonLink key={n.slug} href={`/${n.slug}`} variant="outline">
                    {n.name}
                  </ButtonLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Nachbarstadtteile */}
      <section className="px-5 sm:px-8 mt-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Alle Stadtteile in Bad Vilbel</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-3">
            {stadtteile.map((st) => (
              <a
                key={st.slug}
                href={`/${st.slug}`}
                className={`px-5 py-2.5 rounded-pill border transition ${
                  st.slug === slug
                    ? "bg-gold-700 text-white border-gold-700"
                    : "bg-cream-50 text-ink-700 border-gold-300/40 hover:bg-gold-100 hover:text-gold-700"
                }`}
              >
                {st.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Wohnform-Cross-Links — interne Link-Dichte */}
      <section className="px-5 sm:px-8 mt-16">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Was Sie in {s.name} sonst suchen können</Eyebrow>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/mietwohnung-bad-vilbel" className="px-5 py-2.5 rounded-pill bg-cream-50 border border-gold-300/40 text-ink-700 hover:bg-gold-100 hover:text-gold-700 transition">Mietwohnungen Bad Vilbel</a>
            <a href="/moeblierte-wohnungen" className="px-5 py-2.5 rounded-pill bg-cream-50 border border-gold-300/40 text-ink-700 hover:bg-gold-100 hover:text-gold-700 transition">Möblierte Wohnungen</a>
            <a href="/wohnen-auf-zeit" className="px-5 py-2.5 rounded-pill bg-cream-50 border border-gold-300/40 text-ink-700 hover:bg-gold-100 hover:text-gold-700 transition">Wohnen auf Zeit</a>
            <a href="/privat-vermietet" className="px-5 py-2.5 rounded-pill bg-cream-50 border border-gold-300/40 text-ink-700 hover:bg-gold-100 hover:text-gold-700 transition">Privat vermietet</a>
            <a href="/monteurwohnungen" className="px-5 py-2.5 rounded-pill bg-cream-50 border border-gold-300/40 text-ink-700 hover:bg-gold-100 hover:text-gold-700 transition">Monteurwohnungen</a>
            <a href="/wohnung-sbahn-frankfurt" className="px-5 py-2.5 rounded-pill bg-cream-50 border border-gold-300/40 text-ink-700 hover:bg-gold-100 hover:text-gold-700 transition">S-Bahn-Pendler nach Frankfurt</a>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Interesse an einer Wohnung in ${s.name}?`}
        description="Rufen Sie uns an oder schreiben Sie uns – wir vereinbaren zeitnah einen Besichtigungstermin."
      />
    </>
  );
}

// ----- SEO HUB -----
function HubPage({ slug }: { slug: string }) {
  const h = seoHubBySlug(slug)!;
  const wohnungen = availableWohnungen();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
      { "@type": "ListItem", position: 2, name: h.breadcrumbLabel, item: `${site.url}/${h.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Hero */}
      <section className="px-5 sm:px-8 pt-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb
            items={[{ href: "/", label: "roomluxe.de" }, { label: h.breadcrumbLabel }]}
          />
          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl text-ink-900 leading-tight">
            {h.h1}
          </h1>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">{h.intro}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-5 sm:px-8 mt-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {h.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="font-display text-3xl text-ink-900 mb-4">{sec.heading}</h2>
              {sec.body && (
                <p className="text-ink-700 leading-relaxed">{sec.body}</p>
              )}
              {sec.bullets && (
                <ul className="mt-4 space-y-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-gold-700 shrink-0" />
                      <span className="text-ink-700">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stadtteile */}
      {h.showAllStadtteile && (
        <section className="px-5 sm:px-8 mt-16">
          <div className="mx-auto max-w-7xl">
            <Eyebrow>Alle Stadtteile entdecken</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-ink-900 mb-8">
              Mietwohnungen in allen 6 Stadtteilen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stadtteile.map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group rounded-2xl bg-cream-50 border border-gold-300/30 p-5 flex items-center justify-between hover:bg-gold-100 hover:border-gold-700 transition"
                >
                  <div>
                    <p className="font-medium text-ink-900 group-hover:text-gold-700">{s.name}</p>
                    <p className="text-sm text-ink-500">{s.priceRange} · {s.sbahnTimeShort}</p>
                  </div>
                  <ArrowRight className="size-4 text-gold-700 group-hover:translate-x-1 transition" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Wohnungen Showcase */}
      {wohnungen.length > 0 && (
        <section className="px-5 sm:px-8 mt-20">
          <div className="mx-auto max-w-7xl">
            <Eyebrow>Aktuelle Wohnungen</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-ink-900 mb-8">
              Sofort verfügbare Mietwohnungen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wohnungen.map((w) => (
                <WohnungsCard key={w.slug} wohnung={w} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-5 sm:px-8 mt-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Häufig gestellte Fragen</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-ink-900 mb-8">
            Antworten auf häufige Fragen
          </h2>
          <FaqAccordion items={seoFaq} />
        </div>
      </section>

      {/* Themen */}
      <section className="px-5 sm:px-8 mt-20">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Weitere Themen</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-ink-900 mb-8">
            Alle Themen auf einen Blick
          </h2>
          <ThemenUebersicht />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Quick({ label, value, hint, icon }: { label: string; value: string; hint: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-cream-50 border border-gold-300/40 p-5 shadow-card">
      <div className="flex items-center gap-2 text-gold-700">
        {icon}
        <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <p className="mt-3 font-display text-2xl text-ink-900">{value}</p>
      <p className="text-xs text-ink-500">{hint}</p>
    </div>
  );
}
