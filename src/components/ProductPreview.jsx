const PREVIEWS = [
  {
    label: 'Prompt Library',
    title: 'AI Prompt Library',
    desc: '200+ prompts organized by subject, assignment type, and exam stage.',
    mock: (
      <div className="space-y-2">
        {['Summarize this reading in 5 key points', 'Turn my notes into 20 flashcards', 'Critique my thesis statement'].map(
          (t) => (
            <div key={t} className="flex items-center gap-3 bg-paper rounded-lg px-3 py-2.5 text-xs text-ink/70">
              <span className="w-1.5 h-1.5 rounded-full bg-marker-lime shrink-0" />
              {t}
            </div>
          )
        )}
      </div>
    ),
  },
  {
    label: 'Study Planner',
    title: 'Weekly Study Planner',
    desc: 'Auto-structured weekly blocks that adapt as deadlines get closer.',
    mock: (
      <div className="grid grid-cols-5 gap-1.5">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
          <div key={d} className="bg-paper rounded-lg p-2 text-center">
            <div className="font-mono text-[10px] text-ink/40">{d}</div>
            <div
              className="mt-2 rounded"
              style={{ height: `${20 + i * 8}px`, backgroundColor: i % 2 ? '#D6F24C' : '#5BC8FF' }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Assignment Planner',
    title: 'Assignment Planner',
    desc: 'Breaks any brief into research, draft, and edit stages with dates.',
    mock: (
      <div className="space-y-2 text-xs">
        {[
          ['Research', '100%'],
          ['Draft', '65%'],
          ['Edit', '20%'],
        ].map(([stage, pct]) => (
          <div key={stage}>
            <div className="flex justify-between text-ink/50 mb-1">
              <span>{stage}</span>
              <span>{pct}</span>
            </div>
            <div className="h-1.5 bg-paper rounded-full overflow-hidden">
              <div className="h-full bg-ink rounded-full" style={{ width: pct }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Exam Dashboard',
    title: 'Exam Prep Dashboard',
    desc: 'Countdown, topic checklist, and confidence rating per subject.',
    mock: (
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-marker-lime flex items-center justify-center font-display font-semibold text-ink text-sm">
          12d
        </div>
        <div className="space-y-1.5 text-xs text-ink/60">
          <div>✓ Statistics — reviewed</div>
          <div>○ Microeconomics — pending</div>
          <div>○ Research methods — pending</div>
        </div>
      </div>
    ),
  },
  {
    label: 'Career Toolkit',
    title: 'CV & Interview Toolkit',
    desc: 'AI prompts that rewrite your CV bullets and simulate interview questions.',
    mock: (
      <div className="bg-paper rounded-lg p-3 text-xs text-ink/70 font-mono leading-relaxed">
        "Rewrite this bullet to lead with impact, under 20 words."
      </div>
    ),
  },
]

export default function ProductPreview() {
  return (
    <section id="preview" className="bg-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Inside the kit</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-ink">
          A look at what you get access to.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {PREVIEWS.map((p) => (
            <div key={p.title} className="bg-ink rounded-2xl p-6 text-paper">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-marker-lime/80">
                {p.label}
              </span>
              <h3 className="font-display font-semibold text-lg mt-2">{p.title}</h3>
              <p className="mt-1.5 text-sm text-paper/60">{p.desc}</p>
              <div className="mt-5 bg-white/95 rounded-xl p-4 text-ink">{p.mock}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
