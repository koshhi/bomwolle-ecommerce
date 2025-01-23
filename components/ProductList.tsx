"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export type Product = {
  id: number
  name: string
  price: number
  image: string
  color: string
  type: string
  basePrice: number
}

type ProductListProps = {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [sortBy, setSortBy] = useState<"price" | "name">("name")

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price
    } else {
      return a.name.localeCompare(b.name)
    }
  })

  return (
    <div>
      <div className="flex justify-end mb-4">
        <select
          className="border rounded p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "price" | "name")}
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      {sortedProducts.length === 0 ? (
        <p className="text-center text-muted-foreground">No products match your current filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              className="block hover:shadow-lg transition-shadow duration-300"
              key={`${product.id}-${product.color}`}
            >
              <Card>
                <CardContent className="p-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-2">€{product.basePrice}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.color} | {product.type}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList

