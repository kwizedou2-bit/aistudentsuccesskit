import { useState } from 'react'

const FAQS = [
  {
    q: 'What exactly is included?',
    a: 'AI prompts for studying, writing, and career prep, plus planner and checklist templates. Free gives you a limited set of each; Premium unlocks the complete library and dashboard.',
  },
  {
    q: 'What is the difference between Free and Premium?',
    a: 'Free includes 20 prompts, a basic weekly planner, and an exam checklist. Premium includes all 200+ prompts, the full planner and dashboard system, career and interview prompts, and every future update.',
  },
  {
    q: 'How do I receive my product after payment?',
    a: 'Your account upgrades automatically once payment is confirmed. Everything appears in your dashboard under My Prompts, My Planners, and My Resources — no separate download link to track down.',
  },
  {
    q: 'Can I use it on my phone?',
    a: 'Yes. The dashboard and every template are designed mobile-first, so you can review prompts or update your planner from your phone between classes.',
  },
  {
    q: 'How does AI actually help students?',
    a: 'Used well, AI shortens the distance between "I don\u2019t know where to start" and a first draft or a clear study plan. The kit\u2019s prompts are written to get useful output on the first try, instead of vague or generic answers.',
  },
  {
    q: 'Is the $5 launch price permanent?',
    a: 'The $5 price applies only during the launch window shown in the countdown. After that, Premium returns to its regular $19 price — but anyone who purchased at $5 keeps full access.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-paper py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label">FAQ</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 text-ink">
          Common questions
        </h2>

        <div className="mt-10 divide-y divide-ink/10 border-t border-b border-ink/10">
          {FAQS.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span className="font-display font-medium text-ink">{item.q}</span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-ink/60 transition-transform ${
                      open ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {open && <p className="pb-5 text-sm text-ink/60 leading-relaxed pr-8">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
