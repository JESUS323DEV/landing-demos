import { CTAButtons } from './shared'

/* ── Vitrina: cabecera editorial y una fila de productos como carta de vitrina ──
   config: kicker, meta, title, titleHighlight, description, shelfLabel, products[{ name, price, image }], cta, ctaSecondary */
export default function HeroVitrina({ config }) {
  const products = config.products ?? []

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
              <><br /><em className="italic font-normal text-demo-primary">{config.titleHighlight}</em></>
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
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8">
            {products.map((p, i) => (
              <li key={i} className="group last:col-span-2 md:last:col-span-1 md:even:mt-10">
                <div className="relative overflow-hidden bg-demo-surface aspect-[3/4] max-md:group-last:aspect-[16/10]">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="font-demo-heading text-demo-text text-lg leading-tight">{p.name}</span>
                  <span className="flex-1 border-b border-dotted border-demo-text/30 translate-y-[-3px]" />
                  <span className="font-demo-body text-demo-primary text-sm font-medium whitespace-nowrap">{p.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-12 md:mt-16">
          <CTAButtons config={config} />
        </div>
      </div>
    </section>
  )
}
