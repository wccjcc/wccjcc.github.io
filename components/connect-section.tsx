"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

function VelogIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7.5l5 11 5-11" />
    </svg>
  )
}

export function ConnectSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="connect" className="py-24 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div
            className={`space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Contact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button size="lg" className="gap-2" asChild>
              <a href="goqkfkrltl12@naver.com">
                <Mail className="w-4 h-4" />
                goqkfkrltl12@naver.com
              </a>
            </Button>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-8 pt-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="https://velog.io/@farishta/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="Velog"
            >
              <VelogIcon className="w-7 h-7" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Velog</span>
            </a>
            <a
              href="https://www.linkedin.com/in/woojoo-jung-3409913ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</span>
            </a>
            <a
              href="https://github.com/wccjcc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
