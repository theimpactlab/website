import Link from "next/link"

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-md text-center">
        <div className="text-5xl mb-6">✅</div>
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">Your message has been sent successfully. We'll get back to you soon!</p>
        <Link
          href="/"
          className="inline-block py-3 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
