import ProductList from "@/components/ProductList"
import { getAllProducts } from "@/lib/productData"

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductList products={products} />
    </div>
  )
}

