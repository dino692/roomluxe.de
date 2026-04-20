import { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <article className="px-5 sm:px-8 py-16">
      <div className="mx-auto max-w-3xl prose-content">
        <h1 className="font-display text-4xl sm:text-5xl text-ink-900 mb-10">
          Impressum
        </h1>
        <Block title="Angaben gemäß § 5 TMG">
          <p className="font-medium">{site.company.legal}</p>
          <p>{site.company.street}</p>
          <p>{site.company.zip} {site.company.city}</p>
        </Block>
        <Block title="Vertreten durch">
          <p>{site.company.representatives}</p>
          <p className="text-ink-500">Verwaltung und Geschäftsleitung</p>
        </Block>
        <Block title="Kontakt">
          <p>Telefon: {site.phone}</p>
          <p>E-Mail: {site.email}</p>
          <p>Internet: www.roomluxe.de</p>
        </Block>
        <Block title="Registereintrag">
          <p>Eintragung im Handelsregister.</p>
          <p>Registergericht: Amtsgericht Frankfurt am Main</p>
          <p className="text-ink-500">Registernummer: [HRB-Nummer eintragen]</p>
        </Block>
        <Block title="Umsatzsteuer-ID">
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
          <p className="text-ink-500">[USt-IdNr. eintragen]</p>
        </Block>
        <Block title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
          <p>{site.company.representatives}</p>
          <p>{site.company.legal}</p>
          <p>{site.company.street}, {site.company.zip} {site.company.city}</p>
        </Block>
        <Block title="EU-Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" className="text-gold-700 underline">
              https://ec.europa.eu/consumers/odr/
            </a>.
          </p>
          <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </Block>
        <Block title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Block>
        <Block title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </Block>
        <Block title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </Block>
        <Block title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </Block>
        <Block title="Bildnachweis">
          <p>
            Die auf dieser Website verwendeten Fotos der Wohnungen stammen ausschließlich von uns selbst.
            © {site.company.legal}. Alle Rechte vorbehalten.
          </p>
        </Block>
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-display text-xl text-ink-900 mb-3">{title}</h2>
      <div className="space-y-1.5 text-ink-700 leading-relaxed">{children}</div>
    </section>
  );
}
