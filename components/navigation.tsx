"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-[#E59864] hover:opacity-80 transition-opacity duration-200"
            >
              Luxe Textiles
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium"
              >
                For Designers
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#BCA996] hover:bg-[#A89885] text-white font-medium px-6 py-2 transition-colors duration-200"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block px-3 py-2 text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium w-full text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium w-full text-left"
              >
                For Designers
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-[#E59864] transition-colors duration-200 font-medium w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#BCA996] hover:bg-[#A89885] text-white font-medium w-full transition-colors duration-200"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
