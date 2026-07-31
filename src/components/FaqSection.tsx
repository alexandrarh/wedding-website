import type { ReactNode } from 'react';

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
        . Please RSVP by <b>May 7th, 2027</b> so we can get an accurate headcount. If you have
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
      'Kids are always welcome! However, we want to maintain a respectiful environment during the ceremony; we ask that everyone is on their best behavior and mindful of noise–and other guests.',
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
        className="text-6xl text-[var(--color-charcoal)]"
        style={{ fontFamily: 'var(--font-script)' }}
      >
        Frequently Asked Questions
      </h1>
      <p
        className="text-md text-[var(--color-warm-gray)]"
        style={{ fontFamily: 'var(--font-serif)', fontVariantLigatures: 'none' }}
      >
        Got some questions that may need answering? Find them below!
      </p>

      <br />

      {faq_section.map((faq) => (
        <div key={faq.id} className="w-full max-w-4xl flex flex-col gap-2">
          <h2
            className="text-2xl text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {faq.question}
          </h2>
          <p
            className="pb-6 text-md text-[var(--color-warm-gray)] tracking-[0.02em]"
            style={{ fontFamily: 'var(--font-italic)', fontVariantLigatures: 'none' }}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  )
}