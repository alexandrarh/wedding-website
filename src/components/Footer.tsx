import { useNavigate } from 'react-router-dom'

const page_links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Registry',
    link: '/registry',
  },
  {
    title: 'FAQ',
    link: '/faq',
  },
  {
    title: 'RSVP',
    link: 'https://rsvp.alexandseamus2027.com',
  }
]

export default function Footer() {
  const navigate = useNavigate()

  const handleClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank')
    } else if (link === '/') {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate(link)
    }
  }

  return (
    <section
      id="footer"
      className="pt-4 pb-10 px-6 flex flex-col items-center"
      style={{ backgroundColor: 'var(--color-rose)' }}
    >
      {/* <h2
        className="text-2xl text-[var(--color-cream)] pb-4"
        style={{ fontFamily: 'var(--font-script)' }}
      >
        Alexandra <span style={{ color: 'var(--color-charcoal)' }}>&</span> Seamus
      </h2> */}

      <img src="/logo-2.webp" alt="Logo" className="w-32 h-32 object-contain" />

      {page_links.map((item) => (
        <p
          key={item.link}
          className="text-2xl text-[var(--color-cream)] cursor-pointer hover:text-[var(--color-charcoal)] transition-colors gap-0.25"
          style={{ fontFamily: 'var(--font-sans)', fontVariantLigatures: 'none' }}
          onClick={() => handleClick(item.link)}
        >
          {item.title}
        </p>
      ))}

      <p
        className="text-sm tracking-[0.02em] text-[var(--color-cream)]/60 mt-8"
        style={{ fontFamily: 'var(--font-italic)', fontVariantLigatures: 'none' }}
      >
        Made with &lt;3 by{' '}
        <a
          className="cursor-pointer hover:text-[var(--color-charcoal)] transition-colors"
          href="https://github.com/alexandrarh/wedding-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alexandra Hernandez
        </a>{' '}
        (yes I code)
      </p>
    </section>
  )
}