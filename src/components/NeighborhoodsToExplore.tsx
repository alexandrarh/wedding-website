const neighborhoods = [
  {
    id: 'nob_hill',
    name: 'Nob Hill',
    desc: 'Alex\'s personal favorite (where she\'s based) with a great view of the city below!',
    img: '/omni.webp'
  },
  {
    id: 'japantown',
    name: 'Japantown',
    desc: 'Area desc',
    img: '/omni.webp'
  },
  {
    id: 'pac_heights',
    name: 'Pacific Heights',
    desc: 'Area desc',
    img: '/omni.webp'
  },
  {
    id: 'mission',
    name: 'Mission District',
    desc: 'Area desc',
    img: '/omni.webp'
  },
  {
    id: 'north_beach',
    name: 'North Beach',
    desc: 'Area desc',
    img: '/omni.webp'
  },
  {
    id: 'chinatown',
    name: 'Chinatown',
    desc: 'Area desc',
    img: '/omni.webp'
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