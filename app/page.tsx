import HeroSection from "@/components/hero-section"
import FeatureList from "@/components/feature-list"
import Link from "next/link"

export default function Home() {
  const features = [
    {
      emoji: "📊",
      text: "Develop simple, clear, and pragmatic measurement frameworks",
    },
    {
      emoji: "🎯",
      text: "Tailored solutions for micro, small, and medium-sized charities and social enterprises",
    },
    {
      emoji: "💡",
      text: "Innovative approaches to hard-to-measure topics",
    },
    {
      emoji: "🌟",
      text: "Over 20 years of experience in social, public, and charity sectors",
    },
  ]

  return (
    <>
      <HeroSection
        title="the impact lab 🚀"
        subtitle="Building Impactful Solutions"
        description="Welcome to The Impact Lab, where we specialise in delivering innovative solutions for measuring and amplifying charity impact."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />

      <section className="container-custom">
        <div className="max-w-3xl mx-auto">
          <FeatureList items={features} />

          <p className="text-center text-lg mt-8">
            Our expertise equips us with the knowledge and pragmatism to overcome many obstacles faced by our clients.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>

            <Link href="/services" className="btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
