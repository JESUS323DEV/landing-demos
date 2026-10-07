import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CTAButtons } from './shared'
import { SocialIcon } from '../../components/SocialIcons'

/* ── Rueda: una mesa giratoria con los elementos sobre un disco de color ──
   Al elegir uno, o al pasar con las flechas o deslizando, la rueda gira y lo deja en primer plano.
   El elemento activo queda arriba en móvil y a la izquierda de la rueda en escritorio.
   config: kicker, title, titleHighlight, description, cta, ctaSecondary, hub (texto del centro),
           dishes[{ name, description, src, price?, color?, badge?, highlight? }]
   Opcionales por elemento: price, color (del disco cuando está activo), badge (logo de una red social)
   y highlight (palabra del titular que cambia con él, sustituye a titleHighlight). */

const mod = (n, m) => ((n % m) + m) % m
const DESKTOP = '(min-width: 1024px)'

function useDesktop() {
  const [desktop, setDesktop] = useState(() => window.matchMedia(DESKTOP).matches)
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP)
    const onChange = e => setDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return desktop
}

export default function HeroRueda({ config }) {
  const dishes = config.dishes ?? []
  const n = dishes.length
  const step = n ? 360 / n : 0
  const desktop = useDesktop()

  // pos crece sin límite para que la rueda siempre gire en el sentido corto
  const [pos, setPos] = useState(0)
  const [auto, setAuto] = useState(true)
  const idx = n ? mod(pos, n) : 0
  const touchX = useRef(null)

  // Con ?preview (tarjetas de la portada) la rueda se queda quieta en el primer plato
  const frozen = new URLSearchParams(window.location.search).has('preview')
  useEffect(() => {
    if (!auto || frozen || n < 2) return
    const id = setInterval(() => setPos(p => p + 1), 5000)
    return () => clearInterval(id)
  }, [auto, frozen, n])

  const move = delta => {
    setAuto(false)
    setPos(p => p + delta)
  }
  const select = i => {
    let d = mod(i - idx, n)
    if (d > n / 2) d -= n
    if (d !== 0) move(d)
  }

  const wheelAngle = (desktop ? 270 : 0) - pos * step
  const discColor = dishes[idx]?.color
  const hasHighlights = dishes.some(d => d.highlight)

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-demo-bg lg:grid lg:min-h-[820px] lg:grid-cols-[44%_1fr] lg:grid-rows-2">
      {/* Titular. En móvil va solo arriba para que la rueda se vea en la primera pantalla */}
      <div className="relative z-10 px-5 pt-[5.5rem] lg:self-end lg:pl-[max(2rem,7vw)] lg:pr-0 lg:pt-28">
        {config.kicker && (
          <p className="mb-4 font-demo-body text-[11px] uppercase tracking-[0.3em] text-demo-accent">{config.kicker}</p>
        )}
        <h1 className="font-demo-heading leading-[1.02] tracking-tight text-demo-text text-[clamp(2.5rem,9.5vw,3.4rem)] lg:text-[clamp(2.8rem,4.6vw,4.8rem)]">
          {config.title}
          {hasHighlights ? (
            <>
              <br />
              <span className="grid">
                {dishes.map((d, i) => (
                  <span
                    key={i}
                    aria-hidden={i !== idx}
                    className={`col-start-1 row-start-1 transition-[opacity,color] duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
                    style={{ color: d.color ?? 'var(--demo-primary)' }}
                  >
                    {d.highlight}
                  </span>
                ))}
              </span>
            </>
          ) : config.titleHighlight && (
            <><br /><span className="text-demo-primary">{config.titleHighlight}</span></>
          )}
        </h1>
        <p className="mt-4 hidden max-w-md font-demo-body text-base leading-relaxed text-demo-muted lg:block">{config.description}</p>
      </div>

      {/* Rueda: el disco es de color y los elementos van sobre él */}
      <div
        className="relative min-h-[340px] flex-1 overflow-hidden [--d:168px] [--r:190px] lg:absolute lg:inset-y-0 lg:right-0 lg:min-h-0 lg:w-[62%] lg:flex-none lg:[--d:clamp(180px,19vw,260px)] lg:[--r:clamp(210px,23vw,300px)]"
        onTouchStart={e => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          touchX.current = null
          if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1)
        }}
      >
        <div className="absolute left-1/2 top-[calc(var(--d)*0.8+var(--r))] h-0 w-0 lg:left-[78%] lg:top-1/2">
          <div
            className="absolute left-0 top-0 rounded-full bg-demo-primary transition-[transform,background-color,box-shadow] duration-[900ms] ease-[cubic-bezier(0.65,0,0.25,1)]"
            style={{
              width: 'calc(var(--r) * 2 + var(--d) * 1.5)',
              height: 'calc(var(--r) * 2 + var(--d) * 1.5)',
              backgroundColor: discColor,
              boxShadow: `0 0 120px 20px color-mix(in srgb, ${discColor ?? 'var(--demo-primary)'} 35%, transparent)`,
              transform: `translate(-50%, -50%) rotate(${wheelAngle}deg)`,
            }}
          >
            {/* Aros de la mesa */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/25"
              style={{ width: 'calc(var(--r) * 2)', height: 'calc(var(--r) * 2)' }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20"
              style={{ width: 'calc(var(--r) * 2 - var(--d) * 1.5)', height: 'calc(var(--r) * 2 - var(--d) * 1.5)' }}
            />

            {/* Centro de la mesa */}
            <div
              className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full bg-demo-bg transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.25,1)]"
              style={{
                width: 'calc(var(--r) * 2 - var(--d) * 1.5 - 24px)',
                height: 'calc(var(--r) * 2 - var(--d) * 1.5 - 24px)',
                transform: `translate(-50%, -50%) rotate(${-wheelAngle}deg)`,
              }}
            >
              <span className="font-demo-heading text-xl tracking-[0.2em] text-demo-text lg:text-2xl">{config.hub}</span>
            </div>

            {/* Platos */}
            {dishes.map((d, i) => {
              const theta = i * step
              const active = i === idx
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ver ${d.name}`}
                  aria-pressed={active}
                  onClick={() => select(i)}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: 'var(--d)',
                    height: 'var(--d)',
                    transform: `translate(-50%, -50%) rotate(${theta}deg) translateY(calc(var(--r) * -1))`,
                  }}
                >
                  <span
                    className="relative block h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.25,1)]"
                    style={{ transform: `rotate(${-(theta + wheelAngle)}deg) scale(${active ? 1.2 : 0.82})` }}
                  >
                    <span className="block h-full w-full overflow-hidden rounded-full bg-demo-surface shadow-[0_18px_40px_-10px_rgba(0,0,0,0.7)] ring-4 ring-demo-bg">
                      {d.src && <img src={d.src} alt={d.name} className="h-full w-full object-cover" />}
                    </span>
                    {d.badge && (
                      <span className="absolute bottom-[4%] right-[4%] flex h-[26%] w-[26%] items-center justify-center rounded-full bg-white text-black shadow-lg ring-2 ring-demo-bg">
                        <SocialIcon platform={d.badge} className="h-1/2 w-1/2" />
                      </span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Elemento en primer plano, descripción y botones */}
      <div className="relative z-10 px-5 pb-12 lg:self-start lg:pb-0 lg:pl-[max(2rem,7vw)] lg:pr-0">
        {/* Todos apilados en la misma celda y se cruzan con un fundido */}
        <div className="flex items-start gap-4 border-t border-demo-text/15 pt-5 lg:max-w-md lg:pt-6" aria-live="polite">
          <div className="grid flex-1">
            {dishes.map((d, i) => (
              <div
                key={i}
                aria-hidden={i !== idx}
                className={`col-start-1 row-start-1 transition-opacity duration-500 ${i === idx ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
              >
                <p className="font-demo-body text-[11px] uppercase tracking-[0.25em] text-demo-muted">
                  {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
                </p>
                <p className="mt-1 flex items-baseline gap-3 font-demo-heading text-2xl text-demo-text">
                  {d.name}
                  {d.price && <span className="font-demo-body text-sm font-semibold text-demo-accent">{d.price}</span>}
                </p>
                <p className="mt-1 font-demo-body text-sm leading-relaxed text-demo-muted">{d.description}</p>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-2 pt-1">
            <button
              type="button"
              aria-label="Plato anterior"
              onClick={() => move(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-demo-text/25 text-demo-text transition-colors hover:bg-demo-text/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Plato siguiente"
              onClick={() => move(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-demo-text/25 text-demo-text transition-colors hover:bg-demo-text/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <p className="mt-5 max-w-sm font-demo-body text-[15px] leading-relaxed text-demo-muted lg:hidden">{config.description}</p>

        <div className="mt-6">
          <CTAButtons config={config} />
        </div>
      </div>
    </section>
  )
}
