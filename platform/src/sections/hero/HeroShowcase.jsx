import Img from '../../components/Img'
import Icon from '../../components/Icon'
import useSlideshow from './useSlideshow'

/* Cómo se destaca la palabra del titular, sin cambiar su color: config.emphasis */
const EMPHASIS = {
  underline: 'underline decoration-demo-primary decoration-[4px] underline-offset-4',
  italic: 'italic',
}

/* ── Showcase (fondo claro, texto izquierda, imagen redondeada derecha, stats) ── */
export default function HeroShowcase({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useSlideshow(images.length, 4500)

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
              <span className={EMPHASIS[config.emphasis ?? 'underline']}>
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
                      <Icon name={s.icon} size={18} className="text-demo-primary" />
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

        {/* Imagen: el tratamiento depende de config.imageStyle */}
        {config.imageStyle === 'circle' && <CircleImage images={images} idx={idx} setIdx={setIdx} sticker={config.sticker} />}
        {config.imageStyle === 'polaroid' && <PolaroidImage images={images} idx={idx} setIdx={setIdx} />}
        {!config.imageStyle && <RoundedImage images={images} idx={idx} setIdx={setIdx} />}
      </div>
    </section>
  )
}

function Slides({ images, idx, className = '' }) {
  return images.map((img, i) => (
    <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {img.src
        ? <Img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
        : <div className="w-full h-full" style={{ background: img.bg ?? 'var(--demo-surface)' }} />
      }
    </div>
  ))
}

function Dots({ images, idx, setIdx, className = '' }) {
  if (images.length < 2) return null
  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {images.map((_, i) => (
        <button key={i} onClick={() => setIdx(i)} aria-label={`Ir a la imagen ${i + 1}`}
          className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-6 bg-demo-primary' : 'w-2.5 bg-demo-primary/25'}`}
        />
      ))}
    </div>
  )
}

/* Rectángulo redondeado (por defecto) */
function RoundedImage({ images, idx, setIdx }) {
  return (
    <div className="relative pb-10 md:py-16">
      <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] md:h-[500px] md:aspect-auto">
        <Slides images={images} idx={idx} />
      </div>
      <Dots images={images} idx={idx} setIdx={setIdx} className="mt-4" />
    </div>
  )
}

/* Círculo grande con sello encima */
function CircleImage({ images, idx, setIdx, sticker }) {
  return (
    <div className="relative pb-10 md:py-10">
      <div className="relative mx-auto w-full max-w-[460px]">
        <div className="relative aspect-square rounded-full overflow-hidden ring-8 ring-demo-primary/10">
          <Slides images={images} idx={idx} />
        </div>
        {sticker && (
          <div className="absolute -bottom-2 -left-2 md:-left-8 w-28 h-28 md:w-32 md:h-32 rounded-full bg-demo-primary text-demo-bg flex flex-col items-center justify-center text-center -rotate-12 shadow-lg">
            <span className="font-demo-heading text-2xl md:text-3xl font-bold leading-none">{sticker.value}</span>
            <span className="font-demo-body text-[10px] md:text-xs uppercase tracking-wider mt-1 px-3 leading-tight">{sticker.label}</span>
          </div>
        )}
      </div>
      <Dots images={images} idx={idx} setIdx={setIdx} className="mt-8" />
    </div>
  )
}

/* Foto impresa, inclinada, con cinta y pie */
function PolaroidImage({ images, idx, setIdx }) {
  return (
    <div className="relative pb-10 md:pt-28 md:pb-12">
      <div className="relative mx-auto w-full max-w-[340px] rotate-[3deg] bg-white p-3 pb-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)]">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 -rotate-3 bg-demo-accent/40" />
        <div className="relative aspect-[4/5] overflow-hidden">
          <Slides images={images} idx={idx} />
        </div>
        <p className="font-demo-heading text-demo-text/70 text-center text-lg mt-4">{images[idx]?.label}</p>
      </div>
      <Dots images={images} idx={idx} setIdx={setIdx} className="mt-8" />
    </div>
  )
}
