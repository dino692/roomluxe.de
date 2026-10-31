import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design-Entwürfe · 21st.dev",
  robots: { index: false, follow: false },
};

const drafts = [
  { slug: "draft-e", label: "E", name: "Suite", pitch: "Boutique-Hotel" },
  { slug: "draft-f", label: "F", name: "Journey", pitch: "Travel-Lifestyle" },
  { slug: "draft-g", label: "G", name: "Loft", pitch: "Modern · 3D-Flip" },
  { slug: "draft-h", label: "H", name: "Agency", pitch: "Real-Estate-Suche" },
];

export default function PreviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
        className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <Link href="/previews" className="font-semibold tracking-wider uppercase text-black">
            Design-Entwürfe · 21st.dev
          </Link>
          <span className="text-black/40">Interne Vorschau · noindex</span>
          <div className="ml-auto flex items-center gap-1">
            {drafts.map((d) => (
              <Link
                key={d.slug}
                href={`/previews/${d.slug}`}
                className="px-3 py-1.5 rounded-full border border-black/15 hover:border-black hover:bg-black hover:text-white transition"
              >
                <span className="font-mono mr-1.5 opacity-60">{d.label}</span>
                {d.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
