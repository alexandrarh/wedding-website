// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"

import Footer from "../components/Footer"
import ThingsToDoCards from "../components/ThingsToDoCards"
// import PlacesToEatCards from "../components/PlacesToEatCards"
// import SpotsToSeeCards from "../components/SpotsToSeeCards"
import NeighborhoodsToExplore from "../components/NeighborhoodsToExplore"
// import ThingsToDoSideNav from "@/components/ThingsToDoSideNav"

export default function ThingsToDo() {
  return (
    <main>
      <section
        className="pt-14 pb-8 px-6 flex flex-col items-center gap-0"
        style={{ backgroundColor: 'var(--color-rose)' }}
      >
        <p
          className="text-6xl text-[var(--color-charcoal)] text-center leading-snug"
          style={{ fontFamily: 'var(--font-script)' }}
        >
          Things to Do
        </p>
        <p className="pt-4 text-md text-center text-[var(--color-charcoal)]">
          Below are some of our recommenations for places to go while you're in San Francisco.
        </p>
      </section>
      <ThingsToDoCards />
      <NeighborhoodsToExplore />
      <Footer />
    </main>
  )
}