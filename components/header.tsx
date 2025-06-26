"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="w-full border-b border-primary/10 bg-background/80 backdrop-blur-sm">
      <div className="w-full mx-auto px-4 md:px-6 py-3 md:py-6">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="group">
            <div className="text-left">
              <h1 className="text-base md:text-2xl font-serif font-light text-foreground tracking-wide">
                Amna Reflects
              </h1>
              <p className="text-xs font-serif text-muted-foreground mt-1 tracking-widest uppercase">
                Books • Faith • Gentle Living
              </p>
            </div>
          </Link>

          <nav className="flex items-center space-x-3 md:space-x-12 text-xs md:text-sm font-serif">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200">
                <span>Reflections</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-background border-primary/10 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/" className="font-serif py-3">
                    All Reflections
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/blog/starting-faith-based-blog" className="font-serif py-3">
                    Starting a faith based blog: What inspired me
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link
                  href="/coming-soon"
                  className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <span>Reviews</span>
                  <ChevronDown className="h-3 w-3" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-primary/10 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/coming-soon" className="font-serif py-3">
                    Coming Soon
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
