import { CTAButtons, StatsRow, HeroImages } from './shared'

/* ── Split (text left, image grid right) ── */
export default function HeroSplit({ config }) {
  return (
    <section id="hero" className="relative overflow-hidden bg-demo-bg pt-16">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--demo-primary), transparent 70%)', filter: 'blur(70px)' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 md:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Text column */}
        <div className="flex flex-col items-start gap-5">
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
