"use client"

import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      title: "삼성청년SW.AI아카데미 14기",
      company: "교육 과정",
      period: "2025.07 - 현재",
      description: "Java 전공 과정에서 알고리즘 학습 및 팀 프로젝트를 진행중",
    },
    {
      title: "한국 마이크로의료로봇 연구원(KIMIRo)",
      company: "인턴",
      period: "2024.06 - 2024.07",
      description: "경로알고리즘 개발 및 딥러닝 학습",
    },
  ]

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
    <section id="experience" className="py-32 px-6 lg:px-8 bg-muted" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-12 transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Experience
        </h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 text-left transition-all duration-700 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute left-0 top-3 w-8 h-[2px] bg-foreground/30 group-hover:w-10 group-hover:bg-foreground transition-all duration-300" />

                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
