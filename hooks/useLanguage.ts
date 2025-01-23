"use client"

import { useRouter, usePathname } from "next/navigation"
import { useCallback } from "react"

export function useLanguage() {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = useCallback(
    (newLocale: string) => {
      // Get current path segments
      const segments = pathname?.split("/") || []

      // Replace or add locale
      if (segments.length > 1) {
        segments[1] = newLocale
      } else {
        segments.push(newLocale)
      }

      // Construct new path
      const newPath = segments.join("/")

      // Update cookie
      document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;samesite=lax`

      // Navigate using router.push
      router.push(newPath)
    },
    [pathname, router],
  )

  return { switchLanguage }
}

