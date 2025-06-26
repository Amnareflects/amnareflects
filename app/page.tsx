import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BlogPreview } from "@/components/blog-preview"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BlogPreview />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
