"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"
import { useLanguageContext } from "@/contexts/LanguageContext"

export default function CartButton() {
  const { items } = useCart()
  const { currentLocale, t } = useLanguageContext()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Link href={`/${currentLocale}/cart`}>
      <Button variant="ghost" className="relative">
        <ShoppingCart className="mr-2 h-4 w-4" />
        {t.common.cart}
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
}

