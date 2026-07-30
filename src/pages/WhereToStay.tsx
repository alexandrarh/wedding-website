// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"

import Footer from "../components/Footer"
import HotelCards from "../components/HotelCards"

export default function WhereToStay() {
  return (
    <main>
      <section
        className="pt-14 pb-8 px-6 flex flex-col items-center gap-0"
        style={{ backgroundColor: 'var(--color-charcoal)' }}
      >
        <p
          className="text-6xl text-[var(--color-cream)] text-center leading-snug"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          Where to Stay
        </p>
        <p className="pt-4 text-md text-center text-[var(--color-cream)]">
          If you have any questions about the accommodations, please reach out to <a href="mailto:info@alexandseamus2027.com" className="text-[var(--color-rose)]">info@alexandseamus2027.com</a>.
        </p>
      </section>
      <HotelCards />
      <Footer />
    </main>
  )
}