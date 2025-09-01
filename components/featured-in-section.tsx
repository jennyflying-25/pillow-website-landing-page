export function FeaturedInSection() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-manrope tracking-wide uppercase">
            As trusted by design professionals
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          <div className="text-lg font-serif text-muted-foreground">Architectural Digest</div>
          <div className="text-lg font-serif text-muted-foreground">Elle Decor</div>
          <div className="text-lg font-serif text-muted-foreground">Vogue Living</div>
          <div className="text-lg font-serif text-muted-foreground">House Beautiful</div>
          <div className="text-lg font-serif text-muted-foreground">Interior Design</div>
        </div>
      </div>
    </section>
  )
}
