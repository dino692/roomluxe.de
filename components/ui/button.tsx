import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition disabled:opacity-50 disabled:cursor-not-allowed select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-700 text-white hover:bg-gold-800 shadow-card hover:shadow-card-lg",
  secondary:
    "bg-cream-300 text-ink-900 hover:bg-cream-400",
  outline:
    "bg-transparent border border-gold-700 text-gold-700 hover:bg-gold-100",
  ghost:
    "bg-transparent text-ink-900 hover:bg-cream-300",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  withArrow,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
      {withArrow && <ArrowRight className="size-4" />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  withArrow,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {withArrow && <ArrowRight className="size-4" />}
    </Link>
  );
}
