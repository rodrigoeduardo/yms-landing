export type Locale = "pt-br" | "en";

export const locales: Locale[] = ["pt-br", "en"];

export const defaultLocale: Locale = "pt-br";

export const LOCALE_COOKIE = "locale";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as string[]).includes(value);
}
