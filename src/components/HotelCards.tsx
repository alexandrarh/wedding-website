const hotel_details = [
  {
    id: 'fairmont',
    hotel_name: 'Fairmont Hotel',
    neighborhood: 'Nob Hill',
    price: '$$$',
    desc: 'Placed on the top of Mason and California Street, this beautiful hotel is home to great views of the Bay and east side of the city.',
    img: 'images/where_to_stay/fairmont.webp',
    hotel_link: 'https://www.fairmont.com/en/hotels/san-francisco/fairmont-san-francisco.html'
  },
  {
    id: 'marriot_fishermans',
    hotel_name: 'Marriot Fisherman\'s Wharf',
    neighborhood: 'Fishermans Wharf',
    price: '$$',
    desc: 'A great option for those who want to be close to Pier 39 and all of its good eats and attractions (seals included).',
    img: 'images/where_to_stay/marriot_fishermans.webp',
    hotel_link: 'https://www.marriott.com/en-us/hotels/sfofw-san-francisco-marriott-fishermans-wharf/overview/'
  }
]

export default function HotelCards() {
  return (
    <section id="info" className="relative min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {hotel_details.map((hotel) => (
        <div
          key={hotel.id}
          className="relative flex flex-col items-center justify-center px-4 py-16 text-center"
          style={{
            backgroundImage: `url(/${hotel.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center py-6 px-4 text-center">
            <p className="text-5xl text-[var(--color-cream)] mb-2 leading-snug" style={{ fontFamily: 'var(--font-script)' }}>
              {hotel.hotel_name}
            </p>
            <p
              className="text-lg text-[var(--color-cream)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {hotel.neighborhood} ({hotel.price})
            </p>
            <p
              className="text-xl text-[var(--color-cream)]"
              style={{ fontFamily: 'var(--font-italic)' }}
            >
              {hotel.desc}
            </p>
            <button
              onClick={() => window.open(hotel.hotel_link, '_blank')}
              className="mt-4 px-8 py-3 border border-[var(--color-cream)] text-[var(--color-cream)] text-lg cursor-pointer hover:bg-[var(--color-cream)]/10 transition-colors"
              style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none', width: '160px', height: '60px', borderRadius: '50%' }}
            >
              Book a room
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}