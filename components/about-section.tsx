"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const interests = ["시스템 아키텍처", "DevOps", "AI Agent", "문서화와 일정관리"]

  const education = [
    {
      title: "전남대학교 소프트웨어공학과",
      period: "2022 - 2025.08",
      status: "졸업 (학점 4.2/4.5) ",
    },
    {
      title: "전남대학교 화학과",
      period: "2017 - 2021.08",
      status: "중퇴",
    },
    {
      title: "장덕고등학교",
      period: "2014 - 2016",
      status: "졸업",
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
    <section id="about" className="py-32 px-6 lg:px-8 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-12 transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          About
        </h2>

        <div className="grid md:grid-cols-[minmax(0,280px)_1fr] gap-8 items-stretch">
          <div
            className={`transition-all duration-700 delay-100 h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="rounded-2xl border border-border/70 bg-muted/80 p-4 shadow-sm w-full h-full flex flex-col">
              <div className="flex-1 w-full overflow-hidden rounded-xl bg-muted/40">
                <img
                  src="/woojoo_profile.jpg"
                  alt="정우주 프로필 사진"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">정우주</p>
                <p className="text-sm text-muted-foreground">Backend Developer</p>
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-200 text-center md:text-left h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="rounded-2xl border border-border/70 bg-muted/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl uppercase tracking-wider text-foreground font-semibold mb-4">Interests</h3>
              <ul className="space-y-3 text-center md:text-left">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="group flex items-center justify-center md:justify-start gap-3 text-base font-medium text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-foreground/70 transition-colors duration-200 group-hover:bg-foreground" />
                    <span className="relative">
                      {interest}
                      <span className="absolute left-0 -bottom-1 h-px w-0 bg-foreground/50 transition-all duration-200 group-hover:w-full" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/70 bg-muted/80 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl uppercase tracking-wider text-foreground font-semibold mb-4">Education</h3>
              <div className="relative space-y-5">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-border/70" />
                {education.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative flex items-start justify-between gap-4 pl-8"
                  >
                    <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-border/70 bg-background transition-colors duration-200 group-hover:bg-foreground group-hover:border-foreground" />
                    <div>
                      <p className="text-base font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.status}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                    {index < education.length - 1 && (
                      <div className="absolute left-8 right-0 -bottom-2 h-px bg-foreground/20 dark:bg-foreground/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
