import { useNavigate } from 'react-router-dom'

export default function TravelTips() {
      const navigate = useNavigate()

    return (
        <section id="info" className="relative min-h-[80vh] w-full grid grid-cols-1 lg:grid-cols-2" style={{ backgroundColor: 'var(--color-cream)' }}>
            <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
                <p className="text-4xl text-[var(--color-rose)] mb-2 tracking-[0.05em]" style={{ fontFamily: 'var(--font-heading)' }}>
                    flights
                </p>
                <div className="flex flex-col items-center justify-center px-4 text-center">
                <p
                    className="text-xl tracking-[0.02em] text-[var(--color-charcoal)]"
                    style={{ fontFamily: 'var(--font-italic)' }}
                >
                    San Francisco International Airport (SFO) <br></br>
                    Accessible via public transit (BART) or car <br></br>
                    20-30 minutes from downtown
                </p>
                <button
                    onClick={() => window.open('https://www.expedia.com/Flights', '_blank')}
                    className="mt-4 px-8 py-3 border border-[var(--color-rose)] text-[var(--color-rose)] text-lg cursor-pointer hover:bg-[var(--color-rose)]/10 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none', width: '150px', height: '60px', borderRadius: '50%' }}>
                    Find flights
                </button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
                <p className="text-4xl text-[var(--color-rose)] mb-2 tracking-[0.05em]" style={{ fontFamily: 'var(--font-heading)' }}>
                    drive
                </p>
                <div className="flex flex-col items-center justify-center px-4 text-center">
                <p
                    className="text-xl tracking-[0.02em] text-[var(--color-charcoal)]"
                    style={{ fontFamily: 'var(--font-italic)' }}
                >
                    7-8 hours from San Diego, CA <br></br>
                    Can take the I-5 North, 101-N, or PCH <br></br>
                    Car rentals available in the city
                </p>
                <button
                    onClick={() => window.open('https://maps.app.goo.gl/kfAXafrLJPWsL1Z89', '_blank')}
                    className="mt-4 px-8 py-3 border border-[var(--color-rose)] text-[var(--color-rose)] text-lg cursor-pointer hover:bg-[var(--color-rose)]/10 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none', width: '150px', height: '60px', borderRadius: '50%' }}>
                    See routes
                </button>
                </div>
            </div>
        </section>
    )
}