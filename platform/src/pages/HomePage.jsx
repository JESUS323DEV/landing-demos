import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Plus, Search } from 'lucide-react'
import { demos } from '../demos'
import { Brand, Footer, LandingShell, WhatsAppButton, wa } from '../components/landing'
import { STYLES, TIER_TEXT, captureOf, demosOf } from '../lib/estilos'
import { SECTORS, matchSector } from '../lib/sectores'

/* ── Datos editables de la portada ── */
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

const GOOGLE_POINTS = [
  { title: 'Tu zona y lo que haces', text: 'Pongo en los títulos y en los textos lo que ofreces y dónde estás, con las palabras que usa la gente para buscarte.' },
  { title: 'Rápida en el móvil', text: 'La web carga deprisa y se ve bien en cualquier pantalla. Google lo tiene en cuenta, y tus clientes también.' },
  { title: 'Tu ficha en Google Maps', text: 'Te ayudo a crear y cuidar la ficha de tu negocio, con horarios, fotos y reseñas. Es lo que más ayuda en las búsquedas de tu zona.' },
  { title: 'Que Google la conozca', text: 'Doy de alta tu web en Search Console y pido que la lea cuanto antes, para que no tengas que esperar a que la descubra sola.' },
  { title: 'Saber cómo va', text: 'Te explico cómo ver cuánta gente te encuentra, con qué búsquedas y qué ajustar con el tiempo.' },
]

const INCLUDES = [
  { title: 'Tu web', text: 'Diseñada para tu negocio, con tus colores, tus fotos y tus textos, y adaptada al móvil.' },
  { title: 'Dominio y hosting', text: 'Me encargo de contratarlos y dejarlos funcionando, para que tu web esté siempre online.' },
  { title: 'SEO básico', text: 'La web queda preparada para que Google la entienda y la muestre cuando busquen lo que haces.' },
  { title: 'Ficha de Google', text: 'Tu negocio en Google Maps, con horarios, fotos y formas de contacto.' },
  { title: 'Contacto y reservas', text: 'Botón de WhatsApp, formulario o un sistema de reservas propio, para que te escriban o reserven sin tener que llamar.' },
]

const FAQ = [
  { q: '¿Cuánto tarda mi web en salir en Google?', a: 'Normalmente de unas semanas a unos meses. Depende de tu zona, de cuánta competencia haya y de lo que busque la gente. Lo primero que verás es que aparece al buscar el nombre de tu negocio.' },
  { q: '¿Me aseguras el primer puesto?', a: 'No, y desconfía de quien lo haga: Google decide el orden y cambia con el tiempo. Lo que hago es dejar tu web y tu ficha lo mejor preparadas posible y enseñarte cómo ir mejorando.' },
  { q: '¿Qué necesito para empezar?', a: 'Solo contarme a qué te dedicas. Si ya tienes logo, fotos y textos, perfecto. Si no, te ayudo a decidir qué hace falta.' },
  { q: '¿Qué pasa con el dominio y el hosting?', a: 'El dominio es la dirección de tu web (por ejemplo, minegocio.es) y el hosting es el lugar donde está guardada. Me encargo de los dos para que no tengas que tocar nada técnico.' },
  { q: '¿Cuánto cuesta?', a: 'Depende de si eliges Base o A medida y de lo que necesites. Escríbeme por WhatsApp y te doy un precio claro, sin sorpresas.' },
]

