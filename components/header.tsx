"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-900 shadow-md py-2" : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-playfair">
            Graceful Harpist
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#songs" className="hover:text-primary transition-colors">
              Song List
            </Link>
            <Link href="#contact">
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={isScrolled ? "" : "border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20"}
              >
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#songs"
              className="hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Song List
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button>Contact</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

