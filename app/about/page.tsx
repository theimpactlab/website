import HeroSection from "@/components/hero-section"
import FeatureList from "@/components/feature-list"

export default function About() {
  const specializations = [
    {
      emoji: "🎯",
      text: "Specializing in micro, small, and medium-sized charities and social enterprises",
    },
    {
      emoji: "💡",
      text: "Offering innovative solutions to measuring impact",
    },
    {
      emoji: "📊",
      text: "Developing simple, clear, and pragmatic measurement frameworks",
    },
    {
      emoji: "🔬",
      text: "Utilizing cutting-edge solutions for hard-to-measure topics",
    },
  ]

  const experience = [
    { emoji: "🧠", text: "Psychology" },
    { emoji: "🛠️", text: "Service development" },
    { emoji: "📚", text: "Research" },
    { emoji: "👥", text: "Front-line roles" },
  ]

  const services = [
    { emoji: "📝", text: "Strategy frameworks" },
    { emoji: "📊", text: "Evaluation methodologies" },
    { emoji: "📈", text: "Impact monitoring systems" },
  ]

  return (
    <>
      <HeroSection
        title="About Us 🌟"
        description="At The Impact Lab, we're passionate about empowering organizations to measure and maximize their social impact."
      />

      <section className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Specializations</h2>
            <FeatureList items={specializations} />
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Experience</h2>
            <p className="mb-6">
              Our expertise has been cultivated through over 20 years of experience in the social, public, and charity
              sectors. Our diverse roles have included:
            </p>
            <FeatureList items={experience} />
            <p className="mt-6">
              This wealth of experience equips us with the knowledge and pragmatism to overcome many of the obstacles
              faced by our clients.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            <p className="mb-6">Our services include developing:</p>
            <FeatureList items={services} />
            <p className="mt-6">
              These tools enable charities to better assess, quantify, and amplify their social impact using data-driven
              approaches.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
