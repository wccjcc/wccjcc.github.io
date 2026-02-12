import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio - Designer & Developer",
  description: "A minimalist portfolio showcasing design and development work",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="star-field" aria-hidden="true" />
        <ThemeProvider>
          <div className="page-content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
