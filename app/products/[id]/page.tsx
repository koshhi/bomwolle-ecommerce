"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { getProduct, type Product } from "@/lib/productData"

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0])
  const { addToCart } = useCart()

  useEffect(() => {
    const productId = Array.isArray(id) ? Number.parseInt(id[0]) : Number.parseInt(id)
    const fetchedProduct = getProduct(productId)
    if (fetchedProduct) {
      setProduct(fetchedProduct)
      setSelectedVariant(fetchedProduct.variants[0])
    }
  }, [id])

  const handleAddToCart = () => {
    if (product && selectedVariant) {
      addToCart({
        id: product.id,
        variantId: selectedVariant.id,
        name: product.name,
        price: selectedVariant.price,
        color: selectedVariant.color,
        image: selectedVariant.image,
      })
    }
  }

  if (!product || !selectedVariant) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/products" passHref>
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a productos
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
            <h2 className="text-lg font-semibold mb-2">Color</h2>
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
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

