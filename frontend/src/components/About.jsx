export default function About({ hero, education }) {
  if (!hero || !education) return null;

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <p className="text-accent text-xs font-medium tracking-[0.15em] uppercase mb-2">About</p>
      <h2 className="font-syne font-bold text-4xl tracking-tight mb-14">Who I am</h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <div>
          <p className="text-muted text-lg font-light leading-relaxed mb-6">{hero.bio}</p>
          <p className="text-muted font-light leading-relaxed">
            I'm driven by a deep curiosity for how systems work from distributed backends to
            neural network architectures. Whether it's shipping a full-stack product or running a
            training pipeline, I care about code that's clean, scalable, and reliable.
          </p>
        </div>

        {/* Education + Stats */}
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-surface border border-white/[0.07] rounded-xl p-5 hover:border-accent/25 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-sm text-white mb-0.5">{edu.school}</p>
                  <p className="text-muted text-sm">{edu.degree}</p>
                  <p className="text-muted text-sm  ">{edu.cgpa}</p>
                  {edu.note && (
                    <span className="inline-block mt-2 text-xs bg-accent/10 text-accent border border-accent/20 px-2.5 py-0.5 rounded-full">
                      {edu.note}
                    </span>
                  )}
                </div>
                <span className="text-muted text-xs whitespace-nowrap">{edu.period}</span>
              </div>
            </div>
          ))}

          {/* Quick stat chips */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { num: '3+', label: 'Years of experience' },
              { num: '4', label: 'Featured projects' },
              { num: '180+', label: 'Test cases automated' },
              { num: '2', label: 'Cloud platforms' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="bg-surface border border-white/[0.07] rounded-xl p-4 hover:border-accent/25 transition-colors duration-200"
              >
                <p className="font-syne font-bold text-2xl text-accent">{num}</p>
                <p className="text-muted text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
