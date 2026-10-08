import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { demos } from '../demos'
import { BRAND, Footer, LandingShell, WhatsAppButton, wa } from '../components/landing'
import { STYLES, TIER_TEXT, captureOf, demosOf } from '../lib/estilos'

/* ── Datos editables de la portada ── */
const FEATURED = ['senorio', 'aura-estetica', 'navaja-y-tijera'] // demos que rotan en el móvil del hero

const PLANS = [
  {
    title: 'Base',
    text: 'Una estructura que ya funciona, adaptada a tu marca. Ideal si quieres una web limpia, rápida y asequible.',
    points: ['Tus colores, tipografías y textos', 'Las secciones que necesites', 'Dominio, hosting y SEO básico incluidos', 'Lista en poco tiempo'],
    message: 'Hola, me interesa una web de la gama Base.',
  },
  {
    title: 'A medida',
    text: 'Diseño propio desde la portada hasta el último detalle, para que tu negocio se diferencie y se vea mejor.',
    points: ['Portada y estructura únicas', 'Pensada para tu tipo de negocio', 'Dominio, hosting y SEO básico incluidos', 'Más ajuste y más cuidado'],
    message: 'Hola, me interesa una web A medida.',
  },
]

const STEPS = [
  { n: '01', title: 'Hablamos', text: 'Me cuentas a qué te dedicas, qué quieres enseñar y cómo quieres que te contacten: WhatsApp, llamada o reserva.' },
  { n: '02', title: 'Te enseño tu demo', text: 'Preparo una propuesta con tu negocio para que la veas antes de decidir.' },
  { n: '03', title: 'Publicamos', text: 'Ajustamos los detalles, nos encargamos del dominio y del alojamiento, y tu web sale online.' },
  { n: '04', title: 'Que te encuentren', text: 'Preparo tu web para Google: títulos, textos y velocidad. Te explico cómo ir mejorando tu posición. El SEO tarda semanas o meses, y yo te cuento cómo va.' },
]

