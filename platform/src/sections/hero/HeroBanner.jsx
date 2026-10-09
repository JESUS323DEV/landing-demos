import Img from '../../components/Img'
import Icon from '../../components/Icon'
import useSlideshow from './useSlideshow'

/* ── Banner (cartel): foto panorámica a sangre arriba, franja gruesa de color debajo con el titular y la llamada a la acción, y una banda de datos ──
   config: title, titleHighlight, description, cta, ctaSecondary, images, quickInfo[] */
export default function HeroBanner({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useSlideshow(images.length, 4500)

  return (
    <section id="hero" className="relative bg-demo-bg overflow-hidden">

      {/* Foto panorámica */}
      <div className="relative h-[48vh] min-h-[360px] md:h-[46vh] md:min-h-[300px]">
        {images.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
            {img.src
              ? <Img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
              : <div className="w-full h-full bg-demo-surface" />
            }
          </div>
        ))}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

        {images.length > 1 && (
          <div className="absolute bottom-5 right-6 md:right-10 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-8 bg-white' : 'w-3 bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Franja de color con el titular */}
      <div className="bg-demo-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="font-demo-heading uppercase leading-[0.9] text-white text-[clamp(3.2rem,8vw,8rem)]">
            <span className={config.titleHighlight ? 'block text-[0.42em] tracking-[0.3em]' : ''}>{config.title}</span>
            {config.titleHighlight && <span className="block">{config.titleHighlight}</span>}
          </h1>

          <div className="flex flex-col gap-6">
            <p className="font-demo-body text-white/85 text-base md:text-lg leading-relaxed max-w-md">{config.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={config.cta.href}
                className="inline-flex items-center justify-center font-demo-body bg-white text-demo-primary text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                {config.cta.label}
              </a>
              {config.ctaSecondary && (
                <a
                  href={config.ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2 font-demo-body border border-white/60 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  {config.ctaSecondary.label} <span>→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Banda de datos */}
      {config.quickInfo?.length > 0 && (
        <div className="bg-demo-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-demo-text/10">
            {config.quickInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-5 md:px-6 md:first:pl-0">
                <Icon name={item.icon} size={18} className="text-demo-primary flex-shrink-0" />
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
