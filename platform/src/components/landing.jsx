import { MessageCircle } from 'lucide-react'

/* ── Piezas comunes de la portada y de las páginas de estilos ── */
export const BRAND = 'JesúsDev'
const WHATSAPP = '34600000000'

/* Nombre de la marca como texto: "Jesús" recto y "Dev" en cursiva, con la tipografía de la portada */
export function Brand() {
  return <>Jesús<em className="italic">Dev</em></>
}

export const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

export function WhatsAppButton({ text, children, dark = true }) {
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

export function Footer() {
  return (
    <footer className="bg-[#14130F] pb-10 text-[#F4F1EA]/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 pt-8 text-sm sm:flex-row">
        <span className="font-serif text-lg text-[#F4F1EA]"><Brand /></span>
        <span>© 2026 {BRAND}. Diseño web y posicionamiento en Google para negocios locales.</span>
      </div>
    </footer>
  )
}

/* Contenedor con la tipografía y los colores de la portada */
export function LandingShell({ children }) {
  return (
    <div className="bg-[#F4F1EA] text-[#14130F]" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
      <style>{`.font-serif { font-family: "Instrument Serif", Georgia, serif; font-weight: 400; }`}</style>
      {children}
    </div>
  )
}
