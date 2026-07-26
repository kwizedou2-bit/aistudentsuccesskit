import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="email" className="bg-paper py-24 px-6">
      <div className="max-w-2xl mx-auto text-center bg-white border border-ink/10 rounded-2xl p-10 sm:p-14">
        <p className="section-label">Free starter pack</p>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl mt-3 text-ink">
          Get your free AI study starter pack
        </h2>
        <p className="mt-3 text-ink/60 max-w-md mx-auto text-sm leading-relaxed">
          Drop your email for a short set of prompts and a printable planner, plus study tips and
          the occasional premium offer. Unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="mt-7 font-mono text-sm text-ink bg-marker-lime/40 rounded-xl px-5 py-4">
            You're on the list — check your inbox for the starter pack.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="email-capture" className="sr-only">
              Email address
            </label>
            <input
              id="email-capture"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@university.edu"
              className="flex-1 rounded-full border border-ink/15 px-5 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 outline-none"
            />
            <button
              type="submit"
              className="font-semibold bg-ink text-paper px-6 py-3 rounded-full hover:bg-ink-light transition-colors"
            >
              Send it to me
            </button>
          </form>
        )}
        <p className="mt-4 font-mono text-[11px] text-ink/40">No spam. Just the resources.</p>
      </div>
    </section>
  )
}
