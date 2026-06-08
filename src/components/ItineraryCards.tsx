import React from 'react'

const itinerary_events = [
  {
    id: 'welcome_party',
    name: 'Welcome Party',
    location: 'TBD',
    event_time: 'Friday, September 20th, 2024 at 6:00 PM',
    desc: "We'll be kicking off the wedding weekend with a welcome party! Join us for some drinks and light bites as we get ready for the big day.",
    img: '/omni.webp',
    location_link: '',
  },
  {
    id: 'wedding_ceremony',
    name: 'Wedding Ceremony',
    location: "St. Dominic's Catholic Church",
    event_time: 'Saturday, June 5, 2027 at 3:00 PM',
    desc: "The main event! We can't wait to celebrate our love with you all at this beautiful church in the heart of San Francisco.",
    img: '/omni.webp',
    location_link: '',
  },
  {
    id: 'reception',
    name: 'Reception',
    location: "Presidio Officers' Club",
    event_time: 'Saturday, June 5, 2027 at 6:00 PM',
    desc: "Join us for the reception as we celebrate with food, drinks, and dancing! We'll be partying the night away in this beautiful area with stunning views of San Francisco Bay.",
    img: '/omni.webp',
    location_link: '',
  },
]

export default function ItineraryCards() {
  return (
    <section
      id="itinerary"
      className="pt-5 pb-12 px-6 flex flex-col items-center gap-0"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p
        className="pt-5 pb-4 text-5xl text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Our Itinerary
      </p>
      <p
        className="pb-8 text-md text-[var(--color-warm-gray)]"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        We have a lot of cool events planned! Check out the itinerary below to
        see what will be happening this weekend.
      </p>

      {itinerary_events.map((event, index) => (
        <React.Fragment key={event.id}>
          <div
            className="w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col items-center text-center"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <div className="p-9 flex flex-col items-center gap-1">
              <h3
                className="text-3xl text-[var(--color-charcoal)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {event.name}
              </h3>
              <a
                href={event.location_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md tracking-[0.05em] text-[var(--color-warm-gray)] hover:text-[var(--color-rose)] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {event.location}
              </a>
              <p className="pt-4 text-sm text-[var(--color-warm-gray)] leading-relaxed">
                {event.desc}
              </p>
              <p className="pt-5 text-sm text-[var(--color-warm-gray)]">
                {event.event_time}
              </p>
            </div>
          </div>

          {index < itinerary_events.length - 1 && (
            <div className="flex flex-col items-center py-2 pt-4">
              <div
                className="w-px h-6 border-l-2 border-dashed"
                style={{ borderColor: 'var(--color-rose)' }}
              />
              <span style={{ color: 'var(--color-rose)' }}>↓</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  )
}