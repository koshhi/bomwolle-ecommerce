import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/productData"

type FeaturedProductsProps = {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="block hover:shadow-lg transition-shadow duration-300"
            >
              <Card>
                <CardContent className="p-4">
                  <Image
                    src={product.variants[0].image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">From €{product.basePrice}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

