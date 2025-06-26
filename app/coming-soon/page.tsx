import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors font-serif text-sm mb-8"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </div>

              <div className="mb-12">
                <h1 className="text-4xl font-serif font-light text-foreground mb-6">Coming Soon</h1>
                <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground font-serif italic leading-relaxed">
                  In Sha Allah, this section will be filled with thoughtful reviews of Islamic books that nourish the
                  spiritual heart.
                </p>

                <p className="text-muted-foreground font-serif leading-relaxed">
                  I'm currently reading and reflecting on several beautiful works that I can't wait to share with you.
                  Each review will be written with care, honesty, and the hope that these books might touch your heart
                  as they have touched mine.
                </p>

                <div className="pt-8">
                  <p className="text-primary font-serif italic">"Read! In the name of your Lord who created."</p>
                  <p className="text-muted-foreground font-serif text-sm mt-2">— Quran 96:1</p>
                </div>
              </div>

              <div className="pt-12">
                <Link
                  href="/"
                  className="inline-block text-primary hover:text-primary/80 font-serif underline underline-offset-4 transition-colors"
                >
                  Return to reflections →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
