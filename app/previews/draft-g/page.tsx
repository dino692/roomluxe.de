// Entwurf G · "Loft" — Modern Flip, interaktiv
// 21st.dev-Komponenten: 3D Flip Card (#28229), Thumbnail Image Viewer (#37501),
// Date Range Picker Card (#34578).
import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import { PerspectiveFlipCard, FlipCardFront, FlipCardBack } from "@/components/previews/_21st/perspective-flip-card";
import ThumbnailImageViewer from "@/components/previews/_21st/thumbnail-image-viewer";
import { DateRangePickerCard } from "@/components/previews/_21st/date-range-picker-card";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { Phone, Mail, Sparkles } from "lucide-react";
import { wohnungen } from "@/lib/data/wohnungen";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-it", display: "swap", weight: ["300","400","500","600","700"] });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-gm", display: "swap" });

export const metadata: Metadata = { title: "Entwurf G · Loft", robots: { index: false, follow: false } };

const w = wohnungen[0];

export default function DraftG() {
  return (
    <div className={`${interTight.variable} ${mono.variable} min-h-screen bg-white text-neutral-900`} style={{ fontFamily: "var(--font-it), system-ui, sans-serif" }}>
      <style>{`
        .draft-g h1, .draft-g h2, .draft-g h3 { font-family: var(--font-it), system-ui, sans-serif; letter-spacing: -0.035em; }
        .draft-g .mono { font-family: var(--font-gm), monospace; }
        .draft-g .grid-bg { background-image: linear-gradient(to right, rgb(0 0 0 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.04) 1px, transparent 1px); background-size: 32px 32px; }
      `}</style>
      <div className="draft-g">
        {/* Split-Screen Hero */}
        <section className="relative overflow-hidden grid lg:grid-cols-2 min-h-[85vh]">
          <div className="relative z-10 flex flex-col justify-between p-8 sm:p-12 lg:p-16 grid-bg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-neutral-950 text-white inline-flex items-center justify-center text-sm font-semibold">r</span>
              <span className="font-medium">roomluxe</span>
              <Badge variant="secondary" className="rounded-full ml-2">LOFT</Badge>
            </div>
            <div>
              <p className="mono text-xs text-neutral-500 mb-4">— ERSTES PROJEKT · BAD VILBEL</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium leading-[0.95]">
                Hochwertig<br/>wohnen auf Zeit.
              </h1>
              <p className="mt-8 max-w-md text-neutral-600 leading-relaxed">
                Sechs Lofts & Suiten in Bad Vilbel. Direkt vom Eigentümer vermietet.
                Modern eingerichtet, bezugsfertig, flexibel buchbar.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button className="rounded-md px-6 bg-neutral-950 hover:bg-neutral-800">Verfügbarkeit prüfen →</Button>
                <Button variant="outline" className="rounded-md px-6"><Phone className="size-4 mr-2" />069 678 306 125</Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-12">
              <StatG k="6" l="Lofts" />
              <StatG k="4.83" l="Rating" />
              <StatG k="20 min" l="→ Frankfurt" />
              <StatG k="0 €" l="Provision" />
            </div>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full">
            <img src="/images/wohnung/apt-01.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-6 right-6 bg-white rounded-md px-3 py-2 shadow-lg flex items-center gap-2 text-xs">
              <span className="inline-block size-2 rounded-full bg-emerald-500" />
              <span className="mono font-medium">LIVE · 6 verfügbar</span>
            </div>
          </div>
        </section>

        {/* 3D Flip Grid */}
        <section className="py-24 px-6 bg-neutral-50 border-y border-neutral-200">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
              <div>
                <p className="mono text-xs text-neutral-500">// 02 · OBJEKTE</p>
                <h2 className="mt-3 text-4xl sm:text-5xl">Hover zum Umklappen.</h2>
                <p className="mt-3 text-sm text-neutral-600 max-w-md">3D-Flip-Karten mit Property-Details auf der Rückseite · interaktiv</p>
              </div>
              <Badge variant="outline" className="rounded-md"><Sparkles className="size-3 mr-1.5" /> 21st.dev · @shadcnspace/card-14</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <PerspectiveFlipCard
                front={<FlipCardFront image="/images/wohnung/apt-01.jpg" rating="4.83" reviewLabel="72 Rez." tagline="Suite Kurpark" title="Loft am Kurpark" location="Kernstadt, Bad Vilbel" />}
                back={<FlipCardBack beds="2 Betten" baths="1 Bad" area="75 m²" headline="Suite Kurpark" body="Großzügige Dreizimmerwohnung mit Balkon, 2 Minuten vom Marktplatz, 5 Minuten vom Bahnhof." ctaLabel="Jetzt anfragen" />}
              />
              <PerspectiveFlipCard
                front={<FlipCardFront image="/images/wohnung/apt-04.jpg" rating="4.81" reviewLabel="54 Rez." tagline="Suite Dortelweil" title="Loft Dortelweil" location="Dortelweil, Bad Vilbel" />}
                back={<FlipCardBack beds="2 Betten" baths="1 Bad" area="68 m²" headline="Suite Dortelweil" body="Fachwerk-Charme, eigene S-Bahn-Station, familienfreundliche Lage mit Park." ctaLabel="Jetzt anfragen" />}
              />
              <PerspectiveFlipCard
                front={<FlipCardFront image="/images/wohnung/apt-07.jpg" rating="4.79" reviewLabel="38 Rez." tagline="Suite Heilsberg" title="Loft Heilsberg" location="Heilsberg, Bad Vilbel" />}
                back={<FlipCardBack beds="3 Betten" baths="1 Bad" area="82 m²" headline="Suite Heilsberg" body="Hanglage mit Panoramablick, moderne Architektur, viel Licht, Dachterrasse." ctaLabel="Jetzt anfragen" />}
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14">
              <p className="mono text-xs text-neutral-500">// 03 · FOTOSTRECKE</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Suite Kurpark · innen.</h2>
            </div>
            <ThumbnailImageViewer
              title="75 m² · 3 Zimmer · Balkon"
              subtitle="Durch jedes Zimmer der Wohnung, Pfeiltasten oder Thumbnails."
              eyebrow="Rundgang · 01"
              images={[
                { src: "/images/wohnung/apt-01.jpg", alt: "Wohnzimmer", title: "Wohnzimmer", location: "01 · Wohnen", credit: "roomluxe" },
                { src: "/images/wohnung/apt-04.jpg", alt: "Schlafzimmer", title: "Schlafzimmer", location: "02 · Schlafen", credit: "roomluxe" },
                { src: "/images/wohnung/apt-07.jpg", alt: "Küche", title: "Einbauküche", location: "03 · Küche", credit: "roomluxe" },
                { src: "/images/wohnung/apt-12.jpg", alt: "Balkon", title: "Balkon", location: "04 · Balkon", credit: "roomluxe" },
              ]}
            />
          </div>
        </section>

        {/* Booking */}
        <section className="py-24 px-6 bg-neutral-950 text-neutral-50">
          <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="mono text-xs text-neutral-400">// 04 · BUCHUNG</p>
              <h2 className="mt-3 text-4xl sm:text-6xl text-neutral-50">Zeitraum wählen,<br/>Anfrage senden.</h2>
              <p className="mt-6 text-lg text-neutral-400 max-w-xl leading-relaxed">
                Antwort in der Regel &lt; 1 h · keine Vorabkosten · flexible Stornierung.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <StatG k="99 €" l="/ Nacht" dark />
                <StatG k={`${w.sizeM2} m²`} l="Grundfläche" dark />
                <StatG k={`bis ${w.maxGuests}`} l="Gäste" dark />
              </div>
              <div className="mt-10 flex gap-3">
                <Button className="rounded-md px-6 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-semibold">Jetzt buchen →</Button>
                <Button variant="outline" className="rounded-md px-6 border-neutral-50/30 bg-transparent text-neutral-50 hover:bg-neutral-50/10">069 678 306 125</Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <DateRangePickerCard />
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <p className="mono text-xs text-neutral-500 mb-4">// 05 · KONTAKT</p>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-4xl sm:text-5xl">Direkt vom Eigentümer.</h2>
                <p className="mt-6 text-neutral-600 max-w-md">
                  Keine Agentur. Keine Hotline. Antwort in der Regel innerhalb einer Stunde.
                </p>
              </div>
              <div className="space-y-4">
                <a href="tel:+496967830 6125" className="flex items-center gap-4 p-5 rounded-lg border border-neutral-200 hover:border-neutral-900 transition">
                  <Phone className="size-5" />
                  <div>
                    <p className="mono text-xs text-neutral-500">TELEFON</p>
                    <p className="mono mt-1 font-medium">069 678 306 125</p>
                  </div>
                </a>
                <a href="mailto:kontakt@roomluxe.de" className="flex items-center gap-4 p-5 rounded-lg border border-neutral-200 hover:border-neutral-900 transition">
                  <Mail className="size-5" />
                  <div>
                    <p className="mono text-xs text-neutral-500">E-MAIL</p>
                    <p className="mono mt-1 font-medium">kontakt@roomluxe.de</p>
                  </div>
                </a>
              </div>
            </div>
            <p className="mono text-xs text-neutral-500 mt-20 pt-6 border-t border-neutral-200">
              // roomluxe · Entwurf G "Loft" · 21st.dev: 3D Flip Card · Thumbnail Image Viewer · Date Range Picker Card
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatG({ k, l, dark }: { k: string; l: string; dark?: boolean }) {
  return (
    <div>
      <p className={`text-3xl font-medium mono tabular-nums ${dark ? "text-neutral-50" : ""}`}>{k}</p>
      <p className={`mono text-xs mt-2 uppercase tracking-wider ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{l}</p>
    </div>
  );
}
