import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink = "/",
  secondaryButtonText,
  secondaryButtonLink = "/",
}: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="relative inline-block">
            {title}
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent-300 opacity-40 -z-10"></span>
          </span>
        </h1>

        {subtitle && <p className="text-xl md:text-2xl text-primary-600 font-medium mb-6">{subtitle}</p>}

        <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">{description}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryButtonText && (
            <Link href={primaryButtonLink} className="btn-primary">
              {primaryButtonText}
            </Link>
          )}

          {secondaryButtonText && (
            <Link href={secondaryButtonLink} className="btn-secondary">
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
