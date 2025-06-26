import Link from "next/link"
import Image from "next/image"

export function BlogPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-light text-primary mb-4">Latest Reflection</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-16"></div>

          <div className="inline-block">
            <Link href="/blog/starting-faith-based-blog" className="group block">
              {/* Fixed Desktop Size Image */}
              <div className="relative mb-6">
                <Image
                  src="/images/blog-cover.jpg"
                  alt="Starting a faith based blog"
                  width={600}
                  height={400}
                  className="w-80 h-56 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  quality={95}
                  priority
                />
              </div>

              {/* Fixed Desktop Text Size */}
              <div className="text-center w-80">
                <p className="text-sm text-muted-foreground font-serif mb-3">May 23, 2025</p>
                <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                  Starting a faith based blog: What inspired me
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
