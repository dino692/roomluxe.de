import Link from "next/link";
import { stadtteile } from "@/lib/data/stadtteile";

const wohnformen = [
  { href: "/moeblierte-wohnungen", label: "Möblierte Wohnungen" },
  { href: "/wohnen-auf-zeit", label: "Wohnen auf Zeit" },
  { href: "/kurzzeitvermietung", label: "Kurzzeitvermietung" },
  { href: "/privat-vermietet", label: "Provisionsfrei mieten" },
  { href: "/mietwohnung-bad-vilbel", label: "Mietwohnungen" },
  { href: "/ferienwohnung-bad-vilbel", label: "Ferienwohnung" },
];

const monteur = [
  { href: "/monteurwohnungen", label: "Monteurwohnungen" },
  { href: "/monteurzimmer", label: "Monteurzimmer" },
  { href: "/unterkunft-monteure", label: "Firmenunterkünfte" },
  { href: "/wohnung-sbahn-frankfurt", label: "S-Bahn-Pendler" },
];

const ratgeberLinks = [
  { href: "/ratgeber/mietpreise-bad-vilbel-2025", label: "Mietpreise 2025" },
  { href: "/ratgeber/pendeln-bad-vilbel-frankfurt", label: "Pendeln nach Frankfurt" },
  { href: "/ratgeber/wohnlagen-bad-vilbel-vergleich", label: "Wohnlagen-Vergleich" },
  { href: "/wohnung-mieten-frankfurt-nord", label: "Frankfurt Nord" },
];

export function ThemenUebersicht() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <Col title="Stadtteile" items={stadtteile.map((s) => ({ href: `/${s.slug}`, label: s.name }))} />
      <Col title="Wohnformen" items={wohnformen} />
      <Col title="Für Firmen & Monteure" items={monteur} />
      <Col title="Ratgeber" items={ratgeberLinks} />
    </div>
  );
}

function Col({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-lg text-gold-700 mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-ink-700 hover:text-gold-700 transition">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
