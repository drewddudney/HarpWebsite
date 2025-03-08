import type { Metadata } from "next"
import MusicClient from "./MusicClient"

export const metadata: Metadata = {
  title: "Harp Music Samples & Repertoire | Austin Wedding Harpist",
  description:
    "Listen to harp music samples and browse Grace's extensive repertoire of classical, contemporary, Celtic, and sacred music for weddings and events in Austin, TX.",
  keywords: [
    "harp music",
    "wedding music",
    "harp repertoire",
    "classical harp",
    "contemporary harp music",
    "Austin wedding music",
  ],
  alternates: {
    canonical: "https://gracefulharpist.com/music",
  },
}

export default function Music() {
  return <MusicClient />
}

