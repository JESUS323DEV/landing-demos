import { CTAButtons, StatsRow } from './shared'

/* ── Centered ── */
export default function HeroCentered({ config }) {
  const dark = config.dark ?? false
  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${dark ? 'bg-demo-accent' : 'bg-demo-bg'}`}>
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 40%, var(--demo-primary), transparent)` }}
      />
      {dark && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)' }} />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <h1 className={`font-demo-heading leading-none mb-5 text-5xl md:text-7xl lg:text-8xl ${dark ? 'text-white' : 'text-demo-text'}`}>
          {config.title}
          {config.titleHighlight && (
            <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
          )}
        </h1>
        {config.subtitle && (
          <p className={`font-demo-body text-base md:text-lg tracking-widest uppercase mb-5 text-demo-primary`}>
            {config.subtitle}
          </p>
        )}
        <p className={`font-demo-body text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 ${dark ? 'text-white/75' : 'text-demo-muted'}`}>
          {config.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <CTAButtons config={config} dark={dark} />
        </div>
        {config.stats && (
          <div className="flex justify-center mt-10">
            <StatsRow stats={config.stats} dark={dark} />
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <span className={`font-demo-body text-xs tracking-widest uppercase ${dark ? 'text-white' : 'text-demo-muted'}`}>Scroll</span>
        <div className={`w-px h-8 ${dark ? 'bg-white' : 'bg-demo-muted'}`} />
      </div>
    </section>
  )
}
