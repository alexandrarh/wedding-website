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
    const observers: IntersectionObserver[] = []

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    const footerEl = document.getElementById('footer')
    if (footerEl) {
      const footerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(false)
          else if (!document.getElementById('hero')?.getBoundingClientRect().top === false) {
            setVisible(true)
          }
        },
        { threshold: 0.1 }
      )
      footerObserver.observe(footerEl)
      observers.push(footerObserver)
    }

    const heroEl = document.getElementById('hero')
    if (heroEl) heroObserver.observe(heroEl)
    observers.push(heroObserver)

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.5 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
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
              : 'bg-[var(--color-charcoal)]/30 hover:bg-[var(--color-charcoal)]/60'
          }`}
          aria-label={`Scroll to ${id}`}
        />
      ))}
    </div>
  )
}