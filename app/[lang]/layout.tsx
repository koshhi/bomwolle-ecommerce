import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ClientLayout } from "@/components/ClientLayout"
import { getTranslations } from "@/lib/getTranslations"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bomwolle - Luxury Sustainable Leather Goods",
  description: "Handcrafted premium leather bags, wallets, and belts. Sustainable luxury for the discerning customer.",
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const translations = getTranslations(lang)

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <LanguageProvider initialLocale={lang}>
          <ClientLayout initialTranslations={translations} lang={lang}>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}

