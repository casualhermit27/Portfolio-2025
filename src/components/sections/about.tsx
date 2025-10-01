"use client"

import { cn } from "@/lib/cn"

interface AboutSectionProps {
  className?: string
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section className={cn("py-20 font-sans", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white">
                About Me
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                I&apos;m a passionate developer with over 5 years of experience creating digital experiences that matter. 
                I specialize in modern web technologies and believe in the power of clean, efficient code.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">
                  3+
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Years
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-black dark:text-white mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
