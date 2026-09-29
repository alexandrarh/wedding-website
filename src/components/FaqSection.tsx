import type { ReactNode } from 'react';

const faq_section: { id: string; question: string; answer: ReactNode }[] = [
  {
    id: '1',
    question: 'Where do I RSVP?',
    answer: (
      <span>
        You can either mail your RSVP to the with the return envelope included in the invitation, or complete it via {' '}
        <a
          href="https://rsvp.alexandseamus2027.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-rose)]"
        >
          rsvp.alexandseamus2027.com
        </a>
        . Please RSVP by <b>May 7th, 2027</b> so we can get an accurate headcount. If you have
        any questions about RSVPing, please reach out to us at {' '}
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
    question: 'What does "Formal Attire required, Black Tie optional" mean?',
    answer: (
      <span>
        Due to the formal nature of the event, we require that all guests adhere to the dress code. 
        In terms of formal wear, we expect men to wear tuxedoes or tailored suits {''}
        <a 
          href="https://pin.it/4nHkSPzQv" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-rose)]"
        >
          (see here)
        </a>, 
        and women to wear floor-length dresses, or elegant midi/tea-length dresses
        {''} and floor length dresses/gowns {''}
        <a 
          href="https://pin.it/8AMi9IUIK" 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-[var(--color-rose)]"
        >
          (see here)
        </a>. 
        <br></br>As such, we will not accept casual attire such as jeans, sneakers, shorts, t-shirts, as well as white or white-adjacent clothing. If you need suggestions or clarification, reach out to {''}
        <a
          href="mailto:info@alexandseamus2027.com"
          rel="noopener noreferrer"
          className="text-[var(--color-rose)]"
        >
          info@alexandseamus2027.com
        </a> for assistance.
      </span>
    )
  },
  {
    id: '4',
    question: "I missed the RSVP deadline. Can I still come?",
    answer: (
      <span>
        Though we need to have an accurate headcount for the caterer, we understand that life can happen. If you missed the RSVP deadline, please reach out to us at {''}
        <a
          href="mailto:info@alexandseamus2027.com"
          rel="noopener noreferrer"
          className="text-[var(--color-rose)]"
        >
          info@alexandseamus2027.com
        </a>
        {''} and see if we can still accommodate. We will do our best to make sure you can attend, but we cannot guarantee it.
      </span>
    )
  },
  {
    id: '5',
    question: "How far are St. Dominic's and Presidio Officers' Club from each other?",
    answer: 
      "They're about 2.5 miles apart, which is 10-15 minutes by car, 38 minutes by public transit (take the 43 MUNI bus at the Presidio Ave and Sutter St. station), or approximately 45 minutes by walking. The great thing about San Francisco is that the walking and public transportation are pretty reliable, so any form of transportation works! But in black tie attire, probably recommend taking an Uber, Lyft, Waymo, or your car.",
  },
  {
    id: '6',
    question: 'What about kids?',
    answer:
      'Kids are always welcome! However, we want to maintain a respectful environment during the ceremony; we ask that everyone is on their best behavior and mindful of noise–and other guests.',
  },
  {
    id: '7',
    question: 'Will there be an open bar?',
    answer:
      'Yes, we will have an open bar at the reception (both cocktail, dinner, and dancing hours)! We do ask however that you drink responsibly, and do not drink and drive. Please be sure to have a designated driver or use a rideshare service if you plan on drinking. We want everyone to have fun and be safe!',
  },
  {
    id: '8',
    question: "I'm driving to San Francisco the day of. Is there parking where the events are at?",
    answer:
      "There is a parking lot, as well as ample street parking, in front and by St. Dominic's. In the Presidio Officers' Club, there's ample parking in front of the building.",
  },
  {
    id: '9',
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
        className="text-6xl text-[var(--color-charcoal)] leading-relaxed text-center"
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