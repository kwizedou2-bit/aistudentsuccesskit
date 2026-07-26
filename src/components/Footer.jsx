const COLUMNS = [
  {
    title: 'Product',
    links: ['Product preview', 'Pricing', 'Dashboard', 'FAQ'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Study guides', 'Referral program'],
  },
  {
    title: 'Company',
    links: ['Contact', 'Support', 'Terms of service', 'Privacy policy'],
  },
]

const SOCIALS = ['Instagram', 'TikTok', 'X', 'LinkedIn']

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-20 pb-10 px-6 border-t border-paper/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="w-7 h-7 rounded-md bg-marker-lime flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-ink rounded-sm" />
              </span>
              Student Success Kit
            </div>
            <p className="mt-3 text-sm text-paper/50 leading-relaxed max-w-xs">
              AI prompts and planners built for students who want their time back.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-paper/70 hover:text-paper transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-paper/40">
            © {new Date().getFullYear()} AI Student Success Kit. All rights reserved.
          </p>
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a key={s} href="#top" className="font-mono text-xs text-paper/40 hover:text-paper/80 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
