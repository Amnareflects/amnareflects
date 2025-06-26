import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Link from "next/link"

export function FeaturedPost() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">Latest Reflection</h2>
            <div className="w-16 h-px bg-primary mx-auto"></div>
          </div>

          <Card className="border-none shadow-none bg-background">
            <CardContent className="p-12">
              <div className="flex items-center justify-center text-sm text-muted-foreground mb-8">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="font-serif">May 23, 2025</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-serif font-light text-center text-foreground mb-8 leading-relaxed">
                Starting a faith based blog: What inspired me
              </h1>

              <div className="prose prose-lg max-w-none font-serif text-muted-foreground leading-relaxed space-y-6">
                <p className="text-primary font-semibold">Bismillah,</p>

                <p>
                  I deeply believe in reflection being a major part of Islam, especially as a modern muslim woman
                  navigating life and faith with loud thoughts.
                </p>

                <p>
                  The surge in food blogs, business blogs, fashion blogs etcetra is very evident but faith based blogs?
                  that make you feel cozy, warm, and at home? Few and far between.
                </p>

                <p className="text-foreground font-medium">This laid the foundation for Amna Reflects.</p>

                <div className="pt-8 text-center">
                  <Link
                    href="/reflections/starting-faith-based-blog"
                    className="inline-block text-primary hover:text-primary/80 font-serif underline underline-offset-4 transition-colors"
                  >
                    Continue reading →
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
