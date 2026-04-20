import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { RatgeberArtikel } from "@/lib/data/ratgeber";

const categoryColor: Record<RatgeberArtikel["category"], string> = {
  Mieten: "bg-sage-500/10 text-sage-500",
  Lage: "bg-gold-100 text-gold-700",
  Pendeln: "bg-cream-300 text-ink-700",
  Kosten: "bg-gold-200 text-gold-800",
  Tipps: "bg-sage-300/30 text-sage-500",
};

export function RatgeberCard({ a }: { a: RatgeberArtikel }) {
  return (
    <Link
      href={`/ratgeber/${a.slug}`}
      className="group block h-full rounded-3xl bg-cream-50 shadow-card hover:shadow-card-lg border border-gold-300/30 hover:border-gold-700/30 p-7 transition-all duration-300 motion-safe:hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 text-xs">
        <span className={`px-2.5 py-1 rounded-full font-medium ${categoryColor[a.category]}`}>
          {a.category}
        </span>
        <span className="flex items-center gap-1 text-ink-600">
          <Clock className="size-3" />
          {a.readTime}
        </span>
      </div>
      <h3 className="mt-5 text-xl text-ink-900 group-hover:text-gold-700 transition leading-snug font-display">
        {a.title}
      </h3>
      <p className="mt-3 text-sm text-ink-700 leading-relaxed">{a.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-gold-700 text-sm font-medium">
        Artikel lesen <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
      </span>
    </Link>
  );
}
