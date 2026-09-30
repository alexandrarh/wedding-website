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
    bg_color: 'var(--color-cream)',
    text_color: 'var(--color-charcoal)',
    button_text: 'View Registry',
  }
]

export default function RegistryCards() {
  return (
    <section id="registry" className="relative w-full grid grid-cols-1 lg:grid-cols-2">
      {registry_cards.map((registry) => (
        <div
          key={registry.id}
          className="relative flex flex-col items-center justify-center px-4 py-16 text-center min-h-[80vh] cursor-pointer group"
          style={{ backgroundColor: registry.bg_color }}
          onClick={() => window.open(registry.link, '_blank')}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="relative z-10 flex flex-col items-center justify-center py-6 px-4 text-center">
            <p
              className="text-4xl mb-2 leading-snug"
              style={{ fontFamily: 'var(--font-script)', color: registry.text_color, wordBreak: 'break-word', overflowWrap: 'break-word' }}
            >
              {registry.name}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}