const PILLARS = [
  {
    tag: 'Prompt',
    title: 'A prompt for every academic task',
    body: 'Tested prompts for summarizing readings, drafting essays, and prepping for exams — written so AI gives you useful answers on the first try.',
  },
  {
    tag: 'Plan',
    title: 'A planner that runs your week',
    body: 'Weekly and exam-season planners that turn a syllabus into a day-by-day plan, so you always know what today is for.',
  },
  {
    tag: 'Prepare',
    title: 'A system for exams and interviews',
    body: 'Checklists and prompt sequences that carry you from first revision session to the interview room, in the same structure every time.',
  },
]

export default function Solution() {
  return (
    <section className="bg-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">The solution</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-ink">
          One kit that replaces a dozen scattered habits.
        </h2>
        <p className="mt-4 text-ink/60 max-w-xl leading-relaxed">
          AI Student Success Kit packages the prompts, planners, and prep systems that already work
          for high performers — so you start from what's proven, not from a blank document.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-ink/10 p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 transition-all"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/40">
                0{i + 1} · {p.tag}
              </span>
              <h3 className="font-display font-semibold text-xl mt-4 text-ink">{p.title}</h3>
              <p className="mt-3 text-sm text-ink/60 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
