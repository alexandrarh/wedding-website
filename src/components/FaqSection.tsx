import { ReactNode } from 'react'

const faq_section: { id: string; question: string; answer: ReactNode }[] = [
  {
    id: '1',
    question: 'Where do I RSVP?',
    answer: (
      <span>
        You can either mail your RSVP to the return address listed on the invitation, or complete it via{' '}
        <a
          href="https://rsvp.alexandseamus2027.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-rose)]"
        >
          rsvp.alexandseamus2027.com
        </a>
        . Please RSVP by <b>[date]</b> so we can get an accurate headcount. If you have
        any questions about RSVPing, please reach out to us at{' '}
        <a
          href="mailto:info@alexandseamus2027.com"
          rel="noopener noreferrer"
          className="text-[var(--color-rose)]"
        >
          info@alexandseamus2027.com
        </a>.
      </span>
    ),
  },
  {
    id: '2',
    question: 'What is "Black Tie" attire?',
    answer: (
      <span>
        Black tie attire is tuxedoes and floor length dresses (cocktail and formal). We expect you all to look your best (no jeans, sneakers, shorts, etc.)! If you need suggestions, or want to ask about your outfit, reach out to us at {''}
        <a
          href="mailto:info@alexandseamus2027.com"
          rel="noopener noreferrer"
          className="text-[var(--color-rose)]"
        >
          info@alexandseamus2027.com
        </a>!
      </span>
    )
  },
  {
    id: '3',
    question: "How far are St. Dominic's and Presidio Officers' Club from each other?",
    answer: 
      "They're about 2.5 miles apart, which is 10-15 minutes by car, 38 minutes by public transit (take the 43 MUNI bus at the Presidio Ave and Sutter St. station), or approximately 45 minutes by walking. The great thing about San Francisco is that the walking and public transportation are pretty reliable, so any form of transportation works! But in black tie attire, probably recommend taking an Uber, Lyft, Waymo, or your car.",
  },
  {
    id: '4',
    question: 'What about kids?',
    answer:
      'Kids are allowed at the events, but in order to minimize disruption on both, we would recommend finding a babysitter. That way, you can also enjoy your time at the party!',
  },
  {
    id: '5',
    question: 'Will there be an open bar?',
    answer:
      'Yes, we will have an open bar at the reception (both cocktail, dinner, and dancing hours)! We do ask however that you drink responsibly and do not drink and drive. Please be sure to have a designated driver or use a rideshare service if you plan on drinking. We want everyone to have fun and be safe!',
  },
  {
    id: '6',
    question: "I'm driving to San Francisco the day of. Is there parking where the events are at?",
    answer:
      "There is a parking lot, as well as ample street parking, in front and by St. Dominic's. In the Presidio Officers' Club, there's ample parking in front of the building.",
  },
  {
    id: '7',
    question: "Who\'s the cat in your favicon?",
    answer:
      "That\'s our cat, Peach! She\'s a talkative orange tabby who loves pets, foods, cuddles, and zoomies. Though she won\'t be present at the wedding, she says to all of you, \"MROW!\"",
  },
]

export default function DetailsCards() {
  return (
    <section
      id="details"
      className="py-16 px-6 flex flex-col items-center gap-6"
      style={{ backgroundColor: 'var(--color-blush)' }}
    >
      <h1
        className="text-6xl tracking-[0.02em] text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Frequently Asked Questions
      </h1>
      <p
        className="text-lg text-[var(--color-warm-gray)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Got some questions that may need answering? Find them below!
      </p>

      <br />

      {faq_section.map((faq) => (
        <div key={faq.id} className="w-full max-w-4xl flex flex-col gap-2">
          <h2
            className="text-3xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {faq.question}
          </h2>
          <p
            className="pb-6 text-lg text-[var(--color-warm-gray)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  )
}