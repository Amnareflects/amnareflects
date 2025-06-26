import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Link href="/about" className="group inline-block">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-primary group-hover:text-primary/80 transition-colors duration-200 mb-4 hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-8">
              About
            </h2>
            <p className="text-muted-foreground font-serif italic group-hover:text-foreground transition-colors duration-200">
              Learn more about this gentle space for reflection
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
