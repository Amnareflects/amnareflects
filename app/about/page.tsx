import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-serif font-light text-foreground mb-4">About</h1>
                <div className="w-16 h-px bg-primary mx-auto"></div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-4">Salaam,</h3>
                  <p className="text-muted-foreground font-serif italic text-lg mb-6">
                    and welcome to Amna Reflects! I'm glad to have you here.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed font-serif text-lg">
                  I'm Amna, a young woman deeply rooted in books, faith and quiet reflection. I grew up in the UAE but
                  now nestle in the stillness and calm of Islamabad. I find meaning in the fleeting moments between
                  family and everyday life through writing, reading, and reconnecting with the deepest part of human
                  existence: The heart.
                </p>

                <p className="text-gray-700 leading-relaxed font-serif text-lg">
                  This blog began as a gentle yearning for reflection, connection, and words that feel like home. Here,
                  you'll find thoughtful insights on life, family, womanhood, and Islamic books that will leave a
                  lasting impact long after the last page.
                </p>

                <blockquote className="border-l-2 border-primary pl-6 italic text-primary font-serif text-xl my-8">
                  "My purpose here is to write for books, faith, and gentle living."
                </blockquote>

                <p className="text-gray-700 leading-relaxed font-serif text-lg">
                  Whether you're here to discover your next favorite book, reconnect with Deen, or take a mindful pause
                  from everyday life, I pray you find something warm to take with you.
                </p>

                <div className="pt-8 text-center">
                  <p className="font-serif text-foreground text-lg">Amna Awan</p>
                  <p className="text-sm text-muted-foreground font-serif mt-2">21.05.2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
