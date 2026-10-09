import { useEffect, useState } from 'react'
import Img from '../../components/Img'
import useSlideshow from './useSlideshow'
import { CTAButtons } from './shared'
import { ServiceCarousel } from '../ServicesSection'

/* ── Vitrina: cabecera editorial y debajo los dulces ──
   Móvil: carrusel con precio. Tableta: dos escaparates que cambian de dulce. Escritorio: cuadrícula de 3 × 2 con cinco
   dulces fijos con precio y una tarjeta de "Ver más", todo en la primera pantalla.
   config: title, titleHighlight, description, shelfLabel, products[{ name, image, price, image2, name2, price2 }], cta, ctaSecondary */

// Un escaparate: apila todas las fotos y los nombres y deja visible solo el del producto activo
function Slot({ products, active, className = '' }) {
  return (
    <div className={className}>
      <div className="relative aspect-[3/4] overflow-hidden bg-demo-surface">
        {products.map((p, i) => (
          <Img
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

// Escritorio: un dulce con su nombre y precio. Si tiene image2, alterna con un segundo dulce (image2, name2, price2);
// delay escalona el cambio entre tarjetas para que no cambien todas a la vez
function ProductCard({ product, delay = 0 }) {
  const [second, setSecond] = useState(false)

  useEffect(() => {
    // Con ?preview (tarjetas de la portada) se queda en la primera foto
    if (!product.image2 || new URLSearchParams(window.location.search).has('preview')) return
    let id
    const start = setTimeout(() => {
      setSecond(true)
      id = setInterval(() => setSecond(v => !v), 4500)
    }, 4500 + delay)
    return () => { clearTimeout(start); clearInterval(id) }
  }, [product.image2, delay])

  return (
    <article className="relative h-[21svh] overflow-hidden rounded-2xl bg-demo-surface">
      <Img src={product.image} alt={product.name} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${second ? 'opacity-0' : 'opacity-100'}`} />
      {product.image2 && (
        <Img src={product.image2} alt={product.name2 ?? product.name} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${second ? 'opacity-100' : 'opacity-0'}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      {/* Nombre y precio de cada dulce, apilados y cruzados con el mismo fundido que la foto */}
      <div className="absolute inset-x-0 bottom-0 grid p-5 text-white">
        {[
          { name: product.name, price: product.price, on: !second },
          ...(product.image2 ? [{ name: product.name2 ?? product.name, price: product.price2 ?? product.price, on: second }] : []),
        ].map((t, i) => (
          <div key={i} aria-hidden={!t.on} className={`col-start-1 row-start-1 self-end transition-opacity duration-1000 ${t.on ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="font-demo-heading text-2xl leading-tight">{t.name}</h3>
            {t.price && <p className="font-demo-body text-lg font-semibold">{t.price}</p>}
          </div>
        ))}
      </div>
    </article>
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
    <section id="hero" className="relative bg-demo-bg overflow-hidden pt-20 pb-14 md:pb-20 lg:pb-[3svh]">
      <div className="mx-auto max-w-6xl px-5">

        {/* Titular */}
        <div className="text-center pt-6 md:pt-14 lg:pt-[3svh]">
          <h1 className="font-demo-heading text-demo-text leading-[0.95] tracking-tight text-[clamp(3rem,9vw,8rem)] lg:text-[min(7vw,8svh,6.5rem)]">
            {config.title}
            {config.titleHighlight && (
              <><br /><em className="italic font-normal">{config.titleHighlight}</em></>
            )}
          </h1>
          {config.description && (
            <p className="font-demo-body text-demo-muted text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 lg:mt-[2svh]">{config.description}</p>
          )}
        </div>

        {/* Vitrina */}
        <div className="mt-6 md:mt-16 lg:mt-[4svh]">
          {config.shelfLabel && (
            <div className="flex items-center gap-4 mb-4 md:mb-6 lg:mb-[2svh]">
              <span className="font-demo-body text-[11px] uppercase tracking-[0.28em] text-demo-muted whitespace-nowrap">{config.shelfLabel}</span>
              <span className="h-px flex-1 bg-demo-text/20" />
            </div>
          )}
          {/* Móvil: carrusel con foto, nombre y precio */}
          <ServiceCarousel
            items={products.map(p => ({ title: p.name, price: p.price, image: { src: p.image, alt: p.name } }))}
            cardClass="h-[38svh] min-h-[200px]"
            showPrice
          />
          {/* Tableta: los dos escaparates que cambian de dulce */}
          <div className="mx-auto hidden max-w-2xl grid-cols-2 gap-4 md:grid md:gap-8 lg:hidden">
            <Slot products={products} active={first} />
            <Slot products={products} active={second} className="md:mt-12" />
          </div>
          {/* Escritorio: cinco dulces fijos y la tarjeta de ver más */}
          <div className="hidden grid-cols-3 gap-[2svh] lg:grid">
            {products.slice(0, 5).map((p, i) => <ProductCard key={i} product={p} delay={i * 600} />)}
            <a
              href={config.ctaSecondary?.href ?? '#services'}
              className="group flex h-[21svh] items-center justify-center gap-3 rounded-2xl bg-demo-surface font-demo-heading text-3xl text-demo-text transition-colors hover:bg-demo-primary hover:text-demo-bg"
            >
              Ver más <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-6 md:mt-16 lg:mt-[4svh]">
          <CTAButtons config={config} row />
        </div>
      </div>
    </section>
  )
}
