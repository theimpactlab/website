"use client"

import type React from "react"

import { useState } from "react"
import FeatureList from "./feature-list"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactFeatures = [
    { emoji: "💼", text: "Discuss your project" },
    { emoji: "❓", text: "Ask questions" },
    { emoji: "🤝", text: "Explore collaboration opportunities" },
    { emoji: "📅", text: "Schedule a consultation" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch 📬</h2>

      <FeatureList items={contactFeatures} className="max-w-md mx-auto" />

      <form action="process_form.php" method="POST" className="space-y-6 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Subject"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Your Message"
            required
          />
        </div>

        <div className="flex justify-center">
          <div className="g-recaptcha" data-sitekey="6Ld00ncqAAAAANcK0nkpNnYhVn9COqxFjUxqC_os"></div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            Send Message 📤
          </button>
        </div>
      </form>
    </div>
  )
}
