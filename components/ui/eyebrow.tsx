export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 eyebrow">
      <span className="h-px w-8 bg-gold-700" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
