"use client"

import { cn } from "@/lib/cn"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { gsap } from "gsap"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showAboutPopup, setShowAboutPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isIntroDone, setIsIntroDone] = useState(false)
  const [showName, setShowName] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const autoCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  
  const originalText = "Get in Touch"
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
  
  const getRandomChar = () => {
    return randomChars[Math.floor(Math.random() * randomChars.length)]
  }

  // Loading animation
  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 100) // 0.1s for name to appear
    const timer = setTimeout(() => setIsIntroDone(true), 2000) // 2s delay for text expansion
    const fullTimer = setTimeout(() => setIsLoading(false), 2500) // 2.5s for other elements
    return () => {
      clearTimeout(nameTimer)
      clearTimeout(timer)
      clearTimeout(fullTimer)
    }
  }, [])

  // GSAP animations for popup
  useEffect(() => {
    if (showAboutPopup && popupRef.current && backdropRef.current) {
      // Set initial state
      gsap.set(popupRef.current, { 
        scale: 0.8, 
        opacity: 0, 
        y: 20 
      })
      gsap.set(backdropRef.current, { 
        opacity: 0 
      })

      // Animate in
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })

      gsap.to(popupRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
      })
    }
  }, [showAboutPopup])


  const closePopup = () => {
    if (popupRef.current && backdropRef.current) {
      // Hide backdrop immediately
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.1,
        ease: "power2.out"
      })

      // Animate popup out
      gsap.to(popupRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setShowAboutPopup(false)
        }
      })
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('harshachaganti12@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleContactClick = () => {
    if (isExpanded) {
      // If already expanded, close it
      closeContactDropdown()
    } else {
      // Expand the button
      setIsExpanded(true)
      
      // Clear any existing timeout
      if (autoCloseTimeoutRef.current) {
        clearTimeout(autoCloseTimeoutRef.current)
      }
      
      // Set auto-close after 8 seconds
      autoCloseTimeoutRef.current = setTimeout(() => {
        closeContactDropdown()
      }, 8000)
    }
  }

  const closeContactDropdown = () => {
    setIsExpanded(false)
    
    // Clear timeout
    if (autoCloseTimeoutRef.current) {
      clearTimeout(autoCloseTimeoutRef.current)
      autoCloseTimeoutRef.current = null
    }
  }

  
  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * originalText.length)
    setHoveredIndex(randomIndex)
  }
  
  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  
  const renderText = () => {
    return originalText.split('').map((char, index) => (
      <span
        key={index}
        className="transition-all duration-150"
        style={{
          color: hoveredIndex === index ? '#ff6b6b' : 'inherit'
        }}
      >
        {hoveredIndex === index ? getRandomChar() : char}
      </span>
    ))
  }


  return (
     <section className={cn("min-h-screen font-sans flex items-center justify-center relative px-4 py-8 scroll-smooth", className)}>
      {/* Top Left - Code Snippet */}
      <div className={`absolute top-4 left-4 md:top-8 md:left-8 z-30 group transition-all duration-1000 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="text-xs md:text-sm text-gray-500 dark:text-stone-300 font-mono cursor-pointer">
          <div>const a=[];const b=!a;</div>
          <div>console.log(a==b); // true <span className="text-lg md:text-2xl">🤯</span></div>
        </div>

        {/* Hover Tooltip - Desktop Only */}
        <div className="hidden md:block absolute top-full left-0 mt-2 text-xs text-gray-400 dark:text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          &ldquo;Empty array equals &apos;not empty array&apos;? JS converts both to 0 — mind blown! 🤯&rdquo;
        </div>
      </div>

      {/* Top Right Controls - Always Sticky */}
      <div className={`fixed top-4 right-4 md:top-8 md:right-8 z-30 flex items-center gap-2 md:gap-3 transition-all duration-1000 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
         <button
           onClick={handleContactClick}
           className={`text-sm md:text-base font-medium text-muted-foreground dark:text-stone-300 hover:text-foreground dark:hover:text-stone-100 transition-all duration-500 ease-out border-2 border-dotted border-gray-400 hover:border-gray-600 rounded-xl md:rounded-2xl hover:bg-muted/50 ${
             isExpanded 
               ? 'px-6 py-4 md:px-8 md:py-5' 
               : 'px-3 py-2 md:px-6 md:py-3'
           }`}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
         >
           {isExpanded ? (
             <div className="flex items-center gap-4 transition-all duration-500 ease-out">
               <div className="flex items-center gap-2 transition-all duration-500 ease-out">
                 <svg className="w-4 h-4 text-gray-600 dark:text-stone-400 transition-all duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 <span className="text-sm text-gray-600 dark:text-stone-300 transition-all duration-500 ease-out">harshachaganti12@gmail.com</span>
               </div>
               <div
                 onClick={(e) => {
                   e.stopPropagation()
                   copyEmail()
                 }}
                 className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 ease-out cursor-pointer select-none ${
                   emailCopied 
                     ? 'bg-green-500 text-white' 
                     : 'bg-gray-200 dark:bg-stone-700 text-gray-700 dark:text-stone-200 hover:bg-gray-300 dark:hover:bg-stone-600'
                 }`}
               >
                 {emailCopied ? 'Copied!' : 'Copy'}
               </div>
             </div>
           ) : (
             <span className="transition-all duration-500 ease-out">
           {renderText()}
             </span>
           )}
         </button>
         <ThemeToggle />
       </div>

       {/* Bottom Left - About&more Button */}
       <div className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 z-30 transition-all duration-1000 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
         <button 
           onClick={() => setShowAboutPopup(!showAboutPopup)}
           className="text-2xl md:text-4xl font-light text-gray-500 dark:text-stone-300 hover:text-gray-700 dark:hover:text-stone-100 transition-colors duration-200 cursor-pointer"
         >
           About&more
         </button>
       </div>

          {/* Glassmorphic About Popup */}
          {showAboutPopup && (
            <>
              {/* Backdrop */}
              <div 
                ref={backdropRef}
                className="fixed inset-0 bg-black/10 z-40"
                onClick={closePopup}
              />
              
              <div className="absolute bottom-16 left-4 right-4 md:bottom-20 md:left-8 md:right-auto z-50">
              <div 
                ref={popupRef}
                className="bg-stone-50/60 dark:bg-stone-900/15 border border-stone-300/60 dark:border-stone-600/50 rounded-2xl p-4 md:p-6 w-full md:max-w-md md:w-96 relative"
              >
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <h2 className="text-xl md:text-2xl font-light text-stone-700 dark:text-stone-200 mb-4 pr-8">
                  Designing and Developing
                </h2>
                
                <div className="space-y-4">
                  {/* Skills Grid */}
                  <div className="space-y-2">
                    {/* First row - 4 items on desktop, 2 on mobile */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="border border-stone-400/60 dark:border-stone-500/50 rounded-lg p-2 text-center bg-stone-50/30 dark:bg-stone-900/8">
                        <span className="text-xs text-stone-600 dark:text-stone-300">websites</span>
                      </div>
                      <div className="border border-stone-400/60 dark:border-stone-500/50 rounded-lg p-2 text-center bg-stone-50/30 dark:bg-stone-900/8">
                        <span className="text-xs text-stone-600 dark:text-stone-300">logos</span>
                      </div>
                      <div className="border border-stone-400/60 dark:border-stone-500/50 rounded-lg p-2 text-center bg-stone-50/30 dark:bg-stone-900/8">
                        <span className="text-xs text-stone-600 dark:text-stone-300">Landings</span>
                      </div>
                      <div className="border border-stone-400/60 dark:border-stone-500/50 rounded-lg p-2 text-center bg-stone-50/30 dark:bg-stone-900/8">
                        <span className="text-xs text-stone-600 dark:text-stone-300">SaaS</span>
                      </div>
                    </div>
                    
                    {/* Second row - 2 items */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border border-stone-400/60 dark:border-stone-500/50 rounded-lg p-2 text-center bg-stone-50/30 dark:bg-stone-900/8">
                        <span className="text-xs text-stone-600 dark:text-stone-300">Automation</span>
                      </div>
                      <div className="border border-stone-400/60 dark:border-stone-500/50 rounded-lg p-2 text-center bg-stone-50/30 dark:bg-stone-900/8">
                        <span className="text-xs text-stone-600 dark:text-stone-300">AI interfaces</span>
                      </div>
                    </div>
                  </div>

                  {/* Brand Work Section */}
                  <div className="border-t border-stone-300/40 dark:border-stone-600/40 pt-4">
                    <h3 className="text-sm font-medium text-stone-600 dark:text-stone-300 mb-3">
                      Logos
                    </h3>
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                      <div className="flex-shrink-0 w-24 h-24 bg-white dark:bg-gray-800/30 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
                        <Image
                          src="/logos/Eevolution logo.png"
                          alt="Eevolution"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-shrink-0 w-24 h-24 bg-white dark:bg-gray-800/30 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
                        <Image
                          src="/logos/acme health logo.png"
                          alt="Acme Health"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-shrink-0 w-24 h-24 bg-white dark:bg-gray-800/30 border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
                        <Image
                          src="/logos/spotly logo.png"
                          alt="Spotly"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          )}

      {/* Bottom Right - View Work Button */}
      <div className={`absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 transition-all duration-1000 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <button 
          onClick={(e) => {
            // Add zap effect with null check
            if (e.currentTarget) {
              e.currentTarget.classList.add('zap-effect');
              setTimeout(() => {
                if (e.currentTarget) {
                  e.currentTarget.classList.remove('zap-effect');
                }
              }, 300);
            }
            
            const workSection = document.getElementById('work-section');
            if (workSection) {
              // Add zap-like delay for more dramatic scroll
              setTimeout(() => {
                workSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest'
                });
              }, 400);
            }
          }}
          className="border-2 border-gray-300 dark:border-stone-400 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-3 text-sm md:text-lg text-gray-500 dark:text-stone-300 min-w-[100px] md:min-w-[140px] hover:border-gray-400 dark:hover:border-stone-300 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <span>View Work</span>
          <span>↗</span>
        </button>
      </div>

      <div className="text-center max-w-4xl px-4">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-black dark:text-stone-100 leading-tight mb-8 md:mb-12 transition-all duration-700 ease-out"
        >
            <span className="inline-block">
              <span className={`transition-all duration-500 ease-out ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                Hey, I&apos;m <span className="font-medium cursive-name">Harsha</span>
                <span className="inline-block ml-2 animate-wave">👋</span>
              </span>
              {!isIntroDone ? (
                <span className="opacity-0"> — I design intelligence that thinks and experiences that feel human.</span>
              ) : (
                <span className="opacity-100 transition-opacity duration-700 ease-out">
                  {" "}
                  — I <span className="font-medium">design intelligence</span> that thinks and{" "}
                  <span className="font-medium">experiences that feel</span> human.
                </span>
              )}
            </span>
         </h1>
         
        {/* Social and Work Pills - Animate in after heading */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <Link
              href="https://x.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
             className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium hover:bg-black transition-all duration-200 hover:scale-105"
            >
             <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
             className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
             <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Link>
           <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium dark:bg-orange-900/20 dark:border-orange-800/40 dark:text-orange-200">
             <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
               <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
              Software Developer at Oracle
            </div>
         </div>
       </div>

      
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          40% {
            transform: rotate(14deg);
          }
          50% {
            transform: rotate(-4deg);
          }
          60% {
            transform: rotate(10deg);
          }
          70% {
            transform: rotate(0deg);
          }
        }
        
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        .zap-effect {
          animation: zap 0.3s ease-out;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes zap {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.2);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        .cursive-name {
          font-family: var(--font-cedarville), 'Brush Script MT', cursive;
          font-weight: 400;
          font-style: normal;
          color: #000000;
          font-size: 0.8em;
          letter-spacing: 0.5px;
        }

        .dark .cursive-name {
          color: #ffffff;
        }
      `}</style>
    </section>
  )
}
