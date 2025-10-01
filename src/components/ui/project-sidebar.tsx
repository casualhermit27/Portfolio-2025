"use client"

import { cn } from "@/lib/cn"
import { X } from "lucide-react"
import { useEffect } from "react"
import Image from "next/image"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  projectIndex: number
  scrollPosition?: number
}

const projectData = [
  {
    title: "InsightX AI",
    description: "AI-powered data analytics platform that transforms complex datasets into actionable business insights through intelligent automation and real-time processing.",
    category: "AI Platform",
    tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
    image: "/landings/hero insightx AI.png",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "ACME Health",
    description: "Comprehensive healthcare management system designed to streamline patient care, appointment scheduling, and medical record management for modern clinics.",
    category: "Healthcare",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    image: "/logos/acme health logo.png",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Doze",
    description: "Sleep tracking and wellness app that helps users optimize their sleep patterns through data-driven insights and personalized recommendations.",
    category: "Wellness",
    tech: ["React Native", "Node.js", "MongoDB", "Charts.js"],
    image: "/landings/hero_doze.png",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Eevolution",
    description: "Sustainable living platform that connects eco-conscious consumers with environmentally friendly products and services.",
    category: "Sustainability",
    tech: ["Vue.js", "Nuxt", "Stripe", "Supabase"],
    image: "/logos/Eevolution logo.png",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Aimee",
    description: "AI-powered personal assistant that helps users manage their daily tasks, schedule, and productivity through natural language processing.",
    category: "AI Assistant",
    tech: ["React", "OpenAI", "Express", "Redis"],
    image: "/landings/hero_aimee.png",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Spotly",
    description: "Music discovery platform that uses machine learning to recommend personalized playlists and connect users with emerging artists.",
    category: "Music",
    tech: ["Next.js", "Spotify API", "Machine Learning", "Vercel"],
    image: "/logos/spotly logo.png",
    liveUrl: "#",
    codeUrl: "#"
  }
]

export function ProjectSidebar({ isOpen, onClose, projectIndex, scrollPosition = 0 }: ProjectSidebarProps) {
  const project = projectData[projectIndex] || projectData[0]

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      // Apply styles to prevent scrolling using the passed scroll position
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.body.style.left = '0'
      document.body.style.right = '0'
    } else {
      // When closing, restore scroll position
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.body.style.left = ''
      document.body.style.right = ''
      
      // Restore scroll position after a single delay to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollPosition,
          left: 0,
          behavior: 'instant'
        })
      })
    }
  }, [isOpen, scrollPosition])

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-all duration-300 ease-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        style={{ zIndex: 40 }}
      />
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed right-0 w-[32rem] bg-white dark:bg-gray-900 z-[100]",
          "transition-all duration-300 ease-out",
          "border-l border-gray-100 dark:border-gray-800",
          "shadow-2xl flex flex-col h-screen",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          top: 0,
          height: '100vh',
          zIndex: 100
        }}
      >
        {/* Header - Centered Logo */}
        <div className="flex items-center justify-center p-8 border-b border-gray-100 dark:border-gray-800 flex-shrink-0 relative">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-3xl font-medium text-gray-700 dark:text-gray-300">
              {project.title.charAt(0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-8 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content - Just the project image */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Project Image - Full width */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}