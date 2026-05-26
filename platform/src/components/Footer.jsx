export default function Footer({ demo }) {
  const f = demo.footer
  if (!f) return null

  const dark     = f.dark ?? false
  const textCol  = dark ? 'var(--demo-bg)'   : 'var(--demo-text)'
  const mutedCol = dark ? 'var(--demo-bg)'   : 'var(--demo-muted)'
  const bgClass  = dark ? 'bg-demo-accent'   : 'bg-demo-surface'
  const borderCl = dark ? 'border-white/10'  : 'border-demo-primary/10'

  const initials = demo.nav?.initials ?? demo.name.slice(0, 2).toUpperCase()

  // Columnas: usa las del config o las genera automáticamente
  const columns = f.columns ?? [
    {
      brand: true,
      text: demo.tagline ?? null,
    },
    {
      title: 'Navegación',
      links: demo.nav?.links ?? [],
    },
    ...(demo.contact ? [{
      title: 'Contacto',
      info: [
        demo.contact.address,
        demo.contact.phone,
        demo.contact.email,
        demo.contact.hours,
      ].filter(Boolean),
    }] : []),
  ]

  const legal = f.legal ?? [
    { label: 'Aviso legal',            href: '#' },
    { label: 'Política de privacidad', href: '#' },
    { label: 'Cookies',                href: '#' },
  ]

  return (
    <footer className={`border-t ${borderCl} ${bgClass}`} >
      <div className="max-w-6xl mx-auto px-5 ">

        {/* Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          {columns.map((col, i) => (
            <div key={i}>
              {col.brand && (
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-full bg-demo-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-demo-heading text-demo-bg text-sm font-bold">{initials}</span>
                  </div>
                  <span className="font-demo-heading text-base font-semibold" style={{ color: textCol }}>
                    {demo.name}
                  </span>
                </div>
              )}
              {col.title && (
                <p className="font-demo-body text-xs font-bold uppercase tracking-widest mb-4 text-demo-primary">
                  {col.title}
                </p>
              )}
              {col.text && (
                <p className="font-demo-body text-sm leading-relaxed " style={{ color: mutedCol }}>
                  {col.text}
                </p>
              )}
              {col.links?.length > 0 && (
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a
                        href={l.href}
                        className="font-demo-body text-sm opacity-90 hover:opacity-80 transition-opacity"
                        style={{ color: mutedCol }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {col.info?.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {col.info.map((line, j) => (
                    <li key={j} className="font-demo-body text-sm opacity-90" style={{ color: mutedCol }}>
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Barra inferior */}
        <div className={`border-t ${borderCl} py-5 flex flex-col sm:flex-row items-center justify-between gap-3`}>
          <p className="font-demo-body text-xs opacity-90" style={{ color: textCol }}>
            {f.copy ?? `© ${new Date().getFullYear()} ${demo.name}`}
          </p>
          <div className="flex items-center gap-5">
            {legal.map((l, i) => (
              <a
                key={i}
                href={l.href}
                className="font-demo-body text-xs opacity-90 hover:opacity-80 transition-opacity"
                style={{ color: mutedCol }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
