"use client"

import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  if (items.length === 0) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between py-2">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">€{item.price}</p>
          </div>
          <div className="flex items-center">
            <Input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
              className="w-16 mr-2"
            />
            <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
              Remove
            </Button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="font-semibold">Total: €{total.toFixed(2)}</p>
        <Button asChild className="w-full mt-2">
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  )
}

