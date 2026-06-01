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

const spots_details = [
  {
    id: 'city_lights',
    name: 'City Lights Bookstore',
    neighborhood: 'Little Italy',
    desc: 'Where both of us like to get our books from!',
    img: omni,
    place_link:''
  },
  {
    id: 'fort_mason_park',
    name: 'Fort Mason Park',
    neighborhood: 'Fort Mason',
    desc: 'The views from this park make us feel inspired honestly. The nature is too good',
    img: omni,
    place_link:''
  },
  {
    id: 'deyoung',
    name: 'DeYoung Museum',
    neighborhood: 'Golden Gate Park',
    desc: 'A good contemporary art museum with a lot of revolving exhibits!',
    img: omni,
    place_link:''
  },
  {
    id: 'ferry_building',
    name: 'Ferry Building',
    neighborhood: 'Embarcadero',
    desc: 'Has super cute shops and eateries; I highly recommend you check out Nopa Fish for some seafood chowder!',
    img: omni,
    place_link:''
  },
  {
    id: 'exploratorium',
    name: 'Exploratorium',
    neighborhood: 'Embarcadero',
    desc: 'A cool interactive exhibit, great for the kids and adults',
    img: omni,
    place_link:''
  }
]

export default function SpotsToSeeCards() {
  return (
    <section
      id="spots-to-see"
      className="pt-5 pb-12 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p className="pt-5 text-3xl text-[var(--color-charcoal)]">
        Some of our favorite SF places
      </p>
      <p
        className="pb-8 text-lg text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        San Francisco is known for the Golden Gate Bridge and Fisherman's Wharf. Let's try doing one more better than those too.
      </p>

      {spots_details.map((spot) => (
        <div
          key={spot.id}
          className="w-full max-w-4xl rounded-2xl overflow-hidden grid grid-cols-2"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="p-9 flex flex-col justify-center gap-4">
            <h3
              className="text-3xl text-[var(--color-charcoal)]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {spot.name}
            </h3>
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-gray)]">
              {spot.neighborhood}
            </p>
            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
              {spot.desc}
            </p>
            <a
              href={spot.place_link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-2 text-xs tracking-[0.2em] uppercase border-b border-[var(--color-rose)] text-[var(--color-charcoal)] hover:text-[var(--color-rose)] transition-colors pb-0.5"
            >
              Get Directions
            </a>
          </div>

          <img
            src={spot.img}
            alt={spot.name}
            className="w-full h-full min-h-64 object-cover"
          />
        </div>
      ))}
    </section>
  )
}