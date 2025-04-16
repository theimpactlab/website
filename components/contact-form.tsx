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

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form will be handled by formsubmit.co
    setSubmitted(true)
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

      {submitted ? (
        <div className="text-center p-8">
          <div className="text-3xl mb-4">✅</div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon!</p>
        </div>
      ) : (
        <form
          action="https://formsubmit.co/ryan@theimpactlab.co.uk"
          method="POST"
          className="space-y-6 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          {/* FormSubmit.co configuration */}
          <input type="hidden" name="_subject" value="New contact form submission from The Impact Lab website" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_next" value="https://theimpactlab.vercel.app/contact?submitted=true" />

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

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Send Message 📤
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
