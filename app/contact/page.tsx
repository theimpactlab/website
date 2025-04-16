import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export default function Contact({ searchParams }: { searchParams: { submitted?: string } }) {
  const isSubmitted = searchParams.submitted === "true"

  return (
    <>
      <HeroSection
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our team to discuss how we can help your organization."
      />

      <section className="container-custom">
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="text-5xl mb-6">✅</div>
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg mb-6">Your message has been sent successfully. We'll get back to you soon!</p>
              <a
                href="/"
                className="inline-block py-3 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Return to Home
              </a>
            </div>
          ) : (
            <ContactForm />
          )}
        </div>
      </section>

      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
    </>
  )
}
