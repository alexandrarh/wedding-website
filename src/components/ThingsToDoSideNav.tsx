import { useEffect, useState } from 'react'

const sections = [
  { id: 'places-to-eat' },
  { id: 'spots-to-see' },
  { id: 'neighborhoods' },
]

export default function SideNavSubpage() {
  const [activeSection, setActiveSection] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight

      // Check footer visibility
      const footerEl = document.getElementById('footer')
      if (footerEl) {
        const footerTop = footerEl.getBoundingClientRect().top
        if (footerTop < windowHeight * 0.3) {
          setVisible(false)
          return
        }
      }

      // Find which section is most in view
      let current = ''
      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top
        if (top <= windowHeight * 0.3) {
          current = id
        }
      })

      if (current) {
        setVisible(true)
        setActiveSection(current)
      } else {
        setVisible(false)
      }
    }

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