import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Professional Harpist in Austin, TX | Elegant Wedding & Event Music",
  description:
    "Book Grace Dudney, Austin's premier harpist for weddings, corporate events, and special occasions. Elegant live harp music to create the perfect atmosphere for your event.",
  alternates: {
    canonical: "https://gracefulharpist.com",
  },
}

export default function Home() {
  return <ClientPage />
}

