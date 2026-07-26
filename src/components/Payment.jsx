const METHODS = [
  {
    name: 'International Payment',
    desc: 'Card payments for students and professionals outside Rwanda, processed by your provider of choice (e.g. Stripe, Paddle, Lemon Squeezy).',
    note: 'PAYMENT_PROVIDER_CHECKOUT_URL',
  },
  {
    name: 'Rwanda Payment (Mobile Money)',
    desc: 'MTN Mobile Money / Airtel Money for customers paying from within Rwanda.',
    note: 'RWANDA_MOMO_MERCHANT_CODE',
  },
  {
    name: 'Bank Transfer',
    desc: 'Direct transfer for customers who prefer to pay via their bank. Access is granted once the transfer is confirmed.',
    note: 'BANK_TRANSFER_DETAILS',
  },
]

export default function Payment() {
  return (
    <section id="payment" className="bg-ink py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label text-marker-lime/80">Checkout</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-paper">
          Choose how you'd like to pay.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {METHODS.map((m) => (
            <div key={m.name} className="bg-ink-light rounded-2xl border border-paper/10 p-7 flex flex-col">
              <h3 className="font-display font-semibold text-paper">{m.name}</h3>
              <p className="mt-2.5 text-sm text-paper/60 leading-relaxed flex-1">{m.desc}</p>
              <div className="mt-5 font-mono text-[11px] text-marker-lime/70 bg-ink rounded-lg px-3 py-2 break-all">
                {'{{'} {m.note} {'}}'}
              </div>
              <button
                type="button"
                disabled
                title="Connect a payment provider to enable this option"
                className="mt-4 font-semibold text-sm border border-paper/20 text-paper/50 px-5 py-2.5 rounded-full cursor-not-allowed"
              >
                Continue — coming soon
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-paper/40 max-w-2xl">
          Security note: no private keys, merchant IDs, or bank details are stored in this source
          code. Each placeholder above should be wired to environment variables and a payment
          provider's hosted checkout or server-side API before going live.
        </p>
      </div>
    </section>
  )
}
