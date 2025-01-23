"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CartButton from "@/components/CartButton"
import { LanguageSelector } from "@/components/LanguageSelector"
import { useLanguageContext } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

type Props = {
  children: React.ReactNode
  initialTranslations: any
  lang: string
}

export function ClientLayout({ children, initialTranslations, lang }: Props) {
  const { currentLocale, t } = useLanguageContext()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}

