import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Footer from "../components/Footer"

const venue_sections = [
  {
    id: 'ceremony-venue',
    title: 'Ceremony Venue',
    place_name: 'St. Dominic\'\s Catholic Church',
    desc: 'Nestled between Japantown and Pacific Heights, St. Dominic\'s Catholic Church is a beautiful and historic site for the wedding ceremony. Originally built in 1873, St. Dominic\'s serves as the first Catholic parish built for the Dominican Priory in San Francisco. Featuring Gothic architecture and stunning stained glass windows throughtout, its beauty compliments the intimacy of our ceremony.',
    button_link: 'https://maps.app.goo.gl/k84phfCDDjHJ7BZB9',
    bg_color: 'var(--color-blush)',
    align: 'left',
    photo: "/st_doms_cropped.webp",
  },
  {
    id: 'reception-venue',
    title: 'Reception Venue',
    place_name: 'Presidio Officers\' Club',
    desc: 'Located in the heart of Presidio Park, the Presidio Officers\' Club is a historic building that was once the social hub for military officers stationed at the Presidio. With its elegant Spanish revival architecture and beautiful surroundings, it provides a stunning backdrop for our reception. The venue features a spacious ballroom with large windows that offer breathtaking views of the Golden Gate Bridge and the San Francisco Bay, making it the perfect place to continue the celebrations!',
    button_link: 'https://maps.app.goo.gl/CzqdQL11xX8f7u3n9',
    bg_color: 'var(--color-cream)',
    align: 'right',
    photo: "/presidio_moraga_hall.webp",
  },
]

export default function Venue() {
  return (
    <main>
      <section
        className="px-8 py-6"
        style={{ backgroundColor: 'var(--color-blush)' }}
      >
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
      </section>

      {venue_sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="py-12 px-8 flex flex-col gap-8"
          style={{ backgroundColor: section.bg_color }}
        >
          <div
            className={`flex flex-col ${
              section.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } gap-12 items-center max-w-6xl mx-auto w-full`}
          >
            <div className="flex flex-col gap-4 flex-1 items-start">
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-gray)]">
                {section.title}
              </p>
              <h2
                className="text-4xl text-[var(--color-charcoal)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {section.place_name}
              </h2>
              <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
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