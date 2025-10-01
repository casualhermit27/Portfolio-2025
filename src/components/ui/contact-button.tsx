"use client"

import { cn } from "@/lib/cn"
import { useState } from "react"

interface ContactButtonProps {
  className?: string
}

export function ContactButton({ className }: ContactButtonProps) {
  const [jumbledText, setJumbledText] = useState("Get in touch")
  const [hasJumbled, setHasJumbled] = useState(false)
  
  const originalText = "Get in touch"
  const jumbleChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?~`"
  
  const jumbleOnce = () => {
    if (hasJumbled) return // Only jumble once
    
    const randomIndex = Math.floor(Math.random() * originalText.length)
    const randomChar = jumbleChars[Math.floor(Math.random() * jumbleChars.length)]
    
    const newText = originalText.split('').map((char, index) => 
      index === randomIndex ? randomChar : char
    ).join('')
    
    setJumbledText(newText)
    setHasJumbled(true)
  }
  
  const resetText = () => {
    setJumbledText(originalText)
    setHasJumbled(false)
  }

  const handleContact = () => {
    // You can add your contact logic here
    // For now, we'll just log to console
    console.log("Get in touch clicked")
    // You could also open an email client or contact modal
    window.location.href = "mailto:your-email@example.com"
  }

  return (
    <button
      onClick={handleContact}
      onMouseEnter={jumbleOnce}
      onMouseLeave={resetText}
      className={cn(
        "contact-button",
        className
      )}
    >
      {jumbledText}
    </button>
  )
}
