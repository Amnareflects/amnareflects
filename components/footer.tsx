import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 bg-muted/20 border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <nav className="flex justify-center space-x-8 text-sm font-serif">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                All Reflections
              </Link>
            </nav>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground font-serif mb-2">Thank you for reading</p>
            <div className="w-16 h-px bg-primary mx-auto mb-6"></div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground font-serif text-sm">© 2025 Amna Reflects • From Islamabad with love</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
