import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About Grace Dudney | Austin Wedding Harpist",
  description:
    "Meet Grace Dudney, professional harpist in Austin, TX with over 15 years of experience. Providing elegant harp music for weddings and special events throughout Texas.",
  alternates: {
    canonical: "https://gracefulharpist.com/about",
  },
}

export default function About() {
  return <AboutClient />
}

