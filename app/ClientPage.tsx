"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Music, Calendar, Heart } from "lucide-react"
import { LocalBusinessSchema, MusicianSchema } from "@/components/structured-data"

export default function ClientPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "Grace was beyond wonderful!! She is so sweet and was very helpful throughout the planning process. She is so so incredibly talented! She was the perfect addition to our ceremony. I promise you will not be disappointed when it comes to Grace Dudney!",
      name: "Kendall",
      event: "Wedding",
    },
    {
      quote:
        "Grace did a great job as harpist of our wedding – she was on time professional, and most importantly, played the harp very well. I would gladly recommend her to anyone looking for a harpist.",
      name: "Matthew M.",
      event: "Wedding",
    },
    {
      quote:
        "Grace was such a pleasure to work with! She was so easy work with and is a great communicator. Grace is incredibly talented – I would definitely recommend her for your wedding or event!",
      name: "Kilby O.",
      event: "Wedding",
    },
    {
      quote:
        "I have heard Grace play many times. She is phenomenal and I love the music she plays. Very professional and such a sweet person.",
      name: "Elizabeth G.",
      event: "Special Event",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <LocalBusinessSchema />
      <MusicianSchema />

      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8212.JPG-5nKD2cZUFf1SFkelH8Hr4H8q96o7CR.jpeg"
              alt="Grace performing on her harp outdoors in a beautiful garden setting for a wedding ceremony in Austin, Texas"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="container relative z-10 text-center px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6">Graceful Harpist</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Elegant harp music for weddings and special events in Austin, Texas
            </p>

            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 bg-[#d4b98c] text-white rounded-full hover:bg-[#c0a678] transition-colors text-base sm:text-lg inline-block"
              aria-label="Book now for your wedding or special event"
            >
              Book Now
            </Link>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-white" aria-hidden="true" />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800" id="about">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 text-gray-800 dark:text-white">
                  About Graceful Harpist
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I have been playing the harp since I was 5 years old & love sharing music with people.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  As a wedding musician based in Austin, Texas, I am a lover of music and impassioned harpist. I'm
                  perfect for clients seeking the graceful, rich, and distinctive sound of harp strings on their special
                  day.
                </p>
                <Link href="/about" className="text-[#d4b98c] font-medium hover:underline">
                  Learn more about Graceful Harpist
                </Link>
              </div>

              <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0065.JPG-O63bCyAAa9JWityFtPkX83ltjSPCMe.jpeg"
                  alt="Close-up detail of an ornate golden harp showing intricate decorative carvings"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-12 text-center text-gray-800 dark:text-white">
              Harp Music Services
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Wedding Harpist",
                  icon: <Music className="h-8 w-8 sm:h-10 sm:w-10 text-[#d4b98c]" aria-hidden="true" />,
                  description:
                    "Elegant harp music for your ceremony, cocktail hour, or reception in Austin and surrounding areas.",
                },
                {
                  title: "Corporate Events",
                  icon: <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-[#d4b98c]" aria-hidden="true" />,
                  description:
                    "Sophisticated live harp music to create the perfect ambiance for your corporate gathering or gala.",
                },
                {
                  title: "Special Occasions",
                  icon: <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-[#d4b98c]" aria-hidden="true" />,
                  description:
                    "Memorable harp performances for anniversaries, birthday celebrations, or holiday parties.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-serif mb-2 text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800" id="testimonials">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-12 text-center text-gray-800 dark:text-white">
              What Clients Say
            </h2>

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-base sm:text-lg md:text-xl italic mb-6 text-gray-600 dark:text-gray-300">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="font-medium text-gray-800 dark:text-white">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentTestimonial].event}</p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-[#d4b98c] text-white" id="cta">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6">Ready to add elegance to your event?</h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Contact me today to check availability and get a personalized quote for your Austin area event.
              </p>
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 bg-white text-[#d4b98c] rounded-full hover:bg-gray-100 transition-colors text-base sm:text-lg inline-block"
                aria-label="Contact Grace for your event"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

