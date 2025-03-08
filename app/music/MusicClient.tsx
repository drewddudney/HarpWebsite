"use client"

import { motion } from "framer-motion"
import { SongList } from "@/components/song-list"
import { AudioPlayer } from "@/components/audio-player"

export default function MusicClient() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif mb-12 text-center text-gray-800 dark:text-gray-100"
        >
          Harp Music Samples & Repertoire
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-gray-800 dark:text-gray-100">
            Listen to Sample Tracks
          </h2>
          <AudioPlayer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-gray-800 dark:text-gray-100">Song List</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Browse my song list below. Don't see what you're looking for? I welcome custom requests and am always
            expanding my repertoire for weddings and events in Austin and beyond.
          </p>
          <SongList />
        </motion.div>
      </div>
    </div>
  )
}

