import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#preview', label: 'Product' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#blog', label: 'Resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg text-ink">
          <span className="w-7 h-7 rounded-md bg-ink flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-marker-lime rounded-sm" />
          </span>
          Student Success Kit
        </a>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-ink/70">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors">
            Start Free
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold bg-ink text-paper px-4 py-2 rounded-full hover:bg-ink-light transition-colors"
          >
            Get Premium
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 h-0.5 bg-ink mb-1.5" />
          <div className="w-6 h-0.5 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink/80 font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="text-center font-semibold bg-ink text-paper px-4 py-2.5 rounded-full"
          >
            Get Premium
          </a>
        </div>
      )}
    </header>
  )
}
