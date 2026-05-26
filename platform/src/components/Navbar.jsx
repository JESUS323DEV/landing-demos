import { useState, useEffect } from 'react'

export default function Navbar({ demo }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const transparent = demo.nav?.transparent ?? false
  const heroDark    = demo.hero?.dark ?? false

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overlayActive = transparent && !scrolled

  const navBg = transparent
    ? scrolled
      ? 'bg-demo-bg/95 backdrop-blur-md shadow-sm'
      : heroDark ? 'bg-demo-accent backdrop-blur-sm' : 'bg-transparent'
    : 'bg-demo-bg/95 backdrop-blur-md border-b border-demo-primary/10'

  const textColor  = overlayActive ? 'text-white'    : 'text-demo-text'
  const mutedColor = overlayActive ? 'text-white/70' : 'text-demo-muted'
  const hamBg      = overlayActive ? 'bg-white'      : 'bg-demo-text'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-demo-primary flex items-center justify-center flex-shrink-0">
            <span className="font-demo-heading text-demo-bg text-sm font-bold leading-none">
              {demo.nav?.initials ?? demo.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div>
            <p className={`font-demo-heading text-sm leading-tight tracking-wide ${textColor}`}>{demo.name}</p>
            {demo.nav?.subtitle && (
              <p className="text-demo-primary text-xs tracking-widest uppercase leading-none">{demo.nav.subtitle}</p>
            )}
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {demo.nav.links.map(link => (
            <li key={link.href}>
              <a href={link.href} className={`text-sm font-demo-body tracking-wide hover:text-demo-primary transition-colors ${mutedColor}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        {demo.nav?.cta && (
          <a
            href={demo.nav.cta.href}
            className="hidden md:inline-block font-demo-body text-xs font-semibold px-5 py-2.5 rounded-full bg-demo-primary text-demo-bg hover:opacity-90 transition-opacity tracking-wide"
          >
            {demo.nav.cta.label}
          </a>
        )}

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 flex flex-col gap-1.5" aria-label="Menu">
          <span className={`block h-0.5 w-6 transition-transform duration-200 ${hamBg} ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 transition-opacity duration-200 ${hamBg} ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 transition-transform duration-200 ${hamBg} ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-demo-bg/98 backdrop-blur-md border-t border-demo-primary/10">
          <ul className="px-5 py-5 flex flex-col gap-5">
            {demo.nav.links.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="text-demo-text text-base font-demo-body">
                  {link.label}
                </a>
              </li>
            ))}
            {demo.nav?.cta && (
              <li>
                <a
                  href={demo.nav.cta.href}
                  onClick={() => setOpen(false)}
                  className="block w-full text-center font-demo-body text-sm font-semibold px-5 py-3 rounded-full bg-demo-primary text-demo-bg"
                >
                  {demo.nav.cta.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}
