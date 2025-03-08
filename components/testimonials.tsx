"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample testimonials
const testimonials = [
  {
    quote:
      "Your harp music was the perfect addition to our wedding ceremony. All of our guests were mesmerized by the beautiful sounds that filled the room. Thank you for making our day so special.",
    name: "Sarah & Michael",
    event: "Wedding Ceremony",
  },
  {
    quote:
      "We hired you for our corporate gala and the elegant atmosphere your harp created was exactly what we needed. Many attendees commented specifically on how much they enjoyed the music.",
    name: "Jennifer L.",
    event: "Corporate Event",
  },
  {
    quote:
      "The music you played for my daughter's wedding was absolutely beautiful. It added such an elegant touch to the ceremony. Thank you so much for being part of her special day!",
    name: "Patricia M.",
    event: "Wedding Ceremony",
  },
  {
    quote:
      "Your performance at our anniversary celebration was exquisite. The selection of songs was perfect, and your talent is truly remarkable. We will definitely recommend you to our friends.",
    name: "Robert & Elizabeth",
    event: "Anniversary Party",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md relative">
        <Quote className="h-10 w-10 text-primary/20 absolute top-6 left-6" />

        <div className="text-center px-8 pt-8">
          <p className="text-lg md:text-xl italic text-gray-700 mb-6">"{testimonials[activeIndex].quote}"</p>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="font-semibold">{testimonials[activeIndex].name}</p>
            <p className="text-gray-500 text-sm">{testimonials[activeIndex].event}</p>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full h-9 w-9 text-gray-500 hover:text-primary hover:bg-primary/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full h-9 w-9 text-gray-500 hover:text-primary hover:bg-primary/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

