import Img from '../components/Img'
import { useEffect, useRef, useState } from 'react'
import Icon from '../components/Icon'
export default function ServicesSection({ config }) {
  if (config.layout === 'cards') return <ServicesCards config={config} />

  return (
    <section id="services" className="py-24 bg-demo-surface">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-demo-heading text-demo-text text-4xl md:text-5xl mb-16 text-center md:text-left">{config.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Icon name={item.icon} size={36} strokeWidth={1.5} className="text-demo-primary" />
              <h3 className="font-demo-heading text-demo-text text-xl">{item.title}</h3>
              <p className="font-demo-body text-demo-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaCard({ card }) {
  return (
          <div className={`${card.tone === 'primary' ? 'bg-demo-primary' : 'bg-demo-accent'} rounded-2xl p-6 flex flex-col justify-between gap-6`}>
            <div className="flex flex-col gap-3">
              {card.label && (
                <span className="font-demo-body text-demo-bg/60 text-xs font-medium tracking-widest uppercase">{card.label}</span>
              )}
              <h3 className="font-demo-heading text-demo-bg text-xl">{card.title}</h3>
              <p className="font-demo-body text-demo-bg/60 text-sm leading-relaxed">{card.description}</p>
            </div>
            {card.button && (
              <a
                href={card.button.href}
                className={`inline-block font-demo-body border border-demo-bg text-demo-bg text-xs px-5 py-3 rounded-full text-center hover:bg-demo-bg transition-colors ${card.tone === 'primary' ? 'hover:text-demo-primary' : 'hover:text-demo-accent'}`}
              >
                {card.button.label}
              </a>
            )}
          </div>
  )
}

/* Móvil: carrusel lateral de tarjetas con la foto de fondo. Avanza solo y se pausa al tocarlo */
function ServiceCarousel({ items }) {
  const ref = useRef(null)
  const [paused, setPaused] = useState(false)
  const resume = useRef(null)

  useEffect(() => {
    const el = ref.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || paused || reduced || items.length < 2) return
    const id = setInterval(() => {
      const kids = Array.from(el.children)
      const center = el.scrollLeft + el.clientWidth / 2
      // La tarjeta más cercana al centro es la actual; se pasa a la siguiente
      let cur = 0
      kids.forEach((k, i) => {
        if (Math.abs(k.offsetLeft + k.offsetWidth / 2 - center) < Math.abs(kids[cur].offsetLeft + kids[cur].offsetWidth / 2 - center)) cur = i
      })
      const next = kids[(cur + 1) % kids.length]
      el.scrollTo({ left: next.offsetLeft - (el.clientWidth - next.offsetWidth) / 2, behavior: 'smooth' })
    }, 3800)
    return () => clearInterval(id)
  }, [paused, items.length])

  const pause = () => {
    setPaused(true)
    clearTimeout(resume.current)
    resume.current = setTimeout(() => setPaused(false), 5000)
  }

  return (
    <div
      ref={ref}
      onTouchStart={pause}
      onMouseDown={pause}
      className="md:hidden -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[11%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, i) => (
        <article
          key={i}
          className="relative aspect-[3/4] w-[78%] flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-demo-surface"
          style={item.image?.src ? undefined : { background: 'linear-gradient(135deg, var(--demo-surface), color-mix(in srgb, var(--demo-primary) 30%, var(--demo-surface)))' }}
        >
          {item.image?.src && (
            <Img src={item.image.src} alt={item.image.alt ?? item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-white">
            {item.category && (
              <span className="font-demo-body text-[11px] uppercase tracking-[0.2em] text-white/75">{item.category}</span>
            )}
            <h3 className="font-demo-heading text-2xl leading-tight">{item.title}</h3>
            {item.link && (
              <a href={item.link.href} className="font-demo-body mt-1 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-white/85">
                {item.link.label} <span>&rarr;</span>
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

function ServicesCards({ config }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-demo-bg">
      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center mb-14 flex flex-col gap-3 items-center">
          <h2 className="font-demo-heading text-demo-text text-3xl md:text-5xl">{config.title}</h2>
          {config.subtitle && (
            <p className="font-demo-body text-demo-muted max-w-md text-base">{config.subtitle}</p>
          )}
          
        </div>

        <ServiceCarousel items={config.items} />
        {config.ctaCard && (
          <div className="md:hidden mt-6">
            <CtaCard card={config.ctaCard} />
          </div>
        )}

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {item.image?.src
                  ? <Img src={item.image.src} alt={item.image.alt ?? item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  : <span className="font-demo-body text-demo-muted text-xs opacity-30">Imagen</span>}
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

          {config.ctaCard && <CtaCard card={config.ctaCard} />}
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
