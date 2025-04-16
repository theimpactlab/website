import HeroSection from "@/components/hero-section"
import dynamic from "next/dynamic"

// Import the client component with no SSR
const CalendarInit = dynamic(() => import("@/components/calendar-init"), { ssr: false })

export default function Book() {
  return (
    <>
      <HeroSection
        title="Book an Appointment"
        description="Schedule a consultation with our team to discuss your impact measurement needs."
      />

      <section className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
            <div id="my-cal-inline" className="w-full h-[600px] overflow-auto"></div>
          </div>
        </div>
      </section>

      <CalendarInit />
    </>
  )
}
