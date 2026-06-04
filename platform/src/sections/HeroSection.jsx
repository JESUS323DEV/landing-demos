import { useState, useEffect } from 'react'

/* layout: 'centered' (default) | 'split' | 'bottom' | 'editorial' | 'immersive' | 'showcase' | 'bold' */
export default function HeroSection({ config }) {
  const layout = config.layout ?? 'centered'

  if (layout === 'split')     return <HeroSplit config={config} />
  if (layout === 'bottom')    return <HeroBottom config={config} />
  if (layout === 'editorial') return <HeroEditorial config={config} />
  if (layout === 'immersive') return <HeroImmersive config={config} />
  if (layout === 'showcase')  return <HeroShowcase config={config} />
  if (layout === 'bold')      return <HeroBold config={config} />
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
          className={`font-demo-body px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors text-center ${dark
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

/* ── Editorial (texto izquierda, imagen derecha con corte diagonal) ── */
function HeroEditorial({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % images.length), 4500)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section id="hero" className="relative bg-demo-bg overflow-hidden">
      <div className="relative flex  items-center min-h-[600px] md:min-h-[680px]">

        {/* Texto */}
        <div className="relative z-10 w-full md:w-[50%] xl:mx-25 px-8 md:px-14 lg:px-24 pt-28 pb-8 md:pb-20 flex flex-col justify-center">
          <h1 className="font-demo-heading text-demo-text leading-[1.05] text-[clamp(2.6rem,5vw,4.5rem)] mb-5">
            {config.title}
            {config.titleHighlight && (
              <><br /><em className="not-italic text-demo-primary">{config.titleHighlight}</em></>
            )}
            {config.titleGlow && (
              <><br /><em className="not-italic text-demo-primary">{config.titleGlow}</em></>
            )}
          </h1>
          <p className="font-demo-body text-demo-muted text-base leading-relaxed max-w-xs mb-8">
            {config.description}
          </p>

          <div className="flex gap-3">
            <a href={config.cta.href} className="border rounded-full p-3 bg-demo-primary text-demo-bg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity text-center">
              {config.cta.label}
            </a>
            {config.ctaSecondary && (
              <a href={config.ctaSecondary.href} className="border rounded-full p-3 bg-demo-primary text-demo-bg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity text-center">
                {config.ctaSecondary.label}
              </a>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex items-center gap-2 mt-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-8 bg-demo-primary' : 'w-3 bg-demo-primary/25 hover:bg-demo-primary/50'
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Imagen con corte diagonal en el borde izquierdo */}
        <div
          className="hidden md:block absolute right-0 inset-y-0 w-[46%] xl:w-[60%] "
          style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity  duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
            >
              {img.src
                ? <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
                : <div className="w-full h-full" style={{ background: img.bg ?? 'var(--demo-surface)' }} />
              }
            </div>
          ))}
        </div>

      </div>

      {/* Móvil: imagen debajo del texto */}
      <div className="md:hidden h-64 relative overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
            {img.src && <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />}
          </div>
        ))}
      </div>
    </section>
  )
}




/* ── Immersive (pantalla completa oscura, galería derecha, barra de features abajo) ── */
function HeroImmersive({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section id="hero" className="relative min-h-screen  flex flex-col bg-demo-accent overflow-hidden">

      {/* Área principal */}
      <div className="flex-1 relative min-h-[580px] md:min-h-[660px]">

        {/* Imagen — absolute por detrás del texto en md+, empieza desde el 38% */}
        <div className="hidden md:block absolute inset-y-0 left-[38%] right-0">
          {images.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
              {img.src
                ? <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
                : <div className="w-full h-full flex items-center justify-center" style={{ background: img.bg ?? 'rgba(255,255,255,0.04)' }}>
                    {img.emoji && <span className="text-8xl opacity-15">{img.emoji}</span>}
                  </div>
              }
            </div>
          ))}
          {/* Degradado cubre el solapamiento con el texto */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-demo-accent to-transparent pointer-events-none" />
          {/* Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-5 right-8 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-6 bg-demo-primary' : 'w-2.5 bg-white/25'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Texto — encima de la imagen en md+ */}
        <div className="relative z-10 flex flex-col justify-center md:w-[72%] md:mt-30 px-8 md:px-14 pt-28 pb-10 md:py-24 h-full">
          <h1 className="font-demo-heading text-white leading-[0.92] text-[clamp(3rem,9vw,8.5rem)] mb-5 min-[1400px]:w-[90%] ">
            {config.title}
            {config.titleHighlight && (
              <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
            )}
          </h1>
          <div className="w-10 h-0.5 bg-demo-primary mb-6" />
          <p className="font-demo-body text-white/60 text-base leading-relaxed max-w-sm mb-8">
            {config.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={config.cta.href} className="inline-flex items-center justify-center gap-2 font-demo-body bg-demo-primary text-demo-bg text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity">
              {config.cta.label}
            </a>
            {config.ctaSecondary && (
              <a href={config.ctaSecondary.href} className="inline-flex items-center justify-center gap-2 font-demo-body border border-white/25 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:border-white/50 transition-colors">
                {config.ctaSecondary.label} <span>→</span>
              </a>
            )}
          </div>
        </div>

        {/* Móvil: imagen debajo del texto */}
        <div className="md:hidden h-64 relative overflow-hidden">
          {images.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
              {img.src && <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />}
            </div>
          ))}
        </div>
      </div>

      {/* Barra de features */}
      {config.features?.length > 0 && (
        <div className="relative z-10 mt-8 mx-4 md:mx-10 lg:mx-16 mb-10 bg-white/5 border border-white/10 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {config.features.map((f, i) => (
              <div key={i} className={`flex items-center gap-4 px-7 py-5 ${i > 0 ? 'sm:border-l border-t sm:border-t-0 border-white/10' : ''}`}>
                <div className="w-11 h-11 rounded-full border border-demo-primary/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{f.icon}</span>
                </div>
                <div>
                  <p className="font-demo-body text-white text-xs font-bold uppercase tracking-[0.15em] mb-0.5">{f.title}</p>
                  <p className="font-demo-body text-white/45 text-xs leading-snug">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


    </section>
  )
}

/* ── Bold (fondo oscuro puro, tipografía impacto, imagen ocupa 73% desde izquierda, franja info) ── */
function HeroBold({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % images.length), 4200)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section id="hero" className="relative flex flex-col bg-demo-bg overflow-hidden">

      {/* Área principal */}
      <div className="relative flex-1 min-h-[600px] md:min-h-screen">

        {/* Imagen — ocupa desde el 27% hacia la derecha */}
        <div className="hidden md:block absolute inset-y-0 left-[27%] right-0">
          {images.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
              {img.src
                ? <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
                : <div className="w-full h-full bg-demo-surface" />
              }
            </div>
          ))}
          {/* Degradado de fusión izquierda */}
          <div className="absolute inset-y-0 left-0 w-80 bg-gradient-to-r from-demo-bg to-transparent pointer-events-none" />
          {/* Degradado inferior sutil */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-demo-bg/60 to-transparent pointer-events-none" />
          {/* Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-6 right-8 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-6 bg-demo-primary' : 'w-3 bg-white/25'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Texto — centrado verticalmente en pantalla completa */}
        <div className="relative z-10 flex flex-col justify-center px-8  md:px-16 xl:mx-40 pt-32 lg:pt-0 pb-12 md:pt-0 md:min-h-screen md:max-w-[58%]">
          <h1
            className="font-demo-heading uppercase text-demo-text leading-[0.88] mb-6"
            style={{ fontSize: 'clamp(4rem, 11vw, 9.5rem)' }}
          >
            {config.title}
            {config.titleHighlight && (
              <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
            )}
          </h1>

          {/* Separador decorativo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-demo-primary rounded-full" />
            <div className="w-3 h-[2px] bg-demo-primary/30 rounded-full" />
          </div>

          <p className="font-demo-body text-demo-text/60 text-base leading-relaxed max-w-sm mb-8">
            {config.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={config.cta.href}
              className="inline-flex items-center justify-center gap-2 font-demo-body bg-demo-primary text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              {config.cta.label}
            </a>
            {config.ctaSecondary && (
              <a
                href={config.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 font-demo-body border border-white/20 text-demo-text text-sm font-semibold px-7 py-3.5 rounded-full hover:border-white/40 transition-colors"
              >
                {config.ctaSecondary.label} <span>→</span>
              </a>
            )}
          </div>
        </div>

        {/* Móvil: imagen debajo del texto */}
        <div className="md:hidden h-64 relative overflow-hidden">
          {images.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
              {img.src && <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />}
            </div>
          ))}
        </div>
      </div>

      {/* Barra de features */}
      {config.features?.length > 0 && (
        <div className="relative z-10 mx-4 md:mx-10 lg:mx-16 mb-0 bg-white/5 border border-white/10 rounded-t-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {config.features.map((f, i) => (
              <div key={i} className={`flex items-center gap-4 px-7 py-5 ${i > 0 ? 'sm:border-l border-t sm:border-t-0 border-white/10' : ''}`}>
                <div className="w-11 h-11 rounded-full border border-demo-primary/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{f.icon}</span>
                </div>
                <div>
                  <p className="font-demo-body text-demo-text text-xs font-bold uppercase tracking-[0.15em] mb-0.5">{f.title}</p>
                  <p className="font-demo-body text-demo-text/40 text-xs leading-snug">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Franja de info rápida */}
      {config.quickInfo?.length > 0 && (
        <div className="relative z-10 mx-4 md:mx-10 lg:mx-16 border-t border-white/10 bg-demo-surface/60 rounded-b-2xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {config.quickInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-7 py-4">
                <span className="text-demo-primary text-base flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-demo-body text-demo-text/40 text-[10px] uppercase tracking-widest leading-none mb-1">{item.label}</p>
                  <p className="font-demo-body text-demo-text text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  )
}

/* ── Showcase (fondo claro, texto izquierda, imagen redondeada derecha, stats) ── */
function HeroShowcase({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % images.length), 4500)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section id="hero" className="relative bg-demo-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[680px]">

        {/* Texto */}
        <div className="flex flex-col gap-5 pt-28 pb-10 md:py-20">
          {config.badge && (
            <span className="font-demo-body text-demo-text text-xs font-bold tracking-[0.2em] uppercase opacity-60">{config.badge}</span>
          )}

          <h1 className="font-demo-heading text-demo-text leading-[0.9] text-[clamp(3.2rem,7vw,6.5rem)]">
            {config.titleAccent && <>{config.titleAccent}<br /></>}
            {config.title}
            {config.titleHighlight && (
              <span className="text-demo-primary underline decoration-demo-primary decoration-[3px] underline-offset-4">
                {config.titleHighlight}
              </span>
            )}
            {config.titleSuffix}
          </h1>

          <p className="font-demo-body text-demo-muted text-base leading-relaxed max-w-sm">
            {config.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={config.cta.href} className="inline-flex items-center justify-center gap-2 font-demo-body bg-demo-primary text-demo-bg text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity">
              {config.cta.label}
            </a>
            {config.ctaSecondary && (
              <a href={config.ctaSecondary.href} className="inline-flex items-center justify-center gap-2 font-demo-body border-2 border-demo-text/20 text-demo-text text-sm font-semibold px-7 py-3.5 rounded-full hover:border-demo-text/50 transition-colors">
                {config.ctaSecondary.label} <span>→</span>
              </a>
            )}
          </div>

          {config.stats?.length > 0 && (
            <div className="flex gap-6 md:gap-8 pt-6 border-t border-demo-primary/15 mt-2">
              {config.stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  {s.icon && (
                    <div className="w-10 h-10 rounded-full bg-demo-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-base">{s.icon}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-demo-heading text-demo-text text-lg font-bold leading-none">{s.value}</p>
                    <p className="font-demo-body text-demo-muted text-xs mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Imagen redondeada */}
        <div className="relative pb-10 md:py-16">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] md:h-[500px] md:aspect-auto">
            {images.map((img, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
                {img.src
                  ? <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
                  : <div className="w-full h-full" style={{ background: img.bg ?? 'var(--demo-surface)' }} />
                }
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-6 bg-demo-primary' : 'w-2.5 bg-demo-primary/25'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
