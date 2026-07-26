const FREE_FEATURES = [
  'Limited AI study prompts (20)',
  'Basic weekly study planner',
  'Exam preparation checklist',
  'Limited assignment-writing prompts',
  'Basic productivity templates',
]

const PREMIUM_FEATURES = [
  '200+ AI study prompts',
  'Advanced assignment & research prompts',
  'Complete exam success system',
  'AI career & CV improvement prompts',
  'Interview preparation prompts',
  'Premium productivity templates',
  'Complete study dashboard',
  'All future updates included',
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-marker-lime/80">Plans</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-paper">
          Try it free. Upgrade when it earns its place.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-ink-light border border-paper/10 rounded-2xl p-8 [--tilt:-1deg]">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display font-semibold text-xl text-paper">Free</h3>
              <span className="font-mono text-xs text-paper/50">No card needed</span>
            </div>
            <div className="mt-4 flex items-end gap-1">
              <span className="font-display font-semibold text-4xl text-paper">$0</span>
              <span className="text-paper/50 text-sm mb-1">/ forever</span>
            </div>
            <p className="mt-3 text-sm text-paper/60">
              Everything you need to try the system before committing.
            </p>

            <ul className="mt-7 space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-paper/75">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-paper/40 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#email"
              className="mt-8 block text-center font-semibold border border-paper/30 text-paper px-6 py-3 rounded-full hover:bg-paper/10 transition-colors"
            >
              Start Free
            </a>
          </div>

          <div className="relative bg-marker-lime rounded-2xl p-8 shadow-2xl shadow-black/20 md:-translate-y-3">
            <span className="absolute -top-3 right-6 bg-ink text-marker-lime font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full">
              Recommended
            </span>
            <h3 className="font-display font-semibold text-xl text-ink">Premium</h3>

            <div className="mt-4 flex items-end gap-2">
              <span className="font-display font-semibold text-4xl text-ink">$5</span>
              <span className="text-ink/50 text-sm mb-1 line-through">$19</span>
              <span className="font-mono text-[11px] text-ink/60 mb-1.5">launch price</span>
            </div>
            <p className="mt-3 text-sm text-ink/70">
              Regular price $19 — locks in for the entire launch window only.
            </p>

            <ul className="mt-7 space-y-3">
              {PREMIUM_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80 font-medium">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#payment"
              className="mt-8 block text-center font-semibold bg-ink text-paper px-6 py-3 rounded-full hover:bg-ink-light transition-colors"
            >
              Get Premium Access
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
