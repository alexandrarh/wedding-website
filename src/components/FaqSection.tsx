const faq_section = [
  {
    id: '1',
    question: 'Where do I RSVP?',
    answer:
      'You should either mail your RSVP to [address], or complete it via the QR Code',
  },
  {
    id: '2',
    question: 'What is "Black Tie" attire?',
    answer: 'Black tie attire is [answer].',
  },
  {
    id: '3',
    question: 'How far are the venues from each other?',
    answer:
      'The venues are about [distance], which is [time by car], [time by public transit], or [time by walking]. The great thing about San Francisco is that the walking and public transportation are pretty reliable, so any form of transportation works! But in black tie attire, probably recommend taking an Uber, Lyft, Waymo, or your car.',
  },
  {
    id: '4',
    question: 'What about kids?',
    answer: 'Kids are allowed at the events, but in order to minimize disruption on both, we would recommend finding a babysitter. That way, you can also enjoy your time at the party!',
  },
  {
    id: '5',
    question: 'Will there be an open bar?',
    answer: '[Place answer here when confirmed]',
  },
  {
    id: '6',
    question: 'I\'m driving to San Francisco the day of. Is there parking where the events are at?',
    answer: 'There is a parking lot, as well as ample street parking, in front and by St. Dominic\'s. [Confirm parking siutation for venue].',
  }
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

      <br></br>

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
