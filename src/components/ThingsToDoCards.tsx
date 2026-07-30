const things_to_do = [
  {
    id: 'food_and_drink',
    title: 'Food and Drink',
    desc: 'Here are some of our favorite places to eat while you\'re in town.',
    img: 'images/bar_crudo_inside.webp', // replace with actual image path
    link: 'https://maps.app.goo.gl/Jzvhb5VmQQMAjceCA',
    button_text: 'View Restaurants'
  },
  {
    id: 'spots_to_see',
    title: 'Spots to See',
    desc: 'Some things you can\'t miss while you\'re in San Francisco.',
    img: 'images/spots_to_see/deyoung.webp', // replace with actual image path
    link: 'https://maps.app.goo.gl/MVtWDpULB876qCdg6',
    button_text: 'View Spots'
  },
  {
    id: 'shops_and_boutiques',
    title: 'City Shopping',
    desc: 'A mix of local and non-local shops to check out (literally and figuratively).',
    img: 'images/polo_rl.webp', // replace with actual image path
    link: 'https://maps.app.goo.gl/xCZ2F7bHfAFGnQ2e9',
    button_text: 'View Shops'
  }
]

export default function ThingsToDoCards() {
  return (
    <section id="info" className="relative w-full grid grid-cols-1 lg:grid-cols-3">
      {things_to_do.map((thing) => (
        <div
          key={thing.id}
          className="relative flex flex-col items-center justify-center px-4 py-32 text-center min-h-[50vh] lg:min-h-screen"
          style={{
            backgroundImage: `url(/${thing.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center justify-center py-6 px-4 text-center">
            <p className="text-5xl text-[var(--color-cream)] mb-2 leading-snug" style={{ fontFamily: 'var(--font-script)' }}>
              {thing.title}
            </p>
            {/* <p
              className="text-lg text-[var(--color-cream)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {thing.desc}
            </p> */}
            <p
              className="text-xl text-[var(--color-cream)]"
              style={{ fontFamily: 'var(--font-italic)' }}
            >
              {thing.desc}
            </p>
            <button
              onClick={() => window.open(thing.link, '_blank')}
              className="mt-4 px-8 py-3 border border-[var(--color-cream)] text-[var(--color-cream)] text-md cursor-pointer hover:bg-[var(--color-cream)]/10 transition-colors"
              style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none', width: '180px', height: '60px', borderRadius: '50%' }}
            >
              {thing.button_text}
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}