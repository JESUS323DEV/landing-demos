import { useState, useEffect } from 'react'

function TurnoYaWidget({ widgetConfig }) {
  useEffect(() => {
    if (!window.process) window.process = { env: { NODE_ENV: 'production' } }
    if (!document.getElementById('reservarq-css')) {
      const link = document.createElement('link')
      link.id = 'reservarq-css'
      link.rel = 'stylesheet'
      link.href = 'https://turnoya-demo.netlify.app/reservaq.css'
      document.head.appendChild(link)
    }
    if (!document.getElementById('reservarq-js')) {
      const script = document.createElement('script')
      script.id = 'reservarq-js'
      script.src = 'https://turnoya-demo.netlify.app/reservaq.js'
      document.body.appendChild(script)
    }
  }, [])
  return (
    <div className="md:max-h-[580px] md:overflow-y-auto rounded-3xl border border-demo-primary/10">
      <div id="reservaq" data-config={JSON.stringify(widgetConfig)} />
    </div>
  )
}

export default function ContactSection({ config }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = 'w-full bg-demo-bg border border-demo-primary/20 rounded-xl text-demo-text font-demo-body text-sm px-4 py-3 outline-none focus:border-demo-primary transition-colors placeholder:text-demo-muted/50'

  const INFO_ICONS = {
    phone:   '📞',
    email:   '✉️',
    address: '📍',
    hours:   '🕐',
  }

  const infoRows = [
    { key: 'phone',   label: 'Telefono',  value: config.phone },
    { key: 'email',   label: 'Email',     value: config.email },
    { key: 'address', label: 'Direccion', value: config.address },
    { key: 'hours',   label: 'Horario',   value: config.hours },
  ].filter(r => r.value)

  return (
    <section id="contact" className="py-20 md:py-28 bg-demo-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Info */}
          <div className="flex flex-col gap-6">
            {config.label && (
              <span className="font-demo-body text-demo-primary text-xs tracking-[0.2em] uppercase">{config.label}</span>
            )}
            <h2 className="font-demo-heading text-demo-text text-3xl md:text-4xl leading-tight">
              {config.title}
            </h2>
            {config.subtitle && (
              <p className="font-demo-body text-demo-muted text-base leading-relaxed">{config.subtitle}</p>
            )}

            <div className="flex flex-col gap-5 mt-2">
              {infoRows.map(row => (
                <div key={row.key} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-demo-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-lg">{INFO_ICONS[row.key]}</span>
                  </div>
                  <div>
                    <p className="font-demo-body text-demo-muted text-xs uppercase tracking-widest mb-1">{row.label}</p>
                    <p className="font-demo-body text-demo-text text-sm font-medium">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map, Widget or Form card */}
          {config.widget ? (
            <TurnoYaWidget widgetConfig={config.widget} />
          ) : config.map ? (
            <div className="rounded-3xl overflow-hidden border border-demo-primary/10 h-[420px]">
              <iframe
                src={config.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Ubicacion"
              />
            </div>
          ) : (
          <div className="bg-demo-surface rounded-3xl p-7 md:p-9 border border-demo-primary/10">
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-demo-primary/20 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-demo-heading text-demo-primary text-2xl">Mensaje enviado</h3>
                <p className="font-demo-body text-demo-muted text-sm">Te contactamos pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text" placeholder="Tu nombre"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required className={inputClass}
                />
                <input
                  type="email" placeholder="Tu email"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required className={inputClass}
                />
                <textarea
                  placeholder="Tu mensaje"
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5} required
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="font-demo-body bg-demo-primary text-demo-bg text-sm font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity mt-1"
                >
                  Enviar mensaje
                </button>
                <p className="font-demo-body text-demo-muted text-xs text-center">
                  Te respondemos en menos de 24h.
                </p>
              </form>
            )}
          </div>
          )}

        </div>
      </div>
    </section>
  )
}
