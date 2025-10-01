"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100)
      setScrollProgress(progress)
    }

    // Use requestAnimationFrame for smoother updates
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-indicator">
      <div 
        className="scroll-progress" 
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  )
}
