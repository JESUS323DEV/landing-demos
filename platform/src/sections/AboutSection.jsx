import Img from '../components/Img'
import Icon from '../components/Icon'
/* Sección "nosotros" — layout 2 columnas: texto+stats | imagen/features */
export default function AboutSection({ config }) {
  const sectionBg = config.bg ?? 'bg-demo-surface'
  const hasImage = Boolean(config.image?.src)
  return (
    <section id="about" className={`py-20 md:py-28 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className={`grid grid-cols-1 gap-12 md:gap-20 items-center ${hasImage ? 'md:grid-cols-2' : 'max-w-2xl'}`}>

          {/* Texto */}
          <div className={`flex flex-col gap-5 ${config.flip ? 'md:order-2' : ''}`}>
            <h2 className="font-demo-heading text-demo-text text-3xl md:text-5xl leading-tight text-center md:text-left">
              {config.title}
              {config.titleHighlight && (
                <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
              )}
            </h2>
            
            {config.paragraphs?.map((p, i) => (
              <p key={i} className="font-demo-body text-demo-muted text-base leading-relaxed">{p}</p>
            ))}

            {/* Feature pills (estilo píldoras) */}
            {config.pills && (
              <div className="flex flex-col gap-3 mt-2">
                {config.pills.map((pill, i) => (
                  <div key={i} className="flex items-start gap-3.5 p-4 bg-demo-bg border border-demo-primary/10 rounded-2xl hover:border-demo-primary/30 transition-colors">
                    <Icon name={pill.icon} size={20} className="flex-shrink-0 mt-0.5 text-demo-primary" />
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
              <a href={config.cta.href} className="self-center md:self-start font-demo-body px-7 py-3 rounded-full bg-demo-accent text-demo-bg text-sm font-semibold mt-2 hover:opacity-90 transition-opacity">
                {config.cta.label}
              </a>
            )}
          </div>

          {/* Columna derecha: la imagen, si la hay */}
          {hasImage && (
            <div className={config.flip ? 'md:order-1' : ''}>
              <ImageCol config={config} />
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

function ImageCol({ config }) {
  return (
    <div className="relative">
      <div
        className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, var(--demo-surface) 0%, color-mix(in srgb, var(--demo-primary) 20%, var(--demo-surface)) 100%)` }}
      >
        {config.image?.src
          ? <Img src={config.image.src} alt={config.image.alt ?? ''} className="w-full h-full object-cover" />
          : <span className="font-demo-body text-demo-muted text-sm opacity-40">{config.imagePlaceholder ?? 'Foto del local'}</span>
        }
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
