import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg, seventhImg } from "../assets/images/engagement_pics"

const photos = [
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
  fifthImg,
  sixthImg,
  seventhImg
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
        className="text-md text-[var(--color-warm-gray)] text-center max-w-2xl"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        This will talk a little about how we met, kind of dating each other for 4 years, and then the proposal.
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