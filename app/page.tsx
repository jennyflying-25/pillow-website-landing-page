import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedInSection } from "@/components/featured-in-section"
import { ProductCollections } from "@/components/product-collections"
import { TradeProgram } from "@/components/trade-program"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <FeaturedInSection />
      <section id="products">
        <ProductCollections />
      </section>
      <section id="trade-program">
        <TradeProgram />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
