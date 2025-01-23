import { getTranslations } from "@/lib/getTranslations"
import CartClient from "@/components/CartClient"

export default function CartPage({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t.cart.title}</h1>
      <CartClient lang={lang} />
    </div>
  )
}

