"use client"

import { useState } from "react"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getTranslations } from "@/lib/getTranslations"

export default function CheckoutClient({ lang }: { lang: string }) {
  const { items, total, clearCart } = useCart()
  const t = getTranslations(lang)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log("Order submitted:", { items, total, customer: formData })
    clearCart()
    alert(t.checkout.thankYou)
    // Redirect to a thank you page or back to the home page
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">{t.checkout.yourOrder}</h2>
        {items.map((item) => (
          <div key={`${item.id}-${item.variantId}`} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>€{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="font-semibold mt-4">
          {t.checkout.total}: €{total.toFixed(2)}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">{t.checkout.yourInformation}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">{t.checkout.name}</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="email">{t.checkout.email}</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="address">{t.checkout.address}</Label>
            <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="city">{t.checkout.city}</Label>
            <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="country">{t.checkout.country}</Label>
            <Input id="country" name="country" value={formData.country} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="zipCode">{t.checkout.zipCode}</Label>
            <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
          </div>
          <Button type="submit" className="w-full">
            {t.checkout.placeOrder}
          </Button>
        </form>
      </div>
    </div>
  )
}

