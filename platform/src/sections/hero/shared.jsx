import Img from '../../components/Img'
import Icon from '../../components/Icon'

// row: los botones van en fila también en móvil, con menos relleno para que quepan
export function CTAButtons({ config, dark, row }) {
  const pad = row ? 'px-5 sm:px-7' : 'px-7'
  return (
    <div className={`flex ${row ? 'flex-row' : 'flex-col sm:flex-row'} gap-3`}>
      <a href={config.cta.href} className={`font-demo-body ${pad} py-3.5 rounded-full bg-demo-primary text-demo-bg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity text-center`}>
        {config.cta.label}
      </a>

      {config.ctaSecondary && (
        <a
          href={config.ctaSecondary.href}
          className={`font-demo-body ${pad} py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors text-center ${dark
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

export function StatsRow({ stats, dark }) {
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

export function HeroImages({ images }) {
  if (!images?.length) return null
  return (
    <div className="hidden md:grid grid-cols-2 grid-rows-3 gap-3 h-[440px]">
      {images.slice(0, 5).map((img, i) => (
        <div
          key={i}
          className={`rounded-2xl overflow-hidden relative group ${i === 0 ? 'row-span-2' : ''}`}
          style={{ background: img.bg ?? 'var(--demo-surface)' }}
        >
          {img.src ? (
            <Img src={img.src} alt={img.label ?? ''} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
              {img.icon && <Icon name={img.icon} size={i === 0 ? 40 : 28} className="text-demo-text" />}
              {img.label && <span className="text-xs tracking-widest uppercase text-demo-text/60">{img.label}</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function MobileSlideshow({ images, idx }) {
  return (
    <div className="md:hidden h-64 relative overflow-hidden">
      {images.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
          {img.src && <Img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />}
        </div>
      ))}
    </div>
  )
}

export function FeatureBar({ features, className, titleClass, descClass }) {
  if (!features?.length) return null
  return (
    <div className={`relative z-10 mx-4 md:mx-10 lg:mx-16 bg-white/5 border border-white/10 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className={`flex items-center gap-4 px-7 py-5 ${i > 0 ? 'sm:border-l border-t sm:border-t-0 border-white/10' : ''}`}>
            <div className="w-11 h-11 rounded-full border border-demo-primary/50 flex items-center justify-center flex-shrink-0">
              <Icon name={f.icon} size={20} className="text-demo-primary" />
            </div>
            <div>
              <p className={`font-demo-body text-xs font-bold uppercase tracking-[0.15em] mb-0.5 ${titleClass}`}>{f.title}</p>
              <p className={`font-demo-body text-xs leading-snug ${descClass}`}>{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
