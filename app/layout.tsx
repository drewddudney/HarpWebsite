import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import "./globals.css"
import { Layout } from "@/components/layout"
import { ThemeProvider } from "@/components/theme-provider"

// Update font loading with proper caching and fallback strategy
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["serif"], // Add fallback
  preload: true, // Ensure preloading
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700", "900"],
  fallback: ["sans-serif"], // Add fallback
  preload: true, // Ensure preloading
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gracefulharpist.com"),
  title: {
    default: "Graceful Harpist | Professional Harp Music for Weddings and Events in Austin",
    template: "%s | Graceful Harpist - Austin Wedding Harpist",
  },
  description:
    "Professional harpist in Austin, Texas providing elegant harp music for weddings, corporate events, and special occasions. Book live harp music for your event.",
  keywords: [
    "harpist",
    "wedding music",
    "Austin harpist",
    "live music",
    "event music",
    "harp player",
    "wedding ceremony music",
    "Texas wedding musician",
  ],
  authors: [{ name: "Grace Dudney" }],
  creator: "Grace Dudney",
  publisher: "Graceful Harpist",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gracefulharpist.com",
    siteName: "Graceful Harpist",
    title: "Graceful Harpist | Professional Harp Music for Weddings and Events in Austin",
    description:
      "Professional harpist in Austin, Texas providing elegant harp music for weddings, corporate events, and special occasions.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8212.JPG-5nKD2cZUFf1SFkelH8Hr4H8q96o7CR.jpeg",
        width: 1200,
        height: 630,
        alt: "Graceful Harpist - Professional Harp Music in Austin, Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graceful Harpist | Professional Harp Music for Weddings and Events",
    description:
      "Professional harpist in Austin, Texas providing elegant harp music for weddings, corporate events, and special occasions.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8212.JPG-5nKD2cZUFf1SFkelH8Hr4H8q96o7CR.jpeg",
    ],
  },
  alternates: {
    canonical: "https://gracefulharpist.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'