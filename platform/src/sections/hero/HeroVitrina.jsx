import useSlideshow from './useSlideshow'
import { CTAButtons } from './shared'

/* ── Vitrina: cabecera editorial y dos escaparates que van cambiando de producto, con su nombre ──
   config: kicker, meta, title, titleHighlight, description, shelfLabel, products[{ name, image }], cta, ctaSecondary */

// Un escaparate: apila todas las fotos y los nombres y deja visible solo el del producto activo
function Slot({ products, active, className = '' }) {
  return (
    <div className={className}>
      <div className="relative aspect-[3/4] overflow-hidden bg-demo-surface">
        {products.map((p, i) => (
          <img
            key={i}
            src={p.image}
            alt={p.name}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="relative mt-3 h-6">
        {products.map((p, i) => (
          <p
            key={i}
            className={`absolute inset-0 text-center font-demo-heading text-base leading-6 text-demo-text transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
          >
            {p.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function HeroVitrina({ config }) {
  const products = (config.products ?? []).filter(p => p.image)
  const [step] = useSlideshow(products.length, 3400)

  // Cada paso avanza dos productos: los dos escaparates cambian a la vez
  const n = Math.max(products.length, 1)
  const first = (step * 2) % n
  const second = (step * 2 + 1) % n

  return (
    <section id="hero" className="relative bg-demo-bg overflow-hidden pt-20 pb-14 md:pb-20">
      <div className="mx-auto max-w-6xl px-5">

        {/* Franja superior */}
        <div className="flex items-center justify-between gap-4 border-b border-demo-text/20 pb-3 font-demo-body text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-demo-muted">
          <span>{config.kicker}</span>
          {config.meta && <span className="hidden sm:block">{config.meta}</span>}
        </div>

        {/* Titular */}
        <div className="text-center pt-10 md:pt-14">
          <h1 className="font-demo-heading text-demo-text leading-[0.95] tracking-tight text-[clamp(3rem,9vw,8rem)]">
            {config.title}
            {config.titleHighlight && (
              <><br /><em className="italic font-normal">{config.titleHighlight}</em></>
            )}
          </h1>
          {config.description && (
            <p className="font-demo-body text-demo-muted text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6">{config.description}</p>
          )}
        </div>

        {/* Vitrina */}
        <div className="mt-12 md:mt-16">
          {config.shelfLabel && (
            <div className="flex items-center gap-4 mb-6">
              <span className="font-demo-body text-[11px] uppercase tracking-[0.28em] text-demo-muted whitespace-nowrap">{config.shelfLabel}</span>
              <span className="h-px flex-1 bg-demo-text/20" />
            </div>
          )}
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 md:gap-8">
            <Slot products={products} active={first} />
            <Slot products={products} active={second} className="md:mt-12" />
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <CTAButtons config={config} />
        </div>
      </div>
    </section>
  )
}
