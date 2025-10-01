"use client"

import { cn } from "@/lib/cn"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface HeroSectionProps {
  className?: string
  onOpenSidebar: (projectIndex: number) => void
  sidebarOpen: boolean
}

export function HeroSection({ className, onOpenSidebar, sidebarOpen }: HeroSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredText, setHoveredText] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projectNames = [
    "InsightX AI",
    "ACME Health", 
    "Doze",
    "Eevolution",
    "Aimee",
    "Spotly"
  ]

  const projectImages = [
    "/landings/hero insightx AI.png", // Card 1 - Landing
    "/logos/acme health logo.png",    // Card 2 - Logo (square)
    "/landings/hero_doze.png",        // Card 3 - Landing
    "/logos/Eevolution logo.png",     // Card 4 - Logo (square)
    "/landings/hero_aimee.png",       // Card 5 - Landing
    "/logos/spotly logo.png"          // Card 6 - Logo (square)
  ]

  const handleCardClick = (cardIndex: number) => {
    onOpenSidebar(cardIndex - 1) // Convert to 0-based index
  }

  const handleCardHover = (cardIndex: number) => {
    setHoveredCard(cardIndex)
    setHoveredText(null) // Clear text hover when card is hovered
    setHoveredProject(null) // Clear project hover when card is hovered
  }

  const handleTextHover = (cardIndex: number) => {
    setHoveredText(cardIndex)
    setHoveredCard(cardIndex) // Keep card hovered when text is hovered
  }

  const handleProjectHover = (cardIndex: number) => {
    setHoveredProject(cardIndex)
    setHoveredCard(cardIndex) // Keep card hovered when project is hovered
  }

  const handleMouseLeave = () => {
    setHoveredCard(null)
    setHoveredText(null)
    setHoveredProject(null)
  }

  return (
    <section className={cn("min-h-screen font-sans", className)}>
      {/* Main content with subtle push effect */}
      <div 
        className={cn(
          "transition-all duration-500 ease-out",
          sidebarOpen ? "transform -translate-x-4 scale-[0.98] opacity-90" : "transform translate-x-0 scale-100 opacity-100"
        )}
      >
        {/* Centered Header */}
        <div className="flex items-center justify-center min-h-screen -mt-16">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-black dark:text-white leading-tight w-full">
                  Hey, I&apos;m <span className="harsha-pill">Harsha</span> — an <em className="italic-glow">Engineer + Designer</em> focused on building sharp frontends
                  <br className="mb-2" />
                  and <em className="italic-glow">AI-powered tools</em> with speed, <em className="italic-glow">UX clarity</em>, and pixel-perfect execution.
                </h1>
          </div>
        </div>
      </div>

      {/* Bento Cards - Positioned below hero */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 -mt-32">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
          onMouseLeave={handleMouseLeave}
        >
          {/* First Row - 1 Long Card on Left */}
              <div className="md:col-span-2 lg:col-span-2 relative group">
                <div 
                  className={cn(
                    "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg h-[32rem] md:h-[36rem] lg:h-[40rem] transition-all duration-300 cursor-pointer overflow-hidden relative",
                    hoveredCard === null || hoveredCard === 1 ? "opacity-100 border-gray-300 dark:border-gray-600" : "opacity-30 blur-sm"
                  )}
                  onMouseEnter={() => handleCardHover(1)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCardClick(1)}
                >
                  {/* Landing Page Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={projectImages[0]}
                      alt={projectNames[0]}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Mobile Click Me Button - Top Left */}
                  <button 
                    className="click-me-button click-me-1 click-me-top-left md:hidden"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(1)
                    }}
                  >
                    Click me
                  </button>
                </div>
              </div>
          <div className="md:col-span-1 lg:col-span-1 relative group">
            {/* Arrow sentence for card 1 - appears on right side - Desktop only */}
            {(hoveredCard === 1 || hoveredText === 1 || hoveredProject === 1) && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in hidden md:flex"
                onMouseEnter={() => handleTextHover(1)}
                onMouseLeave={() => setHoveredText(null)}
              >
                <div className="flex flex-col items-start">
                <div className="text-black dark:text-white cursor-pointer hover:scale-102 transition-all duration-300" onClick={() => handleCardClick(1)}>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">View Project Details</span>
                </div>
                <div 
                  className="mt-2 text-gray-400 dark:text-gray-500 text-base md:text-lg lg:text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                  onMouseEnter={() => handleProjectHover(1)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleCardClick(1)}
                >
                  {hoveredProject === 1 ? (
                    <div className="flex items-center space-x-2">
                      <span>{projectNames[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <span>{projectNames[0]}</span>
                  )}
                </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Second Row - 1 Card in Center */}
          <div className="md:col-span-1 lg:col-span-1"></div>
              <div className="md:col-span-1 lg:col-span-1 relative group">
                <div 
                  className={cn(
                    "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg aspect-square transition-all duration-300 cursor-pointer overflow-hidden relative",
                    hoveredCard === null || hoveredCard === 2 ? "opacity-100 border-gray-300 dark:border-gray-600" : "opacity-30 blur-sm"
                  )}
                  onMouseEnter={() => handleCardHover(2)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCardClick(2)}
                >
                  {/* Logo Image - Fills Square Container */}
                  <div className="relative w-full h-full">
                    <Image
                      src={projectImages[1]}
                      alt={projectNames[1]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Mobile Click Me Button - Bottom Right */}
                  <button 
                    className="click-me-button click-me-2 click-me-bottom-right md:hidden"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(2)
                    }}
                  >
                    Click me
                  </button>
                </div>
              </div>
          <div className="md:col-span-1 lg:col-span-1 relative group">
            {/* Arrow sentence for card 2 - appears on right side - Desktop only */}
            {(hoveredCard === 2 || hoveredText === 2 || hoveredProject === 2) && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in hidden md:flex"
                onMouseEnter={() => handleTextHover(2)}
                onMouseLeave={() => setHoveredText(null)}
              >
                <div className="flex flex-col items-start">
                  <div className="text-black dark:text-white cursor-pointer hover:scale-102 transition-all duration-300" onClick={() => handleCardClick(2)}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">View Project Details</span>
                  </div>
                  <div 
                    className="mt-2 text-gray-400 dark:text-gray-500 text-base md:text-lg lg:text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                    onMouseEnter={() => handleProjectHover(2)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleCardClick(2)}
                  >
                    {hoveredProject === 2 ? (
                      <div className="flex items-center space-x-2">
                        <span>{projectNames[1]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <span>{projectNames[1]}</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Third Row - 1 Long Card on Right */}
          <div className="md:col-span-1 lg:col-span-1 relative group">
            {/* Arrow sentence for card 3 - appears on left side - Desktop only */}
            {(hoveredCard === 3 || hoveredText === 3 || hoveredProject === 3) && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in hidden md:flex"
                onMouseEnter={() => handleTextHover(3)}
                onMouseLeave={() => setHoveredText(null)}
              >
                <div className="flex flex-col items-start">
                  <div className="text-black dark:text-white cursor-pointer hover:scale-102 transition-all duration-300" onClick={() => handleCardClick(3)}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">View Project Details</span>
                  </div>
                  <div 
                    className="mt-2 text-gray-400 dark:text-gray-500 text-base md:text-lg lg:text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                    onMouseEnter={() => handleProjectHover(3)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleCardClick(3)}
                  >
                    {hoveredProject === 3 ? (
                      <div className="flex items-center space-x-2">
                        <span>{projectNames[2]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <span>{projectNames[2]}</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
              <div className="md:col-span-2 lg:col-span-2 relative group">
                <div 
                  className={cn(
                    "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg h-96 md:h-[28rem] lg:h-[32rem] transition-all duration-300 cursor-pointer overflow-hidden relative",
                    hoveredCard === null || hoveredCard === 3 ? "opacity-100 border-gray-300 dark:border-gray-600" : "opacity-30 blur-sm"
                  )}
                  onMouseEnter={() => handleCardHover(3)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCardClick(3)}
                >
                  {/* Landing Page Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={projectImages[2]}
                      alt={projectNames[2]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Mobile Click Me Button - Top Left */}
                  <button 
                    className="click-me-button click-me-3 click-me-top-left md:hidden"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(3)
                    }}
                  >
                    Click me
                  </button>
                </div>
              </div>
          
          {/* Fourth Row - Eevolution on Complete Left */}
          <div className="md:col-span-1 lg:col-span-1 relative group">
            <div 
              className={cn(
                "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg aspect-square transition-all duration-300 cursor-pointer overflow-hidden relative",
                hoveredCard === null || hoveredCard === 4 ? "opacity-100 border-gray-300 dark:border-gray-600" : "opacity-30 blur-sm"
              )}
              onMouseEnter={() => handleCardHover(4)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(4)}
            >
              {/* Logo Image - Fills Square Container */}
              <div className="relative w-full h-full">
                <Image
                  src={projectImages[3]}
                  alt={projectNames[3]}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Mobile Click Me Button - Bottom Right */}
              <button 
                className="click-me-button click-me-4 click-me-bottom-right md:hidden"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCardClick(4)
                }}
              >
                Click me
              </button>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-1 relative group">
            {/* Arrow sentence for card 4 - appears on right side - Desktop only */}
            {(hoveredCard === 4 || hoveredText === 4 || hoveredProject === 4) && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in hidden md:flex"
                onMouseEnter={() => handleTextHover(4)}
                onMouseLeave={() => setHoveredText(null)}
              >
                <div className="flex flex-col items-start">
                  <div className="text-black dark:text-white cursor-pointer hover:scale-102 transition-all duration-300" onClick={() => handleCardClick(4)}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">View Project Details</span>
                  </div>
                  <div 
                    className="mt-2 text-gray-400 dark:text-gray-500 text-base md:text-lg lg:text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                    onMouseEnter={() => handleProjectHover(4)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleCardClick(4)}
                  >
                    {hoveredProject === 4 ? (
                      <div className="flex items-center space-x-2">
                        <span>{projectNames[3]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <span>{projectNames[3]}</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="md:col-span-1 lg:col-span-1"></div>
          
          {/* Fifth Row - Aimee on Complete Right */}
          <div className="md:col-span-1 lg:col-span-1 relative group">
            {/* Arrow sentence for card 5 - appears on left side - Desktop only */}
            {(hoveredCard === 5 || hoveredText === 5 || hoveredProject === 5) && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in hidden md:flex"
                onMouseEnter={() => handleTextHover(5)}
                onMouseLeave={() => setHoveredText(null)}
              >
                <div className="flex flex-col items-start">
                  <div className="text-black dark:text-white cursor-pointer hover:scale-102 transition-all duration-300" onClick={() => handleCardClick(5)}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">View Project Details</span>
                  </div>
                  <div 
                    className="mt-2 text-gray-400 dark:text-gray-500 text-base md:text-lg lg:text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                    onMouseEnter={() => handleProjectHover(5)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleCardClick(5)}
                  >
                    {hoveredProject === 5 ? (
                      <div className="flex items-center space-x-2">
                        <span>{projectNames[4]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <span>{projectNames[4]}</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="md:col-span-2 lg:col-span-2 relative group">
            <div 
              className={cn(
                "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg h-[32rem] md:h-[36rem] lg:h-[40rem] transition-all duration-300 cursor-pointer overflow-hidden relative",
                hoveredCard === null || hoveredCard === 5 ? "opacity-100 border-gray-300 dark:border-gray-600" : "opacity-30 blur-sm"
              )}
              onMouseEnter={() => handleCardHover(5)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(5)}
            >
              {/* Landing Page Image */}
              <div className="relative w-full h-full">
                <Image
                  src={projectImages[4]}
                  alt={projectNames[4]}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Mobile Click Me Button - Top Left */}
              <button 
                className="click-me-button click-me-5 click-me-top-left md:hidden"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCardClick(5)
                }}
              >
                Click me
              </button>
            </div>
          </div>
          
          {/* Sixth Row - Spotly on Complete Right */}
          <div className="md:col-span-1 lg:col-span-1 relative group">
            {/* Arrow sentence for card 6 - appears on left side - Desktop only */}
            {(hoveredCard === 6 || hoveredText === 6 || hoveredProject === 6) && (
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in hidden md:flex"
                onMouseEnter={() => handleTextHover(6)}
                onMouseLeave={() => setHoveredText(null)}
              >
                <div className="flex flex-col items-start">
                  <div className="text-black dark:text-white cursor-pointer hover:scale-102 transition-all duration-300" onClick={() => handleCardClick(6)}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">View Project Details</span>
                  </div>
                  <div 
                    className="mt-2 text-gray-400 dark:text-gray-500 text-base md:text-lg lg:text-xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                    onMouseEnter={() => handleProjectHover(6)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleCardClick(6)}
                  >
                    {hoveredProject === 6 ? (
                      <div className="flex items-center space-x-2">
                        <span>{projectNames[5]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <span>{projectNames[5]}</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="md:col-span-1 lg:col-span-1"></div>
          <div className="md:col-span-1 lg:col-span-1 relative group">
            <div 
              className={cn(
                "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg aspect-square transition-all duration-300 cursor-pointer overflow-hidden relative",
                hoveredCard === null || hoveredCard === 6 ? "opacity-100 border-gray-300 dark:border-gray-600" : "opacity-30 blur-sm"
              )}
              onMouseEnter={() => handleCardHover(6)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(6)}
            >
              {/* Logo Image - Fills Square Container */}
              <div className="relative w-full h-full">
                <Image
                  src={projectImages[5]}
                  alt={projectNames[5]}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Mobile Click Me Button - Top Left */}
              <button 
                className="click-me-button click-me-6 click-me-top-left md:hidden"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCardClick(6)
                }}
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  )
}
