import Link from "next/link"

interface ServiceCardProps {
  title: string
  emoji: string
  description: string
  features: string[]
  featureEmojis: string[]
  price?: string
  paypalButtonId?: string
  contactLink?: boolean
}

export default function ServiceCard({
  title,
  emoji,
  description,
  features,
  featureEmojis,
  price,
  paypalButtonId,
  contactLink = false,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{emoji}</span>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-xl mr-3 flex-shrink-0">{featureEmojis[index]}</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {price && (
          <p className="font-medium text-gray-900 mb-4">
            <span className="font-bold">Price:</span> {price}
          </p>
        )}

        {contactLink && (
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block w-full text-center py-3 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Contact Us for a Custom Quote
            </Link>
          </div>
        )}

        {paypalButtonId && (
          <div
            id={`paypal-button-container-${paypalButtonId}`}
            className="paypal-button-container mt-6 w-full min-h-[150px]"
            data-plan-id={paypalButtonId}
          ></div>
        )}
      </div>
    </div>
  )
}
