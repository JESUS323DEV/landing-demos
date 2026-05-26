export default function ServicesSection({ config }) {
  if (config.layout === 'cards') return <ServicesCards config={config} />

  return (
    <section id="services" className="py-24 bg-demo-surface">
      <div className="max-w-6xl mx-auto px-6">
        {config.label && (
          <p className="font-demo-body text-demo-primary text-xs tracking-[0.2em] uppercase mb-3">{config.label}</p>
        )}
        <h2 className="font-demo-heading text-demo-text text-4xl md:text-5xl mb-16">{config.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="text-4xl leading-none">{item.icon}</span>
              <h3 className="font-demo-heading text-demo-text text-xl">{item.title}</h3>
              <p className="font-demo-body text-demo-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesCards({ config }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-demo-bg">
      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center mb-14 flex flex-col gap-3 items-center">
          {config.label && (
            <span className="font-demo-body text-demo-primary text-xs font-bold tracking-[0.2em] uppercase">{config.label}</span>
          )}

          <h2 className="font-demo-heading text-demo-text text-3xl md:text-5xl">{config.title}</h2>
          {config.subtitle && (
            <p className="font-demo-body text-demo-muted max-w-md text-base">{config.subtitle}</p>
          )}
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.items.map((item, i) => (
            <div
              key={i}
              className={`group border border-demo-primary/15 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 ${item.featured ? 'md:-mt-5' : ''}`}
            >
              <div
                className="relative overflow-hidden aspect-[4/3] flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, var(--demo-surface), color-mix(in srgb, var(--demo-primary) 18%, var(--demo-surface)))` }}
              >
                {item.featuredBadge && (
                  <span className="absolute top-4 left-4 font-demo-body bg-demo-primary text-demo-bg text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {item.featuredBadge}
                  </span>
                )}
                <span className="font-demo-body text-demo-muted text-xs opacity-30">Imagen</span>
              </div>
              <div className="p-6 flex flex-col gap-2">
                {item.category && (
                  <span className="font-demo-body text-demo-primary text-xs font-medium tracking-widest uppercase">{item.category}</span>
                )}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-demo-heading text-demo-text text-lg leading-tight">{item.title}</h3>
                  {item.badge && (
                    <span className="font-demo-body bg-demo-primary/10 text-demo-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="font-demo-body text-demo-muted text-sm leading-relaxed">{item.description}</p>
                {item.price && (
                  <p className="font-demo-heading text-demo-primary font-bold text-xl mt-1">{item.price}</p>
                )}
                {item.link && (
                  <a
                    href={item.link.href}
                    className="font-demo-body text-demo-text text-sm font-medium mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {item.link.label} <span>&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          ))}

          {config.ctaCard && (
            <div className="bg-demo-accent rounded-2xl p-6 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                {config.ctaCard.label && (
                  <span className="font-demo-body text-demo-bg/60 text-xs font-medium tracking-widest uppercase">{config.ctaCard.label}</span>
                )}
                <h3 className="font-demo-heading text-demo-bg text-xl">{config.ctaCard.title}</h3>
                <p className="font-demo-body text-demo-bg/60 text-sm leading-relaxed">{config.ctaCard.description}</p>
              </div>
              {config.ctaCard.button && (
                <a
                  href={config.ctaCard.button.href}
                  className="inline-block font-demo-body border border-demo-bg text-demo-bg text-xs px-5 py-3 rounded-full text-center hover:bg-demo-bg hover:text-demo-accent transition-colors"
                >
                  {config.ctaCard.button.label}
                </a>
              )}
            </div>
          )}
        </div>

        {config.cta && (
          <div className="text-center mt-12">
            <a
              href={config.cta.href}
              className="inline-flex items-center gap-2 border-2 border-demo-primary text-demo-primary hover:bg-demo-primary hover:text-demo-bg font-demo-body font-bold px-9 py-4 rounded-full transition-all text-sm uppercase tracking-wider"
            >
              {config.cta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
