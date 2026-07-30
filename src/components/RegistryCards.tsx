const registry_cards = [
  {
    id: 'williams-sonoma',
    name: 'Williams Sonoma',
    desc: 'Primarily kitchen goods here.',
    link: 'https://www.williams-sonoma.com/registry/t2gzhtqbgl/registry-list.html',
    bg_color: 'var(--color-cream)',
    text_color: 'var(--color-charcoal)',
    button_text: 'View Registry',
  },
  {
    id: 'bloomingdales',
    name: "Bloomingdale's",
    desc: 'A mix of home goods and kitchen items.',
    link: 'https://www.bloomingdales.com/registry/Alexandra-Hernandez-Seamus-McNulty/1625534',
    bg_color: 'var(--color-blush)',
    text_color: 'var(--color-rose)',
    button_text: 'View Registry',
  },
  {
    id: 'honeymoon-fund',
    name: 'Honeymoon Fund',
    desc: "If you'd like to contribute to our honeymoon, please check out our honeymoon fund.",
    link: 'https://www.venmo.com/u/alexavndra',
    bg_color: 'var(--color-charcoal)',
    text_color: 'var(--color-blush)',
    button_text: 'Give a Gift',
  },
]

export default function RegistryCards() {
  return (
    <section id="registry" className="relative w-full grid grid-cols-1 lg:grid-cols-3">
      {registry_cards.map((registry) => (
        <div
          key={registry.id}
          className="relative flex flex-col items-center justify-center px-4 py-32 text-center min-h-[50vh] lg:min-h-screen"
          style={{ backgroundColor: registry.bg_color }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center py-6 px-4 text-center">
            <p
            className="text-4xl mb-2 leading-snug"
            style={{ fontFamily: 'var(--font-script)', color: registry.text_color, wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
                {registry.name}
            </p>
            {/* <p
              className="text-lg text-[var(--color-cream)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {thing.desc}
            </p> */}
            <p
              className="text-xl"
              style={{ fontFamily: 'var(--font-italic)', color: registry.text_color }}
            >
              {registry.desc}
            </p>
            <button
                onClick={() => window.open(registry.link, '_blank')}
                className="mt-4 px-8 py-3 text-md cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                    fontFamily: 'var(--font-sans)',
                    fontVariantLigatures: 'none',
                    width: '180px',
                    height: '60px',
                    borderRadius: '50%',
                    color: registry.text_color,
                    border: `1px solid ${registry.text_color}`,
                }}
            >
                {registry.button_text}
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}