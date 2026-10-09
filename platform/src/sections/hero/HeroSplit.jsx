import Icon from '../../components/Icon'
import useSlideshow from './useSlideshow'
import { CTAButtons, StatsRow, HeroImages } from './shared'

/* imageStyle: (por defecto) cuadrícula | 'staggered' escalonado | 'stack' pila de fotos | 'neon' foto de fondo con titular de neón centrado */

function ImgBox({ img, className = '', style }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: img.bg ?? 'var(--demo-surface)', ...style }}>
      {img.src && <img src={img.src} alt={img.label ?? ''} className="absolute inset-0 w-full h-full object-cover" />}
    </div>
  )
}

/* Dos columnas desencajadas, con proporciones y alturas distintas */
function StaggeredImages({ images }) {
  const [a, b, c, d] = images
  return (
    <div className="hidden md:grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-3">
        {a && <ImgBox img={a} className="aspect-[3/4] rounded-md" />}
        {d && <ImgBox img={d} className="aspect-square rounded-md" />}
      </div>
      <div className="flex flex-col gap-3 mt-14">
        {b && <ImgBox img={b} className="aspect-[4/5] rounded-md" />}
        {c && <ImgBox img={c} className="aspect-[4/3] rounded-md" />}
      </div>
    </div>
  )
}

/* Tres fotos impresas, solapadas y giradas */
function StackedImages({ images }) {
  const [a, b, c] = images
  const print = 'absolute bg-white p-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.03] hover:z-40'
  return (
    <div className="hidden md:block relative h-[480px]">
      {a && (
        <div className={`${print} left-0 top-12 w-[52%] -rotate-6 z-10`}>
          <ImgBox img={a} className="aspect-[3/4]" />
        </div>
      )}
      {b && (
        <div className={`${print} left-[26%] top-0 w-[48%] rotate-3 z-20`}>
          <ImgBox img={b} className="aspect-square" />
        </div>
      )}
      {c && (
        <div className={`${print} right-0 top-44 w-[46%] -rotate-2 z-30`}>
          <ImgBox img={c} className="aspect-[4/5]" />
        </div>
      )}
    </div>
  )
}

function SplitText({ config }) {
  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="font-demo-heading text-demo-text leading-none text-[clamp(3rem,10vw,6rem)]">
        {config.title}
        {config.titleGlow && (
          <>
            <br />
            {/* glowStyle: 'outline' (solo el contorno) o 'soft' (el mismo color, más suave) */}
            {config.glowStyle === 'outline'
              ? <em className="not-italic" style={{ WebkitTextStroke: '2px var(--demo-text)', color: 'transparent' }}>{config.titleGlow}</em>
              : <em className="not-italic opacity-60">{config.titleGlow}</em>}
          </>
        )}
      </h1>
      {config.subtitle && (
        <p className="font-demo-body text-demo-primary text-base md:text-lg">{config.subtitle}</p>
      )}
      <p className="font-demo-body text-demo-muted text-base leading-relaxed max-w-md">{config.description}</p>
      <CTAButtons config={config} />
      <StatsRow stats={config.stats} />
    </div>
  )
}

/* Foto a pantalla completa oscurecida y titular centrado con efecto de neón */
function SplitNeon({ config }) {
  const images = config.images ?? []
  const [idx, setIdx] = useSlideshow(images.length, 5000)
  const glow = '0 0 4px color-mix(in srgb, var(--demo-primary) 70%, white), 0 0 18px var(--demo-primary), 0 0 48px var(--demo-primary)'
  // Contorno oscuro pegado a la letra, por fuera (se pinta detrás del relleno), para que se separe de la foto
  const outline = { WebkitTextStroke: '6px #000', paintOrder: 'stroke fill' }

  return (
    <section id="hero" className="relative overflow-hidden bg-demo-bg min-h-[700px] md:min-h-[800px] flex items-center justify-center">
      {images.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
          {img.src
            ? <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
            : <div className="w-full h-full" style={{ background: img.bg ?? 'var(--demo-surface)' }} />
          }
        </div>
      ))}
      <div className="absolute inset-0 bg-demo-bg/60" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, var(--demo-bg) 95%)' }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 pt-28 pb-24 flex flex-col items-center text-center">
        {config.badge && (
          <p className="font-demo-body text-white/70 text-xs uppercase tracking-[0.4em] mb-6">{config.badge}</p>
        )}
        <h1 className="font-demo-heading uppercase leading-[0.88] text-[clamp(4.5rem,15vw,12rem)]">
          <span className="block text-white" style={{ ...outline, textShadow: '0 0 14px color-mix(in srgb, var(--demo-primary) 45%, transparent)' }}>{config.title}</span>
          {config.titleGlow && (
            <span className="block text-demo-primary" style={{ ...outline, textShadow: glow }}>{config.titleGlow}</span>
          )}
        </h1>
        <p className="font-demo-body text-white/75 text-base md:text-lg leading-relaxed max-w-md mt-8">{config.description}</p>
        <div className="flex justify-center mt-8">
          <CTAButtons config={config} dark />
        </div>
        <div className="flex justify-center mt-12">
          <StatsRow stats={config.stats} dark />
        </div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-8 right-6 md:right-10 z-10 flex gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-500 ${i === idx ? 'w-6 bg-demo-primary' : 'w-2.5 bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

/* ── Split (text left, image grid right) ── */
export default function HeroSplit({ config }) {
  if (config.imageStyle === 'neon') return <SplitNeon config={config} />

  const images = config.images ?? []

  return (
    <section id="hero" className="relative overflow-hidden bg-demo-bg pt-16">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--demo-primary), transparent 70%)', filter: 'blur(70px)' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16 md:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        <SplitText config={config} />

        {/* Image column */}
        {config.imageStyle === 'staggered' && <StaggeredImages images={images} />}
        {config.imageStyle === 'stack' && <StackedImages images={images} />}
        {!config.imageStyle && <HeroImages images={config.images} />}

        {/* Mobile image grid (simplified) */}
        {images.length > 0 && (
          <div className="md:hidden grid grid-cols-3 gap-2 mt-2">
            {images.slice(0, 3).map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden relative" style={{ background: img.bg ?? 'var(--demo-surface)' }}>
                {img.src ? (
                  <img src={img.src} alt={img.label ?? ''} className="w-full h-full object-cover" />
                ) : img.icon && (
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon name={img.icon} size={28} className="opacity-60 text-demo-text" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
