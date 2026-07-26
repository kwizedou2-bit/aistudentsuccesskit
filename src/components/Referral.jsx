export default function Referral() {
  return (
    <section className="bg-ink py-20 px-6">
      <div className="max-w-4xl mx-auto bg-marker-lime rounded-2xl p-10 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">Referral program</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mt-2 text-ink">
            Invite friends and earn rewards
          </h2>
          <p className="mt-2 text-ink/70 text-sm max-w-md">
            Every friend who upgrades to Premium through your link earns you free months and
            unlocks bonus prompt packs.
          </p>
        </div>
        <a
          href="#email"
          className="shrink-0 font-semibold bg-ink text-paper px-6 py-3.5 rounded-full hover:bg-ink-light transition-colors whitespace-nowrap"
        >
          Get My Referral Link
        </a>
      </div>
    </section>
  )
}
