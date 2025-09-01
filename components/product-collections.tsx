"use client"

import { Button } from "@/components/ui/button"

export function ProductCollections() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1C1E] mb-4">Explore Our Signature Collections</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-manrope">
            Hand-selected materials and timeless designs for a home that feels as good as it looks.
          </p>
        </div>

        {/* Australian Wool Collection */}
        <div id="wool-collection" className="mb-32">
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Headline Group */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1C1E]">The Australian Wool Collection</h3>
                <p className="text-lg text-[#BCA996] font-semibold">
                  Timeless elegance, crafted from 100% pure Australian wool.
                </p>
              </div>

              {/* Main Description */}
              <p className="text-[#1A1C1E] font-manrope leading-relaxed">
                Experience the superior softness of our premium Australian wool throws. Sourced from the finest flocks,
                our wool features longer, finer fibers, resulting in a blanket that is exceptionally soft, breathable,
                and less prone to pilling.
              </p>

              {/* The Details */}
              <div className="space-y-4 mt-12">
                <h4 className="font-semibold text-[#1A1C1E]">The Details:</h4>
                <div className="space-y-2">
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Material:</span> 100% Australian Wool
                  </p>
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Weight:</span> Approx. 1.15 kg
                  </p>
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Size:</span> 145x210 cm (57"x83"), including tassels
                  </p>
                </div>
              </div>

              {/* Button */}
              <div>
                <Button
                  className="bg-[#BCA996] hover:bg-[#A89985] text-white transition-colors duration-200"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Inquire About The Australian Wool Collection
                </Button>
              </div>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:row-span-2">
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763510.jpg"
                    alt="Australian wool blanket lifestyle shot"
                    className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div className="space-y-6">
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763506.jpg"
                    alt="Folded Australian wool throw"
                    className="w-full h-[285px] object-cover rounded-lg shadow-sm"
                  />
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763900.jpg"
                    alt="Australian wool throw detail"
                    className="w-full h-[285px] object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Velvet Collection */}
        <div id="velvet-collection" className="mb-32">
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Headline Group */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1C1E]">The Luxury Velvet Pillow Collection</h3>
                <p className="text-lg text-[#BCA996] font-semibold">
                  Plush texture, rich colors. Instantly elevate any space.
                </p>
              </div>

              {/* Main Description */}
              <p className="text-[#1A1C1E] font-manrope leading-relaxed">
                Indulge in the extremely soft touch of our luxurious velvet throw pillows. Crafted from 100% polyester
                fiber and available in 19 popular colors, they use color language and emotional atmosphere to create a
                fashionable home aesthetic.
              </p>

              {/* The Details */}
              <div className="space-y-4 mt-12">
                <h4 className="font-semibold text-[#1A1C1E]">The Details:</h4>
                <div className="space-y-2">
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Material:</span> 100% Polyester Velvet
                  </p>
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Colors:</span> Available in 19 popular shades
                  </p>
                  <div className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Available Sizes:</span>
                    <div className="grid grid-cols-3 gap-x-6 gap-y-2 mt-2 text-sm">
                      <div>
                        • 35x50 cm (14"x20") - <em>Lumbar</em>
                      </div>
                      <div>
                        • 45x45 cm (18"x18") - <em>Standard Square</em>
                      </div>
                      <div>
                        • 50x50 cm (20"x20") - <em>Standard Square</em>
                      </div>
                      <div>
                        • 55x55 cm (22"x22") - <em>Large Square</em>
                      </div>
                      <div>
                        • 60x60 cm (24"x24") - <em>Euro Pillow</em>
                      </div>
                      <div>
                        • 65x65 cm (26"x26") - <em>Euro Pillow</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div>
                <Button
                  className="bg-[#BCA996] hover:bg-[#A89985] text-white transition-colors duration-200"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Inquire About The Velvet Collection
                </Button>
              </div>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* LEFT COLUMN (60% width) - Hero lifestyle image */}
                <div className="lg:col-span-3 lg:row-span-2">
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763849.jpg"
                    alt="Velvet pillows lifestyle shot on sofa"
                    className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-sm"
                  />
                </div>
                {/* RIGHT COLUMN (40% width) - Two smaller stacked images */}
                <div className="lg:col-span-2 space-y-6">
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763850.jpg"
                    alt="Velvet pillows product shot on stool"
                    className="w-full h-[285px] object-cover rounded-lg shadow-sm"
                  />
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763507.jpg"
                    alt="Emerald green velvet pillow close-up detail"
                    className="w-full h-[285px] object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lambswool Collection */}
        <div className="mb-32">
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Headline Group */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1C1E]">The 100% Lambswool Shawl Collection</h3>
                <p className="text-lg text-[#BCA996] font-semibold">Unparalleled softness, naturally pure.</p>
              </div>

              {/* Main Description */}
              <p className="text-[#1A1C1E] font-manrope leading-relaxed">
                Wrap yourself in the delicate warmth of our 100% lambswool shawls. Sourced from the first shearing,
                lambswool is renowned for its incredibly fine and soft fibers, offering gentle comfort without the
                itchiness of traditional wool.
              </p>

              {/* The Details */}
              <div className="space-y-4 mt-12">
                <h4 className="font-semibold text-[#1A1C1E]">The Details:</h4>
                <div className="space-y-2">
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Material:</span> 100% Lambswool
                  </p>
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Quality:</span> First shearing fibers
                  </p>
                  <p className="text-[#1A1C1E] font-manrope">
                    <span className="font-semibold">Size:</span> 140x180 cm (55"x70")
                  </p>
                </div>
              </div>

              {/* Button */}
              <div>
                <Button
                  className="bg-[#BCA996] hover:bg-[#A89985] text-white transition-colors duration-200"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Inquire About Lambswool Shawls
                </Button>
              </div>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Primary large image */}
                <div className="lg:row-span-2">
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763881.jpg"
                    alt="Woman wearing lambswool shawl"
                    className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-sm"
                  />
                </div>
                {/* Two smaller stacked images */}
                <div className="space-y-6">
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763875.jpg"
                    alt="Lambswool shawl texture detail"
                    className="w-full h-[285px] object-cover rounded-lg shadow-sm"
                  />
                  <img
                    src="https://raw.githubusercontent.com/jennyflying-25/pillow-landing-page/main/img/1756543763876.jpg"
                    alt="Lambswool shawl folded"
                    className="w-full h-[285px] object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
