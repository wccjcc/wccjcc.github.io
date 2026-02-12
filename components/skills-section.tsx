"use client"

import { useEffect, useRef, useState } from "react"

const skillGroups = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "JPA", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend",
    items: ["TypeScript", "React"],
  },
  {
    title: "Infra",
    items: ["Docker", "AWS", "Nginx","CI/CD","DockerCompose","Jenkins"],
  },
  {
    title: "Tool",
    items: ["Git", "Jira"],
  },
]

const certificates = [
  {
    title: "SQLD",
    issuer: "한국데이터산업진흥원",
    period: "2025.09",
  },
  {
    title: "정보처리기사",
    issuer: "한국산업인력공단",
    period: "2025.06",
  },
  {
    title: "TOPCIT (544)",
    issuer: "TOPCIT",
    period: "2024.05",
  },
  {
    title: "Toeic Speaking (IH)",
    issuer: "ETS",
    period: "2025.10",
  },
]

export function SkillsSection() {
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
    <section id="skills" className="py-32 px-6 lg:px-8 bg-transparent" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-12 transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Skills & Certificates
        </h2>

        <div className="grid gap-10">
          <div
            className={`rounded-2xl border border-border/70 p-8 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xl font-semibold mb-6">Skills</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border/80 bg-muted p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <h4 className="text-base uppercase tracking-wider text-foreground/80 mb-4">{group.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full border border-border/60 text-sm font-semibold text-foreground bg-background shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-2xl border border-border/70 p-8 bg-muted transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xl font-semibold mb-6">Certificates</h3>
            <div className="space-y-5">
              {certificates.map((cert, index) => (
                <div key={`${cert.title}-${index}`} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{cert.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
