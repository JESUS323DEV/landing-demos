import { CTAButtons } from './shared'

/* ── Tiras: tres franjas verticales de foto, cada una más alta que la anterior, con el texto en la zona clara ──
   config: kicker, title, titleHighlight, description, cta, ctaSecondary, images[3] { src, label } */

// Alturas de cada tira, de menor a mayor (escalera hacia la derecha)
const HEIGHTS = ['58%', '74%', '90%']

function Strips({ images }) {
  return (
    <div className="flex h-full items-end gap-2 lg:gap-3">
      {images.slice(0, 3).map((img, i) => (
        <div key={i} className="min-w-0 flex-1 overflow-hidden bg-demo-surface" style={{ height: HEIGHTS[i] }}>
          {img.src && <img src={img.src} alt={img.label ?? ''} className="h-full w-full object-cover" />}
        </div>
      ))}
    </div>
  )
}

export default function HeroTiras({ config }) {
  const images = config.images ?? []

  return (
    <section id="hero" className="relative overflow-hidden bg-demo-bg">
      {/* Fotos: arriba en móvil, a la derecha en escritorio */}
      <div className="h-[52svh] min-h-[360px] px-5 pt-[4.5rem] lg:absolute lg:inset-y-0 lg:right-[4%] lg:h-auto lg:min-h-0 lg:w-[52%] lg:px-0 lg:pt-0">
        <Strips images={images} />
      </div>

      {/* Texto */}
      <div className="relative z-10 flex flex-col items-center px-8 pb-14 pt-10 text-center lg:min-h-[800px] lg:w-[44%] lg:items-start lg:justify-center lg:pb-20 lg:pl-[max(2rem,7vw)] lg:pr-0 lg:pt-28 lg:text-left">
        {config.kicker && (
          <p className="mb-4 font-demo-body text-[11px] uppercase tracking-[0.28em] text-demo-primary">{config.kicker}</p>
        )}
        <h1 className="w-full text-left font-demo-heading leading-[1.04] text-demo-text text-[3.2rem] lg:text-[clamp(2.6rem,4.6vw,4.6rem)]">
          {config.title}
          {config.titleHighlight && (
            <><br /><em className="italic font-normal text-demo-primary">{config.titleHighlight}</em></>
          )}
        </h1>
        <p className="mt-5 max-w-sm font-demo-body text-lg leading-relaxed text-demo-muted lg:max-w-md lg:text-base">{config.description}</p>
        <div className="mt-7 flex justify-center lg:justify-start">
          <CTAButtons config={config} />
        </div>
      </div>
    </section>
  )
}
