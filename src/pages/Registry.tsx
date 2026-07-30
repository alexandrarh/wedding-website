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
            className="text-3xl md:text-5xl lg:text-6xl text-[var(--color-cream)] text-center leading-snug"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Our Registries
          </p>
        </div>
        {/* <p className="pt-2 text-md text-center text-[var(--color-charcoal)] max-w-2xl">
          Thank you so much for celebrating with us. If you'd like to give a gift, check out the registries below.
        </p> */}
      </section>
      <RegistryCards />
      <Footer />
    </main>
  )
}