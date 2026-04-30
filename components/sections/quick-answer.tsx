import { Sparkles } from "lucide-react";

/**
 * Quick-Answer-Box am Anfang langer Ratgeber-Artikel.
 *
 * GEO-Optimierung: LLMs (ChatGPT, Perplexity, Gemini) extrahieren bevorzugt
 * den ersten prägnanten Antwort-Block als Snippet/Citation. Eine kompakte
 * TL;DR mit Faktenangabe verbessert die Wahrscheinlichkeit, dass eine Seite
 * in AI-Antworten zitiert wird.
 */
export function QuickAnswer({
  children,
  label = "Kurz beantwortet",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <aside
      className="not-prose mt-8 mb-10 rounded-2xl bg-gold-100/60 border border-gold-300/60 p-6"
      aria-label={label}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold-700">
        <Sparkles className="size-4" />
        {label}
      </div>
      <div className="mt-3 text-ink-900 leading-relaxed [&_strong]:font-semibold [&_strong]:text-ink-900">
        {children}
      </div>
    </aside>
  );
}
