const registry_cards = [
    {
        id: 'williams-sonoma',
        name: 'Williams Sonoma',
        link: 'https://www.williams-sonoma.com/registry/t2gzhtqbgl/registry-list.html',
        img: 'images/registry/williams-sonoma.webp'
    },
    {
        id: 'bloomingdales',
        name: 'Bloomingdale\'s',
        link: 'https://www.bloomingdales.com/registry/Alexandra-Hernandez-Seamus-McNulty/1625534',
        img: 'images/registry/bloomingdales.webp'
    }
]

export default function RegistryCards() {
    return (
        <section
            id="details"
            className="pt-12 pb-18 px-6 flex flex-col items-center gap-6"
            style={{ backgroundColor: 'var(--color-blush)' }}
        >
            <p className="text-4xl text-[var(--color-charcoal)]" style={{ fontFamily: 'var(--font-heading)' }}>
                Our registries
            </p>
            <p
                className="pb-8 px-4 text-lg text-[var(--color-warm-gray)]"
            >
                Thank you so much for thinking of us!! We're already so grateful for your love and support. If you would like to give us a gift, we have a few registries below set up!
            </p>

            <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
                {registry_cards.map((card) => (
                <div
                    key={card.id}
                    className="rounded-2xl overflow-hidden flex flex-col items-center text-center p-8 gap-4"
                    style={{ backgroundColor: 'var(--color-cream)' }}
                >
                    <p className="text-2xl text-[var(--color-charcoal)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {card.name}
                    </p>

                    <img
                    src={card.img}
                    alt={card.name}
                    className="h-24 w-auto object-contain my-2"
                    style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.54))' }}
                    />

                    <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm tracking-[0.05em] border-b border-[var(--color-rose)] text-[var(--color-charcoal)] hover:text-[var(--color-rose)] transition-colors pb-0.5"
                    >
                    Go to our registry
                    </a>
                </div>
                ))}
            </div>
        </section>
    )
}