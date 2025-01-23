import en from "@/locales/en.json"
import es from "@/locales/es.json"
import de from "@/locales/de.json"

const translations = { en, es, de }

export function getTranslations(locale: string) {
  return translations[locale as keyof typeof translations] || translations.en
}

