const typeColors = {
  'ML / AI': 'text-accent2 bg-accent2/10 border-accent2/20',
  'Full Stack': 'text-accent bg-accent/10 border-accent/20',
  'Data & Visualization': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'ML / Graph': 'text-accent2 bg-accent2/10 border-accent2/20',
};

export default function Projects({ projects }) {
  if (!projects) return null;

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-xs font-medium tracking-[0.15em] uppercase mb-2">Projects</p>
        <h2 className="font-syne font-bold text-4xl tracking-tight mb-14">Things I've built</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="card-hover-line bg-surface border border-white/[0.07] rounded-2xl p-7 flex flex-col hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="text-[#8888a0] opacity-50 text-xs font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                    typeColors[project.type] || 'text-accent bg-accent/10 border-accent/20'
                  }`}
                >
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-syne font-bold text-xl tracking-tight mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-muted text-sm font-light leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6 flex-1">
                {project.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-2 text-sm" style={{ color: 'rgba(136,136,160,0.8)' }}>
                    <span className="text-accent mt-0.5 shrink-0">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[0.06]">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-muted"
                  >
                    {s}
                  </span>
                ))}
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto text-xs text-accent hover:opacity-70 transition-opacity flex items-center gap-1"
                  >
                    GitHub
                    <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
