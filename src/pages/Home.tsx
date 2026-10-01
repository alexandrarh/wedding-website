import Hero from '../components/Hero'
import InfoBar from '../components/InfoBar'
import DetailsCards from '../components/DetailsCards'
// import OurStory from '../components/OurStory'
import Footer from '../components/Footer'
import ItineraryDetails from '../components/ItineraryDetails'
import RegistryCards from '../components/RegistryCards'
import TravelTips from '../components/TravelTips'
import Rsvp from '../components/Rsvp'
// import SideNav from '../components/SideNav'

export default function Home() {
  return (
    <main>
      {/* <SideNav /> */}
      <Hero />
      <InfoBar />
      <section
        id="the-weekend-itinerary"
        className="relative w-full min-h-[100vh] flex items-center justify-center text-center py-16"
        style={{
          backgroundColor: 'var(--color-rose)',
        }}
      >
        <div className="relative z-10 flex flex-col items-center gap-4 px-8">
          <p
            className="text-6xl text-[var(--color-cream)]"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            the weekend
          </p>
        </div>
      </section>
      <ItineraryDetails />
      <section
        id="being-in-sf"
        className="relative w-full min-h-[100vh] flex items-center justify-center text-center py-16"
        style={{
          backgroundImage: 'url(/sf_view.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-8">
          <p
            className="text-6xl text-[var(--color-cream)] leading-snug"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            when in San Francisco
          </p>
        </div>
      </section>
      <DetailsCards />
      <section
        id="travel"
        className="relative w-full min-h-[100vh] flex items-center justify-center text-center py-16"
        style={{
          backgroundColor: 'var(--color-rose)',
        }}
      >
        <div className="relative z-10 flex flex-col items-center gap-4 px-8">
          <p
            className="text-6xl text-[var(--color-cream)]"
            style={{ fontFamily: 'var(--font-script)' }}
          >
            travel
          </p>
        </div>
      </section>
      <TravelTips />
      <section
        id="registries"
        className="relative w-full min-h-[100vh] flex items-center justify-center text-center py-16"
        style={{
          backgroundImage: 'url(/picture-3.webp)',
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
            registries
          </p>
          <p
            className="text-lg text-[var(--color-cream)]/80 max-w-xl"
            style={{ fontFamily: 'var(--font-italic)' }}
          >
            Thank you so much for your love and support. We're so excited to celebrate with you all!
          </p>
        </div>
      </section>
      <RegistryCards />
      {/* <OurStory /> */}
      <Rsvp />
      <Footer />
    </main>
  )
}