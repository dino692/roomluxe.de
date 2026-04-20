import { Phone } from "lucide-react";
import { ButtonLink, Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaBand({
  eyebrow = "Direkt vom Eigentümer",
  title = "Passende Wohnung gefunden?",
  description = "Schauen Sie sich unsere aktuellen Mietwohnungen in Bad Vilbel an – provisionsfrei und direkt vom Eigentümer.",
  primaryHref = "/kontakt",
  primaryLabel = "Kontaktformular",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="px-5 sm:px-8 my-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-gradient-to-br from-gold-100 via-cream-200 to-cream-300 p-10 sm:p-14 border border-gold-300/40 shadow-card text-center">
          <p className="eyebrow text-gold-700">{eyebrow}</p>
          <h3 className="mt-4 text-3xl sm:text-4xl text-ink-900">{title}</h3>
          <p className="mt-4 text-ink-700 max-w-2xl mx-auto">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${site.phoneE164}`}>
              <Button variant="primary" size="lg">
                <Phone className="size-4" /> Jetzt anrufen
              </Button>
            </a>
            <ButtonLink href={primaryHref} variant="outline" size="lg" withArrow>
              {primaryLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
