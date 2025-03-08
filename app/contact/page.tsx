import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Austin's Premier Wedding Harpist | Book Your Event",
  description:
    "Contact Grace Dudney to book elegant harp music for your wedding or special event in Austin, Texas. Check availability and get a personalized quote today.",
  keywords: ["book harpist", "wedding music Austin", "hire harpist", "event musician", "Austin wedding music"],
  alternates: {
    canonical: "https://gracefulharpist.com/contact",
  },
}

export default function Contact() {
  return <ContactClient />
}

