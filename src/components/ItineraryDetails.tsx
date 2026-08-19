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
    content: (
      <span>
        Join us for some drinks and light bites as we get ready for the big day. Cocktail attire is recommended.
        <br></br>
        <p className="pt-2 text-lg text-[var(--color-rose)] leading-6" style={{ fontFamily: 'var(--font-italic)' }}>
          High Horse
          <br></br>
          582 Washington St, San Francisco, CA 94111
          <br></br>
          June 4th at six o'clock in the evening
        </p>
      </span>
    ),
  },
  {
    value: 'farewell_brunch',
    trigger: 'Farewell Brunch',
    content: (
      <span>
        Join us for a farewell brunch to wrap up the wedding weekend. Casual attire is recommended.
        <br></br>
        <p className="pt-2 text-lg text-[var(--color-rose)] leading-6" style={{ fontFamily: 'var(--font-italic)' }}>
          TBD
          <br></br>
          TBD
          <br></br>
          June 6th at eleven o'clock in the morning
        </p>
      </span>
    ),
  }
]

export default function ItineraryDetails() {
  return (
    <section
      id="itinerary"
      className="py-30 px-6 flex flex-col items-center gap-0"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <p
        className="pb-8 text-5xl text-[var(--color-charcoal)] leading-snug text-center"
        style={{ fontFamily: 'var(--font-script)' }}
      >
        Other Wedding Weekend Events
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