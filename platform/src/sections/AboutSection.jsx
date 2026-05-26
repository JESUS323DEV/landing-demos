/* Sección "nosotros" — layout 2 columnas: texto+stats | imagen/features */
export default function AboutSection({ config }) {
  const sectionBg = config.bg ?? 'bg-demo-surface'
  return (
    <section id="about" className={`py-20 md:py-28 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Texto */}
          <div className={`flex flex-col gap-5 ${config.flip ? 'md:order-2' : ''}`}>
            {config.label && (
              <span className="font-demo-body text-demo-primary text-xs tracking-[0.2em] uppercase font-semibold">{config.label}</span>
            )}

            <h2 className="font-demo-heading text-demo-text text-3xl md:text-5xl leading-tight">
              {config.title}
              {config.titleHighlight && (
                <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
              )}
            </h2>
            
            {config.paragraphs?.map((p, i) => (
              <p key={i} className="font-demo-body text-demo-muted text-base leading-relaxed">{p}</p>
            ))}

            {/* Feature pills (Selva Club style) */}
            {config.pills && (
              <div className="flex flex-col gap-3 mt-2">
                {config.pills.map((pill, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 bg-demo-bg border border-demo-primary/10 rounded-2xl hover:border-demo-primary/30 transition-colors">
                    <span className="text-xl flex-shrink-0 mt-0.5">{pill.icon}</span>
                    <div>
                      <strong className="block text-demo-text text-sm font-semibold mb-0.5">{pill.title}</strong>
                      <p className="text-demo-muted text-sm font-demo-body">{pill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Stats row */}
            {config.stats && (
              <div className="grid grid-cols-3 gap-4 border-t border-demo-primary/15 pt-8 mt-2">
                {config.stats.map((s, i) => (
                  <div key={i} className={`text-center ${i > 0 ? 'border-l border-demo-primary/15' : ''}`}>
                    <p className="font-demo-heading text-demo-primary text-3xl">{s.value}</p>
                    <p className="font-demo-body text-demo-muted text-xs mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {config.cta && (
              <a href={config.cta.href} className="self-start font-demo-body px-7 py-3 rounded-full bg-demo-accent text-demo-bg text-sm font-semibold mt-2 hover:opacity-90 transition-opacity">
                {config.cta.label}
              </a>
            )}
          </div>

          {/* Columna derecha: imagen o feature cards */}
          <div className={config.flip ? 'md:order-1' : ''}>
            {config.features ? (
              <FeatureCards features={config.features} />
            ) : (
              <ImageCol config={config} />
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

function FeatureCards({ features }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map((f, i) => (
        <div
          key={i}
          className={`rounded-2xl p-6 flex flex-col gap-3 shadow-sm ${
            f.dark ? 'bg-demo-accent text-demo-bg' : 'bg-demo-bg border border-demo-primary/10'
          }`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${f.dark ? 'bg-demo-bg/15' : 'bg-demo-primary/10'}`}>
            <span className="text-xl">{f.icon}</span>
          </div>
          <h3 className={`font-demo-heading text-lg ${f.dark ? '' : 'text-demo-text'}`}>{f.title}</h3>
          <p className={`font-demo-body text-sm leading-relaxed ${f.dark ? 'opacity-70' : 'text-demo-muted'}`}>{f.description}</p>
        </div>
      ))}
    </div>
  )
}

function ImageCol({ config }) {
  return (
    <div className="relative">
      <div
        className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, var(--demo-surface) 0%, color-mix(in srgb, var(--demo-primary) 20%, var(--demo-surface)) 100%)` }}
      >
        <span className="font-demo-body text-demo-muted text-sm opacity-40">{config.imagePlaceholder ?? 'Foto del local'}</span>
      </div>
      {config.badge && (
        <div className="absolute -bottom-5 -left-5 bg-demo-primary text-demo-bg rounded-2xl p-5 shadow-2xl">
          <p className="font-demo-heading text-2xl leading-none">{config.badge.value}</p>
          <p className="font-demo-body text-xs font-bold uppercase tracking-wide leading-tight mt-1 opacity-80">{config.badge.label}</p>
        </div>
      )}
    </div>
  )
}
