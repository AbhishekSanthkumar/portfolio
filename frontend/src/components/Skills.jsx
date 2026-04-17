const categoryColors = {
  'Languages': 'accent',
  'Frontend & Frameworks': 'accent2',
  'Backend & Databases': 'accent',
  'ML & Data': 'accent2',
  'Testing & Automation': 'accent',
  'Tools & Cloud': 'accent2',
};

export default function Skills({ skills }) {
  if (!skills) return null;

  return (
    <section id="skills" className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-xs font-medium tracking-[0.15em] uppercase mb-2">Skills</p>
        <h2 className="font-syne font-bold text-4xl tracking-tight mb-14">What I work with</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-bg border border-white/[0.07] rounded-xl p-6 hover:border-accent/25 hover:-translate-y-1 transition-all duration-200"
            >
              <p
                className={`text-xs font-medium tracking-[0.1em] uppercase mb-4 ${
                  categoryColors[group.category] === 'accent2' ? 'text-accent2' : 'text-accent'
                }`}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
