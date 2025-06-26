import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User } from "lucide-react"
import Image from "next/image"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Header Image - Natural sizing */}
              <div className="mb-12">
                <Image
                  src="/images/blog-cover.jpg"
                  alt="Starting a faith based blog header"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm shadow-sm"
                />
              </div>

              {/* Post Header */}
              <header className="text-center mb-12">
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-6 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-serif">May 23, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-serif">Amna Awan</span>
                  </div>
                </div>

                <h1 className="text-4xl font-serif font-light text-foreground mb-4 leading-tight">
                  Starting a faith based blog: What inspired me
                </h1>
                <div className="w-16 h-px bg-primary mx-auto"></div>
              </header>

              {/* Post Content - Natural image sizing */}
              <div className="prose prose-lg max-w-none font-serif text-gray-700 leading-relaxed space-y-8">
                <p className="text-primary font-semibold text-xl">Bismillah,</p>

                <p className="text-gray-700">
                  I deeply believe in reflection being a major part of Islam, especially as a modern muslim woman
                  navigating life and faith with loud thoughts.
                </p>

                <p className="text-gray-700">
                  The surge in food blogs, business blogs, fashion blogs etcetra is very evident but faith based blogs?
                  that make you feel cozy, warm, and at home? Few and far between.
                </p>

                <p className="text-foreground font-medium text-lg">This laid the foundation for Amna Reflects.</p>

                {/* Natural sized content images */}
                <div className="my-12 flex justify-center">
                  <Image
                    src="/images/blog-image-1.jpeg"
                    alt="Blog inspiration and reflection"
                    width={400}
                    height={280}
                    className="rounded-sm shadow-sm max-w-md w-full h-auto"
                  />
                </div>

                <h2 className="text-2xl font-serif font-light text-foreground">
                  What inspired me to make an Islamic blog
                </h2>

                <p className="text-gray-700">
                  For years, I have read on womanhood, spirituality, and purpose. Forming opinions based on my learning.
                </p>

                <p className="text-gray-700">
                  But I realized that my words could comfort someone else too, so with faith, nervous hope and a lot of
                  contemplation, I have opened this space; My safe haven.
                </p>

                <p className="text-foreground font-medium">This isn't just a blog. It's a place for</p>

                <ul className="space-y-3 list-disc list-inside">
                  <li>Muslims who want to live intentionally</li>
                  <li>Book lovers with a faith-based lens</li>
                  <li>People simply looking to understand deen- the correct version of it.</li>
                </ul>

                <p className="text-gray-700">
                  I am a knowledge-loving woman, seeking to reach my full potential doing an act solely for the sake of
                  Allah Subhana Ta'ala. This is my step one.
                </p>

                <div className="my-12 flex justify-center">
                  <Image
                    src="/images/blog-image-2.jpeg"
                    alt="Islamic books and gentle living"
                    width={400}
                    height={280}
                    className="rounded-sm shadow-sm max-w-md w-full h-auto"
                  />
                </div>

                <h2 className="text-2xl font-serif font-light text-foreground">What you'll find here:</h2>

                <p className="text-gray-700">on Amna Reflects, you'll find:</p>

                <ul className="space-y-3 list-disc list-inside">
                  <li>Honest reviews of Islamic books that nourish the spiritual heart.</li>
                  <li>Thoughts on intentionality in a fast-paced world</li>
                  <li>Reflections on Muslim womanhood and healing</li>
                </ul>

                <h2 className="text-2xl font-serif font-light text-foreground">Who this blog is for</h2>

                <p className="text-gray-700">
                  Have you ever wondered why the number of Islamic blogs is limited, whilst the other sectors of this
                  industry are saturated?
                </p>

                <p className="text-primary font-semibold">This is for you</p>

                <p className="text-gray-700">
                  If you are someone who reflects deeply and seeks meaning in life, books and Ibadah
                </p>

                <p className="text-primary font-semibold">This is definitely for you.</p>

                <h2 className="text-2xl font-serif font-light text-foreground">What I hope for</h2>

                <p className="text-gray-700">
                  I pray this little digital corner feels like sincerity, warmth, Rahmah, and a place worth returning
                  to.
                </p>

                <p className="text-gray-700">
                  May it be a space that inspires faith, family, and softness, Ameen. In Sha Allah, it brings you as
                  much comfort as it does me.
                </p>

                <p className="text-xl font-semibold text-primary">Here's to new beginnings.</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
