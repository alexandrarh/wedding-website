export default function InfoBar() {
  return (
    <section id="info" className="grid grid-cols-3 border-b border-[var(--color-warm-gray)]/20">
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center border-r border-[var(--color-warm-gray)]/30">
        <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-gray)] mb-2">
          Date & Time
        </p>
        <p
          className="text-lg text-[var(--color-charcoal)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          June 5, 2027 @ 3:00 PM (ceremony)
        </p>
        <p
          className="text-lg text-[var(--color-charcoal)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          & 6:00 PM (reception)
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-8 px-4 text-center border-r border-[var(--color-warm-gray)]/30">
        <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-gray)] mb-2">
          Location
        </p>
        <p
          className="text-lg text-[var(--color-charcoal)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          St. Dominic's Catholic Church
        </p>
        <p
          className="text-sm text-[var(--color-warm-gray)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        ><a href="https://maps.app.goo.gl/cdWhgEDjY6vehQrj7" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--color-rose)] transition-colors">
          2390 Bush St, San Francisco, CA 94115
        </a></p>
        <br></br>
        <p
          className="text-lg text-[var(--color-charcoal)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Presidio Officers' Club
        </p>
        <p
          className="text-sm text-[var(--color-warm-gray)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        ><a href="https://maps.app.goo.gl/5ybn3HbsTSHovxgYA" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--color-rose)] transition-colors">
          50 Moraga Ave, San Francisco, CA 94129
        </a></p>
      </div>

      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-[var(--color-warm-gray)] mb-2">
          Attire
        </p>
        <p
          className="text-lg text-[var(--color-charcoal)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Black-tie
        </p>
      </div>
    </section>
  )
}