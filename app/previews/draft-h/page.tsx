// Entwurf H · "Agency" — Klassische Real-Estate-Suche
// 21st.dev-Komponenten: Real Estate Search Hero (#19080), Hotel Card (#7504),
// Thumbnail Image Viewer (#37501), Date Range Picker Card (#34578).
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Hero09 } from "@/components/previews/_21st/hero-09";
import { HotelCard } from "@/components/previews/_21st/hotel-card";
import ThumbnailImageViewer from "@/components/previews/_21st/thumbnail-image-viewer";
import { DateRangePickerCard } from "@/components/previews/_21st/date-range-picker-card";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { Phone, Mail, Shield, Clock, Users } from "lucide-react";
import { wohnungen } from "@/lib/data/wohnungen";

const dm = DM_Serif_Display({ subsets: ["latin"], variable: "--font-dm", display: "swap", weight: ["400"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-in", display: "swap" });

export const metadata: Metadata = { title: "Entwurf H · Agency", robots: { index: false, follow: false } };

const w = wohnungen[0];

export default function DraftH() {
  return (
    <div className={`${dm.variable} ${inter.variable} min-h-screen bg-stone-50 text-stone-900`} style={{ fontFamily: "var(--font-in), system-ui, sans-serif" }}>
      <style>{`
        .draft-h h1, .draft-h h2, .draft-h h3 { font-family: var(--font-dm), Georgia, serif; letter-spacing: -0.015em; }
        .draft-h .label { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600; color: rgb(68 64 60 / 0.65); }
      `}</style>
      <div className="draft-h">
        {/* Hero09 — Real Estate Search */}
        <Hero09
          title="Mietwohnungen in Bad Vilbel."
          titleLine2="Direkt vom Eigentümer."
          description="Hochwertige Apartments, kein Makler, keine Provision. Zwanzig Minuten S-Bahn nach Frankfurt."
          searchPlaceholder="Stadtteil, Datum, Gäste …"
          searchButtonText="Suchen"
          heroImage="/images/wohnung/apt-01.jpg"
          heroAlt="Apartment Bad Vilbel"
          bottomTitle="Sechs Objekte,"
          bottomTitleLine2="handverlesen gepflegt."
          bottomText="Eine kleine Sammlung in sechs Stadtteilen — alle vom Eigentümer selbst betreut, ohne Agentur."
          animation="none"
        />

        {/* Objekte */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <p className="label">Verfügbare Objekte</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Aktuell im Portfolio.</h2>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="rounded-full"><Shield className="size-3 mr-1.5" /> Privatvermieter</Badge>
              <Badge variant="outline" className="rounded-full"><Clock className="size-3 mr-1.5" /> Antwort &lt; 1 h</Badge>
            </div>
          </div>
          <div className="grid gap-6">
            <HotelCard
              href="#"
              imageUrl="/images/wohnung/apt-01.jpg"
              imageAlt="Suite Kurpark"
              roomType="3 Zimmer · 75 m² · Balkon"
              hotelName="Suite Kurpark"
              location="Kernstadt, Bad Vilbel · 61118"
              rating={4.83}
              reviewCount={72}
              priceLabel="99 €/Nacht · ab April"
            />
            <HotelCard
              href="#"
              imageUrl="/images/wohnung/apt-04.jpg"
              imageAlt="Suite Dortelweil"
              roomType="2 Zimmer · 68 m² · Terrasse"
              hotelName="Suite Dortelweil"
              location="Dortelweil, Bad Vilbel · 61118"
              rating={4.81}
              reviewCount={54}
              priceLabel="109 €/Nacht · ab Mai"
            />
            <HotelCard
              href="#"
              imageUrl="/images/wohnung/apt-07.jpg"
              imageAlt="Suite Heilsberg"
              roomType="3 Zimmer · 82 m² · Panoramablick"
              hotelName="Suite Heilsberg"
              location="Heilsberg, Bad Vilbel · 61118"
              rating={4.79}
              reviewCount={38}
              priceLabel="119 €/Nacht · ab Juni"
            />
          </div>
        </section>

        {/* Fotostrecke */}
        <section className="bg-white border-y border-stone-200 py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="label">Fotostrecke · Suite Kurpark</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Alle Räume im Detail.</h2>
            </div>
            <ThumbnailImageViewer
              title="Suite Kurpark · 75 m² · 3 Zimmer"
              subtitle="Vollständiger Rundgang. Pfeiltasten oder Thumbnails nutzen."
              eyebrow="Fotostrecke · 01 / 04"
              images={[
                { src: "/images/wohnung/apt-01.jpg", alt: "Wohnzimmer", title: "Wohnzimmer mit Esstisch", location: "Wohnzimmer", credit: "roomluxe" },
                { src: "/images/wohnung/apt-04.jpg", alt: "Schlafzimmer", title: "Schlafzimmer mit Kingsize-Bett", location: "Schlafzimmer", credit: "roomluxe" },
                { src: "/images/wohnung/apt-07.jpg", alt: "Küche", title: "Vollausgestattete Einbauküche", location: "Küche", credit: "roomluxe" },
                { src: "/images/wohnung/apt-12.jpg", alt: "Balkon", title: "Überdachter Balkon mit Stadtblick", location: "Balkon", credit: "roomluxe" },
              ]}
            />
          </div>
        </section>

        {/* Reservierung + Kalender */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="label">Reservierung</p>
              <h2 className="mt-3 text-4xl sm:text-6xl">Prüfen Sie die Verfügbarkeit.</h2>
              <p className="mt-6 text-lg text-stone-700 max-w-xl leading-relaxed">
                Keine Vorabkosten, keine Provision. Nach Ihrer Anfrage meldet sich der
                Eigentümer in der Regel innerhalb einer Stunde persönlich.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <KpiH icon={<Users className="size-5" />} k={`bis ${w.maxGuests}`} l="Gäste" />
                <KpiH icon={<Shield className="size-5" />} k="0 €" l="Provision" />
                <KpiH icon={<Clock className="size-5" />} k="< 1 h" l="Antwortzeit" />
              </div>
              <div className="mt-10 flex gap-3 flex-wrap">
                <Button className="rounded-md px-6">Anfrage senden</Button>
                <Button variant="outline" className="rounded-md px-6"><Phone className="size-4 mr-2" />069 678 306 125</Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <DateRangePickerCard />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-stone-100 py-20 px-6 border-t border-stone-200">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="label">Was Gäste schreiben</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">{w.rating} / 5 · {w.reviewCount} Rezensionen.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {w.reviews?.slice(0, 3).map((r, i) => (
                <blockquote key={i} className="rounded-xl border border-stone-200 bg-white p-6">
                  <p className="text-sm leading-relaxed text-stone-700">„{r.text.slice(0, 180)}…"</p>
                  <footer className="label mt-5 text-stone-500">— {r.name} · {r.date}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="label">Kontakt</p>
            <h2 className="mt-4 text-4xl sm:text-6xl">Sprechen Sie direkt mit dem Eigentümer.</h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+496967830 6125" className="inline-flex items-center gap-3 rounded-md px-6 py-3 bg-stone-900 text-stone-50 hover:bg-stone-800 transition">
                <Phone className="size-4" /> 069 678 306 125
              </a>
              <a href="mailto:kontakt@roomluxe.de" className="inline-flex items-center gap-3 rounded-md px-6 py-3 border border-stone-300 hover:bg-stone-100 transition">
                <Mail className="size-4" /> kontakt@roomluxe.de
              </a>
            </div>
            <p className="label mt-20 pt-6 border-t border-stone-200">
              roomluxe · Entwurf H "Agency" · 21st.dev: Real Estate Search Hero · Hotel Card · Thumbnail Image Viewer · Date Range Picker Card
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function KpiH({ icon, k, l }: { icon: React.ReactNode; k: string; l: string }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4">
      <div className="text-stone-500">{icon}</div>
      <p className="mt-3 text-2xl font-medium tabular-nums">{k}</p>
      <p className="label mt-1">{l}</p>
    </div>
  );
}
