"use client"

import { cn } from "@/lib/cn"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

interface ContactSectionProps {
  className?: string
}

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <section className={cn("py-32 font-sans", className)}>
      <div className="container-consistent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Side - Contact Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-light text-black dark:text-white">
                Contact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Let&apos;s work together.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <Mail className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-xl text-gray-700 dark:text-gray-300 font-light">
                  hello@example.com
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <Phone className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-xl text-gray-700 dark:text-gray-300 font-light">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <MapPin className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <span className="text-xl text-gray-700 dark:text-gray-300 font-light">
                  Available Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-8">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  placeholder="First Name"
                  className="rounded-none border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white font-light text-lg py-4"
                />
                <Input
                  placeholder="Last Name"
                  className="rounded-none border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white font-light text-lg py-4"
                />
              </div>
              <Input
                placeholder="Email"
                type="email"
                className="rounded-none border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white font-light text-lg py-4"
              />
              <Input
                placeholder="Subject"
                className="rounded-none border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white font-light text-lg py-4"
              />
              <Textarea
                placeholder="Message"
                rows={6}
                className="rounded-none border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white font-light text-lg resize-none py-4"
              />
              <Button 
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-none py-4 font-light text-lg transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
