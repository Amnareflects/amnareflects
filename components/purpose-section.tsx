import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Lightbulb } from "lucide-react"

export function PurposeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
            This isn't just a blog. It's a place for...
          </h2>
          <p className="text-xl text-muted-foreground font-serif italic">My safe haven, and hopefully yours too</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 bg-card border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                Muslims who want to live intentionally
              </h3>
              <p className="text-muted-foreground font-serif">
                For those seeking to align their daily choices with their faith and values
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-card border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                Book lovers with a faith-based lens
              </h3>
              <p className="text-muted-foreground font-serif">
                Discovering Islamic literature that nourishes the spiritual heart
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-card border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <Lightbulb className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                People seeking to understand Deen
              </h3>
              <p className="text-muted-foreground font-serif">
                The correct version of it, free from cultural misconceptions
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-xl font-serif italic text-primary mb-4">
              "I pray this little digital corner feels like sincerity, warmth, Rahmah, and a place worth returning to."
            </blockquote>
            <p className="text-muted-foreground font-serif">
              May it be a space that inspires faith, family, and softness, Ameen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
