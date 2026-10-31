// Entwurf F · "Journey" — Travel-Lifestyle, foto-first
// 21st.dev-Komponenten: Place Card mit Image-Carousel (#7734), Thumbnail Image Viewer (#37501),
// Date Range Picker Card (#34578).
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { PlaceCard } from "@/components/previews/_21st/place-card";
import ThumbnailImageViewer from "@/components/previews/_21st/thumbnail-image-viewer";
import { DateRangePickerCard } from "@/components/previews/_21st/date-range-picker-card";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { Phone, Mail, MapPin, Compass } from "lucide-react";
import { wohnungen } from "@/lib/data/wohnungen";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fr", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-in", display: "swap" });

export const metadata: Metadata = { title: "Entwurf F · Journey", robots: { index: false, follow: false } };

const w = wohnungen[0];

export default function DraftF() {
  return (
    <div className={`${fraunces.variable} ${inter.variable} min-h-screen bg-orange-50/40 text-stone-900`} style={{ fontFamily: "var(--font-in), system-ui, sans-serif" }}>
      <style>{`
        .draft-f h1, .draft-f h2, .draft-f h3 { font-family: var(--font-fr), Georgia, serif; letter-spacing: -0.015em; font-weight: 400; }
        .draft-f .italic-serif { font-family: var(--font-fr), serif; font-style: italic; }
        .draft-f .label { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500; color: rgb(68 64 60 / 0.65); }
      `}</style>
      <div className="draft-f">
        {/* Hero mit Media */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Badge className="rounded-full px-4 py-1 bg-orange-900/10 text-orange-900 border-transparent hover:bg-orange-900/20">
                <Compass className="size-3 mr-1.5" /> Rhein-Main · Herbst 2026
              </Badge>
              <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
                Reisen Sie <span className="italic-serif text-orange-800">langsamer</span>.
                <br />Wohnen Sie wie zuhause.
              </h1>
              <p className="mt-8 text-lg text-stone-700 max-w-lg leading-relaxed">
                roomluxe ist eine kleine Sammlung handverlesener Apartments in Bad Vilbel.
                Zwanzig Minuten vom Frankfurter Hauptbahnhof. Vom Eigentümer selbst geführt.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button className="rounded-full px-7 bg-orange-900 text-orange-50 hover:bg-orange-950">Collection ansehen</Button>
                <Button variant="outline" className="rounded-full px-7 border-stone-300 bg-transparent"><Phone className="size-4 mr-2" />069 678 306 125</Button>
              </div>
              <div className="mt-14 flex items-center gap-8 text-sm text-stone-600">
                <div><p className="text-2xl font-light italic-serif text-stone-900">4,83</p><p className="label mt-1">Guest Rating</p></div>
                <div className="h-10 w-px bg-stone-300" />
                <div><p className="text-2xl font-light italic-serif text-stone-900">72</p><p className="label mt-1">Rezensionen</p></div>
                <div className="h-10 w-px bg-stone-300" />
                <div><p className="text-2xl font-light italic-serif text-stone-900">6</p><p className="label mt-1">Apartments</p></div>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img src="/images/wohnung/apt-01.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-orange-50/40 shadow-xl hidden sm:block">
                <img src="/images/wohnung/apt-07.jpg" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 right-6 bg-white rounded-xl px-4 py-3 shadow-lg hidden sm:flex items-center gap-3">
                <MapPin className="size-4 text-orange-800" />
                <div className="text-left">
                  <p className="text-xs label">Bad Vilbel</p>
                  <p className="text-sm font-medium">20 Min nach Frankfurt</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Place-Card Grid */}
        <section className="py-24 bg-white border-y border-stone-200">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <p className="label">The Collection</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">Vier Lieblings-<span className="italic-serif text-orange-800">Orte</span>.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <PlaceCard
                images={["/images/wohnung/apt-01.jpg", "/images/wohnung/apt-04.jpg", "/images/wohnung/apt-07.jpg"]}
                tags={["Zentral", "S-Bahn"]}
                rating={4.83}
                title="Suite Kurpark"
                dateRange="Ab April · flexibel"
                hostType="Vom Eigentümer"
                isTopRated
                description="75 m² mit Balkon über dem Kurpark. 3 Zimmer, Kingsize-Bett, Vollausstattung."
                pricePerNight={99}
              />
              <PlaceCard
                images={["/images/wohnung/apt-04.jpg", "/images/wohnung/apt-07.jpg", "/images/wohnung/apt-12.jpg"]}
                tags={["Ruhig", "Familien"]}
                rating={4.81}
                title="Suite Dortelweil"
                dateRange="Ab Mai · flexibel"
                hostType="Vom Eigentümer"
                description="Eigene S-Bahn-Station Dortelweil, Fachwerk-Charme, ruhige Lage."
                pricePerNight={109}
              />
              <PlaceCard
                images={["/images/wohnung/apt-07.jpg", "/images/wohnung/apt-12.jpg", "/images/wohnung/apt-01.jpg"]}
                tags={["Panorama", "Loggia"]}
                rating={4.79}
                title="Suite Heilsberg"
                dateRange="Ab Juni · flexibel"
                hostType="Vom Eigentümer"
                description="Hanglage mit Panoramablick, moderne Architektur, viel Licht."
                pricePerNight={119}
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="label">Portfolio · Suite Kurpark</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Ein Rundgang durch die <span className="italic-serif text-orange-800">Räume</span>.</h2>
            </div>
            <ThumbnailImageViewer
              title="Suite Kurpark · 75 m²"
              subtitle="Vier Räume, ein Balkon, ein Charakter. Ein Eindruck von jedem Winkel der Wohnung."
              eyebrow="Portfolio · Vol. 01"
              images={[
                { src: "/images/wohnung/apt-01.jpg", alt: "Wohnzimmer", title: "Wohnzimmer mit Esstisch", location: "Living · 01", credit: "roomluxe" },
                { src: "/images/wohnung/apt-04.jpg", alt: "Schlafzimmer", title: "Schlafzimmer mit Kingsize-Bett", location: "Bedroom · 02", credit: "roomluxe" },
                { src: "/images/wohnung/apt-07.jpg", alt: "Küche", title: "Vollausgestattete Küche", location: "Kitchen · 03", credit: "roomluxe" },
                { src: "/images/wohnung/apt-12.jpg", alt: "Balkon", title: "Balkon mit Stadtblick", location: "Balcony · 04", credit: "roomluxe" },
              ]}
            />
          </div>
        </section>

        {/* Booking */}
        <section className="bg-orange-950 text-orange-50 py-24 px-6">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="label text-orange-200">Reservation</p>
              <h2 className="mt-3 text-4xl sm:text-5xl text-orange-50">Finden Sie Ihren <span className="italic-serif text-orange-200">Zeitraum</span>.</h2>
              <p className="mt-6 text-lg text-orange-200/80 max-w-xl leading-relaxed">
                Buchen Sie direkt beim Eigentümer. Keine Agentur, keine Provision —
                nur eine persönliche Antwort, meist innerhalb einer Stunde.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <div><p className="text-3xl italic-serif tabular-nums">99 €</p><p className="label mt-2 text-orange-200">/ Nacht</p></div>
                <div><p className="text-3xl italic-serif tabular-nums">{w.sizeM2} m²</p><p className="label mt-2 text-orange-200">Grundfläche</p></div>
                <div><p className="text-3xl italic-serif tabular-nums">4,83</p><p className="label mt-2 text-orange-200">Guest Rating</p></div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <DateRangePickerCard />
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="label">Letters</p>
            <h2 className="mt-4 text-4xl sm:text-6xl">
              Schreiben Sie uns —<br/>
              oder <span className="italic-serif text-orange-800">rufen</span> Sie an.
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+496967830 6125" className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-orange-900 text-orange-50 hover:bg-orange-950 transition">
                <Phone className="size-4" /> 069 678 306 125
              </a>
              <a href="mailto:kontakt@roomluxe.de" className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-stone-300 hover:bg-stone-100 transition">
                <Mail className="size-4" /> kontakt@roomluxe.de
              </a>
            </div>
            <p className="label mt-20 pt-6 border-t border-stone-200">
              roomluxe · Entwurf F "Journey" · 21st.dev: Place Card · Thumbnail Image Viewer · Date Range Picker Card
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
