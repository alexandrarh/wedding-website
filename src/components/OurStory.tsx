import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const photos = [
  '/images/engagement_pics/first.webp',
  '/images/engagement_pics/second.webp',
  '/images/engagement_pics/third.webp',
  '/images/engagement_pics/fourth.webp',
  '/images/engagement_pics/fifth.webp',
  '/images/engagement_pics/sixth.webp',
  '/images/engagement_pics/seventh.webp',
]

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="py-16 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <p className="text-xl tracking-[0.25em] uppercase text-[var(--color-charcoal)]">
        Our Story
      </p>
      <p
        className="text-md text-[var(--color-warm-gray)] text-center max-w-4xl"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        On a fateful Halloween night in 2021, we met at UC San Diego's infamous Makai dining hall at Sixth College. Recovering from the previous night's respective parties (Halloween happened to fall on a Sunday that year), we initially bonded over Hunter X Hunter...and Minecraft. After three months–and several memorable dates–we officially started dating January 9, 2022. Since then, we've shared countless adventures together, spanning across the state, country, and even the world. Four years (and one cat named Peach) later, we're excited to continue our journey together as we tie the knot in our lovely city, San Francisco &#129505;&#x1F309;!
      </p>

      <Carousel
        className="w-full max-w-4xl"
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-2">
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="basis-1/2 pl-2">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}