"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocaleAction } from "@/lib/i18n/actions";
import type { Locale } from "@/lib/i18n/config";

export function LocaleToggle({ locale, label }: { locale: Locale; label: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale || isPending) return;
    startTransition(async () => {
      await setLocaleAction(next);
      router.refresh();
    });
  }

  return (
    <span className="locale-toggle" role="group" aria-label={label}>
      <button
        type="button"
        className={locale === "pt-br" ? "locale-btn active" : "locale-btn"}
        aria-pressed={locale === "pt-br"}
        onClick={() => switchTo("pt-br")}
      >
        PT
      </button>
      <button
        type="button"
        className={locale === "en" ? "locale-btn active" : "locale-btn"}
        aria-pressed={locale === "en"}
        onClick={() => switchTo("en")}
      >
        EN
      </button>
    </span>
  );
}
