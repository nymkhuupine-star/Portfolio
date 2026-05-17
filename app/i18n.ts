export type Locale = "mn" | "en"

export const DEFAULT_LOCALE: Locale = "mn"

export function resolveLocale(value: string | undefined | null): Locale {
  return value === "en" ? "en" : DEFAULT_LOCALE
}

