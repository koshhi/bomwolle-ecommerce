import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { BrandValues } from "@/components/BrandValues"
import { getAllProducts } from "@/lib/productData"

export default function Home() {
  const allProducts = getAllProducts()
  const featuredProducts = allProducts.slice(0, 3) // Get first 3 products as featured

  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Sustainable Luxury at Your Fingertips
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover Bomwolle's handcrafted leather goods. Where timeless elegance meets eco-conscious craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">Shop Collection</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeaturedProducts products={featuredProducts} />

      <BrandValues />

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Sustainable Journey</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new product releases, and insights into our sustainable
            practices.
          </p>
          <Button variant="secondary" size="lg">
            Subscribe Now
          </Button>
        </div>
      </section>
    </div>
  )
}

