"use client"

import { cn } from "@/lib/cn"
import { Card } from "@/components/ui/card"

interface ShowcaseSectionProps {
  className?: string
}

const showcaseItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online store",
    category: "Web",
    size: "large" // 2x2
  },
  {
    id: 2,
    title: "Mobile App",
    description: "Cross-platform app",
    category: "Mobile",
    size: "medium" // 1x2
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Analytics platform",
    category: "Design",
    size: "small" // 1x1
  },
  {
    id: 4,
    title: "Landing Page",
    description: "Marketing page",
    category: "Marketing",
    size: "medium" // 1x2
  },
  {
    id: 5,
    title: "API Integration",
    description: "Service integration",
    category: "Backend",
    size: "small" // 1x1
  },
  {
    id: 6,
    title: "Portfolio Site",
    description: "Creative website",
    category: "Design",
    size: "large" // 2x1
  }
]

export function ShowcaseSection({ className }: ShowcaseSectionProps) {
  return (
    <section className={cn("py-32 font-sans", className)}>
      <div className="container-consistent">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-black dark:text-white mb-8">
            Work
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {showcaseItems.map((item) => (
            <Card
              key={item.id}
              className={cn(
                "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-none p-12 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer group min-h-[300px] flex flex-col justify-center",
                item.size === "large" && "md:col-span-2 min-h-[400px]",
                item.size === "medium" && "md:col-span-1 min-h-[350px]",
                item.size === "small" && "md:col-span-1 min-h-[300px]"
              )}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}