import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Starting a faith based blog: What inspired me",
    excerpt:
      "Bismillah, I deeply believe in reflection being a major part of Islam, especially as a modern muslim woman navigating life and faith with loud thoughts.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Journal",
    date: "May 23, 2025",
    readTime: "5 min read",
    author: "Amna Awan",
    featured: true,
  },
  {
    id: 2,
    title: "Islamic Books That Nourish the Spiritual Heart",
    excerpt:
      "Honest reviews of books that have transformed my understanding of faith, womanhood, and purpose in this dunya.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Book Reviews",
    date: "May 20, 2025",
    readTime: "8 min read",
    author: "Amna Awan",
  },
  {
    id: 3,
    title: "Living Intentionally as a Muslim Woman",
    excerpt:
      "Thoughts on slowing down, making conscious choices, and finding Allah in the everyday moments of our busy lives.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Intentional Living",
    date: "May 18, 2025",
    readTime: "6 min read",
    author: "Amna Awan",
  },
  {
    id: 4,
    title: "Reflections on Muslim Womanhood and Healing",
    excerpt:
      "Navigating identity, faith, and healing as a Muslim woman in today's world - finding strength in our Deen.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Womanhood",
    date: "May 15, 2025",
    readTime: "7 min read",
    author: "Amna Awan",
  },
  {
    id: 5,
    title: "Understanding Deen: The Correct Version",
    excerpt: "Seeking authentic Islamic knowledge and separating cultural practices from true Islamic teachings.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Faith & Learning",
    date: "May 12, 2025",
    readTime: "9 min read",
    author: "Amna Awan",
  },
  {
    id: 6,
    title: "Creating a Faith-Based Home Library",
    excerpt:
      "Building a collection of Islamic books that inspire, educate, and bring us closer to Allah Subhana Ta'ala.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Books & Home",
    date: "May 10, 2025",
    readTime: "5 min read",
    author: "Amna Awan",
  },
]

export function BlogPosts() {
  return (
    <section id="reflections" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">All Reflections</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif italic">
            A collection of thoughts on faith, books, and intentional living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-primary/20 hover:border-primary/40 ${
                post.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground" variant="secondary">
                  {post.category}
                </Badge>
                {post.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Featured</Badge>
                )}
              </div>
              <CardHeader>
                <h3 className="text-xl font-serif font-semibold line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3 font-serif">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="font-serif">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
