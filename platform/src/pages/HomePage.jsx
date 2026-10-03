import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import { demos } from '../demos'

/* ── Datos editables de la portada ── */
const BRAND = 'Tu marca'
const WHATSAPP = '34600000000'
const FEATURED = ['senorio', 'aura-estetica', 'navaja-y-tijera'] // demos que rotan en el móvil del hero

const TIERS = [
  {
    key: 'custom',
    title: 'A medida',
    description: 'Hero propio y diseño pensado para la marca.',
    groups: [
      { key: 'editorial', title: 'Editorial' },
      { key: 'inmersivo', title: 'Inmersivo' },
    ],
  },
  {
    key: 'base',
    title: 'Base',
    description: 'Una estructura probada, adaptada al tono y los colores de cada marca.',
  },
]

const PLANS = [
  {
    title: 'Base',
    text: 'Una estructura ya probada, adaptada a tu marca. Ideal si quieres una web limpia, rápida y asequible.',
    points: ['Tus colores, tipografías y textos', 'Secciones a elegir', 'Lista en poco tiempo'],
    message: 'Hola, me interesa una web de la gama Base.',
  },
  {
    title: 'A medida',
    text: 'Diseño propio desde el hero hasta los detalles. Pensada para diferenciarte y enseñar mejor tu negocio.',
    points: ['Hero y estructura únicos', 'Pensada para tu sector', 'Más ajuste y más cuidado'],
    message: 'Hola, me interesa una web A medida.',
  },
]

const STEPS = [
  { n: '01', title: 'Hablamos', text: 'Me cuentas qué necesitas, qué quieres enseñar y cómo quieres que te contacten.' },
  { n: '02', title: 'Te enseño tu demo', text: 'Preparo una propuesta visual con tu negocio para que la veas antes de decidir.' },
  { n: '03', title: 'Publicamos', text: 'Ajustamos los detalles, lo dejamos todo listo y tu web sale online.' },
]

const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

/* ── Previsualización viva: carga la demo real y la escala al ancho disponible ── */
function ScaledFrame({ slug, width, height, title, frameClass = 'pointer-events-none', className = '' }) {
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
    <div ref={ref} className={`relative overflow-hidden bg-white ${className}`} style={{ height: height * scale }}>
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

function WhatsAppButton({ text, children, dark = true }) {
  return (
    <a
      href={wa(text)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-opacity hover:opacity-85 ${
        dark ? 'bg-[#14130F] text-[#F4F1EA]' : 'bg-[#F4F1EA] text-[#14130F]'
      }`}
    >
      <MessageCircle size={16} strokeWidth={1.75} />
      {children}
    </a>
  )
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <a href="#top" className="font-serif text-2xl tracking-tight">{BRAND}</a>
        <nav className="hidden items-center gap-8 text-sm text-[#6B675D] md:flex">
          <a href="#trabajos" className="hover:text-[#14130F] transition-colors">Trabajos</a>
          <a href="#gamas" className="hover:text-[#14130F] transition-colors">Gamas</a>
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

  const current = featured[idx]

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-36">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#6B675D]">Webs para negocios locales</p>
          <h1 className="font-serif text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
            Tu negocio,<br />con una web<br /><em className="italic">que se nota.</em>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#6B675D]">
            Ejemplos reales, no promesas. Ábrelos, tócalos y mira cómo quedaría la tuya.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#trabajos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14130F]/25 px-6 py-3.5 text-sm font-medium hover:border-[#14130F] transition-colors"
            >
              Ver trabajos <ArrowRight size={16} strokeWidth={1.75} />
            </a>
            <WhatsAppButton text="Hola, me gustaría hablar sobre una web para mi negocio.">
              Escríbeme por WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {/* Móvil con la demo real, se puede tocar y hacer scroll en pantallas grandes */}
        <div className="mx-auto w-full max-w-[290px] lg:max-w-[310px]">
          <div className="rounded-[2.6rem] bg-[#14130F] p-2.5 shadow-[0_40px_80px_-30px_rgba(20,19,15,0.55)]">
            <div className="overflow-hidden rounded-[2.1rem]">
              <ScaledFrame
                key={current.slug}
                slug={current.slug}
                width={390}
                height={800}
                title={`Demo ${current.name}`}
                frameClass="pointer-events-none lg:pointer-events-auto"
              />
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

function DemoCard({ demo }) {
  return (
    <Link to={`/demo/${demo.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-[#14130F]/10 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <ScaledFrame slug={demo.slug} width={1280} height={800} title={`Vista previa de ${demo.name}`} />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-medium">{demo.name}</p>
          <p className="text-sm text-[#6B675D]">{demo.category}</p>
        </div>
        <ArrowUpRight size={18} strokeWidth={1.5} className="mt-1 text-[#6B675D] transition-colors group-hover:text-[#14130F]" />
      </div>
    </Link>
  )
}

function Works() {
  return (
    <section id="trabajos" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Trabajos</h2>
        <p className="mt-4 max-w-lg text-[#6B675D]">
          Webs de ejemplo para distintos tipos de negocio. Pulsa en cualquiera para abrirla entera.
        </p>

        {TIERS.map(tier => {
          const items = demos.filter(d => d.tier === tier.key)
          if (!items.length) return null
          return (
            <div key={tier.key} className="mt-16">
              <div className="mb-8 flex flex-col gap-1 border-b border-[#14130F]/10 pb-4 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-serif text-3xl">{tier.title}</h3>
                <p className="text-sm text-[#6B675D]">{tier.description}</p>
              </div>

              {tier.groups ? tier.groups.map(group => {
                const groupItems = items.filter(d => d.group === group.key)
                if (!groupItems.length) return null
                return (
                  <div key={group.key} className="mb-10 last:mb-0">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#6B675D]">{group.title}</p>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {groupItems.map(demo => <DemoCard key={demo.slug} demo={demo} />)}
                    </div>
                  </div>
                )
              }) : (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(demo => <DemoCard key={demo.slug} demo={demo} />)}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Plans() {
  return (
    <section id="gamas" className="border-t border-[#14130F]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Dos gamas</h2>
        <p className="mt-4 max-w-lg text-[#6B675D]">Dos formas de tener una web profesional, según lo que necesite tu negocio.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <div
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
            </div>
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
        <p className="mt-4 max-w-lg text-[#6B675D]">Un proceso claro, sin complicaciones.</p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map(s => (
            <div key={s.n} className="border-t border-[#14130F] pt-5">
              <p className="font-serif text-3xl text-[#6B675D]">{s.n}</p>
              <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-[#6B675D] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
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
          Cuéntame qué negocio tienes y te enseño cómo lo haría.
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

function Footer() {
  return (
    <footer className="bg-[#14130F] pb-10 text-[#F4F1EA]/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 pt-8 text-sm sm:flex-row">
        <span className="font-serif text-lg text-[#F4F1EA]">{BRAND}</span>
        <span>© 2026 {BRAND}. Webs para negocios locales.</span>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div className="bg-[#F4F1EA] text-[#14130F]" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`.font-serif { font-family: "Instrument Serif", Georgia, serif; font-weight: 400; }`}</style>
      <Nav />
      <Hero />
      <Works />
      <Plans />
      <Steps />
      <FinalCTA />
      <Footer />
    </div>
  )
}
