export default function Hero({ data }) {
  if (!data) return null;
  const { name, title, bio, email, linkedin, resumeUrl } = data;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Glow blobs */}
      <div className="absolute -top-52 -left-52 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent2/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-medium mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse2" />
          Open to opportunities · {data.location}
        </div>

        {/* Heading */}
        <h1
          className="font-syne font-extrabold leading-[1.05] tracking-tighter mb-6 animate-fade-up"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', animationDelay: '0.1s' }}
        >
          {name.split(' ')[0]}{' '}
          <span className="gradient-text">{name.split(' ').slice(1).join(' ')}</span>
          <br />
          <span className="text-muted font-light" style={{ fontSize: '55%' }}>
            {title}
          </span>
        </h1>

        {/* Bio */}
        <p
          className="text-muted text-lg font-light max-w-xl mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium text-sm hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in touch
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-white/10 text-white px-6 py-3 rounded-lg font-light text-sm hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-white/10 text-white px-6 py-3 rounded-lg font-light text-sm hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            Resume PDF
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-start gap-1 text-muted/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
