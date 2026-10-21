export type Language = "en" | "fr";

export const LANGUAGES: Language[] = ["en", "fr"];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_STORAGE_KEY = "saaas.language";

export function isLanguage(value: unknown): value is Language {
  return value === "en" || value === "fr";
}
