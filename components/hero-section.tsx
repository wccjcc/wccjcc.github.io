"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MapPin, Github, Linkedin } from "lucide-react"

const phrases = [
  "안녕하세요,",
  "빠른 습득과 적용에 집중하는 개발자 정우주입니다.",
]

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

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhrase]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentPhrase((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhrase])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToConnect = () => {
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8 animate-fade-in">
          Backend Developer
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-delay-1">
          <span className="text-balance">{displayText}</span>
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-balance animate-fade-in-delay-2">
          단순 기능 구현을 넘어 시스템 전체의 유기적인 연결과 <br/> 효율적인 구조를 설계하는 아키텍트를 지향합니다.
        </p>

        <div className="flex flex-col items-center gap-3 mb-12 animate-fade-in-delay-3">
          <p className="text-base md:text-lg font-medium">JUNG WOOJOO</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Gwangju, KR</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>구직중</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-4">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2"
          >
            Recent Projects
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToConnect}
            className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            Contact
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <a
            href="https://velog.io/@farishta/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Velog"
          >
            <VelogIcon className="w-7 h-7" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Velog</span>
          </a>
          <a
            href="https://www.linkedin.com/in/woojoo-jung-3409913ab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</span>
          </a>
          <a
            href="https://github.com/wccjcc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
