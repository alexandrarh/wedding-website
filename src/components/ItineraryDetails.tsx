import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const itinerary = [
  {
    value: 'welcome_party',
    trigger: 'Welcome Party',
    content: "We'll be kicking off the wedding weekend with a welcome party! Join us for some drinks and light bites as we get ready for the big day.",
  },
  {
    value: 'wedding_ceremony',
    trigger: 'Wedding Ceremony',
    content: "The main event! We can't wait to celebrate our love with you all at this beautiful church in the heart of San Francisco.",
  },
  {
    value: 'reception',
    trigger: 'Reception',
    content: "Join us for the reception as we celebrate with food, drinks, and dancing! We'll be partying the night away in this beautiful area with stunning views of San Francisco Bay.",
  },
  {
    value: 'farewell_brunch',
    trigger: 'Farewell Brunch',
    content: "We'll be wrapping up the wedding weekend with a farewell brunch! Join us for some breakfast and coffee as we say our goodbyes.",
  }
]

export default function ItineraryDetails() {
  return (
    <section
      id="itinerary"
      className="pt-20 pb-12 px-6 flex flex-col items-center gap-0"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p
        className="pb-12 text-5xl tracking-[0.1em] text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        our itinerary
      </p>

      <Accordion multiple className="max-w-4xl w-full border-none">
      {itinerary.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="border-b border-[var(--color-warm-gray)]/30 border-t-0 border-l-0 border-r-0 bg-transparent">
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </section>
  )
}