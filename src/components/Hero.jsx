export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-36 pb-24 px-6 bg-grid-lines bg-[size:32px_32px]">
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/60 bg-white border border-ink/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-marker-lime" />
          Built for students, by students who studied with AI
        </div>

        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-ink max-w-4xl mx-auto">
          Stop studying harder.{' '}
          <span className="relative inline-block">
            <mark className="marker">Start studying smarter</mark>
          </span>{' '}
          with AI.
        </h1>

        <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed">
          A complete system of AI prompts, planners, and templates that turns late-night cramming
          into a routine you actually control — built for university students and early-career
          professionals.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto text-center font-semibold bg-ink text-paper px-7 py-3.5 rounded-full hover:bg-ink-light transition-colors"
          >
            Start Free
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto text-center font-semibold bg-marker-lime text-ink px-7 py-3.5 rounded-full hover:brightness-95 transition"
          >
            Get Premium Access — $5
          </a>
        </div>

        <p className="mt-4 font-mono text-xs text-ink/50">No credit card required for the free plan</p>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
          {[
            ['200+', 'AI study prompts'],
            ['30+', 'Planner templates'],
            ['18–30', 'Age range we design for'],
            ['5 min', 'Setup time'],
          ].map(([stat, label]) => (
            <div key={label} className="border-t-2 border-ink/10 pt-3">
              <div className="font-display font-semibold text-2xl text-ink">{stat}</div>
              <div className="font-mono text-xs text-ink/50 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
