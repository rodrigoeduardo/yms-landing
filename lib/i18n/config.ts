export type Locale = "pt-br" | "en";

export const locales: Locale[] = ["pt-br", "en"];

export const defaultLocale: Locale = "pt-br";

export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as string[]).includes(value);
}

// Each locale's demo domain. Both point at the same deployment — routing
// only. Typed as Record<Locale, string> so a new locale cannot be added
// without also wiring its demo URL.
export const demoUrls: Record<Locale, string> = {
  en: "https://yms-demo.rodrigoeduardo.com",
  "pt-br": "https://patio-demo.rodrigoeduardo.com",
};

export function getDemoUrl(locale: Locale): string {
  return demoUrls[locale];
}
