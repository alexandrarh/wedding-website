import { useNavigate } from 'react-router-dom'

const cards = [
  {
    title: 'The Venues',
    description: 'Our venues are nothing but the best for our lovely guests! Find out more about the ceremony and reception venues.',
    link: '/venue',
    image: '/st_doms_cropped.webp',
    cta: 'Learn More',
  },
  {
    title: 'The Itinerary',
    description: 'The wedding weekend will be stacked with events! Check out the itinerary to see what we planned.',
    link: '/itinerary',
    image: '/sf-2.webp',
    cta: 'View Itinerary',
  },
  {
    title: 'Where to Stay',
    description: 'If you\'re spending more than a day in the city, check out some of our recommended hotels and accommodations to make the most of your time in San Francisco.',
    link: '/where-to-stay',
    image: '/omni.webp',
    cta: 'See Suggestions',
  },
  {
    title: 'Things to Do',
    description: 'Got some free time on your hands before the wedding? Check out some of our favorite spots in the city to explore. We promise they\'re not all tourist traps!',
    link: '/things-to-do',
    image: '/sf_view.webp',
    cta: 'Explore the City',
  },
]

export default function DetailsCards() {
  const navigate = useNavigate()

  return (
    <section
      id="details"
      className="py-16 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p className="text-xl tracking-[0.25em] uppercase text-[var(--color-charcoal)]">Details</p>
      <p className="text-md text-[var(--color-warm-gray)]" style={{ fontFamily: 'var(--font-heading)' }}>
        We're so excited to celebrate with you! Here are some details about the wedding and our recommendations for your stay in San Francisco, as well as information about the big day!
      </p>
      <br></br>
      {cards.map((card) => (
        <div
          key={card.link}
          className="w-full max-w-4xl rounded-2xl overflow-hidden grid grid-cols-2"
          style={{ backgroundColor: 'var(--color-cream)' }}
        >
          <div className="p-8 flex flex-col justify-center gap-4">
          <h3
            className="text-3xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {card.title}
          </h3>
          <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
            {card.description}
          </p>
          <button
            onClick={() => navigate(card.link)}
            className="self-start mt-2 text-xs tracking-[0.2em] uppercase border-b border-[var(--color-rose)] text-[var(--color-charcoal)] cursor-pointer hover:text-[var(--color-rose)] transition-colors pb-0.5"
          >
            {card.cta}
          </button>
        </div>

        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full min-h-64 object-cover"
        />
      </div>
      ))}
    </section>
  )
}