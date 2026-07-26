const POSTS = [
  {
    tag: 'AI study tips',
    title: '7 AI prompts that make revision sessions shorter',
    desc: 'The exact prompts that turn a textbook chapter into a study-ready summary in minutes.',
  },
  {
    tag: 'Productivity',
    title: 'How to plan a study week when everything feels urgent',
    desc: 'A simple method for sorting real deadlines from busywork before you open a single tab.',
  },
  {
    tag: 'Student success',
    title: 'What separates students who finish strong from those who burn out',
    desc: 'Patterns from students who kept their pace through finals season without crashing.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-paper py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Resources</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mt-3 max-w-xl text-ink">
          Guides worth reading, even before you upgrade
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="bg-white border border-ink/10 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 transition-all cursor-pointer"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                {p.tag}
              </span>
              <h3 className="font-display font-semibold text-lg mt-3 text-ink leading-snug">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm text-ink/60 leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-4 text-sm font-medium text-ink underline decoration-marker-lime decoration-2 underline-offset-4">
                Read the guide
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
