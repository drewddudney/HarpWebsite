"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Music", path: "/music" },
  { name: "Contact", path: "/contact" },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col ${resolvedTheme === "dark" ? "dark" : ""}`}>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md py-2"
            : "bg-transparent dark:text-white text-gray-800 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex w-full lg:w-auto justify-between items-center">
              <Link href="/" className="text-xl sm:text-2xl font-serif order-2 lg:order-1">
                Graceful Harpist
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden order-1 lg:order-2 ${
                  isScrolled ? "text-gray-800 dark:text-white" : "text-gray-800 dark:text-white"
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <nav className="hidden lg:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`hover:text-[#d4b98c] transition-colors ${
                      pathname === item.path
                        ? "text-[#d4b98c]"
                        : isScrolled
                          ? "text-gray-800 dark:text-white"
                          : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="bg-white dark:bg-gray-800 h-full w-64 shadow-xl p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-serif text-gray-800 dark:text-white">Menu</span>
            {/* Remove the duplicate X button here */}
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-gray-800 dark:text-white hover:text-[#d4b98c] transition-colors ${
                  pathname === item.path ? "text-[#d4b98c]" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <main className="flex-grow bg-white dark:bg-gray-900">{children}</main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-serif">Graceful Harpist</h2>
              <p className="text-sm mt-2">Beautiful harp music for your special event in Austin, Texas</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className="text-white hover:text-[#d4b98c] transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Graceful Harpist. All rights reserved.</p>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}

