import ProductList from "@/components/ProductList"
import { getAllProducts } from "@/lib/productData"
import { getTranslations } from "@/lib/getTranslations"

export default function ProductsPage({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)
  const products = getAllProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{t.products.title}</h1>
      <ProductList products={products} />
    </div>
  )
}

