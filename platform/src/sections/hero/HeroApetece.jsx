import { useEffect, useRef, useState } from 'react'
import { Pointer } from 'lucide-react'
import { CTAButtons } from './shared'

/* ── Apetece: el visitante elige qué le apetece y la foto grande cambia con una cortina de tiras ──
   Cada opción lleva su plato: cambian la foto, la palabra del titular y el pie de foto.
   config: kicker, title, description, cta, ctaSecondary, moodLabel, moodHint,
           moods[{ label, highlight, name, price, description, src }] */

const STRIPS = 6
const STRIP_WIDTH = 100 / STRIPS + 0.3 // un pelín de solape para que no se vean costuras
const SWAP_MS = 1300

export default function HeroApetece({ config }) {
  const moods = config.moods ?? []
  const [shown, setShown] = useState(0)
  const [incoming, setIncoming] = useState(null)
  const [play, setPlay] = useState(false)
  const [touched, setTouched] = useState(false)
  const timer = useRef(null)

  const target = incoming ?? shown

  const select = i => {
    if (incoming !== null || i === shown) return
    setTouched(true)
    setPlay(false)
    setIncoming(i)
  }

  // La cortina arranca un fotograma después de montar las tiras, para que la transición se vea
  useEffect(() => {
    if (incoming === null) return
    let r2
    const r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setPlay(true)) })
    timer.current = setTimeout(() => {
      setShown(incoming)
      setIncoming(null)
      setPlay(false)
    }, SWAP_MS)
    return () => {
      cancelAnimationFrame(r1)
      cancelAnimationFrame(r2)
      clearTimeout(timer.current)
    }
  }, [incoming])

  const incomingSrc = incoming !== null ? moods[incoming]?.src : null

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-demo-bg pt-[4.5rem] lg:min-h-[780px] lg:pt-0">
      {/* Foto grande con la cortina */}
      <div className="relative h-[30svh] min-h-[210px] overflow-hidden bg-demo-surface lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:min-h-0 lg:w-[54%]">
        <img
          src={moods[shown]?.src}
          alt={moods[shown]?.name ?? ''}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {incomingSrc && (
          <div
            className="absolute inset-0 transition-transform duration-[1400ms] ease-out"
            style={{ transform: play ? 'scale(1)' : 'scale(1.12)' }}
          >
            {Array.from({ length: STRIPS }, (_, s) => (
              <div
                key={s}
                className="absolute inset-y-0 overflow-hidden transition-[clip-path] duration-[800ms] ease-[cubic-bezier(0.65,0,0.25,1)]"
                style={{
                  left: `${(s * 100) / STRIPS}%`,
                  width: `${STRIP_WIDTH}%`,
                  clipPath: play ? 'inset(0 0 0 0)' : s % 2 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)',
                  transitionDelay: `${s * 70}ms`,
                }}
              >
                <img
                  src={incomingSrc}
                  alt=""
                  className="absolute inset-y-0 h-full max-w-none object-cover"
                  style={{
                    width: `${(100 / STRIP_WIDTH) * 100}%`,
                    left: `${-(((s * 100) / STRIPS) / STRIP_WIDTH) * 100}%`,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Pie de foto con el plato elegido */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 pb-3 pt-16 text-white lg:px-8 lg:pb-8">
          <div className="grid items-end" aria-live="polite">
            {moods.map((m, i) => (
              <div
                key={i}
                aria-hidden={i !== target}
                className={`col-start-1 row-start-1 transition-opacity duration-500 ${i === target ? 'opacity-100 delay-300' : 'opacity-0'}`}
              >
                <p className="flex items-baseline gap-3 font-demo-heading text-2xl lg:text-3xl">
                  {m.name}
                  <span className="font-demo-body text-sm font-semibold text-white/80">{m.price}</span>
                </p>
                <p className="mt-1 hidden max-w-md font-demo-body text-sm leading-relaxed text-white/80 lg:block">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Texto y selector */}
      <div className="relative z-10 flex flex-col px-5 pb-12 pt-6 lg:min-h-[780px] lg:w-[46%] lg:justify-center lg:pb-16 lg:pl-[max(2rem,7vw)] lg:pr-8 lg:pt-28">
        {config.kicker && (
          <p className="mb-4 hidden font-demo-body lg:block text-[11px] uppercase tracking-[0.3em] text-demo-primary">{config.kicker}</p>
        )}
        <h1 className="font-demo-heading leading-[1.02] tracking-tight text-demo-text text-[clamp(2.2rem,9vw,3.6rem)] lg:text-[clamp(2.8rem,4.6vw,4.8rem)]">
          {config.title}
          <br />
          <span className="grid">
            {moods.map((m, i) => (
              <em
                key={i}
                aria-hidden={i !== target}
                className={`col-start-1 row-start-1 font-normal not-italic transition-opacity duration-500 ${i === target ? 'opacity-100 delay-300' : 'opacity-0'}`}
              >
                {m.highlight}
              </em>
            ))}
          </span>
        </h1>
        {/* En móvil el selector sube y la descripción baja, para que se vea en la primera pantalla */}
        <p className="order-2 mt-5 max-w-sm font-demo-body text-[15px] leading-relaxed text-demo-muted lg:order-none lg:mt-4 lg:max-w-md lg:text-base">{config.description}</p>

        <div className="order-1 mt-5 lg:order-none lg:mt-7">
          <div className="mb-3 flex items-center gap-3">
            <p className="font-demo-body text-[11px] uppercase tracking-[0.28em] text-demo-text">{config.moodLabel}</p>
            {!touched && config.moodHint && (
              <span className="flex items-center gap-1.5 font-demo-body text-xs text-demo-accent">
                <Pointer size={14} className="animate-bounce" aria-hidden="true" />
                {config.moodHint}
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-1.5 lg:flex lg:flex-wrap lg:gap-2">
            {moods.map((m, i) => (
              <button
                key={i}
                type="button"
                aria-pressed={i === target}
                onClick={() => select(i)}
                className={`rounded-full border px-1 py-2.5 font-demo-body text-xs font-medium lg:px-4 lg:text-sm transition-colors duration-300 ${
                  i === target
                    ? 'border-demo-primary bg-demo-primary text-demo-bg'
                    : 'border-demo-text/25 text-demo-text hover:border-demo-primary'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className="order-3 mt-6 lg:order-none lg:mt-8">
          <CTAButtons config={config} />
        </div>
      </div>
    </section>
  )
}
