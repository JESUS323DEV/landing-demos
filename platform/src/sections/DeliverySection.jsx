export default function DeliverySection({ config }) {
  const dark = config.dark ?? false

  const sectionBg  = dark ? 'bg-demo-text' : 'bg-demo-surface'
  const labelColor = dark ? 'text-demo-primary' : 'text-demo-primary'
  const titleColor = dark ? 'text-white' : 'text-demo-text'
  const subtitleColor = dark ? 'text-white/65' : 'text-demo-muted'
  const cardBg     = dark ? 'bg-white/[.08] border-white/15 hover:border-demo-accent/50' : 'bg-demo-bg border-demo-primary/10 hover:border-demo-primary/40'
  const chNameColor = dark ? 'text-white' : 'text-demo-text'
  const chDescColor = dark ? 'text-white/50' : 'text-demo-muted'
  const chCtaColor  = dark ? 'text-demo-primary' : 'text-demo-primary'
  const infoBg     = dark ? 'bg-white/5' : 'bg-demo-bg border border-demo-primary/10'
  const infoLabel  = dark ? 'text-white' : 'text-demo-text'
  const infoValue  = dark ? 'text-white/45' : 'text-demo-muted'

  return (
    <section id="delivery" className={`py-20 md:py-28 relative overflow-hidden ${sectionBg}`}>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none" style={{ background: 'var(--demo-primary)', filter: 'blur(100px)', borderRadius: '50%' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none" style={{ background: 'var(--demo-accent)', filter: 'blur(100px)', borderRadius: '50%' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        <h2 className={`font-demo-heading text-3xl md:text-5xl mb-4 ${titleColor}`}>{config.title}</h2>
        {config.subtitle && (
          <p className={`font-demo-body text-base md:text-lg max-w-xl mx-auto mb-12 ${subtitleColor}`}>{config.subtitle}</p>
        )}

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {config.channels.map((ch, i) => (
            <a
              key={i}
              href={ch.href ?? '#'}
              target={ch.href ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group border rounded-3xl p-8 text-center transition-all ${cardBg}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform"
                style={{ backgroundColor: ch.color }}
              >
                <span className="text-white font-black text-lg">{ch.logo}</span>
              </div>
              <h3 className={`font-demo-heading text-lg mb-2 ${chNameColor}`}>{ch.name}</h3>
              <p className={`font-demo-body text-sm ${chDescColor}`}>{ch.description}</p>
              {ch.cta && <p className={`font-demo-body font-semibold text-sm mt-4 ${chCtaColor}`}>{ch.cta}</p>}
            </a>
          ))}
        </div>

        {config.info && (
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {config.info.map((row, i) => (
              <div key={i} className={`flex items-center gap-4 rounded-xl px-5 py-4 ${infoBg}`}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: dark ? 'rgba(196,135,42,0.2)' : 'color-mix(in srgb, var(--demo-primary) 15%, transparent)' }}
                >
                  <span className="text-lg">{row.icon}</span>
                </div>
                <div className="text-left">
                  <p className={`font-demo-body text-sm font-semibold ${infoLabel}`}>{row.label}</p>
                  <p className={`font-demo-body text-xs ${infoValue}`}>{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
