import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Footer from "../components/Footer"
import HotelCards from "../components/HotelCards"

export default function WhereToStay() {
  return (
    <main>
      <section
        className="px-8 py-6"
        style={{ backgroundColor: 'var(--color-blush)' }}
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/venue">Venues</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/itinerary">Itinerary</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Where to Stay</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/things-to-do">Things to Do</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mt-6">
            <div className="flex flex-col gap-4 flex-1">
              <h1
                className="text-5xl text-[var(--color-charcoal)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Where to Stay
              </h1>
              <p
                className="text-md text-[var(--color-warm-gray)]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                For our out-of-town guests, we recommend staying at one of the hotels below, as we have room blocks offered at each. 
                <br/><br/>
                If you have any questions about the accommodations, please reach out to <a href="mailto:info@alexandseamus2027.com" className="text-[var(--color-rose)]">info@alexandseamus2027.com</a>.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/omni.webp"
                  alt="Where to Stay"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HotelCards />
      <Footer />
    </main>
  )
}