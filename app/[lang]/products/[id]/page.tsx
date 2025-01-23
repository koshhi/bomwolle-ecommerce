import { getProduct, type Product } from "@/lib/productData"
import { getTranslations } from "@/lib/getTranslations"
import ProductDetailClient from "@/components/ProductDetailClient"

export default function ProductDetail({ params: { id, lang } }: { params: { id: string; lang: string } }) {
  const productId = Number.parseInt(id)
  const product = getProduct(productId)
  const t = getTranslations(lang)

  if (!product) {
    return <div>{t.products.notFound}</div>
  }

  return <ProductDetailClient product={product} lang={lang} />
}

