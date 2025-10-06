"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-1 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border border-border rounded-full mx-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link href="/" className="text-xs font-bold gradient-text font-sans">
            Portfolio
          </Link>

          {/* Center Buttons */}
          <div className="flex items-center gap-1">
            <Link
              href="#landings"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans px-2 py-1 rounded-full hover:bg-muted/50"
            >
              Landings
            </Link>
            <Link
              href="#logos"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans px-2 py-1 rounded-full hover:bg-muted/50"
            >
              Logos
            </Link>
          </div>

          {/* Get in Touch Button */}
          <Link
            href="#contact"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans px-2 py-1 rounded-md hover:bg-muted/50"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
