import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jay Gopal - Founder • Healthcare AI • Venture Capital",
  description:
    "CEO, Kyron Medical. Building voice AI for revenue recovery in healthcare. Partner at Ainsley Advisory Group.",
  generator: "v0.app",
  keywords: [
    "Jay Gopal",
    "Healthcare AI",
    "Kyron Medical",
    "Ainsley Advisory",
    "Voice AI",
    "Revenue Recovery",
    "Medical Technology",
  ],
  authors: [{ name: "Jay Gopal" }],
  openGraph: {
    title: "Jay Gopal - Healthcare AI Founder",
    description: "CEO, Kyron Medical. Building voice AI for revenue recovery in healthcare.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Gopal - Healthcare AI Founder",
    description: "CEO, Kyron Medical. Building voice AI for revenue recovery in healthcare.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
