import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  Star,
  Users,
  BedDouble,
  Bath,
  Maximize2,
  Layers,
  Wallet,
  Wifi,
  Tv,
  Car,
  Sun,
  Bed,
  Briefcase,
  Refrigerator,
  Hammer,
  Sparkles,
  Key,
  Wind,
  Droplet,
  Clock,
  LogIn,
  LogOut,
  Info,
} from "lucide-react";
import { wohnungBySlug, wohnungen } from "@/lib/data/wohnungen";
import { stadtteilBySlug } from "@/lib/data/stadtteile";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button, ButtonLink } from "@/components/ui/button";
import { AvailabilityCalendar } from "@/components/booking/availability-calendar";
import { AnfrageForm } from "@/components/forms/anfrage-form";
import { LightboxGallery } from "@/components/wohnung/lightbox-gallery";
import { ScrollSpy } from "@/components/wohnung/scroll-spy";
import { HostCard } from "@/components/wohnung/host-card";
import { RatingsBreakdown } from "@/components/wohnung/ratings-breakdown";
import { HighlightsStrip } from "@/components/wohnung/highlights-strip";
import { LocationMap } from "@/components/wohnung/location-map";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

type Params = { slug: string };

export async function generateStaticParams() {
  return wohnungen.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = wohnungBySlug(slug);
  if (!w) return {};
  const title = `${w.rooms}-Zimmer-Wohnung Bad Vilbel ${w.stadtteilName}`;
  const description =
    w.description.intro.length > 155
      ? w.description.intro.slice(0, 154).replace(/\s+\S*$/, "") + "…"
      : w.description.intro;
  return {
    title,
    description,
    alternates: { canonical: `/wohnung/${slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/wohnung/${slug}`,
    },
  };
}

const amenityIcons: Record<string, React.ReactNode> = {
  WLAN: <Wifi className="size-4" />,
  TV: <Tv className="size-4" />,
  Einbauküche: <Refrigerator className="size-4" />,
  Waschmaschine: <Droplet className="size-4" />,
  Trockner: <Wind className="size-4" />,
  Badewanne: <Droplet className="size-4" />,
  Balkon: <Sun className="size-4" />,
  Arbeitsplatz: <Briefcase className="size-4" />,
  "Kingsize-Betten": <BedDouble className="size-4" />,
  Schlafsofa: <Bed className="size-4" />,
  Parkett: <Layers className="size-4" />,
  "Schlüsselbox Check-in": <Key className="size-4" />,
  "Kostenfreie Parkplätze": <Car className="size-4" />,
  Rauchmelder: <Hammer className="size-4" />,
};

