import { useEffect, useState } from 'react'

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Offer() {
  const [target] = useState(() => Date.now() + 4 * 24 * 60 * 60 * 1000)
  const [time, setTime] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    ['Days', time.days],
    ['Hours', time.hours],
    ['Min', time.minutes],
    ['Sec', time.seconds],
  ]

  return (
    <section className="bg-marker-pink/95 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">Launch offer</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mt-2 text-ink">
            Premium is $5 for launch week only.
          </h2>
          <p className="mt-2 text-ink/70 text-sm max-w-md">
            Price returns to $19 once the countdown ends — lock it in now and keep it for as long
            as you use the kit.
          </p>
        </div>

        <div className="flex gap-3">
          {units.map(([label, value]) => (
            <div key={label} className="bg-ink text-paper rounded-xl w-16 py-3 text-center">
              <div className="font-display font-semibold text-2xl tabular-nums">
                {String(value).padStart(2, '0')}
              </div>
              <div className="font-mono text-[10px] text-paper/50 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="#payment"
          className="inline-block font-semibold bg-ink text-paper px-7 py-3.5 rounded-full hover:bg-ink-light transition-colors"
        >
          Claim the $5 Launch Price
        </a>
      </div>
    </section>
  )
}
