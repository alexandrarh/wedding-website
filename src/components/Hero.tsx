export default function Hero() {
  const handleScroll = () => {
    document.getElementById("info")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center"
    >
      <img
        src="/hero.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center gap-4 px-6">
        <p className="text-xs tracking-[0.25em] uppercase text-white/70">
          Love is in the air!
        </p>

        <h1
          className="text-7xl text-white"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          Alexandra <span style={{ color: 'var(--color-rose)' }}>&</span> Seamus
        </h1>

        <p
          className="text-sm tracking-[0.2em] uppercase text-white/80 mt-1"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          June 5, 2027 &nbsp;·&nbsp; San Francisco, CA
        </p>

        <div className="w-8 h-px bg-white/50 mt-2" />

        <div className="flex flex-col items-center gap-1">
          <a
          href="https://rsvp.alexandseamus2027.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-xs tracking-[0.22em] uppercase text-white border border-white/50 px-8 py-3 cursor-pointer hover:bg-white/10 transition-colors"
          >
            RSVP
          </a>
          <button
            onClick={handleScroll}
            className="mt-4 text-xs tracking-[0.22em] uppercase text-white border border-white/50 px-8 py-3 cursor-pointer hover:bg-white/10 transition-colors"
          >
            See Details
          </button>
        </div>
      </div>
    </section>
  )
}