"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, ArrowUp } from "lucide-react"
import { useTheme } from "./theme-provider"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 bg-transparent transition-transform duration-300 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "connect", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-6 z-50 p-2 hover:bg-muted/50 rounded-lg transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </button>

      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 z-50 rounded-full border border-border/70 bg-background/80 p-3 text-foreground shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-background"
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  )
}
