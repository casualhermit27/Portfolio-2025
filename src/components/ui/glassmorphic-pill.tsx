"use client"

import { cn } from "@/lib/cn"

interface SocialButtonsProps {
  className?: string
}

export function SocialButtons({ className }: SocialButtonsProps) {
  const handleXClick = () => {
    window.open('https://x.com/casualhermit', '_blank')
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/harsha-chaganti-079a08142/', '_blank')
  }


  return (
    <div className={cn(
      "fixed top-6 left-6 z-50",
      className
    )}>
      <div className="flex flex-col space-y-6">
        {/* X (Twitter) Button */}
        <button
          onClick={handleXClick}
          className="group text-black hover:text-gray-600 transition-colors duration-200 text-left"
        >
          <span className="text-lg font-medium underline decoration-2 underline-offset-4 group-hover:decoration-4 transition-all duration-200">X</span>
        </button>

        {/* LinkedIn Button */}
        <button
          onClick={handleLinkedInClick}
          className="group text-[#0077B5] hover:text-[#005885] transition-colors duration-200 text-left"
        >
          <span className="text-lg font-medium underline decoration-2 underline-offset-4 group-hover:decoration-4 transition-all duration-200">LinkedIn</span>
        </button>

      </div>
    </div>
  )
}