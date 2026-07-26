const CARDS = [
  { title: 'My AI Prompts', meta: '20 of 200 unlocked', accent: 'bg-marker-sky' },
  { title: 'My Planners', meta: '2 active this week', accent: 'bg-marker-lime' },
  { title: 'My Resources', meta: '5 saved templates', accent: 'bg-marker-pink' },
]

export default function Dashboard() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-marker-lime/80">Your dashboard</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-paper">
          Everything you've unlocked, in one place.
        </h2>
        <p className="mt-4 text-paper/60 max-w-xl leading-relaxed">
          Once you sign up, your dashboard tracks what you have access to and makes it obvious
          what upgrading adds.
        </p>

        <div className="mt-12 bg-ink-light rounded-2xl border border-paper/10 p-6 sm:p-8">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-marker-lime flex items-center justify-center font-display font-semibold text-ink text-sm">
                JS
              </div>
              <div>
                <div className="text-paper text-sm font-medium">Welcome back</div>
                <div className="font-mono text-[11px] text-paper/40">Free plan</div>
              </div>
            </div>
            <span className="font-semibold text-xs bg-marker-lime text-ink px-4 py-2 rounded-full">
              Upgrade to Premium
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {CARDS.map((c) => (
              <div key={c.title} className="bg-ink rounded-xl p-5">
                <span className={`inline-block w-2 h-2 rounded-full ${c.accent}`} />
                <h3 className="font-display font-semibold text-paper mt-3">{c.title}</h3>
                <p className="font-mono text-[11px] text-paper/40 mt-1">{c.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
