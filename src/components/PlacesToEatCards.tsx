const restaurant_details = [
  {
    id: 'sweet-maple',
    restaurant_name: 'Sweet Maple',
    food_type: 'Brunch',
    description: 'Our top brunch spot with an Asian fusion twist!',
    neighborhood: 'Japantown',
    link: 'https://www.sweetmaplesf.com/menu-san-francisco',
    img: '/images/places_to_eat/sweet_maple.webp',
  },
  {
    id: 'zy-peking',
    restaurant_name: 'Z & Y Peking Duck',
    food_type: 'Chinese',
    description: 'Great dim sum place, but even better Peking duck.',
    neighborhood: 'Chinatown',
    link: 'https://zandypekingduck.com/',
    img: '/images/places_to_eat/zy_peking.webp',
  },
  {
    id: 'sams',
    restaurant_name: "Sam's Pizza & Burgers",
    food_type: 'Burgers',
    description: 'Anthony Bourdain ate here once, and he never lied.',
    neighborhood: 'North Beach',
    link: 'https://www.samsburgers.com/',
    img: '/images/places_to_eat/sams_burgers.webp',
  },
  {
    id: 'local-edition',
    restaurant_name: 'Local Edition',
    food_type: 'Cocktails',
    description: 'The crafted drinks + live music = heaven on earth!',
    neighborhood: 'SoMa',
    link: 'https://www.localeditionsf.com/',
    img: '/images/places_to_eat/local_edition.png',
  },
  {
    id: 'warakubune',
    restaurant_name: 'Warakubune',
    food_type: 'Sushi',
    description: 'The better conveyor belt sushi place (sorry not sorry to Kura)...',
    neighborhood: 'Castro',
    link: 'https://www.yelp.com/biz/warakubune-sushi-san-francisco?start=100',
    img: '/images/places_to_eat/warakubune_transparent.webp',
  },
  {
    id: 'trattoria-contadina',
    restaurant_name: 'Trattoria Contadina',
    food_type: 'Italian',
    description: 'Good and comforting Italian food, perfect for eating with a big group, or by yourself...with a glass of wine.',
    neighborhood: 'North Beach',
    link: 'https://www.trattoriacontadina.com/',
    img: '/images/places_to_eat/trattoria.webp',
  },
  {
    id: 'parachute',
    restaurant_name: 'Parachute',
    food_type: 'Bakery',
    description: 'Great coffee, even greater croissants. Also on the Embarcadero, so you can get a nice view of the Bay while you eat!',
    neighborhood: 'Embarcadero',
    link: 'https://www.parachutebakery.com/',
    img: '/images/places_to_eat/parachute.webp',
  },
  {
    id: 'bar-crudo',
    restaurant_name: 'Bar Crudo',
    food_type: 'Seafood',
    description: 'They have really good oysters here, and the chowder is great. Perfect for a cozy lunch or dinner.',
    neighborhood: 'Divisadero',
    link: 'https://www.barcrudo.com/',
    img: '/images/places_to_eat/bar_crudo.webp',
  },
  {
    id: 'blind-butcher',
    restaurant_name: 'Blind Butcher',
    food_type: 'Steak',
    description: 'As Joe McNulty once said, "[They] make the best desserts." He was not wrong here!',
    neighborhood: 'Castro',
    link: 'https://www.blindbutcher.com/',
    img: '/images/places_to_eat/blind_butcher.webp',
  },
  {
    id: 'beit-rima',
    restaurant_name: 'Beit Rima',
    food_type: 'Arab',
    description: 'The hummus here is so good, and it\'s a great spot for a hearty meal, which you\'ll need after all the walking you\'ll probably be doing. Highly recommend you go to the location on Carl St.',
    neighborhood: 'Cole Valley',
    link: 'http://beitrimasf.com/',
    img: '/images/places_to_eat/beit_rima.webp',
  }
]

export default function PlacesToEatCards() {
  return (
    <section
      id="places-to-eat"
      className="pt-12 pb-18 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p className="text-3xl text-[var(--color-charcoal)]">
        Our recommended eats
      </p>
      <p
        className="pb-8 text-lg text-[var(--color-charcoal)]"
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
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.54))' }}
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