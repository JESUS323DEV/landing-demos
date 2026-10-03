import { useState } from 'react'

export default function OrderFormSection({ config }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dish, setDish] = useState(config.dishes?.[0] ?? '')
  const [notes, setNotes] = useState('')

  const inp = 'w-full bg-demo-bg border border-demo-primary/20 rounded-xl text-demo-text font-demo-body text-sm px-4 py-3 outline-none focus:border-demo-primary transition-colors placeholder:text-demo-muted/40'

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      'Hola! Voldria fer una comanda:',
      `Nom: ${name}`,
      `Telèfon: ${phone}`,
      `Què voleu: ${dish}`,
    ]
    if (notes.trim()) lines.push(`Observacions: ${notes}`)
    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${config.whatsapp}?text=${text}`, '_blank')
  }

  return (
    <section id="order" className="py-20 md:py-28 bg-demo-surface">
      <div className="max-w-lg mx-auto px-5">
        <div className="text-center mb-10">
          {config.label && (
            <p className="font-demo-body text-demo-primary text-xs font-bold uppercase tracking-widest mb-3">{config.label}</p>
          )}
          <h2 className="font-demo-heading text-demo-text text-3xl md:text-4xl mb-3">{config.title}</h2>
          {config.subtitle && (
            <p className="font-demo-body text-demo-muted text-sm leading-relaxed">{config.subtitle}</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-demo-bg rounded-3xl p-7 md:p-9 border border-demo-primary/10 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text" required placeholder="Nom" value={name}
              onChange={e => setName(e.target.value)} className={inp}
            />
            <input
              type="tel" required placeholder="Telèfon" value={phone}
              onChange={e => setPhone(e.target.value)} className={inp}
            />
          </div>

          <select value={dish} onChange={e => setDish(e.target.value)} className={inp}>
            {config.dishes?.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <textarea
            placeholder="Observacions (opcional)" rows={3} value={notes}
            onChange={e => setNotes(e.target.value)} className={`${inp} resize-none`}
          />

          <button
            type="submit"
            className="font-demo-body bg-demo-primary text-demo-bg text-sm font-semibold py-3.5 rounded-full hover:opacity-90 transition-opacity mt-1"
          >
            Enviar comanda per WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
