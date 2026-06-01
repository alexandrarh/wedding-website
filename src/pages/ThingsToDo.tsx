import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Footer from "../components/Footer"
import omni from "../assets/omni.webp"
import ThingsToDoCards from "../components/ThingsToDoCards"

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
                <BreadcrumbLink href="/where-to-stay">Where to Stay</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Things to Do</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mt-6">
            <div className="flex flex-col gap-4 flex-1">
              <h1
                className="text-5xl text-[var(--color-charcoal)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Things to Do
              </h1>
              <p
                className="text-md text-[var(--color-warm-gray)]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Something about where to stay, blah blah
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={omni}
                  alt="Where to Stay"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ThingsToDoCards />
      <Footer />
    </main>
  )
}