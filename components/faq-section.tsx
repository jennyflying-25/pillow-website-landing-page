import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Your Questions, Answered</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              How do I choose the right size throw blanket for my couch or bed?
            </AccordionTrigger>
            <AccordionContent className="font-manrope">
              For a standard three-seater sofa, a 50"x60" throw is perfect for draping. For a queen size bed, consider a
              larger 60"x80" blanket for better coverage. We recommend measuring your space to find the perfect fit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              What is the difference between lambswool and regular wool?
            </AccordionTrigger>
            <AccordionContent className="font-manrope">
              Lambswool is from the first shearing of a young sheep, making its fibers exceptionally fine, soft, and
              smooth. It's ideal for items worn close to the skin as it lacks the "itchiness" of coarser traditional
              wool.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              What are the best care practices for my wool & lambswool items?
            </AccordionTrigger>
            <AccordionContent className="font-manrope">
              To preserve the natural softness and integrity of the fibers, we strongly recommend professional dry
              cleaning as the primary method. For minor spills, spot-clean immediately by gently blotting with a clean,
              damp cloth and cool water. Avoid any rubbing. Never use bleach or machine wash. Lay flat to dry away from
              direct heat or sunlight.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">How should I care for my velvet pillow covers?</AccordionTrigger>
            <AccordionContent className="font-manrope">
              Our velvet covers are designed for easy care. For best results, turn the cover inside out and machine wash
              on a delicate cycle with cold water and a mild detergent. Tumble dry on a low-heat setting or, ideally,
              hang to dry. Avoid ironing the velvet pile directly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              What is the typical shipping lead time for an order?
            </AccordionTrigger>
            <AccordionContent className="font-manrope">
              As each item is carefully prepared, our standard processing and handling time is{" "}
              <strong>10-15 business days</strong> from the date payment is received. Once your order is dispatched, we
              will provide you with tracking information. For specific shipping quotes or timelines to your location,
              please contact us directly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
