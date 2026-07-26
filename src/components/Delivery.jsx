const STEPS = [
  {
    step: 'Pay',
    title: 'Complete your payment',
    body: 'Choose the payment method that works for you. Every option is confirmed before access is granted.',
  },
  {
    step: 'Confirm',
    title: 'Get instant confirmation',
    body: 'You will receive an email confirming your purchase as soon as payment clears.',
  },
  {
    step: 'Access',
    title: 'Unlock your account',
    body: 'Your dashboard updates automatically to Premium — all resources appear under My Prompts and My Planners.',
  },
  {
    step: 'Return anytime',
    title: 'Sign back in whenever',
    body: 'Materials stay in your account for good, including every future update to the kit.',
  },
]

export default function Delivery() {
  return (
    <section className="bg-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">How you receive it</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-ink">
          A digital product, delivered without the wait.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.step} className="border-t-2 border-ink pt-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                {s.step}
              </span>
              <h3 className="font-display font-semibold mt-2 text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
