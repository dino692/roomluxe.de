"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Props = {
  wohnungSlug?: string;
  variant?: "compact" | "full";
};

export function AnfrageForm({ wohnungSlug, variant = "full" }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError(null);
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, wohnungSlug }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Anfrage konnte nicht gesendet werden.");
      }
      form.reset();
      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unbekannter Fehler";
      setError(msg);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-sage-500/10 border border-sage-500/40 p-6 text-center">
        <CheckCircle2 className="mx-auto size-10 text-sage-500" />
        <p className="mt-3 font-display text-xl text-ink-900">Vielen Dank!</p>
        <p className="mt-2 text-sm text-ink-700">
          Ihre Anfrage ist eingegangen. Wir melden uns in der Regel innerhalb von 24 Stunden zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name *" name="name" required />
        <Field label="E-Mail *" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Telefon" name="phone" type="tel" />
        {variant === "full" ? (
          <Field label="Betreff" name="subject" />
        ) : (
          <Field label="Wunschtermin" name="moveInDate" type="date" />
        )}
      </div>
      {variant === "full" && (
        <Field label="Wunschtermin" name="moveInDate" type="date" />
      )}
      <div>
        <label className="block text-sm font-medium text-ink-900 mb-1.5">Nachricht{variant === "full" && " *"}</label>
        <textarea
          name="message"
          required={variant === "full"}
          rows={variant === "full" ? 5 : 3}
          className="w-full rounded-xl border border-gold-300/60 bg-cream-50 px-4 py-3 text-sm focus:border-gold-700 focus:bg-white outline-none transition resize-none"
          placeholder="Ihre Nachricht an uns…"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-ink-700">
        <input
          type="checkbox"
          name="dsgvo"
          required
          className="mt-1 size-4 accent-gold-700"
        />
        <span>
          Ich habe die <a href="/datenschutz" className="text-gold-700 underline">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
        </span>
      </label>
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-error">
          <AlertCircle className="size-4" /> {error}
        </p>
      )}
      <Button type="submit" disabled={status === "submitting"} className="w-full" withArrow>
        {status === "submitting" ? "Wird gesendet…" : variant === "compact" ? "Besichtigung anfragen" : "Nachricht senden"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-900 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-gold-300/60 bg-cream-50 px-4 py-3 text-sm focus:border-gold-700 focus:bg-white outline-none transition"
      />
    </div>
  );
}
