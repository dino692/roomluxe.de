import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
      <ol className="flex items-center flex-wrap gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className="hover:text-gold-700 transition">
                {it.label}
              </Link>
            ) : (
              <span className="text-ink-900">{it.label}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className="size-3.5 text-ink-300" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
