import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import FeatureList from "@/components/feature-list"
import PayPalScriptInit from "@/components/paypal-script-init"

export default function Services() {
  const serviceFeatures = [
    {
      emoji: "📊",
      text: "Customised impact measurement frameworks",
    },
    {
      emoji: "💡",
      text: "Innovative solutions for hard-to-measure topics",
    },
    {
      emoji: "💰",
      text: "Flexible pricing options",
    },
    {
      emoji: "🤝",
      text: "Tailored support for charities and social enterprises",
    },
  ]

  return (
    <>
      <HeroSection
        title="Our Services 🚀"
        description="We specialise in working with micro, small, and medium sized charities & social enterprises, offering innovative solutions to measuring impact."
      />

      <section className="container-custom">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8">
            Our approach is to develop simple, clear, and pragmatic measurement frameworks that utilise innovative
            solutions for hard-to-measure topics.
          </p>

          <p className="text-lg text-center mb-12">
            Understanding that resources can be tight for organisations of this size, we offer flexible pricing options
            based on your specific needs and products or services required.
          </p>

          <FeatureList items={serviceFeatures} className="max-w-lg mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Two Hours of Support"
              emoji="⏱️"
              description="Need some one-off advice? Purchase a couple of hours of consultation time."
              features={[
                "Focused problem-solving session",
                "Expert guidance on specific issues",
                "Analysis of your unique challenges",
              ]}
              featureEmojis={["🎯", "💼", "🔍"]}
              price="£210/month"
              paypalButtonId="P-6E915052EG030082GM5G56LA"
            />

            <ServiceCard
              title="Four Hours of Support"
              emoji="⏱️"
              description="Need some one-off advice? Purchase four hours of consultation time."
              features={[
                "Small pieces of scoping work",
                "Strategic advice",
                "Problem solving for specific research or data issues",
              ]}
              featureEmojis={["📘", "🧩", "🔬"]}
              price="£400/month"
              paypalButtonId="P-1KK140556F573134KM5G5WCQ"
            />

            <ServiceCard
              title="Six Hours of Support"
              emoji="🔄"
              description="Looking for ongoing support? Subscribe to our monthly retainer (cancelable at any time) for six hours of dedicated assistance each month."
              features={[
                "Regular check-ins and progress tracking",
                "Continuous improvement of your impact measurement",
                "Long-term strategic planning and support",
              ]}
              featureEmojis={["📅", "🔧", "📈"]}
              price="£570/month"
              paypalButtonId="P-5VK48173KT205742BM6RYWFA"
            />

            <ServiceCard
              title="Bespoke Project"
              emoji="🎨"
              description="Need comprehensive support for an insight, research, or impact measurement project? We offer tailored solutions on a fixed-fee basis."
              features={[
                "Custom project design and implementation",
                "Comprehensive data analysis and reporting",
                "Knowledge transfer and team upskilling",
              ]}
              featureEmojis={["🏗️", "📊", "🎓"]}
              contactLink={true}
            />
          </div>
        </div>
      </section>

      <PayPalScriptInit />
    </>
  )
}
