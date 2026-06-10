const neighborhoods = [
  {
    id: 'nob_hill',
    name: 'Nob Hill',
    desc: 'Alex\'s personal favorite (where she\'s based) with a great view of the city below!',
    img: '/images/neighborhoods_to_explore/nob_hill.webp'
  },
  {
    id: 'japantown',
    name: 'Japantown',
    desc: 'For some good Japanese eats and cute shops, especially Chameleon Vintage in Kinokuniya Mall.',
    img: '/images/neighborhoods_to_explore/japantown.webp'
  },
  {
    id: 'pac_heights',
    name: 'Pacific Heights',
    desc: 'The houses around here are gorgeous, and if you go on Fillmore, it\'s lined with a lot of shops and eateries.',
    img: '/images/neighborhoods_to_explore/pac_heights.webp'
  },
  {
    id: 'mission',
    name: 'Mission District',
    desc: 'Has great mexican food and Valencia Street is home to a lot of cool shops and restaurants. Dolores Park is also a great spot to relax and people watch!',
    img: '/images/neighborhoods_to_explore/mission_district.webp'
  },
  {
    id: 'north_beach',
    name: 'North Beach',
    desc: 'The Italian heart of the city, with great restaurants and bars, both cocktail and dive bars.',
    img: '/images/neighborhoods_to_explore/north_beach.webp'
  },
  {
    id: 'chinatown',
    name: 'Chinatown',
    desc: 'Iconic and touristy, but still a fun place to explore and get some food. Check out Good Mong Kok Bakery for some tasty egg tarts!',
    img: '/images/neighborhoods_to_explore/chinatown.webp'
  },
   {
    id: 'hayes_valley',
    name: 'Hayes Valley',
    desc: 'Up and coming neighborhood with a great vibe and some great shops and restaurants!',
    img: '/images/neighborhoods_to_explore/hayes_valley.webp'
  }
]

export default function NeighborhoodsToExplore() {
  return (
    <section
      id="neighborhoods"
      className="pt-12 pb-18 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p className="text-3xl text-[var(--color-charcoal)]">
        Our most-explored neighborhoods
      </p>
      <p
        className="pb-8 text-lg text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Some neighborhoods we frequent and love #sharethelove!
      </p>

      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl auto-rows-[minmax(200px,auto)]">
        {neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood.id}
            className="rounded-2xl overflow-hidden flex flex-col items-center text-center p-8 gap-4"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <p className="text-xl tracking-[0.05em] text-[var(--color-rose)]">
              {neighborhood.name}
            </p>

            <img
              src={neighborhood.img}
              alt={neighborhood.name}
              className="h-30 w-auto object-contain my-2"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1))' }}
            />

            <p className="text-s text-[var(--color-warm-gray)] leading-relaxed italic" style={{ fontFamily: 'var(--font-heading)' }}>
              {neighborhood.desc}
            </p>

            {/* <a
              href={restaurant.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm tracking-[0.1em] border-b border-[var(--color-rose)] text-[var(--color-charcoal)] hover:text-[var(--color-rose)] transition-colors pb-0.5"
            >
              Learn More
            </a> */}
          </div>
        ))}
      </div>
    </section>
  )
}