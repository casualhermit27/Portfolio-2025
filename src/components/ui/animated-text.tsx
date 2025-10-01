"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/cn"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedText({ 
  text, 
  className, 
  delay = 0, 
  duration = 0.5 
}: AnimatedTextProps) {
  const words = text.split(" ")

  return (
    <motion.div
      className={cn("overflow-hidden font-sans", className)}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration,
                delay: index * 0.1 
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
