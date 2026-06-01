import omni from '../assets/omni.webp'  // Replace with where_to_stay

const hotel_details = [
  {
    id: 'fairmont',
    hotel_name: 'Fairmont Hotel',
    neighborhood: 'Nob Hill',
    price: '$$$',
    desc: 'Placed on the top of Mason and California Street, this exquisite hotel is home to great views and service',
    img: omni,
    hotel_link: 'https://www.fairmont.com/en/hotels/san-francisco/fairmont-san-francisco.html'
  },
  {
    id: 'hyatt_regency_fidi',
    hotel_name: 'Hyatt Regency San Francisco',
    neighborhood: 'Financial District',
    price: '$$$',
    desc: 'Right in front of the Ferry Building and Embarcadero, Hyatt Regency has great connections to the coast and a great lobby',
    img: omni,
    hotel_link: 'https://www.hyatt.com/hyatt-regency/en-US/sfors-hyatt-regency-san-francisco'
  }
]

export default function HotelCards() {
  return (
    <section
      id="hotel-cards"
      className="py-16 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      {/* <p className="text-xl tracking-[0.25em] uppercase text-[var(--color-charcoal)]">
        Where to Stay
      </p>
      <p
        className="text-md text-[var(--color-warm-gray)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Some paragraph containing thanks and such for coming...
      </p> */}

      {hotel_details.map((hotel) => (
        <div
          key={hotel.id}
          className="w-full max-w-4xl rounded-2xl overflow-hidden grid grid-cols-2"
          style={{ backgroundColor: 'var(--color-blush)' }}
        >
          <div className="p-9 flex flex-col justify-center gap-4">
            <h3
              className="text-3xl text-[var(--color-charcoal)]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {hotel.hotel_name}
            </h3>
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-gray)]">
              {hotel.neighborhood} ({hotel.price})
            </p>
            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
              {hotel.desc}
            </p>
            <a
              href={hotel.hotel_link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-2 text-xs tracking-[0.2em] uppercase border-b border-[var(--color-rose)] text-[var(--color-charcoal)] hover:text-[var(--color-rose)] transition-colors pb-0.5"
            >
              View Hotel
            </a>
          </div>

          <img
            src={hotel.img}
            alt={hotel.hotel_name}
            className="w-full h-full min-h-64 object-cover"
          />
        </div>
      ))}
    </section>
  )
}