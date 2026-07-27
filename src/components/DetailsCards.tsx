import { useNavigate } from 'react-router-dom'

export default function DetailsCards() {
  const navigate = useNavigate()
  
  return (
    <section id="info" className="relative min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center bg-[var(--color-charcoal)]">
        <p className="text-6xl text-[var(--color-cream)] mb-2 leading-snug" style={{ fontFamily: 'var(--font-script)' }}>
          Where to Stay
        </p>
        <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
          <p
            className="text-xl text-[var(--color-cream)]"
            style={{ fontFamily: 'var(--font-italic)' }}
          >
            We're happy to offer courtesy blocks at two San Francisco hotels. Learn more by clicking below.
          </p>
          <button
            onClick={() => navigate('/where-to-stay')}
            className="mt-4 px-8 py-3 border border-[var(--color-cream)] text-[var(--color-cream)] text-lg cursor-pointer hover:bg-[var(--color-cream)]/10 transition-colors"
            style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none', width: '140px', height: '70px', borderRadius: '50%' }}>
            See hotels
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-16 text-center bg-[var(--color-rose)]">
        <p className="text-6xl text-[var(--color-charcoal)] mb-2 leading-snug" style={{ fontFamily: 'var(--font-script)' }}>
          Things to Do
        </p>
        <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
          <p
            className="text-xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-italic)' }}
          >
            Find our curated list of things to do in San Francisco, from food and drinks to sightseeing and entertainment.
          </p>
          <button
            onClick={() => navigate('/things-to-do')}
            className="mt-4 px-8 py-3 border border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-lg cursor-pointer hover:bg-[var(--color-charcoal)]/10 transition-colors w-fit"
            style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none', width: '180px', height: '70px', borderRadius: '50%' }}>
            Explore the city
          </button>
        </div>
      </div>
    </section>
  )
}