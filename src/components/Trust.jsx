const REASONS = [
  {
    title: 'Built for how students actually work',
    body: 'Every prompt and template was shaped around real coursework, not generic productivity advice.',
  },
  {
    title: 'Your data stays yours',
    body: 'We collect only what is needed to deliver your purchase and occasional updates — nothing is sold to third parties.',
  },
  {
    title: 'Real support, not a bot loop',
    body: 'Questions about access or billing go to a real inbox, answered within one business day.',
  },
]

export default function Trust() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <p className="section-label text-marker-lime/80">Why students choose us</p>
          <h2 className="font-display font-semibold text-3xl mt-3 text-paper max-w-sm">
            Straightforward, on purpose.
          </h2>

          <div className="mt-10 space-y-8">
            {REASONS.map((r) => (
              <div key={r.title} className="border-l-2 border-marker-lime pl-5">
                <h3 className="font-display font-semibold text-paper">{r.title}</h3>
                <p className="mt-1.5 text-sm text-paper/60 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="bg-ink-light rounded-2xl border border-paper/10 p-8 h-fit">
          <h3 className="font-display font-semibold text-paper">Need to reach us?</h3>
          <p className="mt-2 text-sm text-paper/60 leading-relaxed">
            For billing, access issues, or general questions, email our support team and we'll
            get back to you within one business day.
          </p>
          <dl className="mt-6 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-paper/10 pb-2">
              <dt className="text-paper/40">Support email</dt>
              <dd className="text-paper/80">support@studentsuccesskit.example</dd>
            </div>
            <div className="flex justify-between border-b border-paper/10 pb-2">
              <dt className="text-paper/40">Response time</dt>
              <dd className="text-paper/80">Under 24 hours</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-paper/40">Hours</dt>
              <dd className="text-paper/80">Mon–Fri, 9am–6pm CAT</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
