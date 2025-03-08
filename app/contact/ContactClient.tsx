"use client"

import { motion } from "framer-motion"
import { DubsadoForm } from "@/components/dubsado-form"

export default function ContactClient() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800 dark:text-gray-100">
            Book Your Austin Harpist
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'd love to discuss providing harp music for your special event. Reach out today to check availability and
            get a personalized quote for your wedding or event in Austin and surrounding areas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <DubsadoForm />
        </motion.div>
      </div>
    </div>
  )
}

