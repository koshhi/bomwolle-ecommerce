import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { BrandValues } from "@/components/BrandValues"
import { getAllProducts } from "@/lib/productData"
import { getTranslations } from "@/lib/getTranslations"

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  const t = getTranslations(lang)
  const allProducts = getAllProducts()
  const featuredProducts = allProducts.slice(0, 3) // Get first 3 products as featured

  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">{t.home.hero.title}</h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-8">{t.home.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href={`/${lang}/products`}>{t.home.hero.cta.shop}</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href={`/${lang}/about`}>{t.home.hero.cta.learnMore}</Link>
            </Button>
          </div>
        </div>
      </section>

      <FeaturedProducts products={featuredProducts} />

      <BrandValues />

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.home.newsletter.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t.home.newsletter.description}</p>
          <Button variant="secondary" size="lg">
            {t.home.newsletter.cta}
          </Button>
        </div>
      </section>
    </div>
  )
}

