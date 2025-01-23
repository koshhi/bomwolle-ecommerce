"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type CartItem = {
  id: number
  variantId: number
  name: string
  price: number
  color: string
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (productId: number, variantId: number) => void
  updateQuantity: (productId: number, variantId: number, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id && item.variantId === product.variantId)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.variantId === product.variantId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number, variantId: number) => {
    setItems((prevItems) => prevItems.filter((item) => !(item.id === productId && item.variantId === variantId)))
  }

  const updateQuantity = (productId: number, variantId: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.variantId === variantId ? { ...item, quantity: Math.max(0, quantity) } : item,
      ),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

