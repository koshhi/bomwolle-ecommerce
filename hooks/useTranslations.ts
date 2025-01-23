"use client"

import { usePathname } from "next/navigation"
import { useCallback } from "react"
import en from "@/locales/en.json"
import es from "@/locales/es.json"
import de from "@/locales/de.json"

const translations = { en, es, de }

export function useTranslations() {
  const pathname = usePathname()
  const locale = pathname?.split("/")[1] || "en"

  const t = translations[locale as keyof typeof translations] || en

  const setLocale = useCallback(
    (newLocale: string) => {
      const newPathname = pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`
      window.location.pathname = newPathname
    },
    [pathname, locale],
  )

  return {
    t,
    locale,
    setLocale,
  }
}

