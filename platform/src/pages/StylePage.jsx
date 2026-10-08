import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Brand, Footer, LandingShell, WhatsAppButton } from '../components/landing'
import { TIER_TEXT, captureOf, demosOf, getStyle } from '../lib/estilos'
import useDocumentMeta from '../lib/useDocumentMeta'

/* Página de un estilo: aquí se ven las demos grandes, una por una */
export default function StylePage() {
  const { key } = useParams()
  const style = getStyle(key)

  useEffect(() => { window.scrollTo(0, 0) }, [key])
  useDocumentMeta(
    style ? `${style.title} (${style.name}): diseño web para negocios locales en Barcelona | JesúsDev` : 'JesúsDev | Diseño web para negocios locales en Barcelona',
    style ? `${style.summary} Mira los ejemplos de webs ${style.name === 'Base' ? 'de la gama Base' : `de estilo ${style.name.toLowerCase()}`} y ábrelos enteros.` : undefined,
  )

  if (!style) return <Navigate to="/" replace />

  const items = demosOf(style)
  const tier = TIER_TEXT[style.tier]

  return (
    <LandingShell>
      <header className="border-b border-[#14130F]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
          <Link to="/" className="font-serif text-2xl tracking-tight"><Brand /></Link>
          <Link to="/#trabajos" className="inline-flex items-center gap-2 text-sm text-[#6B675D] transition-colors hover:text-[#14130F]">
            <ArrowLeft size={16} strokeWidth={1.75} /> Todos los estilos
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:pb-28 md:pt-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6B675D]">Gama {tier.title}</p>
        <h1 className="mt-3 font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.98] tracking-tight">{style.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B675D]">
          <span className="font-medium text-[#14130F]">{style.name}.</span> {style.summary} {tier.description}
        </p>

        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {items.map(demo => (
            <article key={demo.slug} className="grid items-center gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
              <Link
                to={`/demo/${demo.slug}`}
                className="group block overflow-hidden rounded-xl border border-[#14130F]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <img
                  src={captureOf(demo)}
                  alt={`Ejemplo de web: ${demo.name}, ${demo.category}`}
                  width="1280"
                  height="800"
                  loading="lazy"
                  className="block aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
              <div>
                <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{demo.name}</h2>
                <p className="mt-2 text-[#6B675D]">{demo.category}</p>
                <Link
                  to={`/demo/${demo.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#14130F]/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-[#14130F]"
                >
                  Abrir la web entera <ArrowUpRight size={16} strokeWidth={1.75} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-5 border-t border-[#14130F]/10 pt-12 md:mt-28">
          <p className="max-w-md font-serif text-3xl tracking-tight md:text-4xl">¿Te gusta este estilo para tu negocio?</p>
          <WhatsAppButton text={`Hola, me gustaría una web de estilo ${style.name} (${style.title}) para mi negocio.`}>
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </div>
      </main>

      <Footer />
    </LandingShell>
  )
}
