import Icon from '../components/Icon'
import { useState } from 'react'

/* Formulario de consulta: nombre, teléfono, email, mensaje y aceptar la política. config.form.message (opcional) es el texto de ayuda del mensaje */
function ContactForm({ sent, onSubmit, form = {} }) {
  const inp = 'w-full bg-demo-bg border border-demo-primary/20 rounded-xl text-demo-text font-demo-body text-sm px-4 py-3 outline-none focus:border-demo-primary transition-colors placeholder:text-demo-muted/40'

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-demo-primary/15 flex items-center justify-center">
          <span className="text-2xl text-demo-primary">✓</span>
        </div>
        <h3 className="font-demo-heading text-demo-primary text-2xl">Mensaje enviado</h3>
        <p className="font-demo-body text-demo-muted text-sm">Te respondemos en menos de 24 h.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="Nombre" required autoComplete="name" className={inp} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="email" placeholder="Email" required autoComplete="email" className={inp} />
        <input type="tel" placeholder="Teléfono" required autoComplete="tel" className={inp} />
      </div>
      <textarea placeholder={form.message ?? 'Tu mensaje'} required rows={5} className={`${inp} resize-none`} />

      <label className="flex items-start gap-3 font-demo-body text-demo-muted text-xs leading-relaxed cursor-pointer">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[var(--demo-primary)]" />
        <span>He leído y acepto la política de privacidad.</span>
      </label>

      <button
        type="submit"
        className="font-demo-body bg-demo-primary text-demo-bg text-sm font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity mt-1"
      >
        Enviar
      </button>
      <p className="font-demo-body text-demo-muted text-xs text-center">
        Powered by <span className="font-semibold text-demo-primary">Reservaq</span>
      </p>
    </form>
  )
}

// Mapa por defecto de las demos: una ubicación cualquiera de Barcelona
const DEFAULT_MAP = 'https://maps.google.com/maps?q=Pla%C3%A7a%20de%20Catalunya%2C%20Barcelona&z=15&output=embed'

// Una línea de contacto: icono pequeño y el dato al lado
function ContactLine({ icon, children }) {
  return (
    <p className="flex items-start gap-3 font-demo-body text-demo-text text-base">
      <Icon name={icon} size={20} className="mt-0.5 flex-shrink-0 text-demo-muted" />
      <span className="min-w-0 break-words">{children}</span>
    </p>
  )
}

/* Primero el formulario de consulta; al lado (escritorio) o debajo (móvil), los datos de contacto, el horario y el mapa */
export default function ContactSection({ config }) {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-20 md:py-28 bg-demo-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch md:gap-12">

          {/* Formulario de consulta */}
          <div className="bg-demo-surface rounded-3xl p-7 md:p-9 border border-demo-primary/10">
            <p className="font-demo-heading text-demo-text text-2xl mb-6 text-center md:text-left">¿Cómo te podemos ayudar?</p>
            <ContactForm sent={sent} form={config.form} onSubmit={e => { e.preventDefault(); setSent(true) }} />
          </div>

          {/* Datos, horario y mapa */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-demo-heading text-demo-text text-3xl md:text-4xl leading-tight text-center md:text-left">{config.title}</h2>
              {config.subtitle && (
                <p className="font-demo-body text-demo-muted text-base leading-relaxed text-center md:text-left">{config.subtitle}</p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {config.phone && <ContactLine icon="phone">{config.phone}</ContactLine>}
              {config.email && <ContactLine icon="mail">{config.email}</ContactLine>}
              {config.address && <ContactLine icon="map-pin">{config.address}</ContactLine>}
            </div>

            {config.hours && (
              <div>
                <p className="font-demo-heading text-demo-text text-lg font-semibold mb-2">Horario</p>
                <p className="font-demo-body text-demo-muted text-sm leading-relaxed">{config.hours}</p>
              </div>
            )}

            <div className="relative h-64 md:h-auto md:min-h-[260px] md:flex-1 rounded-2xl overflow-hidden border border-demo-primary/10">
              <iframe
                src={config.map?.embedUrl ?? DEFAULT_MAP}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }} loading="lazy" title="Ubicación"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
