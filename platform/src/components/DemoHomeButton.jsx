import { Link } from 'react-router-dom'
import { House } from 'lucide-react'
import useAutoHide from '../lib/useAutoHide'

/* Botón discreto para volver a la portada, solo en móvil (por debajo de lg).
   Fijo, centrado y justo debajo del menú de la demo (que mide 4rem de alto).
   Se desvanece solo (useAutoHide), igual que las flechas.
   No se muestra dentro de un iframe (vistas previas de la portada). */
export default function DemoHomeButton({ slug }) {
  const visible = useAutoHide(slug)

  const inFrame = typeof window !== 'undefined' && window.self !== window.top
  if (inFrame) return null

  return (
    <Link
      to="/"
      aria-label="Volver al inicio"
      className={`lg:hidden fixed top-[4.5rem] left-1/2 -translate-x-1/2 z-40 w-7 h-7 rounded-full bg-black/35 text-white backdrop-blur-sm flex items-center justify-center transition-opacity duration-500 ${visible ? 'opacity-70' : 'opacity-0 pointer-events-none'}`}
    >
      <House size={14} />
    </Link>
  )
}
