import HeroSection from "@/components/hero-section"
import Link from "next/link"

export default function Products() {
  return (
    <>
      <HeroSection
        title="Our Products & Tools 🛠️"
        description="Discover our innovative solutions designed to help charities and social enterprises measure and communicate their impact effectively."
      />

      <section className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🚀</span>
              <h2 className="text-2xl font-bold">Products</h2>
            </div>

            <h3 className="text-xl font-semibold mb-4">ourimpact.co.uk Platform</h3>
            <p className="mb-6">
              Our flagship product, the ourimpact.co.uk platform, is designed to revolutionise how charities and social
              enterprises measure and communicate their impact.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-xl mr-3 flex-shrink-0">📊</span>
                <span className="text-gray-700">Comprehensive impact measurement tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 flex-shrink-0">📈</span>
                <span className="text-gray-700">Real-time data visualisation and reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 flex-shrink-0">🤝</span>
                <span className="text-gray-700">Stakeholder engagement features</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 flex-shrink-0">🔒</span>
                <span className="text-gray-700">Secure data management and storage</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3 flex-shrink-0">📱</span>
                <span className="text-gray-700">Mobile-friendly interface for on-the-go access</span>
              </li>
            </ul>

            <Link
              href="https://ourimpact.co.uk"
              target="_blank"
              className="inline-block py-3 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Learn More About ourimpact.co.uk
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🔧</span>
              <h2 className="text-2xl font-bold">Tools</h2>
            </div>

            <p className="mb-8">
              We've developed a range of specialized tools to address specific needs in the social impact sector:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="text-2xl mr-3">🗺️</span>
                  <span>IMD Tool</span>
                </h3>
                <p className="text-gray-700 ml-10">
                  Our Index of Multiple Deprivation (IMD) tool helps organizations analyze and visualise deprivation
                  data across different geographical areas, enabling targeted interventions and resource allocation.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="text-2xl mr-3">📊</span>
                  <span>Hansard Analysis Tool</span>
                </h3>
                <p className="text-gray-700 ml-10">
                  This tool streamlines the process of analyzing and interpreting Hansard data, making it easier for
                  organizations to track policy discussions and legislative changes relevant to their mission.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="text-2xl mr-3">🌳</span>
                  <span>Green Space Index</span>
                </h3>
                <p className="text-gray-700 ml-10">
                  Developed for the Youth Hostel Association, this tool measures and analyzes access to green spaces,
                  helping to promote environmental awareness and outdoor activities.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="text-2xl mr-3">🎨</span>
                  <span>Creativity Assessment Tool</span>
                </h3>
                <p className="text-gray-700 ml-10">
                  A gamified assessment tool created for the Institute of Imagination to measure and foster creativity
                  in educational settings.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="text-2xl mr-3">🤖</span>
                  <span>AI-Powered Onboarding Chatbot</span>
                </h3>
                <p className="text-gray-700 ml-10">
                  An intelligent chatbot designed to assist funded partners in recording and reporting their impact,
                  streamlining the onboarding process.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <span className="text-2xl mr-3">💼</span>
                  <span>Charity Income Sustainability Tool</span>
                </h3>
                <p className="text-gray-700 ml-10">
                  Developed for the Welsh CVS, this tool helps charities assess and improve their financial
                  sustainability.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="mb-4">
                Interested in learning more about our products or tools? We'd love to discuss how they can benefit your
                organisation.
              </p>
              <Link
                href="/contact"
                className="inline-block py-3 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Contact Us for More Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
