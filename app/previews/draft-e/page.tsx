// Entwurf E · "Suite" — Boutique-Hotel
// 21st.dev-Komponenten: Property Preview Card (#28203), Thumbnail Image Viewer (#37501),
// Date Range Picker Card (#34578). Hero: eigener Classy-inspirierter Minimal-Hero.
import type { Metadata } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import { PropertyPreviewCard } from "@/components/previews/_21st/property-preview-card";
import ThumbnailImageViewer from "@/components/previews/_21st/thumbnail-image-viewer";
import { DateRangePickerCard } from "@/components/previews/_21st/date-range-picker-card";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { Star, ArrowRight, Phone, Mail } from "lucide-react";
import { wohnungen } from "@/lib/data/wohnungen";
import { stadtteile } from "@/lib/data/stadtteile";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-pf", display: "swap", weight: ["400","500","700","900"], style: ["normal","italic"] });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-is", display: "swap", weight: ["400","500","600"] });

export const metadata: Metadata = { title: "Entwurf E · Suite", robots: { index: false, follow: false } };

const w = wohnungen[0];
const stadt = stadtteile[0];

export default function DraftE() {
  return (
    <div className={`${playfair.variable} ${sans.variable} min-h-screen bg-neutral-50 text-neutral-900`} style={{ fontFamily: "var(--font-is), system-ui, sans-serif" }}>
      <style>{`
        .draft-e h1, .draft-e h2, .draft-e h3 { font-family: var(--font-pf), Georgia, serif; letter-spacing: -0.02em; }
        .draft-e .label { font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; color: rgb(23 23 23 / 0.55); }
      `}</style>
      <div className="draft-e">
        {/* Hero */}
        <section className="relative overflow-hidden bg-neutral-950 text-neutral-50">
          <div className="absolute inset-0">
            <img src="/images/wohnung/apt-01.jpg" alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40 text-center">
            <p className="label text-neutral-400">Est. mmxxiv · Bad Vilbel</p>
            <h1 className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight">
              roomluxe<span className="italic text-neutral-300"> suites</span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-neutral-300 leading-relaxed">
              Sechs sorgfältig geführte Apartments. Direkt vom Eigentümer. Ohne Agentur, ohne Provision —
              zwanzig Minuten S-Bahn von Frankfurt entfernt.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button className="rounded-full px-7 bg-neutral-50 text-neutral-950 hover:bg-neutral-200">Verfügbarkeit prüfen</Button>
              <Button variant="outline" className="rounded-full px-7 border-neutral-50/30 text-neutral-50 hover:bg-neutral-50/10 bg-transparent">Suiten ansehen</Button>
            </div>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm">
              <span className="flex items-center gap-2 text-neutral-300"><Star className="size-4 fill-neutral-50 text-neutral-50" /> 4,83 · 72 Rezensionen</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span className="text-neutral-300">20 Min. nach Frankfurt</span>
              <span className="h-1 w-1 rounded-full bg-neutral-500" />
              <span className="text-neutral-300">0 € Provision</span>
            </div>
          </div>
        </section>

        {/* Property Grid */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <p className="label">The Suites · Vol. 01</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Unsere Wohnungen in Bad Vilbel.</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">Alle Wohnungen <ArrowRight className="size-4" /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PropertyPreviewCard image="/images/wohnung/apt-01.jpg" title="Suite Kurpark" address={`${stadt.name} · 61118`} price="99 €/Nacht" beds="2 Betten" baths="1 Bad" area="75 m²" />
            <PropertyPreviewCard image="/images/wohnung/apt-04.jpg" title="Suite Dortelweil" address="Dortelweil · 61118" price="109 €/Nacht" beds="2 Betten" baths="1 Bad" area="68 m²" />
            <PropertyPreviewCard image="/images/wohnung/apt-07.jpg" title="Suite Heilsberg" address="Heilsberg · 61118" price="119 €/Nacht" beds="3 Betten" baths="1 Bad" area="82 m²" />
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-neutral-100/60 py-24 px-6 border-y border-neutral-200">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="label">Fotostrecke · Suite Kurpark</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">75 m² · 3 Zimmer · Balkon.</h2>
            </div>
            <ThumbnailImageViewer
              title="Alle Räume auf einen Blick."
              subtitle="Von der offenen Wohnküche bis zur Dachterrasse — ein Rundgang durch die Suite Kurpark."
              eyebrow="Collected · Vol. 01"
              images={[
                { src: "/images/wohnung/apt-01.jpg", alt: "Wohnzimmer", title: "Wohnzimmer mit Esstisch", location: "Wohnzimmer · 01", credit: "roomluxe" },
                { src: "/images/wohnung/apt-04.jpg", alt: "Schlafzimmer", title: "Schlafzimmer mit Kingsize-Bett", location: "Schlafzimmer · 02", credit: "roomluxe" },
                { src: "/images/wohnung/apt-07.jpg", alt: "Küche", title: "Vollausgestattete Einbauküche", location: "Küche · 03", credit: "roomluxe" },
                { src: "/images/wohnung/apt-12.jpg", alt: "Balkon", title: "Überdachter Balkon mit Stadtblick", location: "Balkon · 04", credit: "roomluxe" },
              ]}
            />
          </div>
        </section>

        {/* Booking */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="label">Reservierung</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Wählen Sie Ihren Zeitraum.</h2>
              <p className="mt-6 text-lg text-neutral-600 max-w-xl leading-relaxed">
                Direkt beim Eigentümer buchen. Antwort in der Regel innerhalb einer Stunde — und für jede
                Anfrage ein persönlicher Ansprechpartner, nicht ein Call-Center.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <div><p className="text-3xl font-light tabular-nums">99 €</p><p className="label mt-2">/ Nacht</p></div>
                <div><p className="text-3xl font-light tabular-nums">{w.sizeM2} m²</p><p className="label mt-2">Grundfläche</p></div>
                <div><p className="text-3xl font-light tabular-nums">bis {w.maxGuests}</p><p className="label mt-2">Gäste</p></div>
              </div>
              <div className="mt-10 flex gap-3">
                <Button className="rounded-full px-7 bg-neutral-950 text-neutral-50 hover:bg-neutral-800">Anfrage senden</Button>
                <Button variant="outline" className="rounded-full px-7"><Phone className="size-4 mr-2" />069 678 306 125</Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <DateRangePickerCard />
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-24 pt-16 border-t border-neutral-200">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
              <div>
                <p className="label">Gästestimmen</p>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-4xl font-light tabular-nums">{w.rating}</span>
                  <span className="text-neutral-500">· {w.reviewCount} Rezensionen</span>
                </div>
              </div>
              <Badge variant="outline" className="rounded-full border-neutral-300 py-2 px-4"><Star className="size-3.5 fill-neutral-900 text-neutral-900 mr-1.5" /> Superhost</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {w.reviews?.slice(0, 3).map((r, i) => (
                <blockquote key={i} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                  <div className="flex gap-0.5 mb-4">{Array.from({length: 5}).map((_, k) => <Star key={k} className="size-3.5 fill-neutral-900 text-neutral-900" />)}</div>
                  <p className="text-sm leading-relaxed text-neutral-700">„{r.text.slice(0, 180)}…"</p>
                  <p className="label mt-5">{r.name} · {r.date}</p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-neutral-950 text-neutral-50 py-24 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="label text-neutral-400">Concierge</p>
            <h2 className="mt-4 text-4xl sm:text-6xl">Direkt zum Gastgeber.</h2>
            <p className="mt-6 max-w-lg mx-auto text-neutral-300 leading-relaxed">
              Keine Agentur. Keine Hotline. Antwort in der Regel innerhalb einer Stunde.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <a href="tel:+496967830 6125" className="inline-flex items-center gap-3 rounded-full border border-neutral-50/30 px-6 py-3 hover:bg-neutral-50/10 transition">
                <Phone className="size-4" /> 069 678 306 125
              </a>
              <a href="mailto:kontakt@roomluxe.de" className="inline-flex items-center gap-3 rounded-full border border-neutral-50/30 px-6 py-3 hover:bg-neutral-50/10 transition">
                <Mail className="size-4" /> kontakt@roomluxe.de
              </a>
            </div>
            <p className="label mt-20 pt-6 border-t border-neutral-800 text-neutral-500">
              roomluxe · Entwurf E "Suite" · 21st.dev-Komponenten: Property Preview Card · Thumbnail Image Viewer · Date Range Picker Card
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
