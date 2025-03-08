import type { Metadata } from "next"
import { SongList } from "@/components/song-list"
import { AudioPlayer } from "@/components/audio-player"

export const metadata: Metadata = {
  title: "Harp Music Repertoire | Wedding & Event Songs | Austin Harpist",
  description:
    "Browse Grace's extensive harp music repertoire for weddings and events in Austin. Classical, contemporary, Celtic, and sacred music available for your special occasion.",
  keywords: [
    "harp repertoire",
    "wedding songs",
    "harp music",
    "classical harp",
    "contemporary harp music",
    "Austin wedding music",
  ],
  alternates: {
    canonical: "https://gracefulharpist.com/repertoire",
  },
}

export default function Repertoire() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center text-[#2c3e50]">
          Harp Music Repertoire for Austin Events
        </h1>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[#2c3e50]">Listen to Sample Tracks</h2>
          <AudioPlayer />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[#2c3e50]">Song List</h2>
          <p className="text-gray-600 mb-8">
            Browse my extensive repertoire below. Can't find a song you're looking for? I welcome custom song requests
            and am always expanding my repertoire for weddings and events in Austin and beyond.
          </p>
          <SongList />
        </div>
      </div>
    </div>
  )
}

