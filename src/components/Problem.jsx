const PROBLEMS = [
  {
    title: 'Hours lost to unfocused studying',
    body: 'Re-reading the same chapter three times isn\u2019t studying \u2014 it\u2019s stalling. Without a system, effort doesn\u2019t translate into grades.',
  },
  {
    title: 'No real organization',
    body: 'Deadlines live in five different apps, notes are scattered, and every term starts with the same scramble.',
  },
  {
    title: 'Exam stress that creeps in early',
    body: 'Without a prep plan, revision turns into panic in week eleven \u2014 right when it\u2019s hardest to catch up.',
  },
  {
    title: 'Assignments that take too long to start',
    body: 'Staring at a blank page burns hours that should go toward actually writing and refining the work.',
  },
  {
    title: 'AI tools used the wrong way',
    body: 'Everyone has access to AI now. Few students know how to prompt it well enough for it to save real time.',
  },
]

export default function Problem() {
  return (
    <section className="bg-ink text-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-marker-lime/80">The problem</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl">
          Studying hard isn't the same as studying well.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="bg-ink p-8 hover:bg-ink-light transition-colors">
              <h3 className="font-display font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-paper/60 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
          <div className="bg-marker-lime text-ink p-8 flex flex-col justify-center">
            <p className="font-display font-semibold text-lg leading-snug">
              None of this is a discipline problem. It's a systems problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
