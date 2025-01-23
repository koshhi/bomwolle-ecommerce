import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { CartProvider } from "@/contexts/CartContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CartButton from "@/components/CartButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bomwolle - Luxury Sustainable Leather Goods",
  description: "Handcrafted premium leather bags, wallets, and belts. Sustainable luxury for the discerning customer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Bomwolle
              </Link>
              <div className="flex items-center">
                <Link href="/products">
                  <Button variant="ghost">Products</Button>
                </Link>
                <CartButton />
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="bg-gray-100 mt-8">
            <div className="container mx-auto px-4 py-8">
              <p className="text-center text-gray-600">&copy; 2023 Bomwolle. All rights reserved.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}

