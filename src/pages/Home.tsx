import Hero from '../components/Hero'
import InfoBar from '../components/InfoBar'
import DetailsCards from '../components/DetailsCards'
import OurStory from '../components/OurStory'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'

export default function Home() {
  return (
    <main>
      <SideNav />
      <Hero />
      <InfoBar />
      <DetailsCards />
      <OurStory />
      <Footer />
    </main>
  )
}