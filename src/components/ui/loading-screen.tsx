"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/cn"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Show loading for 2.5 seconds
    const timer = setTimeout(() => {
      setIsFading(true)
      // Start fade out
      setTimeout(() => {
        setIsVisible(false)
        onComplete()
      }, 500) // Fade out duration
    }, 2500) // Total loading time

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-white dark:bg-black transition-opacity duration-500",
        isFading ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="text-center loading-fade-in">
        <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300">
          Hi, Great to have you here.
        </h2>
      </div>
    </div>
  )
}