/* ── Previsualización viva: carga la demo real y la escala al ancho disponible ── */
function ScaledFrame({ slug, width, height, title, onLoad, frameClass = 'pointer-events-none', bgClass = 'bg-white', className = '' }) {
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
        onLoad={onLoad}
        scrolling="no"
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
        <a href="#top" className="font-serif text-2xl tracking-tight"><Brand /></a>
        <nav className="hidden items-center gap-8 text-sm text-[#6B675D] md:flex">
          <a href="#trabajos" className="hover:text-[#14130F] transition-colors">Ejemplos</a>
          <a href="#google" className="hover:text-[#14130F] transition-colors">Google</a>
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

/* Móvil con la demo real; al cambiar de negocio se vuelve a montar con un fundido, así no se ve el salto */
function PhoneDemo({ demo }) {
  const [ready, setReady] = useState(false)
  return (
    <div className="mx-auto w-full max-w-[230px] sm:max-w-[290px] lg:max-w-[250px] 2xl:max-w-[290px]">
      <div className="rounded-[2.6rem] bg-[#14130F] p-2.5 shadow-[0_40px_80px_-30px_rgba(20,19,15,0.55)]">
        <div className={`relative aspect-[390/800] overflow-hidden rounded-[2.1rem] bg-[#14130F] transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}>
          <ScaledFrame
            slug={demo.slug}
            width={390}
            height={800}
            title={`Demo ${demo.name}`}
            bgClass="bg-[#14130F]"
            onLoad={() => setReady(true)}
          />
          {/* Solo se ve la primera pantalla: no hay scroll dentro del móvil, pulsarlo abre la demo entera */}
          <Link to={`/demo/${demo.slug}`} aria-label={`Abrir la web ${demo.name}`} className="absolute inset-0 z-10" />
        </div>
      </div>
    </div>
  )
}

/* Resultado de "Google": dirección, título y descripción de la web */
function SearchResult({ demo, query }) {
  if (!demo) {
    return (
      <div className="rounded-2xl border border-dashed border-[#14130F]/25 bg-white/60 p-6">
        <p className="font-serif text-2xl tracking-tight">Ese ejemplo todavía no lo tengo.</p>
        <p className="mt-2 leading-relaxed text-[#6B675D]">Cuéntame qué haces y te preparo uno pensado para tu negocio.</p>
        <div className="mt-5">
          <WhatsAppButton text={`Hola, tengo un negocio de "${query.trim()}" y me gustaría ver cómo quedaría mi web.`}>
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    )
  }

  return (
    <Link
      to={`/demo/${demo.slug}`}
      className="group block rounded-2xl border border-[#14130F]/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
    >
      <p className="truncate text-xs text-[#6B675D]">www.{demo.slug}.es</p>
      <p className="mt-1 text-lg font-medium leading-snug text-[#1a0dab] group-hover:underline">
        {demo.name} | {demo.category} en Barcelona
      </p>
      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[#6B675D]">{demo.hero?.description ?? demo.tagline}</p>
    </Link>
  )
}

/* Las demos del hero van una tras otra: primero las de un estilo y, al acabar, las del siguiente */
const SEQUENCE = STYLES.flatMap(style => demosOf(style).map(demo => ({ style, demo })))
const startOf = key => SEQUENCE.findIndex(item => item.style.key === key)
const styleOfDemo = demo => SEQUENCE.find(item => item.demo.slug === demo.slug)?.style
const SLIDE_MS = 5000

function Hero() {
  const [query, setQuery] = useState('')
  const [pos, setPos] = useState(0)
  const [hover, setHover] = useState(false)
  const lastDemo = useRef(null)

  const typed = query.trim().length > 0

  // Cada demo se enseña unos segundos; no avanza mientras el visitante escribe o tiene el ratón encima
  useEffect(() => {
    if (typed || hover) return
    const id = setInterval(() => setPos(p => (p + 1) % SEQUENCE.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [typed, hover, pos])

  const current = SEQUENCE[pos]
  const match = typed ? matchSector(query) : null
  const demo = typed ? (match ? demos.find(d => d.slug === match.sector.slug) ?? null : null) : current.demo
  if (demo) lastDemo.current = demo
  const phoneDemo = demo ?? lastDemo.current ?? current.demo
  const activeStyle = (demo ? styleOfDemo(demo) : null) ?? current.style
  const noun = match ? match.noun : 'negocio'
  const example = SECTORS.find(sec => sec.slug === current.demo.slug)?.query ?? 'restaurante'

  // Las pestañas son los estilos: al pulsar una se salta a su primera demo y se vuelve al ciclo automático
  const goToStyle = key => {
    setQuery('')
    setPos(startOf(key))
  }
  const tabs = STYLES.map(st => (
    <button
      key={st.key}
      type="button"
      aria-pressed={activeStyle.key === st.key}
      onClick={() => goToStyle(st.key)}
      className={`rounded-full border px-2.5 py-2 text-xs transition-colors lg:px-4 lg:text-sm ${
        activeStyle.key === st.key ? 'border-[#14130F] bg-[#14130F] text-[#F4F1EA]' : 'border-[#14130F]/25 hover:border-[#14130F]'
      }`}
    >
      {st.name}
    </button>
  ))

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 px-5 pb-16 pt-24 lg:max-w-[1180px] lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-y-0 lg:pb-24 lg:pt-36 xl:max-w-[1320px] 2xl:max-w-[1500px]">
        <h1 className="order-1 font-serif text-[clamp(2.7rem,11.5vw,3.6rem)] leading-[0.98] tracking-tight lg:col-start-1 lg:row-start-1 lg:self-end lg:text-[clamp(3.2rem,7vw,6rem)] 2xl:text-[6.75rem]">
          Tu <span key={noun} className="inline-block animate-[fadein_0.4s_ease]">{noun}</span>,<br />con una web<br /><em className="italic">que se nota.</em>
        </h1>

        <div className="order-2 lg:col-start-1 lg:row-start-2 lg:mt-8">
          <label htmlFor="buscador" className="mb-2 block text-sm font-medium">Escribe tu negocio y mira cómo quedaría tu web</label>
          <div className="relative">
            <Search size={18} strokeWidth={1.75} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#6B675D]" aria-hidden="true" />
            <input
              id="buscador"
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={`Por ejemplo: ${example}`}
              autoComplete="off"
              spellCheck="false"
              className="h-14 w-full rounded-full border border-[#14130F]/20 bg-white pl-12 pr-5 text-base shadow-sm outline-none transition-colors placeholder:text-[#6B675D]/70 focus:border-[#14130F]"
            />
          </div>
          <div className="mt-3 flex gap-1.5 lg:gap-2">{tabs}</div>
        </div>

        {/* En móvil el móvil con la demo va arriba del todo y la tarjeta de Google bajo el buscador.
            En escritorio van juntos a la derecha: el móvil y, debajo, la tarjeta */}
        <div className="contents lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:flex lg:flex-col lg:items-center lg:gap-6">
          <div
            className="order-first lg:order-none lg:w-full"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <PhoneDemo key={phoneDemo.slug} demo={phoneDemo} />
          </div>
          <div
            className="order-3 lg:order-none lg:w-[360px] 2xl:w-[400px]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <SearchResult demo={demo} query={query} />
          </div>
        </div>

        <div className="order-4 lg:col-start-1 lg:row-start-3 lg:mt-10">
          <p className="max-w-md text-lg leading-relaxed text-[#6B675D]">
            Te hago la web de tu negocio y te ayudo a que la encuentren en Google. Abre los ejemplos, tócalos y mira cómo quedaría la tuya.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#trabajos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14130F]/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-[#14130F]"
            >
              Ver ejemplos <ArrowRight size={16} strokeWidth={1.75} />
            </a>
            <WhatsAppButton text="Hola, me gustaría hablar sobre una web para mi negocio.">
              Escríbeme por WhatsApp
            </WhatsAppButton>
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

function Google() {
  return (
    <section id="google" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Que te encuentren en Google</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6B675D]">
            Una web bonita no sirve de mucho si nadie la encuentra. Cuando alguien busque en Google lo que haces y dónde estás, quiero que aparezcas tú.
          </p>
          <div className="mt-8 max-w-md border-l-2 border-[#14130F] pl-5">
            <p className="font-medium">Qué esperar</p>
            <p className="mt-2 leading-relaxed text-[#6B675D]">
              El posicionamiento tarda semanas o meses, y nadie serio puede prometerte el primer puesto. Lo que sí te prometo es que tu web queda bien preparada y que, al buscar el nombre de tu negocio, apareces tú.
            </p>
          </div>
        </div>

        <dl className="divide-y divide-[#14130F]/10 border-y border-[#14130F]/10">
          {GOOGLE_POINTS.map(p => (
            <div key={p.title} className="grid gap-1 py-5 md:grid-cols-[13rem_1fr] md:gap-6">
              <dt className="font-medium">{p.title}</dt>
              <dd className="leading-relaxed text-[#6B675D]">{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Includes() {
  return (
    <section id="incluye" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Qué incluye</h2>
        <p className="mt-4 max-w-lg text-[#6B675D]">Todo lo que necesitas para tener tu negocio en internet, sin ir de un proveedor a otro.</p>
        <dl className="mt-12 divide-y divide-[#14130F]/10 border-y border-[#14130F]/10">
          {INCLUDES.map(item => (
            <div key={item.title} className="grid gap-1 py-5 md:grid-cols-[16rem_1fr] md:gap-6">
              <dt className="font-serif text-2xl">{item.title}</dt>
              <dd className="leading-relaxed text-[#6B675D]">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="preguntas" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Preguntas frecuentes</h2>
        <div className="mt-12 divide-y divide-[#14130F]/10 border-y border-[#14130F]/10">
          {FAQ.map(item => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus size={18} strokeWidth={1.75} className="shrink-0 text-[#6B675D] transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-[#6B675D]">{item.a}</p>
            </details>
          ))}
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
        <Google />
        <Includes />
        <Plans />
        <Steps />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </LandingShell>
  )
}
