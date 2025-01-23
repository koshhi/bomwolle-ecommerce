"use client"

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type Filters = {
  priceRange: number[]
  colors: string[]
  types: string[]
}

type ProductFiltersProps = {
  filters: Filters
  applyFilters: (filters: Filters) => void
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, applyFilters }) => {
  const colors = ["Black", "Brown", "Tan", "Navy"]
  const types = ["Bags", "Wallets", "Belts"]

  const handlePriceChange = (value: number[]) => {
    applyFilters({ ...filters, priceRange: value })
  }

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color]
    applyFilters({ ...filters, colors: newColors })
  }

  const handleTypeChange = (type: string) => {
    const newTypes = filters.types.includes(type) ? filters.types.filter((t) => t !== type) : [...filters.types, type]
    applyFilters({ ...filters, types: newTypes })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Price Range</h2>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>€{filters.priceRange[0]}</span>
          <span>€{filters.priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Color</h2>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center">
              <Checkbox
                id={`color-${color}`}
                checked={filters.colors.includes(color)}
                onCheckedChange={() => handleColorChange(color)}
              />
              <Label htmlFor={`color-${color}`} className="ml-2">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Product Type</h2>
        <div className="space-y-2">
          {types.map((type) => (
            <div key={type} className="flex items-center">
              <Checkbox
                id={`type-${type}`}
                checked={filters.types.includes(type)}
                onCheckedChange={() => handleTypeChange(type)}
              />
              <Label htmlFor={`type-${type}`} className="ml-2">
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductFilters

