"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

// Updated categories and songs
const songCategories = [
  {
    id: "classical",
    name: "Classical",
    songs: [
      "Andante - Wolfgang Amadeus Mozart",
      "Ave Maria",
      "Canon In D",
      "Clair De Lune - Claude Debussy",
      "Jesus Joy of Man's Desiring - J.S Bach",
      "Minuet 2 - Bach",
      "Ode To Joy - Beethoven",
      "Petite Etude - Van Vechton Rogers",
      "Rondo - Mozart",
      "Seguidilla - C Salzedo",
      "Siciliana - Waddington",
      "Solfeggietto - C P E Bach",
      "Sonatina - L van Beethoven",
      "Tango - Carlos Salzedo",
      "Theme and Variations",
      "Trumpet Voluntary",
      "Valse Isabel - Van Vechton Rogers",
      "Wedding March",
    ],
  },
  {
    id: "contemporary",
    name: "Contemporary",
    songs: [
      "A Thousand Years - Christina Perri",
      "All of Me",
      "Bless the Broken Road",
      "Clocks",
      "Dawn",
      "Forest Gump - Silvestri",
      "Georgia",
      "Hallelujah",
      "I Can't Help Falling in Love With You",
      "I'm Yours",
      "Kiss the Rain - Yiruma",
      "La Vie en Rose",
      "Love Story",
      "Marry Me Now",
      "Marry You",
      "Perfect",
      "River Flows in You",
      "Steve's Theme - Zigman",
      "The Office",
      "Thousand Years",
      "Turning Page",
      "Viva la Vida",
      "When the Love Falls",
      "Yours",
      "You are the reason",
    ],
  },
  {
    id: "celtic",
    name: "Celtic and Folk",
    songs: [
      "Amazing Grace",
      "Be Thou My Vision",
      "Greensleeves",
      "Guantamera",
      "Harp that Once Through Tara's Halls",
      "Rustic Dance",
      "Ye Banks & Braes - Scotland",
    ],
  },
  {
    id: "sacred",
    name: "Sacred",
    songs: [
      "Doxology",
      "Great Is Thy Faithfulness",
      "Holy, Holy, Holy",
      "In The Garden",
      "It is Well with My Soul",
      "Justifying Grace",
      "Lord's Prayer",
      "Praise God from whom all Blessings Flow",
      "Tis so Sweet to trust in Jesus",
    ],
  },
  {
    id: "movies",
    name: "Movies and Shows",
    songs: [
      "Beauty and the Beast",
      "Can you feel the love tonight",
      "Edelweiss",
      "I see the Light",
      "My Heart Will Go On - Titanic",
      "Part of your World",
      "The Office",
      "Under the Sea - The Little Mermaid",
      "Up - Main Theme",
      "A Whole New World",
      "You've Got a Friend in Me",
    ],
  },
  {
    id: "christmas",
    name: "Christmas",
    songs: [
      "Away in a Manger",
      "Frosty the Snowman",
      "God Rest Ye Merry Gentlemen",
      "Greensleeves",
      "Hark The Herald Angels Sing",
      "It Came Upon A Midnight Clear",
      "Jingle Bells",
      "Jolly Old St Nicholas",
      "Joy to the World",
      "O Come All Ye Faithful",
      "Patapan",
      "Silent Night",
      "The First Noel",
      "We Three Kings",
      "What Child is This?",
      "White Christmas",
    ],
  },
  {
    id: "other",
    name: "Other",
    songs: ["Entertainer", "Happy Birthday", "Promenade a Marle - Annie Challa"],
  },
]

export function SongList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("classical")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredSongs = songCategories.map((category) => {
    return {
      ...category,
      songs: category.songs.filter((song) => song.toLowerCase().includes(searchTerm.toLowerCase())),
    }
  })

  return (
    <div className="bg-white dark:bg-gray-900 p-8 shadow-sm">
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="search"
          placeholder="Search for songs..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
        />
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {songCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeCategory === category.id
                  ? "bg-[#d4b98c] text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        {searchTerm && filteredSongs.every((category) => category.songs.length === 0) ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 mb-4">No songs found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-4 py-2 bg-[#d4b98c] text-white hover:bg-[#c0a678] transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : searchTerm ? (
          // Show all categories with matching songs when searching
          <div>
            {filteredSongs.map((category) => {
              if (category.songs.length === 0) return null

              return (
                <div key={category.id} className="mb-8">
                  <h3 className="text-xl font-serif mb-4 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    {category.name}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                    {category.songs.map((song, index) => (
                      <li key={index} className="py-2 text-gray-700 dark:text-gray-300">
                        {song}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        ) : (
          // Show only active category when not searching
          <div>
            <h3 className="text-xl font-serif mb-4 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
              {songCategories.find((c) => c.id === activeCategory)?.name}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {songCategories
                .find((c) => c.id === activeCategory)
                ?.songs.map((song, index) => (
                  <li key={index} className="py-2 text-gray-700 dark:text-gray-300">
                    {song}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

