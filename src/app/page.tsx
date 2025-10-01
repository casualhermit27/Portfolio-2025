"use client"

import { HeroSection } from "@/components/sections/hero"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { ContactButton } from "@/components/ui/contact-button"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { ProjectSidebar } from "@/components/ui/project-sidebar"
import { SocialButtons } from "@/components/ui/glassmorphic-pill"
import { useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleLoadingComplete = () => {
    setShowContent(true)
    setIsLoading(false)
  }

  const handleCloseSidebar = () => {
    setSidebarOpen(false)
  }

  const handleOpenSidebar = (projectIndex: number) => {
    // Capture scroll position at the exact moment of click
    const currentScrollY = window.scrollY
    setScrollPosition(currentScrollY)
    setSelectedProject(projectIndex)
    setSidebarOpen(true)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <main 
        className={`transition-all duration-700 ease-out ${
          showContent 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <HeroSection 
          onOpenSidebar={handleOpenSidebar}
          sidebarOpen={sidebarOpen}
        />
      </main>
      {/* Fixed elements outside of slide animation - only show after loading */}
      {showContent && <SocialButtons />}
      {showContent && <ScrollIndicator />}
      {showContent && <ContactButton />}
      
      {/* Project Sidebar - Fixed to viewport */}
      <ProjectSidebar 
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
        projectIndex={selectedProject}
        scrollPosition={scrollPosition}
      />
    </>
  )
}