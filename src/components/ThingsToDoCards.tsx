import { local_edition, sams_burgers, sweet_maple, zy_peking } from '../assets/images/things_to_do'

const restaurant_details = [
  {
    id: 'sweet-maple',
    restaurant_name: 'Sweet Maple',
    food_type: 'Brunch',
    description: 'Our top brunch spot with an Asian fusion twist',
    neighborhood: 'Japantown',
    link: 'https://www.sweetmaplesf.com/menu-san-francisco',
    img: sweet_maple
  },
  {
    id: 'zy-peking',
    restaurant_name: 'Z & Y Peking Duck',
    food_type: 'Chinese',
    description: 'Great dim sum place, but even better Peking duck',
    neighborhood: 'Chinatown',
    link: 'https://zandypekingduck.com/',
    img: zy_peking
  },
  {
    id: 'sams',
    restaurant_name: "Sam's Pizza & Burgers",
    food_type: 'Burgers',
    description: 'Anthony Bourdain ate here once, and he never lied',
    neighborhood: 'Little Italy',
    link: 'https://www.samsburgers.com/',
    img: sams_burgers
  },
  {
    id: 'local-edition',
    restaurant_name: 'Local Edition',
    food_type: 'Cocktails',
    description: 'The crafted drinks + live music = heaven on earth',
    neighborhood: 'SoMa',
    link: 'https://www.localeditionsf.com/',
    img: local_edition
  }
]

export default function ThingsToDoCards() {
  return (
    <section
      id="things-to-do-cards"
      className="py-12 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p className="text-3xl text-[var(--color-charcoal)]">
        Our recommended eats (and drinks)
      </p>
      <p
        className="text-lg text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        In need of some grub recommendations in the city? Look no further than this guide. Source: trust us.
      </p>

      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
        {restaurant_details.map((restaurant) => (
          <div
            key={restaurant.id}
            className="rounded-2xl overflow-hidden flex flex-col items-center text-center p-8 gap-4"
            style={{ backgroundColor: 'var(--color-cream)' }}
          >
            <p className="text-xl tracking-[0.1em] text-[var(--color-rose)]">
              {restaurant.food_type}
            </p>

            <img
              src={restaurant.img}
              alt={restaurant.restaurant_name}
              className="h-24 w-auto object-contain my-2"
            />

            <p className="text-ml text-[var(--color-warm-gray)]" >
              {restaurant.restaurant_name} &nbsp;|&nbsp; {restaurant.neighborhood}
            </p>

            <p className="text-s text-[var(--color-warm-gray)] leading-relaxed italic" style={{ fontFamily: 'var(--font-heading)' }}>
              {restaurant.description}
            </p>

            <a
              href={restaurant.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm tracking-[0.1em] border-b border-[var(--color-rose)] text-[var(--color-charcoal)] hover:text-[var(--color-rose)] transition-colors pb-0.5"
            >
              Learn More
            </a>
          </div>
                  ))}
      </div>
    </section>
  )
}