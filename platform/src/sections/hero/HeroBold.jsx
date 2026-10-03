import Icon from '../../components/Icon'
import useSlideshow from './useSlideshow'
import { MobileSlideshow, FeatureBar } from './shared'

/* ── Bold (fondo oscuro puro, tipografía impacto, imagen ocupa 73% desde izquierda, franja info) ── */
export default function HeroBold({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useSlideshow(images.length, 4200)

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
                <button key={i} onClick={() => setIdx(i)} aria-label={`Ir a la imagen ${i + 1}`}
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
        <MobileSlideshow images={images} idx={idx} />
      </div>

      {/* Barra de features */}
      <FeatureBar features={config.features} className="mb-0 rounded-t-2xl" titleClass="text-demo-text" descClass="text-demo-text/40" />

      {/* Franja de info rápida */}
      {config.quickInfo?.length > 0 && (
        <div className="relative z-10 mx-4 md:mx-10 lg:mx-16 border-t border-white/10 bg-demo-surface/60 rounded-b-2xl mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {config.quickInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-7 py-4">
                <Icon name={item.icon} size={16} className="text-demo-primary flex-shrink-0" />
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
