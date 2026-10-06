import { useState } from 'react'

/* ── Fullbleed: foto a pantalla completa y titular protagonista ──
   Orden: titular, carta de muestras, descripción y botones.
   Si hay muestras, al pulsar una cambian de color la primera línea del titular y la descripción.
   config: kicker, title, titleHighlight, description, cta, ctaSecondary, image { src, alt },
           swatchLabel, swatches[{ name, color }] (opcional) */
export default function HeroFullbleed({ config }) {
  const swatches = config.swatches ?? []
  const [selected, setSelected] = useState(null)
  const tint = selected === null ? undefined : swatches[selected]?.color

  return (
    <section id="hero" className="relative flex min-h-[100svh] overflow-hidden bg-demo-text">
      {config.image?.src && (
        <img
          src={config.image.src}
          alt={config.image.alt ?? ''}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Velo oscuro para que el texto se lea siempre */}
      <div className="absolute inset-0 bg-gradient-to-t from-demo-text/90 via-demo-text/45 to-demo-text/10 lg:bg-gradient-to-r lg:from-demo-text/85 lg:via-demo-text/45 lg:to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-end px-5 pb-12 pt-32 text-white lg:justify-center lg:pb-16">
        <div className="max-w-xl">
          {config.kicker && (
            <p className="mb-5 font-demo-body text-[11px] uppercase tracking-[0.3em] text-white/75">{config.kicker}</p>
          )}

          <h1 className="font-demo-heading leading-[0.98] tracking-tight text-[clamp(3rem,8vw,6.8rem)]">
            <span className="transition-colors duration-500" style={{ color: tint }}>{config.title}</span>
            {config.titleHighlight && (
              <><br /><em className="font-normal italic">{config.titleHighlight}</em></>
            )}
          </h1>

          {swatches.length > 0 && (
            <div className="mt-6">
              {config.swatchLabel && (
                <p className="mb-3 font-demo-body text-[11px] uppercase tracking-[0.28em] text-white/70">{config.swatchLabel}</p>
              )}
              <div className="flex gap-2">
                {swatches.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    title={s.name}
                    aria-label={`Esmalte ${s.name}`}
                    aria-pressed={selected === i}
                    onClick={() => setSelected(selected === i ? null : i)}
                    className={`relative h-9 w-6 overflow-hidden rounded-md ring-1 transition-all duration-300 ${selected === i ? '-translate-y-1 ring-2 ring-white' : 'ring-white/30'}`}
                    style={{ background: s.color }}
                  >
                    <span className="absolute left-1 top-1.5 h-4 w-0.5 rounded-full bg-white/50" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <p
            className={`mt-8 max-w-md font-demo-body text-base leading-relaxed transition-colors duration-500 md:text-lg ${tint ? '' : 'text-white/85'}`}
            style={{ color: tint }}
          >
            {config.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={config.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-demo-body text-sm font-semibold tracking-wide text-demo-text transition-opacity hover:opacity-90"
            >
              {config.cta.label}
            </a>
            {config.ctaSecondary && (
              <a
                href={config.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3.5 font-demo-body text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
              >
                {config.ctaSecondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
