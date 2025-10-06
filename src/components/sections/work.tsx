"use client"

import { cn } from "@/lib/cn"
import { useState, useEffect, useRef } from "react"

interface WorkSectionProps {
  className?: string
}

const projects = [
  {
    id: 1,
    title: "Eevolution",
    description: "Luxury fashion brand with curated collections",
    technologies: ["Next.js", "TypeScript", "E-commerce", "Fashion"],
    image: "/landings/eevolution_hero.png",
    link: "https://eevolution-wd2u.vercel.app/",
    time: "2024",
    type: "landing"
  },
  {
    id: 2,
    title: "Acme Health",
    description: "Digital health platform for connected healthcare",
    technologies: ["Vue.js", "Node.js", "Healthcare", "AI"],
    image: "/landings/acme_hero.png",
    link: "https://acme-health-kappa.vercel.app/",
    time: "2024",
    type: "landing"
  },
  {
    id: 3,
    title: "InsightX",
    description: "AI-powered analytics platform for businesses",
    technologies: ["React", "Chart.js", "Python", "TensorFlow"],
    image: "/landings/insightx_hero.png",
    link: "https://insightx-ai.vercel.app/",
    time: "2023",
    type: "landing"
  },
  {
    id: 4,
    title: "Aimee",
    description: "AI-powered meeting notes and summaries",
    technologies: ["React Native", "AI", "Meeting", "Productivity"],
    image: "/landings/doze_hero.png",
    link: "https://aimee-jo9p.vercel.app/",
    time: "2023",
    type: "landing"
  },
  {
    id: 5,
    title: "Spotly",
    description: "AI-powered SEO analysis for landing pages",
    technologies: ["React", "AI", "SEO", "Analytics"],
    image: "/landings/spotly_hero.png",
    link: "https://seo-spotly.vercel.app/",
    time: "2024",
    type: "landing"
  },
]


export function WorkSection({ className }: WorkSectionProps) {
  const [activeProject, setActiveProject] = useState(0)
  const [showPill, setShowPill] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Show pill when we reach the work section
      const isInWorkSection = scrollY >= sectionTop - windowHeight / 2
      setShowPill(isInWorkSection)

      if (isInWorkSection) {
        // Calculate which project should be active based on scroll position
        const relativeScroll = scrollY - sectionTop + windowHeight / 2
        const projectHeight = sectionHeight / projects.length
        const projectIndex = Math.min(
          Math.max(0, Math.floor(relativeScroll / projectHeight)),
          projects.length - 1
        )
        setActiveProject(projectIndex)
      }
    }

    // Call once on mount to set initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent, projectId: number) => {
    // Only show hover effects on non-touch devices
    if ('ontouchstart' in window) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
    setHoveredProject(projectId)
  }

  const handleMouseLeave = () => {
    // Only hide hover effects on non-touch devices
    if ('ontouchstart' in window) return
    setHoveredProject(null)
  }

  return (
    <section ref={sectionRef} id="work-section" className={cn("py-12 md:py-20 px-4 md:px-8 relative", className)}>
      {/* Bottom Centered Pill - Animated */}
      <div className={`fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 ${
        showPill ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <a 
          href={projects[activeProject].link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 dark:bg-white dark:border-2 dark:border-stone-300 rounded-full px-3 md:px-4 py-2 md:py-3 flex items-center shadow-lg relative cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          {/* Inner lighter pill with project name */}
          <div className="bg-gray-600 dark:bg-gray-100 dark:border dark:border-stone-200 rounded-full px-6 md:px-12 py-1.5 md:py-2.5 flex items-center">
            <span className="text-sm md:text-base font-medium text-white dark:text-black">
              {projects[activeProject].title}
            </span>
          </div>
          
          {/* Orange arrow circle */}
          <div className="h-8 w-8 md:h-10 md:w-10 bg-orange-500 rounded-full flex items-center justify-center ml-2 md:ml-3">
            <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </a>
      </div>

      {/* Centered Images Stacked Vertically */}
      <div className="flex justify-center">
        <div className="space-y-12 md:space-y-20 w-full max-w-6xl">
          {projects.map((project, index) => (
            <div key={project.id} className="flex justify-center">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[2/1] w-full bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-lg md:rounded-xl overflow-hidden relative group cursor-pointer block"
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Minimal Hover Indicator - Desktop Only */}
                {hoveredProject === project.id && (
                  <div 
                    className="hidden md:block absolute w-full h-12 bg-black/20 pointer-events-none z-10"
                    style={{
                      top: `${mousePosition.y - 24}px`,
                    }}
                  >
                    {/* Center Link Icon */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                      </svg>
                    </div>
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
