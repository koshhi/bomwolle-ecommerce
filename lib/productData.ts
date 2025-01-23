export type Product = {
  id: number
  name: string
  description: string
  basePrice: number
  variants: {
    id: number
    color: string
    image: string
    price: number
  }[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Tote",
    description:
      "A timeless leather tote, perfect for everyday use. Made with sustainable practices and premium materials.",
    basePrice: 299,
    variants: [
      { id: 1, color: "Brown", image: "https://placehold.co/400x300", price: 299 },
      { id: 2, color: "Black", image: "https://placehold.co/400x300", price: 299 },
      { id: 3, color: "Tan", image: "https://placehold.co/400x300", price: 319 },
    ],
  },
  {
    id: 2,
    name: "Minimalist Wallet",
    description: "Sleek and functional wallet designed for those who appreciate simplicity.",
    basePrice: 79,
    variants: [
      { id: 4, color: "Black", image: "/https://placehold.co/400x300", price: 79 },
      { id: 5, color: "Brown", image: "https://placehold.co/400x300", price: 79 },
    ],
  },
  // Añade más productos aquí...
]

export function getProduct(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getAllProducts(): Product[] {
  return products
}

