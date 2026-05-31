import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Footer from "../components/Footer"
import heroImg from "../assets/st_doms_cropped.webp"
import sfView from "../assets/sf_view.webp"

const venue_sections = [
  {
    id: 'ceremony-venue',
    title: 'Ceremony Venue',
    place_name: 'St. Dominic\'\s Catholic Church',
    desc: 'Ceremony venue description',
    button_link: 'https://maps.app.goo.gl/QQhAeRzvLT2H6MCHA',
    bg_color: 'var(--color-blush)',
    align: 'left',
    photo: heroImg,
  },
  {
    id: 'reception-venue',
    title: 'Reception Venue',
    place_name: 'TBD',
    desc: 'Reception venue description',
    button_link: 'https://maps.google.com',
    bg_color: 'var(--color-cream)',
    align: 'right',
    photo: sfView,
  },
]

export default function Venue() {
  return (
    <main>
      {venue_sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="py-16 px-8 flex flex-col gap-8"
          style={{ backgroundColor: section.bg_color }}
        >
          {index === 0 && (
            <div className="max-w-6xl mx-auto w-full">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Venues</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/where-to-stay">Where to Stay</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/things-to-do">Things to Do</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}
          <div
            className={`flex flex-col ${
              section.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } gap-12 items-center max-w-6xl mx-auto w-full`}
          >
            <div className="flex flex-col gap-4 flex-1">
              <p
                className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-gray)]"
              >
                {section.title}
              </p>
              <h2
                className="text-4xl text-[var(--color-charcoal)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {section.place_name}
              </h2>
              <p
                className="text-sm text-[var(--color-warm-gray)] leading-relaxed"
              >
                {section.desc}
              </p>
              <a
                href={section.button_link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start mt-2 text-xs tracking-[0.2em] uppercase border-b border-[var(--color-rose)] text-[var(--color-charcoal)] hover:text-[var(--color-rose)] transition-colors pb-0.5"
              >
                Get Directions
              </a>
            </div>

            <div className="flex-1 w-full">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={section.photo}
                  alt={section.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  )
}