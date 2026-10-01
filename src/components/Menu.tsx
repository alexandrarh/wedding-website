import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const links = [
  { title: 'Home', id: 'hero' },
  { title: 'Details', id: 'info' },
  { title: 'The Weekend', id: 'the-weekend-itinerary' },
  { title: 'When in San Francisco', id: 'being-in-sf' },
  { title: 'Travel', id: 'travel' },
  { title: 'Registries', id: 'registries' },
  { title: 'RSVP', link: 'https://rsvp.alexandseamus2027.com' },
]

export default function Menu() {
  const [open, setOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

    useEffect(() => {
        if (isHome) {
            setPastHero(false)
            const heroEl = document.getElementById('hero')
            if (!heroEl) return

            const observer = new IntersectionObserver(
            ([entry]) => setPastHero(!entry.isIntersecting),
            { threshold: 0.1 }
            )
            observer.observe(heroEl)
            return () => observer.disconnect()
        } else {
            // On sub-pages, show header only after scrolling down
            setPastHero(false)
            const handleScroll = () => {
            setPastHero(window.scrollY > 30)
            }
            window.addEventListener('scroll', handleScroll, { passive: true })
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [isHome, location.pathname])

  const handleClick = (item: { title: string; id?: string; link?: string }) => {
    setOpen(false)
    if (item.link?.startsWith('http')) {
      window.open(item.link, '_blank')
    } else if (item.id) {
      if (!isHome) {
        // Navigate home first, then scroll after page loads
        navigate('/')
        setTimeout(() => {
          document.getElementById(item.id!)?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      } else {
        setTimeout(() => {
          document.getElementById(item.id!)?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }

  return (
    <>
      {/* Sticky top bar — only shows past hero on home, or always on sub-pages */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-center px-8 py-4 transition-all duration-300 ${
          (pastHero) && !open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-cream)', borderBottom: '0.5px solid var(--color-warm-gray)' }}
      >
        <img
          src="/logo-2-pink.webp"
          alt="Logo"
          className="h-14 w-auto object-contain cursor-pointer"
          onClick={() => {
            navigate('/')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
        <button
          onClick={() => setOpen(!open)}
          className="absolute right-8 text-sm tracking-[0.25em] uppercase cursor-pointer"
          style={{ fontFamily: 'var(--font-heading)', fontVariantLigatures: 'none', color: 'var(--color-charcoal)' }}
        >
          Menu
        </button>
      </div>

      {/* Menu button on hero — only shows on hero section of home page */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-6 right-8 z-50 text-sm tracking-[0.25em] uppercase cursor-pointer transition-all duration-300 ${
          isHome && !pastHero ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ fontFamily: 'var(--font-heading)', fontVariantLigatures: 'none', color: 'var(--color-cream)' }}
      >
        Menu
      </button>

      {/* Close button — shows when overlay is open */}
      <button
        onClick={() => setOpen(false)}
        className={`fixed top-6 right-8 z-50 text-sm tracking-[0.25em] uppercase cursor-pointer transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ fontFamily: 'var(--font-heading)', fontVariantLigatures: 'none', color: 'var(--color-charcoal)' }}
      >
        Close
      </button>

      {/* Full screen overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <div className="flex h-full">
          <div className="hidden md:block w-1/2 h-full overflow-hidden">
            <img
              src="/picture-2.webp"
              alt=""
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                open ? 'translate-y-0' : 'translate-y-full'
              }`}
            />
          </div>

          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-16 gap-4 overflow-hidden">
            {links.map((item, index) => (
              <div
                key={item.title}
                className={`transition-transform duration-500 ease-out ${
                  open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: open ? `${index * 60}ms` : '0ms' }}
              >
                <button
                  onClick={() => handleClick(item)}
                  className="text-2xl md:text-3xl cursor-pointer hover:opacity-40 transition-opacity text-left"
                  style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none', color: 'var(--color-charcoal)' }}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}