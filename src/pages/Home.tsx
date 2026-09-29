import Hero from '../components/Hero'
import InfoBar from '../components/InfoBar'
import DetailsCards from '../components/DetailsCards'
// import OurStory from '../components/OurStory'
import Footer from '../components/Footer'
import ItineraryDetails from '../components/ItineraryDetails'
// import SideNav from '../components/SideNav'

export default function Home() {
  return (
    <main>
      {/* <SideNav /> */}
      <Hero />
      <InfoBar />
      <ItineraryDetails />
      <DetailsCards />
      <section
        className="relative w-full min-h-[40vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'picture-1.webp',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-8">
          <p
            className="text-6xl text-[var(--color-cream)]"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            Your text here
          </p>
          <p
            className="text-lg text-[var(--color-cream)]/80 max-w-xl"
            style={{ fontFamily: 'var(--font-italic)' }}
          >
            A subtitle or quote here
          </p>
        </div>
      </section>
      <RegistryCards />
      {/* <OurStory /> */}
      <Footer />
    </main>
  )
}