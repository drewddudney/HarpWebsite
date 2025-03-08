"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ImageSlideshow } from "@/components/ImageSlideshow"
import { Instagram } from "lucide-react"
import { InstagramEmbed } from "@/components/InstagramEmbed"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7738%20%281%29.PNG-XBkVsZO4mRztA6Mx5JJalH4FBE6l7U.jpeg",
    alt: "Young Grace playing the harp with joy - Austin harpist's early years",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0133.JPG-HVjjlSwpcGzb6WhzrvGUMHHaUojJHn.jpeg",
    alt: "Grace performing in an elegant white gown with sparkly details at a wedding in Austin",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paru%20%2B%20Wesley%20Ceremony-49.jpg-5n1zaSuaVfDF9jDT86yf8uXO7ZFXu7.jpeg",
    alt: "Grace playing harp outdoors in a turquoise dress for a garden wedding ceremony in Texas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6753.JPG-AIrN9dqXyZx9NU3aYuanW75Dxfx4Sb.jpeg",
    alt: "Grace in a beautiful white gown posing with her harp by an arched window for a wedding in Austin",
  },
]

export default function AboutClient() {
  return (
    <div className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif mb-12 text-center text-gray-800 dark:text-white"
        >
          About Grace - Austin Wedding Harpist
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] md:h-[600px]"
          >
            <ImageSlideshow images={images} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-300"
          >
            <p>
              Music has been a part of my life for as long as I can remember. I started playing the harp when I was just
              five years old, and from the very first note, I was captivated by its elegance and ability to create
              something truly magical. Over the years, my passion for music has only deepened, and sharing that joy with
              others has become one of my greatest privileges.
            </p>
            <p>
              As a wedding musician based in Austin, Texas, I specialize in creating beautiful, timeless atmospheres for
              couples on their special day. Whether it's a romantic ceremony, an intimate cocktail hour, or a grand
              reception, my goal is to enhance each moment with the graceful, rich, and distinctive sound of the harp.
            </p>
            <p>
              Every love story is unique, and I take pride in curating the perfect musical backdrop to reflect each
              couple's style and vision. From classical melodies to modern favorites, I bring professionalism, artistry,
              and heartfelt passion to every performance.
            </p>
            <p>
              It would be an honor to be part of your wedding day and help make your moments even more unforgettable
              with the enchanting sound of the harp.
            </p>
            <p className="font-serif text-lg sm:text-xl text-gray-800 dark:text-white">
              Let's create something beautiful together!
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 bg-[#d4b98c] text-white rounded-full hover:bg-[#c0a678] transition-colors text-base sm:text-lg inline-block"
                aria-label="Contact Grace for your wedding or event"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Updated Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 text-center text-gray-800 dark:text-white">
            Connect with Me
          </h2>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <a
              href="https://www.instagram.com/gracefulharpist"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-[#d4b98c] dark:hover:text-[#d4b98c] transition-colors"
              aria-label="Follow Graceful Harpist on Instagram"
            >
              <Instagram className="w-8 h-8" aria-hidden="true" />
              <span className="text-lg font-medium group-hover:underline">@gracefulharpist</span>
            </a>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Follow me on Instagram for behind-the-scenes glimpses, performance highlights, and the latest updates on my
            musical journey.
          </p>
          <InstagramEmbed />
        </motion.div>
      </div>
    </div>
  )
}