/* ── Previsualización viva: carga la demo real y la escala al ancho disponible ── */
function ScaledFrame({ slug, width, height, title, frameClass = 'pointer-events-none', bgClass = 'bg-white', className = '' }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(0.3)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(el.clientWidth / width)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])

  return (
    <div ref={ref} className={`relative overflow-hidden ${bgClass} ${className}`} style={{ height: height * scale }}>
      <iframe
        src={`/demo/${slug}`}
        title={title}
        loading="lazy"
        tabIndex={-1}
        className={`absolute top-0 left-0 border-0 ${frameClass}`}
        style={{ width, height, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      />
    </div>
  )
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <a href="#top" className="font-serif text-2xl tracking-tight">{BRAND}</a>
        <nav className="hidden items-center gap-8 text-sm text-[#6B675D] md:flex">
          <a href="#trabajos" className="hover:text-[#14130F] transition-colors">Ejemplos</a>
          <a href="#gamas" className="hover:text-[#14130F] transition-colors">Opciones</a>
          <a href="#como" className="hover:text-[#14130F] transition-colors">Cómo trabajo</a>
        </nav>
        <a
          href={wa('Hola, vengo de tu web y quería hablar contigo.')}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#14130F]/20 px-4 py-2 text-sm hover:border-[#14130F] transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const featured = FEATURED.map(slug => demos.find(d => d.slug === slug)).filter(Boolean)
  const [idx, setIdx] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto || featured.length < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % featured.length), 7000)
    return () => clearInterval(id)
  }, [auto, featured.length])


  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-36">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#6B675D]">Diseño web para negocios locales en Barcelona</p>
          <h1 className="font-serif text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
            Tu negocio,<br />con una web<br /><em className="italic">que se nota.</em>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#6B675D]">
            Te hago la web de tu negocio y te ayudo a que la encuentren en Google. Abre los ejemplos, tócalos y mira cómo quedaría la tuya.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#trabajos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14130F]/25 px-6 py-3.5 text-sm font-medium hover:border-[#14130F] transition-colors"
            >
              Ver ejemplos <ArrowRight size={16} strokeWidth={1.75} />
            </a>
            <WhatsAppButton text="Hola, me gustaría hablar sobre una web para mi negocio.">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {/* Móvil con la demo real, se puede tocar y hacer scroll en pantallas grandes */}
        <div className="mx-auto w-full max-w-[290px] lg:max-w-[310px]">
          <div className="rounded-[2.6rem] bg-[#14130F] p-2.5 shadow-[0_40px_80px_-30px_rgba(20,19,15,0.55)]">
            {/* Las demos se cargan todas a la vez y se cambia cuál se ve con un fundido, así no hay parpadeo al cambiar */}
            <div className="relative aspect-[390/800] overflow-hidden rounded-[2.1rem] bg-[#14130F]">
              {featured.map((d, i) => (
                <div
                  key={d.slug}
                  aria-hidden={i !== idx}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}
                >
                  <ScaledFrame
                    slug={d.slug}
                    width={390}
                    height={800}
                    title={`Demo ${d.name}`}
                    bgClass="bg-[#14130F]"
                    frameClass={i === idx ? 'pointer-events-none lg:pointer-events-auto' : 'pointer-events-none'}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {featured.map((d, i) => (
              <button
                key={d.slug}
                onClick={() => { setIdx(i); setAuto(false) }}
                aria-label={`Ver ${d.name}`}
                className={`rounded-full px-3.5 py-1.5 text-xs transition-colors ${
                  i === idx ? 'bg-[#14130F] text-[#F4F1EA]' : 'text-[#6B675D] hover:text-[#14130F]'
                }`}
              >
                {d.category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Tarjeta de un estilo: las capturas de sus demos cambian solas y "Ver más" lleva a su página */
function StyleCard({ style, ms = 3500, wide = false }) {
  const items = demosOf(style)
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || items.length < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % items.length), ms)
    return () => clearInterval(id)
  }, [paused, items.length, ms])

  if (!items.length) return null

  return (
    <article>
      <Link
        to={`/estilos/${style.key}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className={`group block ${wide ? 'lg:grid lg:grid-cols-[1.7fr_1fr] lg:items-center lg:gap-12' : ''}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#14130F]/10 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
          {items.map((d, i) => (
            <img
              key={d.slug}
              src={captureOf(d)}
              alt={i === idx ? `Ejemplo de web: ${d.name}, ${d.category}` : ''}
              width="1280"
              height="800"
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <span className="absolute bottom-3 left-3 rounded-full bg-[#14130F]/75 px-3 py-1 text-xs text-[#F4F1EA]">
            {items[idx].name}
          </span>
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[#F4F1EA] px-4 py-2 text-sm font-medium text-[#14130F] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            Ver más <ArrowUpRight size={15} strokeWidth={1.75} />
          </span>
        </div>
        <div className={wide ? 'mt-5 lg:mt-0' : 'mt-5'}>
          <h4 className="font-serif text-3xl tracking-tight md:text-4xl">{style.title}</h4>
          <p className="mt-2 leading-relaxed text-[#6B675D]">
            <span className="font-medium text-[#14130F]">{style.name}.</span> {style.summary}
          </p>
        </div>
      </Link>
    </article>
  )
}

function Works() {
  const custom = STYLES.filter(s => s.tier === 'custom')
  const base = STYLES.filter(s => s.tier === 'base')

  return (
    <section id="trabajos" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Ejemplos de webs</h2>
        <p className="mt-4 max-w-lg text-[#6B675D]">
          Webs de ejemplo para distintos tipos de negocio, con textos inventados. Elige un estilo y míralas una por una.
        </p>

        <div className="mt-16">
          <div className="mb-8 flex flex-col gap-1 border-b border-[#14130F]/10 pb-4 md:flex-row md:items-baseline md:justify-between">
            <h3 className="font-serif text-3xl">{TIER_TEXT.custom.title}</h3>
            <p className="text-sm text-[#6B675D]">{TIER_TEXT.custom.description}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {custom.map((s, i) => <StyleCard key={s.key} style={s} ms={3500 + i * 600} />)}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-1 border-b border-[#14130F]/10 pb-4 md:flex-row md:items-baseline md:justify-between">
            <h3 className="font-serif text-3xl">{TIER_TEXT.base.title}</h3>
            <p className="text-sm text-[#6B675D]">{TIER_TEXT.base.description}</p>
          </div>
          {base.map(s => <StyleCard key={s.key} style={s} ms={3200} wide />)}
        </div>
      </div>
    </section>
  )
}

function Plans() {
  return (
    <section id="gamas" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Dos opciones</h2>
        <p className="mt-4 max-w-lg text-[#6B675D]">Dos formas de tener una web profesional, según lo que necesite tu negocio. En las dos te dejo la web lista para que Google pueda encontrarla.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <article
              key={plan.title}
              className={`flex flex-col rounded-2xl border p-8 md:p-10 ${
                i === 1 ? 'border-[#14130F] bg-[#14130F] text-[#F4F1EA]' : 'border-[#14130F]/15 bg-white'
              }`}
            >
              <h3 className="font-serif text-4xl">{plan.title}</h3>
              <p className={`mt-4 leading-relaxed ${i === 1 ? 'text-[#F4F1EA]/70' : 'text-[#6B675D]'}`}>{plan.text}</p>
              <ul className="mt-6 flex flex-col gap-2 text-sm">
                {plan.points.map(p => (
                  <li key={p} className="flex gap-3">
                    <span className={i === 1 ? 'text-[#F4F1EA]/50' : 'text-[#6B675D]'}>·</span>{p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <WhatsAppButton text={plan.message} dark={i !== 1}>Consultar</WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section id="como" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Cómo trabajo</h2>
        <p className="mt-4 max-w-lg text-[#6B675D]">Cuatro pasos claros, desde la primera conversación hasta que te encuentran en Google.</p>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(s => (
            <li key={s.n} className="border-t border-[#14130F] pt-5">
              <p className="font-serif text-3xl text-[#6B675D]">{s.n}</p>
              <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-[#6B675D] leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-[#14130F] py-24 text-[#F4F1EA] md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="font-serif text-5xl tracking-tight md:text-7xl">¿Hablamos de tu web?</h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-[#F4F1EA]/65">
          Cuéntame qué negocio tienes y te enseño cómo lo haría, y cómo conseguir que te encuentren en Google.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton text="Hola, me gustaría hablar sobre una web para mi negocio." dark={false}>
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const { hash } = useLocation()

  // Al volver desde una página de estilo con /#trabajos, baja hasta esa sección
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return (
    <LandingShell>
      <Nav />
      <main>
        <Hero />
        <Works />
        <Plans />
        <Steps />
        <FinalCTA />
      </main>
      <Footer />
    </LandingShell>
  )
}
