"use client"

import { createContext, useContext, useCallback, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import en from "@/locales/en.json"
import es from "@/locales/es.json"
import de from "@/locales/de.json"

const translations = { en, es, de }

type LanguageContextType = {
  switchLanguage: (newLocale: string) => void
  currentLocale: string
  t: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = useState(initialLocale)
  const [t, setT] = useState(translations[initialLocale as keyof typeof translations])

  const switchLanguage = useCallback(
    (newLocale: string) => {
      const segments = pathname?.split("/") || []
      if (segments.length > 1) {
        segments[1] = newLocale
      } else {
        segments.push(newLocale)
      }

      const newPath = segments.join("/")
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;samesite=lax`
      setCurrentLocale(newLocale)
      setT(translations[newLocale as keyof typeof translations])
      router.push(newPath)
    },
    [pathname, router],
  )

  useEffect(() => {
    setT(translations[currentLocale as keyof typeof translations])
  }, [currentLocale])

  return <LanguageContext.Provider value={{ switchLanguage, currentLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguageContext must be used within a LanguageProvider")
  }
  return context
}

