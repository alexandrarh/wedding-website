export default function Rsvp() {
  return (
    <section
      id="rsvp"
      className="relative w-full min-h-[80vh] flex items-center justify-center text-center cursor-pointer group"
      style={{ backgroundColor: 'var(--color-rose)' }}
      onClick={() => window.open('https://rsvp.alexandseamus2027.com', '_blank')}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="relative z-10 flex flex-col items-center justify-center py-6 px-4 text-center">
        <p
          className="text-6xl mb-2 leading-snug text-[var(--color-cream)]"
          style={{ fontFamily: 'var(--font-script)', wordBreak: 'break-word', overflowWrap: 'break-word' }}
        >
          Kindly Rsvp
        </p>
      </div>
    </section>
  )
}