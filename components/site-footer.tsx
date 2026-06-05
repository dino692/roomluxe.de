import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { stadtteile } from "@/lib/data/stadtteile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-gold-300/40 bg-cream-200/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl text-gold-700">roomluxe</span>
            <span className="text-[10px] tracking-[0.2em] text-ink-500">
              WOHNUNGEN BAD VILBEL
            </span>
          </div>
          <p className="mt-4 text-sm text-ink-700 leading-relaxed">
            Hochwertige Mietwohnungen vom privaten Vermieter in Bad Vilbel –
            ohne Makler, ohne Provision. Persönlich, fair und unkompliziert.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              href={`tel:${site.phoneE164}`}
              className="flex items-center gap-2 text-ink-900 hover:text-gold-700 transition"
            >
              <Phone className="size-4 text-gold-700" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-ink-900 hover:text-gold-700 transition"
            >
              <Mail className="size-4 text-gold-700" />
              {site.email}
            </a>
            <div className="flex items-start gap-2 text-ink-700">
              <MapPin className="size-4 mt-0.5 text-gold-700 shrink-0" />
              <span>
                {site.company.street}<br />
                {site.company.zip} {site.company.city}
              </span>
            </div>
          </div>
        </div>

        {/* Stadtteile */}
        <FooterCol title="Stadtteile">
          {stadtteile.map((s) => (
            <FooterLink key={s.slug} href={`/${s.slug}`}>{s.name}</FooterLink>
          ))}
        </FooterCol>

        {/* Wohnformen */}
        <FooterCol title="Wohnformen">
          <FooterLink href="/mietwohnung-bad-vilbel">Mietwohnungen</FooterLink>
          <FooterLink href="/moeblierte-wohnungen">Möblierte Wohnungen</FooterLink>
          <FooterLink href="/moeblierte-wohnung-frankfurt-umgebung">Möbliert · Frankfurt-Umgebung</FooterLink>
          <FooterLink href="/wohnen-auf-zeit">Wohnen auf Zeit</FooterLink>
          <FooterLink href="/kurzzeitvermietung">Kurzzeitvermietung</FooterLink>
          <FooterLink href="/privat-vermietet">Privat vermietet</FooterLink>
          <FooterLink href="/ferienwohnung-bad-vilbel">Ferienwohnung</FooterLink>
        </FooterCol>

        {/* Service & Pendler */}
        <FooterCol title="Pendler & Region">
          <FooterLink href="/monteurwohnungen">Monteurwohnungen</FooterLink>
          <FooterLink href="/monteurzimmer">Monteurzimmer</FooterLink>
          <FooterLink href="/unterkunft-monteure">Unterkunft Monteure</FooterLink>
          <FooterLink href="/wohnung-sbahn-frankfurt">S-Bahn-Pendler</FooterLink>
          <FooterLink href="/wohnung-mieten-karben">Wohnung Karben</FooterLink>
          <FooterLink href="/wohnung-mieten-frankfurt-nord">Wohnung Frankfurt Nord</FooterLink>
        </FooterCol>
      </div>

      {/* Ratgeber-Strip — zusätzliche Link-Dichte */}
      <div className="border-t border-gold-300/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8">
          <h4 className="font-display text-base text-ink-900 mb-4">Ratgeber rund ums Wohnen</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <FooterLink href="/ratgeber">Alle Artikel</FooterLink>
            <FooterLink href="/ratgeber/mietpreise-bad-vilbel-2025">Mietpreise 2025</FooterLink>
            <FooterLink href="/ratgeber/pendeln-bad-vilbel-frankfurt">Pendeln nach Frankfurt</FooterLink>
            <FooterLink href="/ratgeber/wohnlagen-bad-vilbel-vergleich">Wohnlagen-Vergleich</FooterLink>
            <FooterLink href="/ratgeber/2-zimmer-vs-3-zimmer-bad-vilbel">2- vs. 3-Zimmer</FooterLink>
            <FooterLink href="/ratgeber/pendlerpauschale-bad-vilbel-frankfurt">Pendlerpauschale</FooterLink>
            <FooterLink href="/ratgeber/kaution-buergschaft-mietsicherheit">Kaution & Bürgschaft</FooterLink>
            <FooterLink href="/ratgeber/umzug-nach-bad-vilbel-checkliste">Umzug nach Bad Vilbel</FooterLink>
            <FooterLink href="/ratgeber/checkliste-besichtigung">Besichtigungs-Checkliste</FooterLink>
            <FooterLink href="/ratgeber/nebenkosten-mietwohnung">Nebenkosten</FooterLink>
            <FooterLink href="/kontakt">Kontakt</FooterLink>
            <FooterLink href="/seitenuebersicht">Seitenübersicht</FooterLink>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-gold-300/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-ink-500">
          <p>
            © {new Date().getFullYear()} {site.company.legal} · {site.name}
          </p>
          <nav className="flex gap-6">
            <Link href="/impressum" className="hover:text-gold-700 transition">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gold-700 transition">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-base text-ink-900 mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-ink-700 hover:text-gold-700 transition">
        {children}
      </Link>
    </li>
  );
}
