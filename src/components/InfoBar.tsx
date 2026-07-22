export default function InfoBar() {
  return (
    <section id="info" className="relative min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-6xl text-[var(--color-rose)] mb-2" style={{ fontFamily: 'var(--font-script)' }}>
          The Ceremony
        </p>
        <div className="flex flex-col items-center justify-center py-15 px-4 text-center">
          <p
            className="text-lg text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            St. Dominic's Catholic Church
          </p>
          <p
            className="text-xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-italic)' }}
          >
            Three o'clock in the afternoon <br></br> Black tie attire
          </p>
          <p
            className="text-md text-[var(--color-warm-gray)] py-2"
            style={{ fontFamily: 'var(--font-italic)' }}
          ><a href="https://maps.app.goo.gl/cdWhgEDjY6vehQrj7" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--color-rose)] transition-colors">
            2390 Bush St, San Francisco, CA 94115
          </a></p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-6xl text-[var(--color-rose)] mb-2" style={{ fontFamily: 'var(--font-script)' }}>
          The Reception
        </p>
        <div className="flex flex-col items-center justify-center py-15 px-4 text-center">
          <p
            className="text-lg text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Presidio Officers' Club
          </p>
          <p
            className="text-xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-italic)' }}
          >
            Six o'clock in the evening <br></br> Dinner & dancing
          </p>
          <p
            className="text-md text-[var(--color-warm-gray)] py-2"
            style={{ fontFamily: 'var(--font-italic)' }}
          ><a href="https://maps.app.goo.gl/5ybn3HbsTSHovxgYA" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--color-rose)] transition-colors">
            50 Moraga Ave, San Francisco, CA 94129
          </a></p>
        </div>
      </div>
    </section>
    // <section id="info" className="grid grid-cols-3"> {/* border-b border-[var(--color-warm-gray)]/20 */}
    //   <div className="flex flex-col items-center justify-center py-8 px-4 text-center"> {/* border-r border-[var(--color-warm-gray)]/30 */}
    //     <p className="text-md tracking-[0.25em] text-[var(--color-warm-gray)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
    //       date & time
    //     </p>
    //     <p
    //       className="text-sm text-[var(--color-charcoal)]"
    //       style={{ fontFamily: 'var(--font-serif)' }}
    //     >
    //       June 5, 2027 @ 3:00 PM (ceremony)
    //     </p>
    //     <p
    //       className="text-sm text-[var(--color-charcoal)]"
    //       style={{ fontFamily: 'var(--font-serif)' }}
    //     >
    //       & 6:00 PM (reception)
    //     </p>
    //   </div>

    //   <div className="flex flex-col items-center justify-center py-8 px-4 text-center"> {/* border-r border-[var(--color-warm-gray)]/30 */}
    //     <p className="text-md tracking-[0.25em] text-[var(--color-warm-gray)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
    //       location
    //     </p>
    //     <p
    //       className="text-sm text-[var(--color-charcoal)]"
    //       style={{ fontFamily: 'var(--font-serif)' }}
    //     >
    //       St. Dominic's Catholic Church
    //     </p>
    //     <p
    //       className="text-sm text-[var(--color-warm-gray)]"
    //       style={{ fontFamily: 'var(--font-italic)' }}
    //     ><a href="https://maps.app.goo.gl/cdWhgEDjY6vehQrj7" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--color-rose)] transition-colors">
    //       2390 Bush St, San Francisco, CA 94115
    //     </a></p>
    //     <br></br>
    //     <p
    //       className="text-sm text-[var(--color-charcoal)]"
    //       style={{ fontFamily: 'var(--font-serif)' }}
    //     >
    //       Presidio Officers' Club
    //     </p>
    //     <p
    //       className="text-sm text-[var(--color-warm-gray)]"
    //       style={{ fontFamily: 'var(--font-italic)' }}
    //     ><a href="https://maps.app.goo.gl/5ybn3HbsTSHovxgYA" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--color-rose)] transition-colors">
    //       50 Moraga Ave, San Francisco, CA 94129
    //     </a></p>
    //   </div>

    //   <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
    //     <p className="text-md tracking-[0.25em] text-[var(--color-warm-gray)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
    //       attire
    //     </p>
    //     <p
    //       className="text-sm text-[var(--color-charcoal)]"
    //       style={{ fontFamily: 'var(--font-serif)' }}
    //     >
    //       Black-tie
    //     </p>
    //   </div>
    // </section>
  )
}