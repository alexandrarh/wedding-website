import Footer from "../components/Footer" 
import RegistryCards from "@/components/RegistryCards"

export default function Registry() {
  return (
    <main>
      <section
        className="flex flex-col items-center gap-4"
        style={{ backgroundColor: 'var(--color-rose)' }}
      >
        <div
          className="flex items-center justify-center w-[100%] mx-auto overflow-hidden"
          style={{
            backgroundColor: 'var(--color-charcoal)',
            borderRadius: '50%',
            aspectRatio: '6 / 1',
          }}
        >
          <p
            className="text-3xl md:text-5xl lg:text-6xl text-[var(--color-blush)] text-center leading-snug"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Our Registries
          </p>
        </div>
      </section>
      <RegistryCards />
      <section
        className="py-20 flex justify-center items-center gap-0"
        style={{ backgroundColor: 'var(--color-jade-green)' }}
      >
        <p className="px-16 text-md text-center text-[var(--color-charcoal)] tracking-[0.02em]" style={{ fontFamily: 'var(--font-serif)' }}>
          Thank you so much for your love and support. We're so excited to celebrate with you and can't wait to see you all.
        </p>
      </section>
      <Footer />
    </main>
  )
}