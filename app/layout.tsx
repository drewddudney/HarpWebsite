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
  fallback: ["serif"],
  preload: true,
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700", "900"],
  fallback: ["sans-serif"],
  preload: true,
})

// Define the header image URL for consistent use across metadata
const headerImageUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8212.JPG-5nKD2cZUFf1SFkelH8Hr4H8q96o7CR.jpeg"

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

  // Enhanced OpenGraph metadata for better social sharing
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
        url: headerImageUrl,
        width: 1200,
        height: 630,
        alt: "Graceful Harpist - Professional Harp Music in Austin, Texas",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Graceful Harpist | Professional Harp Music for Weddings and Events",
    description:
      "Professional harpist in Austin, Texas providing elegant harp music for weddings, corporate events, and special occasions.",
    images: [headerImageUrl],
    creator: "@gracefulharpist",
  },

  // Canonical URL
  alternates: {
    canonical: "https://gracefulharpist.com",
  },

  // Icons for favicon and various platforms
  icons: {
    icon: [
      { url: headerImageUrl, sizes: "32x32" },
      { url: headerImageUrl, sizes: "16x16" },
    ],
    shortcut: headerImageUrl,
    apple: [{ url: headerImageUrl, sizes: "180x180", type: "image/jpeg" }],
    other: [
      {
        rel: "apple-touch-icon",
        url: headerImageUrl,
      },
    ],
  },

  // Apple-specific metadata
  appleWebApp: {
    title: "Graceful Harpist",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  // Application name for browsers
  applicationName: "Graceful Harpist",

  // For iOS messages
  other: {
    "apple-mobile-web-app-title": "Graceful Harpist",
    "og:site_name": "Graceful Harpist",
    "apple-mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
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
      <head>
        {/* Additional meta tags for iOS messages and other platforms */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Graceful Harpist" />
        <meta property="og:site_name" content="Graceful Harpist" />
        <link rel="mask-icon" href={headerImageUrl} color="#d4b98c" />
        <meta name="theme-color" content="#d4b98c" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'