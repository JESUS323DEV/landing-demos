import Icon from '../../components/Icon'
import useSlideshow from './useSlideshow'
import { MobileSlideshow, FeatureBar } from './shared'

/* ── Immersive (pantalla completa oscura, galería derecha, barra de features abajo) ── */
export default function HeroImmersive({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useSlideshow(images.length, 4000)

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
                    {img.icon && <Icon name={img.icon} size={96} strokeWidth={1} className="opacity-15 text-white" />}
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
                <button key={i} onClick={() => setIdx(i)} aria-label={`Ir a la imagen ${i + 1}`}
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
        <MobileSlideshow images={images} idx={idx} />
      </div>

      {/* Barra de features */}
      <FeatureBar features={config.features} className="mt-8 mb-10 rounded-2xl" titleClass="text-white" descClass="text-white/45" />


    </section>
  )
}
