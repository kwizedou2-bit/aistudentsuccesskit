const TESTIMONIALS = [
  {
    quote:
      'The exam dashboard is the first planner I have actually kept using past week two. Cut my revision time by a real margin.',
    name: 'A. Uwimana',
    role: 'Final-year student, example testimonial',
  },
  {
    quote:
      'I used the CV prompts before applying for internships. Got interviews at three of the five places I applied to.',
    name: 'D. Mensah',
    role: 'Recent graduate, example testimonial',
  },
  {
    quote:
      'Assignment planner turned a 2,000-word essay I was dreading into four short sessions. Handed it in two days early.',
    name: 'L. Okafor',
    role: 'Second-year student, example testimonial',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">What students say</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-ink">
          Example testimonials
        </h2>
        <p className="mt-2 font-mono text-xs text-ink/40">
          Placeholder quotes for demonstration — replace with real customer testimonials before launch.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="card-tilt bg-white border border-ink/10 rounded-2xl p-7"
              style={{ '--tilt': `${i % 2 === 0 ? -1 : 1}deg`, transform: `rotate(var(--tilt))` }}
            >
              <blockquote className="text-ink/80 text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 font-mono text-xs text-ink/50">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
