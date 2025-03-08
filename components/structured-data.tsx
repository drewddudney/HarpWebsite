export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Graceful Harpist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8212.JPG-5nKD2cZUFf1SFkelH8Hr4H8q96o7CR.jpeg",
    description:
      "Professional harpist in Austin, Texas providing elegant harp music for weddings, corporate events, and special occasions.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2672,
      longitude: -97.7431,
    },
    url: "https://gracefulharpist.com",
    telephone: "",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: ["https://www.instagram.com/gracefulharpist"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function MusicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Graceful Harpist",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8212.JPG-5nKD2cZUFf1SFkelH8Hr4H8q96o7CR.jpeg",
    description:
      "Professional harpist in Austin, Texas providing elegant harp music for weddings, corporate events, and special occasions.",
    genre: ["Classical", "Contemporary", "Celtic"],
    url: "https://gracefulharpist.com",
    member: {
      "@type": "Person",
      name: "Grace Dudney",
      jobTitle: "Harpist",
    },
    sameAs: ["https://www.instagram.com/gracefulharpist"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

