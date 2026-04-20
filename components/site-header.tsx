"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Phone, ChevronDown, Menu, X, MapPin, Sparkles, Newspaper, Mail } from "lucide-react";
import { site } from "@/lib/site";
import { stadtteile } from "@/lib/data/stadtteile";

const wohnformen = [
  { href: "/moeblierte-wohnungen", label: "Möblierte Wohnungen" },
  { href: "/wohnen-auf-zeit", label: "Wohnen auf Zeit" },
  { href: "/kurzzeitvermietung", label: "Kurzzeitvermietung" },
  { href: "/privat-vermietet", label: "Privat vermietet" },
  { href: "/ferienwohnung-bad-vilbel", label: "Ferienwohnung Bad Vilbel" },
  { href: "/monteurwohnungen", label: "Monteurwohnungen" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 16));

  // Lock body scroll when drawer open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-cream-100/85 border-b border-gold-300/40 shadow-sm"
          : "backdrop-blur-md bg-cream-100/60 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="roomluxe.de Startseite">
          <span className="font-display text-2xl text-gold-700 leading-none transition group-hover:text-gold-800">
            roomluxe
          </span>
          <span className="hidden sm:flex flex-col text-[10px] tracking-[0.2em] text-ink-500 leading-tight border-l border-gold-300 pl-3">
            <span>WOHNUNGEN</span>
            <span>BAD VILBEL</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink href="/">Startseite</NavLink>

          <NavDropdown
            label="Wohnungen"
            items={stadtteile.map((s) => ({
              href: `/${s.slug}`,
              label: s.name,
              hint: s.priceRange,
            }))}
            extra={[
              { href: "/mietwohnung-bad-vilbel", label: "Alle Mietwohnungen Bad Vilbel" },
              { href: "/wohnung-mieten-frankfurt-nord", label: "Frankfurt-Nord Alternative" },
              { href: "/wohnung-mieten-karben", label: "Wohnung mieten Karben" },
            ]}
          />

          <NavDropdown
            label="Wohnen"
            items={wohnformen}
            extra={[
              { href: "/monteurzimmer", label: "Monteurzimmer" },
              { href: "/unterkunft-monteure", label: "Unterkunft Monteure" },
              { href: "/wohnung-sbahn-frankfurt", label: "Wohnung S-Bahn Frankfurt" },
            ]}
          />

          <NavLink href="/ratgeber">Ratgeber</NavLink>
          <NavLink href="/kontakt">Kontakt</NavLink>
        </nav>

        {/* Phone */}
        <a
          href={`tel:${site.phoneE164}`}
          className="hidden md:flex items-center gap-2 pl-6 ml-2 border-l border-gold-300 text-gold-700 font-medium hover:text-gold-800 transition"
        >
          <Phone className="size-4" strokeWidth={2.2} />
          {site.phone}
        </a>

        {/* Mobile menu button */}
        <button
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
          className="lg:hidden text-ink-900 size-10 grid place-items-center rounded-full hover:bg-cream-300 transition relative z-50"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={open ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-20 bg-ink-900/30 backdrop-blur-sm lg:hidden z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed top-20 right-0 bottom-0 w-[88%] max-w-sm bg-cream-100 lg:hidden z-50 overflow-y-auto shadow-card-lg border-l border-gold-300/40"
            >
              <nav className="px-6 py-7 flex flex-col gap-1.5">
                <MobileLink href="/" onClick={() => setOpen(false)}>Startseite</MobileLink>

                <MobileGroup label="Wohnungen" Icon={MapPin}>
                  {stadtteile.map((s) => (
                    <MobileSubLink key={s.slug} href={`/${s.slug}`} onClick={() => setOpen(false)} hint={s.priceRange}>
                      {s.name}
                    </MobileSubLink>
                  ))}
                  <div className="my-2 border-t border-gold-300/40" />
                  <MobileSubLink href="/mietwohnung-bad-vilbel" onClick={() => setOpen(false)}>
                    Alle Mietwohnungen
                  </MobileSubLink>
                </MobileGroup>

                <MobileGroup label="Wohnen" Icon={Sparkles}>
                  {wohnformen.map((w) => (
                    <MobileSubLink key={w.href} href={w.href} onClick={() => setOpen(false)}>
                      {w.label}
                    </MobileSubLink>
                  ))}
                </MobileGroup>

                <MobileLink href="/ratgeber" onClick={() => setOpen(false)} Icon={Newspaper}>
                  Ratgeber
                </MobileLink>
                <MobileLink href="/kontakt" onClick={() => setOpen(false)} Icon={Mail}>
                  Kontakt
                </MobileLink>

                <div className="mt-7 pt-6 border-t border-gold-300/40 space-y-3">
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-gold-700 text-white font-medium"
                  >
                    <Phone className="size-5" />
                    <div>
                      <div className="text-xs opacity-80">Direkt anrufen</div>
                      <div>{site.phone}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-cream-50 border border-gold-300/40 text-ink-900"
                  >
                    <Mail className="size-5 text-gold-700" />
                    <div>
                      <div className="text-xs text-ink-500">E-Mail</div>
                      <div>{site.email}</div>
                    </div>
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-ink-900 hover:text-gold-700 transition rounded-md font-medium"
    >
      {children}
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  extra = [],
}: {
  label: string;
  items: { href: string; label: string; hint?: string }[];
  extra?: { href: string; label: string }[];
}) {
  return (
    <div className="relative group">
      <button className="px-4 py-2 text-ink-900 hover:text-gold-700 transition rounded-md font-medium inline-flex items-center gap-1">
        {label}
        <ChevronDown className="size-4 group-hover:rotate-180 transition" strokeWidth={2.2} />
      </button>
      <div className="absolute top-full left-0 pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
        <div className="min-w-[280px] bg-cream-50 rounded-2xl shadow-card-lg border border-gold-300/40 p-2">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-gold-100 text-ink-900 hover:text-gold-700 transition"
            >
              <span>{it.label}</span>
              {it.hint && <span className="text-xs text-ink-500">{it.hint}</span>}
            </Link>
          ))}
          {extra.length > 0 && (
            <>
              <div className="my-2 border-t border-gold-300/40" />
              {extra.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="block px-4 py-2.5 rounded-lg hover:bg-gold-100 text-ink-700 hover:text-gold-700 transition text-sm"
                >
                  {it.label}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  Icon,
  children,
}: {
  label: string;
  Icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl">
      <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between text-ink-900 font-medium hover:bg-cream-300 rounded-xl transition">
        <span className="flex items-center gap-3">
          {Icon && <Icon className="size-5 text-gold-700" />}
          {label}
        </span>
        <ChevronDown className="size-4 group-open:rotate-180 transition" />
      </summary>
      <div className="px-2 pt-1 pb-1">{children}</div>
    </details>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  Icon,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  Icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded-xl text-ink-900 hover:bg-cream-300 hover:text-gold-700 transition font-medium"
    >
      {Icon && <Icon className="size-5 text-gold-700" />}
      {children}
    </Link>
  );
}

function MobileSubLink({
  href,
  children,
  onClick,
  hint,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  hint?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-ink-700 hover:bg-cream-300 hover:text-gold-700 transition text-sm"
    >
      <span>{children}</span>
      {hint && <span className="text-xs text-ink-500">{hint}</span>}
    </Link>
  );
}
