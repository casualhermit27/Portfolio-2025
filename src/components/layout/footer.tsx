import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/constants/site"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-sans">{siteConfig.name}</h3>
            <p className="text-muted-foreground text-sm font-sans">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-sans">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-sans">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm font-sans">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
