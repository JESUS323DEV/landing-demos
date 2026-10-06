import useSlideshow from './useSlideshow'

/* ── Editorial (texto izquierda, imagen derecha con corte diagonal) ── */
export default function HeroEditorial({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useSlideshow(images.length, 4500)

  return (
    <section id="hero" className="relative bg-demo-bg overflow-hidden">

      {/* Móvil: imagen a todo el ancho con corte diagonal arriba, texto debajo */}
      <div className="md:hidden relative pt-16">
        <div
          className="relative h-[54svh] min-h-[340px] max-h-[520px]"
          style={{ clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0 100%)' }}
        >
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
          <div className="absolute bottom-5 right-8 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)} aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-8 bg-demo-primary' : 'w-3 bg-demo-primary/30'}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative flex items-center md:min-h-[680px]">

        {/* Texto */}
        <div className="relative z-10 w-full md:w-[50%] xl:mx-25 px-8 md:px-14 lg:px-24 pt-8 md:pt-28 pb-12 md:pb-20 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <h1 className="w-full text-left font-demo-heading text-demo-text leading-[1.05] text-[3.4rem] md:text-[clamp(2.6rem,5vw,4.5rem)] mb-5">
            {config.title}
            {config.titleHighlight && (
              <><br /><em className="not-italic text-demo-primary">{config.titleHighlight}</em></>
            )}
            {config.titleGlow && (
              <><br /><em className="not-italic text-demo-primary">{config.titleGlow}</em></>
            )}
          </h1>
          <p className="font-demo-body text-demo-muted text-lg md:text-base leading-relaxed max-w-sm md:max-w-xs mb-8">
            {config.description}
          </p>

          <div className="flex gap-3 justify-center md:justify-start">
            <a href={config.cta.href} className="border rounded-full p-3 bg-demo-primary text-demo-bg text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity text-center">
              {config.cta.label}
            </a>
            {config.ctaSecondary && (
              <a href={config.ctaSecondary.href} className="border border-demo-primary/50 rounded-full p-3 text-demo-text text-sm font-semibold tracking-wide hover:border-demo-primary transition-colors text-center">
                {config.ctaSecondary.label}
              </a>
            )}
          </div>

          {images.length > 1 && (
            <div className="hidden md:flex items-center gap-2 mt-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)} aria-label={`Ir a la imagen ${i + 1}`}
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
    </section>
  )
}
