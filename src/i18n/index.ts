import { en } from "./en";
import { es } from "./es";
import { projectsEn } from "./projects/en";
import { projectsEs } from "./projects/es";

export const translations = { en, es };
export const projectTranslations = { en: projectsEn, es: projectsEs };

export type Locale = "en" | "es";
export type Translation = typeof en;
export type ProjectTranslation = typeof projectsEn;

export function getTranslation(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}

export function getProjectTranslation(locale: Locale): ProjectTranslation {
  return projectTranslations[locale] ?? projectTranslations.en;
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === "en" || locale === "es";
}
