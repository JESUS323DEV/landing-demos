import useSlideshow from './useSlideshow'
import { CTAButtons } from './shared'

/* ── Cover (portada de revista): cabecera enorme, foto central y frases de portada a los lados ──
   config: masthead, kicker, meta[], title, titleHighlight, description, cta, ctaSecondary, images,
           coverLines: { left: [{ kicker, title, note }], right: [...] } */

function Slides({ images, idx }) {
  return images.map((img, i) => (
    <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
      {img.src
        ? <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover grayscale contrast-110" />
        : <div className="w-full h-full" style={{ background: img.bg ?? 'var(--demo-surface)' }} />
      }
    </div>
  ))
}

function CoverLine({ line, align }) {
  return (
    <div className={`border-t border-demo-text/20 pt-3 ${align === 'right' ? 'md:text-right' : ''}`}>
      <p className="font-demo-body text-[10px] uppercase tracking-[0.25em] text-demo-muted">{line.kicker}</p>
      <p className="font-demo-heading text-demo-text text-xl md:text-2xl leading-tight mt-1">{line.title}</p>
      {line.note && <p className="font-demo-body text-sm text-demo-muted mt-1">{line.note}</p>}
    </div>
  )
}

export default function HeroCover({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useSlideshow(images.length, 4800)
  const left = config.coverLines?.left ?? []
  const right = config.coverLines?.right ?? []
  const masthead = config.masthead ?? config.title
  const parts = masthead.split(' & ')

  return (
    <section id="hero" className="relative bg-demo-bg overflow-hidden pt-20 pb-12 md:pb-14">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">

        {/* Franja superior, como la de una revista */}
        <div className="flex items-center justify-between gap-4 border-b border-demo-text/20 pb-3 font-demo-body text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-demo-muted">
          <span>{config.kicker}</span>
          {config.meta?.length > 0 && <span className="hidden md:block">{config.meta.join('  ·  ')}</span>}
          {images.length > 1 && (
            <span className="flex gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir a la imagen ${i + 1}`}
                  className={`transition-colors ${i === idx ? 'text-demo-text' : 'hover:text-demo-text/70'}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </span>
          )}
        </div>

        {/* Cabecera */}
        <h1 className="font-demo-heading uppercase text-center text-demo-text leading-[0.9] tracking-tight mt-6 md:mt-8 text-[3.4rem] md:text-[clamp(3rem,8.2vw,9rem)]">
          {parts.length === 2
            ? <>{parts[0]} <em className="italic font-normal">&amp;</em> {parts[1]}</>
            : masthead}
        </h1>

        {/* Cuerpo de la portada: frases a los lados, foto al centro (que pisa la cabecera) */}
        <div className="relative z-10 mx-auto mt-8 md:mt-[min(1.8vw,2.2rem)] md:max-w-[1150px] grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">

          <div className="order-2 md:order-1 flex flex-col gap-5">
            {config.description && (
              <p className="font-demo-body text-demo-muted text-base leading-relaxed md:text-right md:ml-auto max-w-sm">{config.description}</p>
            )}
            {left.map((l, i) => <CoverLine key={i} line={l} align="right" />)}
          </div>

          <div className="order-1 md:order-2 relative mx-auto w-full max-w-[340px] md:w-[min(26vw,360px)] aspect-[3/4] overflow-hidden bg-demo-surface">
            <Slides images={images} idx={idx} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <h2 className="absolute inset-x-0 bottom-0 p-5 font-demo-heading text-white leading-[1.05] text-[clamp(1.9rem,2.6vw,2.6rem)]">
              {config.title}
              {config.titleHighlight && <><br /><em className="italic font-normal">{config.titleHighlight}</em></>}
            </h2>
          </div>

          <div className="order-3 flex flex-col gap-5">
            {right.map((l, i) => <CoverLine key={i} line={l} />)}
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          <CTAButtons config={config} dark />
        </div>
      </div>
    </section>
  )
}
