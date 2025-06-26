export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">About</h2>
            <div className="w-16 h-px bg-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-foreground mb-2">Salaam,</h3>
                <p className="text-muted-foreground font-serif italic">
                  and welcome to Amna Reflects! I'm glad to have you here.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed font-serif">
                I'm Amna, a young woman deeply rooted in books, faith and quiet reflection. I grew up in the UAE but now
                nestle in the stillness and calm of Islamabad. I find meaning in the fleeting moments between family and
                everyday life through writing, reading, and reconnecting with the deepest part of human existence: The
                heart.
              </p>

              <p className="text-muted-foreground leading-relaxed font-serif">
                This blog began as a gentle yearning for reflection, connection, and words that feel like home. Here,
                you'll find thoughtful insights on life, family, womanhood, and Islamic books that will leave a lasting
                impact long after the last page.
              </p>

              <blockquote className="border-l-2 border-primary pl-6 italic text-primary font-serif">
                "My purpose here is to write for books, faith, and gentle living."
              </blockquote>

              <div className="pt-4">
                <p className="font-serif text-foreground">Amna Awan</p>
                <p className="text-sm text-muted-foreground font-serif">21.05.2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
