import { useState, useEffect } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <img
        src="/picture-1-diff2.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center gap-2 md:gap-4 px-6 pt-24 pb-10 md:pt-5 md:pb-0">
        <img
          src="/logo-1.webp"
          alt="Logo"
          className="max-w-[55vw] max-h-[45vh] md:max-w-[70vw] lg:max-w-none lg:w-90 lg:h-90 object-contain transition-opacity duration-1000"
          style={{ opacity: visible ? 1 : 0 }}
        />

        <p
          className="text-md tracking-[0.2em] text-white/80 mt-1 pt-4 transition-opacity duration-1000 delay-500"
          style={{
            fontFamily: 'var(--font-heading)',
            fontVariantLigatures: 'none',
            opacity: visible ? 1 : 0,
          }}
        >
          june 5, 2027
        </p>
      </div>
    </section>
  )
}