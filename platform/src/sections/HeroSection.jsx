/* layout: 'centered' (default) | 'split' | 'bottom' */
export default function HeroSection({ config }) {
  const layout = config.layout ?? 'centered'

  if (layout === 'split') return <HeroSplit config={config} />
  if (layout === 'bottom') return <HeroBottom config={config} />
  return <HeroCentered config={config} />
}

function CTAButtons({ config, dark }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a href={config.cta.href} className="font-demo-body px-7 py-3.5 rounded-full bg-demo-primary text-demo-bg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity text-center">
        {config.cta.label}
      </a>
      
      {config.ctaSecondary && (
        <a
          href={config.ctaSecondary.href}
          className={`font-demo-body px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors text-center ${
            dark
              ? 'bg-white/10 border border-white/30 text-white hover:bg-white/20'
              : 'border border-demo-primary/50 text-demo-text hover:border-demo-primary'
          }`}
        >
          {config.ctaSecondary.label}
        </a>
      )}
    </div>
  )
}

function StatsRow({ stats, dark }) {
  if (!stats?.length) return null
  const textVal = dark ? 'text-demo-primary' : 'text-demo-text'
  const textSub = dark ? 'text-white/50' : 'text-demo-muted'
  return (
    <div className={`flex gap-8 pt-6 border-t ${dark ? 'border-white/10' : 'border-demo-primary/15'}`}>
      {stats.map((s, i) => (
        <div key={i}>
          <p className={`text-2xl font-demo-heading font-black ${textVal}`}>{s.value}</p>
          <p className={`text-xs font-demo-body ${textSub} mt-0.5`}>{s.label}</p>
        </div>
      ))}
    </div>
  )
}

function HeroImages({ images }) {
  if (!images?.length) return null
  return (
    <div className="hidden md:grid grid-cols-2 grid-rows-3 gap-3 h-[440px]">
      {images.slice(0, 5).map((img, i) => (
        <div
          key={i}
          className={`rounded-2xl overflow-hidden relative group cursor-pointer ${i === 0 ? 'row-span-2' : ''}`}
          style={{ background: img.bg ?? 'var(--demo-surface)' }}
        >
          {img.src ? (
            <img src={img.src} alt={img.label ?? ''} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
              {img.emoji && <span className={i === 0 ? 'text-4xl' : 'text-2xl'}>{img.emoji}</span>}
              {img.label && <span className="text-xs tracking-widest uppercase text-demo-text/60">{img.label}</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Centered ── */
function HeroCentered({ config }) {
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
        {config.badge && (
          <span className={`inline-block font-demo-body text-xs tracking-[0.2em] uppercase border px-5 py-2 rounded-full mb-8 ${
            dark
              ? 'bg-demo-primary/25 border-demo-primary/50 text-demo-primary'
              : 'text-demo-primary border-demo-primary/30'
          }`}>
            {config.badge}
          </span>
        )}
        <h1 className={`font-demo-heading leading-none mb-5 text-5xl md:text-7xl lg:text-8xl ${dark ? 'text-white' : 'text-demo-text'}`}>
          {config.title}
          {config.titleHighlight && (
            <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
          )}
        </h1>
        {config.subtitle && (
          <p className={`font-demo-body text-base md:text-lg tracking-widest uppercase mb-5 ${dark ? 'text-demo-primary' : 'text-demo-primary'}`}>
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

/* ── Split (text left, image grid right) ── */
function HeroSplit({ config }) {
  return (
    <section id="hero" className="relative overflow-hidden bg-demo-bg pt-16">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--demo-primary), transparent 70%)', filter: 'blur(70px)' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 md:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Text column */}
        <div className="flex flex-col items-start gap-5">
          {config.badge && (
            <span className="inline-flex items-center gap-1.5 font-demo-body text-demo-primary text-xs tracking-[0.1em] uppercase border border-demo-primary/25 bg-demo-primary/10 px-4 py-1.5 rounded-full">
              {config.badge}
            </span>
          )}
          <h1 className="font-demo-heading text-demo-text leading-none text-[clamp(3rem,10vw,6rem)]">
            {config.title}
            {config.titleGlow && (
              <><br /><em className="not-italic text-demo-primary">{config.titleGlow}</em></>
            )}
          </h1>
          {config.subtitle && (
            <p className="font-demo-body text-demo-primary text-base md:text-lg">{config.subtitle}</p>
          )}
          <p className="font-demo-body text-demo-muted text-base leading-relaxed max-w-md">{config.description}</p>
          <CTAButtons config={config} />
          <StatsRow stats={config.stats} />
        </div>

        {/* Image column */}
        <HeroImages images={config.images} />

        {/* Mobile image grid (simplified) */}
        {config.images?.length > 0 && (
          <div className="md:hidden grid grid-cols-3 gap-2 mt-2">
            {config.images.slice(0, 3).map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative" style={{ background: img.bg ?? 'var(--demo-surface)' }}>
                {img.src ? (
                  <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
                ) : img.emoji && (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl opacity-60">{img.emoji}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Bottom (text at bottom, full-screen bg) — Brasa Viva style ── */
function HeroBottom({ config }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--demo-bg) 55%, var(--demo-primary) 45%) 0%, var(--demo-bg) 65%)' }} />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none opacity-25"
        style={{ background: 'var(--demo-primary)', filter: 'blur(120px)', borderRadius: '50%' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.97) 100%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-20 w-full text-center flex flex-col items-center">
        {config.badge && (
          <p className="font-demo-body text-demo-accent text-xs tracking-[0.3em] uppercase font-bold mb-3">{config.badge}</p>
        )}
        <h1 className="font-demo-heading text-white leading-none mb-5 text-5xl md:text-7xl">
          <span className="text-demo-accent">{config.titleAccent}</span>
          {config.titleAccent && <br />}
          {config.title}
        </h1>
        <p className="font-demo-body text-white/70 text-base md:text-xl max-w-xl mb-8 leading-relaxed">{config.description}</p>
        <CTAButtons config={config} dark />
        <StatsRow stats={config.stats} dark />
      </div>
    </section>
  )
}
