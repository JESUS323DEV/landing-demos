import Img from '../../components/Img'


/* ── Gallery Top (galería 5 imgs arriba, texto centrado abajo) ── */
export default function HeroGalleryTop({ config }) {
  const images = config.images ?? []

  return (
    <section id="hero" className="flex flex-col min-h-screen bg-demo-bg overflow-hidden">

      {/* Galería desktop */}
      <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2 p-2 h-[58vh]">
        {images.slice(0, 5).map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl ${i === 0 ? 'row-span-2' : ''}`}
            style={{ background: img.bg ?? 'var(--demo-surface)' }}
          >
            {img.src && <Img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />}
            {!img.src && img.label && (
              <div className="absolute inset-0 flex items-end p-4">
                <span className="font-demo-body text-white/30 text-xs tracking-widest uppercase">{img.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Galería mobile: solo imagen principal */}
      <div className="md:hidden h-[45vw] min-h-[220px] relative overflow-hidden">
        {images[0]?.src
          ? <Img src={images[0].src} alt={images[0].label ?? ''} className="w-full h-full object-cover" />
          : <div className="w-full h-full" style={{ background: images[0]?.bg ?? 'var(--demo-surface)' }} />
        }
        <div className="absolute inset-0 bg-gradient-to-t from-demo-bg/80 to-transparent" />
      </div>

      {/* Texto */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10 md:py-14">
        {config.eyebrow && (
          <p className="font-demo-body text-demo-primary text-xs tracking-[0.3em] uppercase mb-5">
            {config.eyebrow}
          </p>
        )}
        <h1
          className="font-demo-heading text-demo-text leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
        >
          {config.title}
          {config.titleHighlight && (
            <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
          )}
        </h1>
        <p className="font-demo-body text-demo-muted text-base leading-relaxed max-w-lg mb-8">
          {config.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={config.cta.href} className="font-demo-body bg-demo-primary text-demo-bg px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity text-center">
            {config.cta.label}
          </a>
          {config.ctaSecondary && (
            <a href={config.ctaSecondary.href} className="font-demo-body border border-demo-primary/40 text-demo-text px-8 py-3.5 rounded-full text-sm font-semibold hover:border-demo-primary transition-colors text-center">
              {config.ctaSecondary.label}
            </a>
          )}
        </div>
      </div>

    </section>
  )
}
