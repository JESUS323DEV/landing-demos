import { useState } from 'react'

function ReservaqMockup({ sent, onSubmit }) {
  const inp = 'w-full bg-demo-bg border border-demo-primary/20 rounded-xl text-demo-text font-demo-body text-sm px-4 py-3 outline-none focus:border-demo-primary transition-colors placeholder:text-demo-muted/40'

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-demo-primary/15 flex items-center justify-center">
          <span className="text-2xl text-demo-primary">✓</span>
        </div>
        <h3 className="font-demo-heading text-demo-primary text-2xl">Solicitud enviada</h3>
        <p className="font-demo-body text-demo-muted text-sm">Te contactamos en menos de 24h.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <p className="font-demo-body text-demo-muted text-xs uppercase tracking-widest">Tus datos</p>

      <div className="grid grid-cols-2 gap-3">
        <input type="text"   placeholder="Nombre"    required className={inp} />
        <input type="tel"    placeholder="Teléfono"  required className={inp} />
      </div>
      <input type="email" placeholder="Email" required className={inp} />

      <p className="font-demo-body text-demo-muted text-xs uppercase tracking-widest mt-1">Fecha y hora</p>
      <div className="grid grid-cols-2 gap-3">
        <div className={`${inp} flex items-center gap-2 cursor-pointer`}>
          <span className="text-demo-primary text-base">📅</span>
          <span className="text-demo-muted/60">dd / mm / aaaa</span>
        </div>
        <div className={`${inp} flex items-center gap-2 cursor-pointer`}>
          <span className="text-demo-primary text-base">🕐</span>
          <span className="text-demo-muted/60">Selecciona hora</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="font-demo-body text-demo-muted text-xs uppercase tracking-widest mb-2">Personas</p>
          <select className={inp}>
            {[1,2,3,4,5,6].map(n => <option key={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>)}
          </select>
        </div>
      </div>

      <textarea placeholder="Mensaje (opcional)" rows={3} className={`${inp} resize-none`} />

      <button
        type="submit"
        className="font-demo-body bg-demo-primary text-demo-bg text-sm font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity mt-1"
      >
        Reservar
      </button>
      <p className="font-demo-body text-demo-muted text-xs text-center">
        Powered by <span className="font-semibold text-demo-primary">Reservarq</span>
      </p>
    </form>
  )
}

export default function ContactSection({ config }) {
  const [sent, setSent] = useState(false)

  const INFO_ICONS = { phone: '📞', email: '✉️', address: '📍', hours: '🕐' }
  const infoRows = [
    { key: 'phone',   label: 'Teléfono',  value: config.phone },
    { key: 'email',   label: 'Email',     value: config.email },
    { key: 'address', label: 'Dirección', value: config.address },
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

          {/* Mapa o formulario */}
          {config.map ? (
            <div className="rounded-3xl overflow-hidden border border-demo-primary/10 h-[420px]">
              <iframe
                src={config.map.embedUrl}
                width="100%" height="100%"
                style={{ border: 0 }} loading="lazy" title="Ubicacion"
              />
            </div>
          ) : (
            <div className="bg-demo-surface rounded-3xl p-7 md:p-9 border border-demo-primary/10">
              <p className="font-demo-heading text-demo-text text-xl mb-6">Reservas</p>
              <ReservaqMockup sent={sent} onSubmit={e => { e.preventDefault(); setSent(true) }} />
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
