import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero' },
  { id: 'info' },
  { id: 'details' },
  { id: 'our-story' },
]

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight

      // Hide when hero is visible
      const heroEl = document.getElementById('hero')
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom
        if (heroBottom > windowHeight * 0.5) {
          setVisible(false)
          return
        }
      }

      // Hide when footer is visible
      const footerEl = document.getElementById('footer')
      if (footerEl) {
        const footerTop = footerEl.getBoundingClientRect().top
        if (footerTop < windowHeight * 0.5) {
          setVisible(false)
          return
        }
      }

      // Find which section we've scrolled past most recently
      let current = ''
      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top
        if (top < windowHeight * 0.6) {
          current = id
        }
      })

      if (current && current !== 'hero') {
        setVisible(true)
        setActiveSection(current)
      }
    } // ← this was missing

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {sections.map(({ id }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === id
              ? 'bg-[var(--color-charcoal)] scale-125'
              : 'bg-[var(--color-charcoal)]/30 cursor-pointer hover:bg-[var(--color-charcoal)]/60'
          }`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  )
}