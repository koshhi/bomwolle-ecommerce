import { getTranslations } from "@/lib/getTranslations"
import CheckoutClient from "@/components/CheckoutClient"

export default function CheckoutPage({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t.checkout.title}</h1>
      <CheckoutClient lang={lang} />
    </div>
  )
}

