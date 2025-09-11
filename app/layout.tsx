import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AskLumen.ai - The Future of AI Learning & Productivity",
  description:
    "Building the World's First AI-Native Learning & Productivity Ecosystem. Join us in creating the trillion-dollar future of learning.",
  generator: "v0.app",
  keywords: "AI, Learning, Productivity, Education, Artificial Intelligence, AskLumen",
  authors: [{ name: "AskLumen.ai" }],
  openGraph: {
    title: "AskLumen.ai - The Future of AI Learning & Productivity",
    description: "Building the World's First AI-Native Learning & Productivity Ecosystem",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