export default async function WohnungPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const w = wohnungBySlug(slug);
  if (!w) notFound();
  const stadtteil = stadtteilBySlug(w.stadtteilSlug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: site.url },
      { "@type": "ListItem", position: 2, name: "Wohnungen", item: `${site.url}/mietwohnung-bad-vilbel` },
      { "@type": "ListItem", position: 3, name: w.stadtteilName, item: `${site.url}/${w.stadtteilSlug}` },
      { "@type": "ListItem", position: 4, name: w.shortTitle, item: `${site.url}/wohnung/${w.slug}` },
    ],
  };

  const ld = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: w.title,
    description: w.description.intro,
    url: `${site.url}/wohnung/${w.slug}`,
    image: w.images.map((i) => i.src),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bad Vilbel",
      addressRegion: w.stadtteilName,
      postalCode: w.zip,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: w.geo.lat,
      longitude: w.geo.lng,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: w.pricePerNight ?? w.pricePerMonth,
      availability:
        w.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
    },
    numberOfRooms: w.rooms,
    floorSize: { "@type": "QuantitativeValue", value: w.sizeM2, unitCode: "MTK" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: w.rating,
      reviewCount: w.reviewCount,
    },
  };

  const sections = [
    { id: "uebersicht", label: "Übersicht" },
    { id: "ausstattung", label: "Ausstattung" },
    { id: "bewertungen", label: "Bewertungen" },
    { id: "lage", label: "Lage" },
    { id: "buchen", label: "Buchen" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Breadcrumb */}
      <section className="px-5 sm:px-8 pt-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { href: "/", label: "Startseite" },
              { href: "/mietwohnung-bad-vilbel", label: "Wohnungen" },
              { label: w.shortTitle },
            ]}
          />
        </div>
      </section>

      {/* Lightbox Gallery */}
      <section className="px-5 sm:px-8 mt-6">
        <div className="mx-auto max-w-7xl">
          <LightboxGallery
            images={w.images}
            topRightBadge={
              w.status === "available" && (
                <span className="px-3 py-1.5 rounded-full bg-sage-500/95 text-white text-xs font-semibold backdrop-blur-md shadow">
                  Verfügbar
                </span>
              )
            }
            bottomLeftBadge={
              w.isFavorite && (
                <span className="px-3 py-1.5 rounded-full bg-cream-50 text-gold-700 text-[11px] font-semibold tracking-wider uppercase shadow">
                  Gäste-Favorit
                </span>
              )
            }
          />
        </div>
      </section>

      {/* Title row */}
      <section className="px-5 sm:px-8 mt-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>{w.stadtteilName} · {w.zip} Bad Vilbel</Eyebrow>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-ink-900 leading-tight font-display">
              {w.rooms}-Zimmer-Wohnung mieten Bad Vilbel {w.stadtteilName}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-ink-700">
              <span className="flex items-center gap-1.5">
                <Star className="size-4 fill-gold-700 text-gold-700" />
                <span className="font-medium">{w.rating}</span>
                <span className="text-ink-500">· {w.reviewCount} Bewertungen</span>
              </span>
              {w.host?.superhost && (
                <>
                  <span className="size-1 rounded-full bg-ink-300" aria-hidden />
                  <span className="flex items-center gap-1.5 text-gold-700 font-medium">
                    Gastgeber: {w.host.name} (Superhost)
                  </span>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 sm:px-8 mt-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8">
            <ScrollSpy sections={sections} />

            {/* Übersicht */}
            <div id="uebersicht" className="scroll-mt-32">
              <Reveal>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <Spec icon={<Users className="size-4" />} label="Gäste" value={String(w.maxGuests)} />
                  <Spec icon={<BedDouble className="size-4" />} label="Schlafzi." value={String(w.bedrooms)} />
                  <Spec icon={<Bath className="size-4" />} label="Bad" value={String(w.bathrooms)} />
                  <Spec icon={<Maximize2 className="size-4" />} label="Wohnfläche" value={`${w.sizeM2} m²`} />
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-8 text-lg text-ink-700 leading-relaxed">
                  {w.description.intro}
                </p>
              </Reveal>

              {/* Highlights */}
              {w.highlights && (
                <div className="mt-10">
                  <HighlightsStrip highlights={w.highlights} />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mt-16 space-y-14">
              <Reveal>
                <h2 className="font-display text-2xl text-ink-900 mb-3">Lage & Umgebung</h2>
                <p className="text-ink-700 leading-relaxed">{w.description.location}</p>
              </Reveal>

              <div id="ausstattung" className="scroll-mt-32">
                <Reveal>
                  <h2 className="font-display text-2xl text-ink-900 mb-3">Ausstattung</h2>
                  <p className="text-ink-700 leading-relaxed">{w.description.equipment}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-7 grid sm:grid-cols-2 gap-3">
                    {w.amenities.map((a) => (
                      <span key={a} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cream-50 border border-gold-300/30 hover:border-gold-700/40 transition">
                        <span className="size-9 rounded-lg bg-gold-100 text-gold-700 grid place-items-center">
                          {amenityIcons[a] ?? <Sparkles className="size-4" />}
                        </span>
                        <span className="text-sm text-ink-900">{a}</span>
                      </span>
                    ))}
                    <span className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cream-50 border border-gold-300/30">
                      <span className="size-9 rounded-lg bg-gold-100 text-gold-700 grid place-items-center">
                        <Hammer className="size-4" />
                      </span>
                      <span className="text-sm text-ink-900">Energieeffizienzklasse {w.energyClass}</span>
                    </span>
                  </div>
                  {w.amenitiesTotal && (
                    <p className="mt-4 text-sm text-ink-500">
                      Insgesamt {w.amenitiesTotal} Ausstattungsmerkmale – vollständige Liste auf Anfrage.
                    </p>
                  )}
                </Reveal>
              </div>

              {/* Zugang + Hausregeln */}
              {(w.description.access || w.description.rules) && (
                <Reveal>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {w.description.access && (
                      <InfoBlock
                        icon={<Key className="size-5" />}
                        title="Zugang"
                        body={w.description.access}
                      />
                    )}
                    {w.description.rules && (
                      <InfoBlock
                        icon={<Info className="size-5" />}
                        title="Hausregeln"
                        body={w.description.rules}
                      />
                    )}
                  </div>
                </Reveal>
              )}

              {/* Bewertungen */}
              {(w.subRatings || w.reviews) && (
                <div id="bewertungen" className="scroll-mt-32">
                  <RatingsBreakdown
                    rating={w.rating}
                    reviewCount={w.reviewCount}
                    subRatings={w.subRatings}
                    distribution={w.ratingDistribution}
                    reviews={w.reviews}
                  />
                </div>
              )}

              {/* Host */}
              {w.host && (
                <Reveal>
                  <HostCard host={w.host} />
                </Reveal>
              )}

              {/* Lage */}
              <div id="lage" className="scroll-mt-32">
                <Reveal>
                  <h2 className="font-display text-2xl text-ink-900 mb-4">Lage auf der Karte</h2>
                  <LocationMap
                    lat={w.geo.lat}
                    lng={w.geo.lng}
                    label={`${w.rooms}-Zimmer-Wohnung in Bad Vilbel ${w.stadtteilName}`}
                    zip={w.zip}
                    stadtteilName={w.stadtteilName}
                  />
                  {stadtteil && (
                    <p className="mt-4 text-sm text-ink-500">
                      Mehr zum Stadtteil:{" "}
                      <Link href={`/${stadtteil.slug}`} className="text-gold-700 underline">
                        {stadtteil.name}
                      </Link>
                    </p>
                  )}
                </Reveal>
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside id="buchen" className="lg:col-span-4 scroll-mt-32">
            <div className="lg:sticky lg:top-28 space-y-5">
              {/* Price card */}
              <Reveal>
                <div className="rounded-3xl bg-cream-50 border border-gold-300/40 shadow-card-lg p-7">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl text-gold-700">
                      {w.pricePerNight ?? w.pricePerMonth} €
                    </span>
                    <span className="text-ink-700">
                      {w.rentMode === "nightly" ? "/Nacht" : "/Monat"}
                    </span>
                  </div>
                  {w.pricePerNight && w.extraGuestPrice && (
                    <p className="mt-1 text-xs text-ink-500">
                      {w.pricePerNight} € / Nacht für 2 Personen, +{w.extraGuestPrice} € je weitere Person (max. {w.maxGuests})
                    </p>
                  )}

                  <ul className="mt-6 space-y-3 text-sm">
                    <Row icon={<Maximize2 className="size-4" />} label="Wohnfläche">{w.sizeM2} m²</Row>
                    <Row icon={<BedDouble className="size-4" />} label="Zimmer">{w.rooms}</Row>
                    <Row icon={<Bed className="size-4" />} label="Betten">{w.beds}</Row>
                    <Row icon={<Users className="size-4" />} label="Max. Gäste">{w.maxGuests}</Row>
                    <Row icon={<Layers className="size-4" />} label="Etage">{w.floor}</Row>
                    <Row icon={<LogIn className="size-4" />} label="Check-in ab">{w.checkInFrom} Uhr</Row>
                    <Row icon={<LogOut className="size-4" />} label="Check-out bis">{w.checkOutUntil} Uhr</Row>
                    <Row icon={<Clock className="size-4" />} label="Mindestaufenthalt">{w.minNights} Nächte</Row>
                    <Row icon={<Wallet className="size-4" />} label="Nebenkosten">{w.nebenkosten} €</Row>
                    <Row icon={<Wallet className="size-4" />} label="Kaution">{w.kaution} €</Row>
                  </ul>

                  <div className="mt-6">
                    <AvailabilityCalendar
                      wohnungSlug={w.slug}
                      minNights={w.minNights}
                      pricePerNight={w.pricePerNight}
                    />
                  </div>
                </div>
              </Reveal>

              {/* Anfrage form */}
              <Reveal delay={0.1}>
                <div className="rounded-3xl bg-cream-50 border border-gold-300/40 shadow-card p-7">
                  <h3 className="font-display text-xl text-ink-900 mb-4">Besichtigung anfragen</h3>
                  <AnfrageForm wohnungSlug={w.slug} variant="compact" />
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a href={`tel:${site.phoneE164}`} className="contents">
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="size-4" /> Anrufen
                      </Button>
                    </a>
                    <a href={`mailto:${site.email}`} className="contents">
                      <Button variant="outline" size="sm" className="w-full">
                        <Mail className="size-4" /> E-Mail
                      </Button>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-5 sm:px-8 mt-24 mb-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>Weiter stöbern</Eyebrow>
            <p className="mt-4 font-display text-2xl text-ink-900 mb-6">Andere Stadtteile in Bad Vilbel</p>
            <ButtonLink href="/mietwohnung-bad-vilbel" variant="outline" withArrow>
              Alle Mietwohnungen ansehen
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-cream-50 border border-gold-300/30 p-4 hover:border-gold-700/40 transition">
      <div className="flex items-center gap-2 text-gold-700 text-xs uppercase tracking-wider">
        {icon} {label}
      </div>
      <p className="mt-1 font-display text-xl text-ink-900">{value}</p>
    </div>
  );
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center justify-between text-ink-700">
      <span className="flex items-center gap-2">
        <span className="text-gold-700">{icon}</span> {label}
      </span>
      <span className="font-medium text-ink-900">{children}</span>
    </li>
  );
}

function InfoBlock({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-cream-50 border border-gold-300/30 p-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="size-9 rounded-lg bg-gold-100 text-gold-700 grid place-items-center">
          {icon}
        </span>
        <h3 className="font-display text-lg text-ink-900">{title}</h3>
      </div>
      <p className="text-sm text-ink-700 leading-relaxed">{body}</p>
    </div>
  );
}
