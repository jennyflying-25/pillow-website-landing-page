"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Bed, Store, Gift } from "lucide-react"

export function TradeProgram() {
  return (
    <section id="trade-program" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1C1E] mb-4">
            For Interior Designers & Boutique Retailers
          </h2>
          <p className="text-xl text-[#1A1C1E] max-w-3xl mx-auto font-manrope">
            Elevate your projects with our exclusive Trade Program. We partner with design professionals and boutique
            businesses to provide artisan-quality textiles with competitive wholesale pricing, dedicated support, and
            priority access to new collections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-stone-25 backdrop-blur-sm border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Home className="h-8 w-8 text-[#E59864]" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg text-[#1A1C1E]">Interior Design Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#1A1C1E] font-manrope">
                Premium textiles for residential and commercial design projects
              </p>
            </CardContent>
          </Card>

          <Card className="bg-stone-25 backdrop-blur-sm border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Bed className="h-8 w-8 text-[#E59864]" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg text-[#1A1C1E]">Boutique Hotels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#1A1C1E] font-manrope">Luxury amenities that enhance guest experience and comfort</p>
            </CardContent>
          </Card>

          <Card className="bg-stone-25 backdrop-blur-sm border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Store className="h-8 w-8 text-[#E59864]" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg text-[#1A1C1E]">High-End Retail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#1A1C1E] font-manrope">Curated collections for discerning retail customers</p>
            </CardContent>
          </Card>

          <Card className="bg-stone-25 backdrop-blur-sm border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
            <CardHeader>
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <Gift className="h-8 w-8 text-[#E59864]" strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg text-[#1A1C1E]">Corporate Gifting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#1A1C1E] font-manrope">Sophisticated gifts that make lasting impressions</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          
        </div>
      </div>
    </section>
  )
}
