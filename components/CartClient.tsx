"use client"

import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { getTranslations } from "@/lib/getTranslations"

export default function CartClient({ lang }: { lang: string }) {
  const { items, removeFromCart, updateQuantity, total } = useCart()
  const t = getTranslations(lang)

  if (items.length === 0) {
    return (
      <div>
        <p>{t.cart.empty}</p>
        <Link href={`/${lang}/products`}>
          <Button className="mt-4">{t.cart.continueShopping}</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {items.map((item) => (
        <div key={`${item.id}-${item.variantId}`} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-md mr-4"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.color}</p>
              <p className="text-sm">€{item.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, item.variantId, Number.parseInt(e.target.value))}
              className="w-16 mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id, item.variantId)}>
              {t.cart.remove}
            </Button>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <p className="text-xl font-semibold">
          {t.cart.total}: €{total.toFixed(2)}
        </p>
        <Button asChild className="mt-4">
          <Link href={`/${lang}/checkout`}>{t.cart.proceedToCheckout}</Link>
        </Button>
      </div>
    </div>
  )
}

