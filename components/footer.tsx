"use client"

import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Luxe Textiles</h3>
            <p className="text-white/80 font-manrope leading-relaxed">
              Artisan-quality home textiles for a life of comfort and style. Crafted with premium materials for
              sophisticated homes.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 font-manrope">
              <li>
                <button
                  onClick={() => scrollToSection("wool-collection")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Australian Wool Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("velvet-collection")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Velvet Pillow Covers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("wool-collection")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Lambswool Shawls
                </button>
              </li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h4 className="font-semibold mb-4">For Professionals</h4>
            <ul className="space-y-2 font-manrope">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Trade Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  For Interior Designers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Wholesale Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 font-manrope">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Care Instructions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Shipping Lead Time
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 font-manrope">© 2024 Luxe Textiles. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://wa.me/8613480782233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/jennyflying.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
