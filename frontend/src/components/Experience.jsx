const typeBadge = {
  'Part-time': 'text-accent2 bg-accent2/10 border-accent2/20',
  'Full-time': 'text-accent bg-accent/10 border-accent/20',
  'Intern': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

export default function Experience({ experience }) {
  if (!experience) return null;

  return (
    <section id="experience" className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-xs font-medium tracking-[0.15em] uppercase mb-2">Experience</p>
        <h2 className="font-syne font-bold text-4xl tracking-tight mb-14">Where I've worked</h2>

        <div className="relative">
          {/* Vertical line — sits at left edge of the pl-8 meta column */}
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <div
                key={exp.id}
                className="md:grid md:grid-cols-[220px_1fr] gap-10 pb-14 last:pb-0 relative group"
              >
                {/* Timeline dot — centered on the vertical line */}
                <div className="hidden md:block absolute left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-accent group-hover:scale-125 transition-transform duration-200" />

                {/* Meta */}
                <div className="md:pl-8 mb-4 md:mb-0">
                  <p className="text-muted text-xs mb-2">{exp.period}</p>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                      typeBadge[exp.type] || typeBadge['Full-time']
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-bg border border-white/[0.07] rounded-xl p-6 hover:border-accent/20 transition-colors duration-200">
                  <h3 className="font-syne font-bold text-lg tracking-tight mb-0.5">{exp.role}</h3>
                  <p className="text-accent text-sm mb-5" style={{ opacity: 0.8 }}>{exp.company}</p>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm font-light" style={{ color: '#8888a0' }}>
                        <span className="text-accent mt-0.5 shrink-0" style={{ opacity: 0.6 }}>→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
