"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543762758.jpg"
          alt="Luxury living room with premium textiles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Luxury Wool Throws, Velvet Pillows & Lambswool Shawls
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty font-manrope">
          Discover our curated collection of artisan-quality home textiles. From the unmatched warmth of a premium wool
          throw blanket to the plush touch of a soft velvet pillow cover, each piece is crafted for exceptional comfort
          and timeless style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#BCA996] hover:bg-[#A89985] text-white px-8 py-3 text-lg font-semibold"
            onClick={() => scrollToSection("wool-collection")}
          >
            Shop All Collections
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 text-lg font-semibold bg-transparent"
            onClick={() => scrollToSection("contact")}
          >
            B2B Trade Program
          </Button>
        </div>
      </div>
    </section>
  )
}
