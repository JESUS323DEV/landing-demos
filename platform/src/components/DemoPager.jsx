import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { demoSequence, groupOf, GROUPS } from '../demos/sequence'
import useAutoHide from '../lib/useAutoHide'

/* Flechas para pasar de una demo a otra, solo en móvil (por debajo de lg).
   - Atrás solo está bloqueado en la primera demo de todas.
   - Atrás y adelante cruzan de grupo con una pantalla corta de transición.
   - Se desvanecen solas (useAutoHide) para no estorbar a la demo.
   No se muestra dentro de un iframe (vistas previas de la portada). */
export default function DemoPager({ demo }) {
  const navigate = useNavigate()
  const [transition, setTransition] = useState(null)
  const visible = useAutoHide(demo.slug)

  const inFrame = typeof window !== 'undefined' && window.self !== window.top
  if (inFrame) return null

  const i = demoSequence.findIndex(d => d.slug === demo.slug)
  if (i === -1) return null

  const prev = demoSequence[i - 1]
  const next = demoSequence[i + 1]
  const canGoBack = Boolean(prev)
  const canGoNext = Boolean(next)

  const go = slug => navigate(`/demo/${slug}`)

  const goTo = target => {
    if (!target || transition) return
    if (groupOf(target) === groupOf(demo)) {
      go(target.slug)
      return
    }
    // Cambio de grupo: pantalla de transición, luego navega y la quita
    setTransition(GROUPS.find(g => g.key === groupOf(target)))
    setTimeout(() => go(target.slug), 900)
    setTimeout(() => setTransition(null), 1600)
  }

  const arrow =
    'lg:hidden fixed top-1/2 -translate-y-1/2 z-40 w-9 h-9 rounded-full bg-black/35 text-white backdrop-blur-sm flex items-center justify-center transition-opacity duration-500'
  const state = enabled =>
    !visible ? 'opacity-0 pointer-events-none' : enabled ? 'opacity-75' : 'opacity-25 pointer-events-none'

  return (
    <>
      <button
        onClick={() => goTo(prev)}
        disabled={!canGoBack}
        aria-label="Demo anterior"
        className={`${arrow} left-2 ${state(canGoBack)}`}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => goTo(next)}
        disabled={!canGoNext}
        aria-label="Demo siguiente"
        className={`${arrow} right-2 ${state(canGoNext)}`}
      >
        <ChevronRight size={20} />
      </button>

      {transition && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-[#0B0B0C] text-white flex flex-col items-center justify-center text-center px-8 animate-[fadeInOut_1.6s_ease-in-out_forwards]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">Entras en</p>
          <p className="text-5xl font-semibold tracking-tight">{transition.title}</p>
          <p className="text-base text-white/60 mt-5 max-w-xs">{transition.blurb}</p>
        </div>
      )}
    </>
  )
}
