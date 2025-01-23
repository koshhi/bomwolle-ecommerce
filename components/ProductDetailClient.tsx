"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import type { Product } from "@/lib/productData"
import { getTranslations } from "@/lib/getTranslations"

export default function ProductDetailClient({ product, lang }: { product: Product; lang: string }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const { addToCart } = useCart()
  const t = getTranslations(lang)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      price: selectedVariant.price,
      color: selectedVariant.color,
      image: selectedVariant.image,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/${lang}/products`} passHref>
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.products.backToProducts}
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={selectedVariant.image || "/placeholder.svg"}
            alt={`${product.name} in ${selectedVariant.color}`}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">€{selectedVariant.price}</p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{t.products.color}</h2>
            <RadioGroup
              value={selectedVariant.id.toString()}
              onValueChange={(value) => setSelectedVariant(product.variants.find((v) => v.id.toString() === value)!)}
            >
              {product.variants.map((variant) => (
                <div key={variant.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={variant.id.toString()} id={`color-${variant.id}`} />
                  <Label htmlFor={`color-${variant.id}`}>{variant.color}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <Button onClick={handleAddToCart} className="w-full">
            {t.products.addToCart}
          </Button>
        </div>
      </div>
    </div>
  )
}

