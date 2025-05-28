import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Accentic Digital Solutions - Fueling Growth with Creativity",
  description:
    "Professional digital agency specializing in web development, digital marketing, and creative solutions. Transform your business with our innovative approach.",
  keywords: "digital agency, web development, digital marketing, creative solutions, business growth",
  authors: [{ name: "Accentic Digital Solutions" }],
  openGraph: {
    title: "Accentic Digital Solutions - Fueling Growth with Creativity",
    description:
      "Professional digital agency specializing in web development, digital marketing, and creative solutions.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#FAF5F1] text-[#2E2E2E] antialiased`}>{children}</body>
    </html>
  )
}
