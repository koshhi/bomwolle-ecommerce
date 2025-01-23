import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BrandValues() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We are committed to using eco-friendly materials and sustainable practices in all our products.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality Craftsmanship</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Each Bomwolle product is meticulously crafted by skilled artisans to ensure the highest quality.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Timeless Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our designs blend classic elegance with modern functionality, creating pieces that stand the test of
                time.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="max-w-2xl mx-auto text-lg">
            At Bomwolle, our mission is to create sustainable, high-quality leather goods that combine timeless elegance
            with modern functionality. We strive to minimize our environmental impact while maximizing the beauty and
            durability of our products.
          </p>
        </div>
      </div>
    </section>
  )
}

