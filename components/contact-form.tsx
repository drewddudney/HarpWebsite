"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus({ submitted: true, success: false, message: "Sending..." })

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      })

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-8 shadow-sm">
      <h3 className="text-2xl font-serif mb-6 text-gray-800 dark:text-white">Contact Form</h3>

      {formStatus?.success ? (
        <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-100 p-4 mb-6">
          {formStatus.message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
              >
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Party</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#d4b98c] focus:border-[#d4b98c]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formStatus?.submitted && !formStatus.success}
            className="w-full px-8 py-3 bg-[#d4b98c] text-white hover:bg-[#c0a678] transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
          >
            {formStatus?.submitted && !formStatus.success ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  )
}

