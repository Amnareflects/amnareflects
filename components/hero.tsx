export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-3xl text-primary font-serif mb-2">بِسْمِ اللهِ</p>
            <p className="text-lg text-muted-foreground font-serif italic">In the name of Allah</p>
          </div>

          <h1 className="text-6xl font-serif font-light text-foreground mb-6 leading-tight">
            Welcome to a gentle space
          </h1>
          <h2 className="text-5xl font-serif font-light italic text-primary mb-8 tracking-wide">for reflection</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-3xl mx-auto">
            Where faith meets books and gentle living becomes a way of life. A cozy corner of sincerity, warmth, and
            words that feel like home.
          </p>
          <div className="w-24 h-px bg-primary mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  )
}
