import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="px-5 sm:px-8 min-h-[70vh] grid place-items-center">
      <div className="text-center max-w-xl">
        <p className="eyebrow text-gold-700">404</p>
        <h1 className="mt-4 font-display text-5xl text-ink-900">
          Seite nicht <span className="italic text-gold-700">gefunden</span>
        </h1>
        <p className="mt-6 text-ink-700">
          Diese Seite existiert nicht oder wurde verschoben.
          Schauen Sie sich gerne unsere aktuellen Wohnungen oder Stadtteile an.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <ButtonLink href="/" withArrow>Zur Startseite</ButtonLink>
          <ButtonLink href="/mietwohnung-bad-vilbel" variant="outline" withArrow>
            Wohnungen ansehen
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
