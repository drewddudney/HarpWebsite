import type { Metadata } from "next"
import { Music, Calendar, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Harp Music Services for Weddings & Events in Austin, TX",
  description:
    "Professional harp music services for weddings, corporate events, and special occasions in Austin, Texas. Create an elegant atmosphere with live harp music.",
  keywords: ["harp services", "wedding music", "event music", "corporate event music", "Austin harpist", "live music"],
  alternates: {
    canonical: "https://gracefulharpist.com/services",
  },
}

const services = [
  {
    title: "Wedding Harp Music",
    icon: <Music className="h-12 w-12 text-[#d4b98c]" aria-hidden="true" />,
    description:
      "Create an elegant atmosphere for your ceremony, cocktail hour, or reception with beautiful harp music in Austin and surrounding areas.",
    details: ["Ceremony music", "Cocktail hour entertainment", "Reception background music", "Special song requests"],
  },
  {
    title: "Corporate Events",
    icon: <Calendar className="h-12 w-12 text-[#d4b98c]" aria-hidden="true" />,
    description:
      "Elevate your corporate event, gala, or fundraiser with sophisticated harp music that creates the perfect ambiance for your Austin event.",
    details: ["Holiday parties", "Award ceremonies", "Client appreciation events", "Product launches"],
  },
  {
    title: "Special Occasions",
    icon: <Star className="h-12 w-12 text-[#d4b98c]" aria-hidden="true" />,
    description:
      "Make anniversaries, birthday celebrations, or holiday parties memorable with customized harp performances in the Austin area.",
    details: ["Anniversary celebrations", "Birthday parties", "Retirement events", "Memorial services"],
  },
]

export default function Services() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center text-[#2c3e50]">
          Harp Music Services in Austin, TX
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-serif mb-4 text-[#2c3e50]">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-8">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4b98c] mr-2"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-6">Ready to elevate your event with elegant harp music in Austin?</p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#d4b98c] text-white rounded-none hover:bg-[#c0a678] transition-colors text-lg inline-block"
            aria-label="Contact Grace to book harp music for your event"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

