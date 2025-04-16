import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import Script from "next/script"

export default function Contact() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our team to discuss how we can help your organization."
      />

      <section className="container-custom">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
    </>
  )
}