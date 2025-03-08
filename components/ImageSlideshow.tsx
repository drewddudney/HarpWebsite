"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ImageSlideProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageSlideshow({ images }: ImageSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const DISPLAY_TIME = 5000 // 5 seconds display time
  const FADE_DURATION = 1000 // 1 second fade duration

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, DISPLAY_TIME)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full h-full overflow-hidden" role="region" aria-label="Image slideshow">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION / 1000 }} // Convert to seconds for Framer Motion
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}

