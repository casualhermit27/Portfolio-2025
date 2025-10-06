"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return null
  }

      return (
        <button
          onClick={toggleTheme}
          className="px-6 py-3 flex items-center justify-center rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-sm border-2 border-dotted border-gray-400/50 dark:border-gray-600/50 hover:bg-white/20 dark:hover:bg-black/20 hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-300 group"
          aria-label="Toggle theme"
        >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-gray-700 dark:text-gray-300" />
        <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-gray-700 dark:text-gray-300" />
      </div>
    </button>
  )
}
