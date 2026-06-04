import { useState } from 'react'

export default function MenuTabsSection({ config }) {
  const [active, setActive] = useState(0)
  const tab = config.tabs[active]

  return (
    <section id="menu" className="py-20 md:py-28 bg-demo-bg">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-demo-heading text-demo-text text-3xl md:text-5xl">{config.title}</h2>
          {config.subtitle && (
            <p className="font-demo-body text-demo-muted text-base mt-3 max-w-md mx-auto">{config.subtitle}</p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 justify-start md:justify-center scrollbar-none" style={{ scrollbarWidth: 'none' }}>
          {config.tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold border-2 border-demo-primary transition-colors font-demo-body tracking-wide ${
                active === i ? 'bg-demo-primary text-demo-bg' : 'text-demo-primary hover:bg-demo-primary/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className={
          tab.layout === 'cards'  ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5' :
          tab.layout === 'simple' ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4' :
                                    'grid grid-cols-1 md:grid-cols-2 gap-4'
        }>
          {tab.items.map((item, i) => (
            tab.layout === 'cards'  ? <MenuCard  key={i} item={item} /> :
            tab.layout === 'simple' ? <SimpleRow key={i} item={item} /> :
                                      <MenuRow   key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item }) {
  return (
    <div className="bg-demo-surface rounded-2xl overflow-hidden border border-demo-primary/10 hover:-translate-y-1 hover:shadow-lg transition-all relative">
      {item.badge && (
        <span className="absolute top-3 right-3 bg-demo-primary text-demo-bg text-xs font-bold px-2.5 py-1 rounded-full z-10">
          {item.badge}
        </span>
      )}
      <div
        className="h-40 flex items-center justify-center border-b border-demo-primary/10"
        style={{ background: 'linear-gradient(135deg, var(--demo-surface), color-mix(in srgb, var(--demo-primary) 15%, var(--demo-surface)))' }}
      >
        <span className="font-demo-body text-demo-muted text-xs opacity-40">Foto del plato</span>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-demo-heading text-demo-text text-base">{item.name}</h3>
          {item.price && <span className="font-demo-heading text-demo-primary text-lg ml-3 flex-shrink-0">{item.price}</span>}
        </div>
        <p className="font-demo-body text-demo-muted text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

function SimpleRow({ item }) {
  return (
    <div className="bg-demo-surface rounded-2xl p-5 border border-demo-primary/10 flex justify-between items-center hover:-translate-y-0.5 hover:shadow-sm transition-all">
      <div className="flex-1 min-w-0 pr-4">
        <h3 className="font-demo-heading text-demo-text text-base mb-1">{item.name}</h3>
        {item.description && (
          <p className="font-demo-body text-demo-muted text-sm leading-relaxed">{item.description}</p>
        )}
      </div>
      {item.price && (
        <span className="font-demo-heading text-demo-primary text-lg font-bold flex-shrink-0">{item.price}</span>
      )}
    </div>
  )
}

function MenuRow({ item }) {
  return (
    <div className="bg-demo-surface rounded-2xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, var(--demo-bg), color-mix(in srgb, var(--demo-primary) 20%, var(--demo-bg)))' }}
      >
        <span className="font-demo-body text-demo-muted text-xs opacity-40">Foto</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-demo-heading text-demo-text text-sm leading-snug">{item.name}</h4>
          {item.price && <span className="font-demo-heading text-demo-primary text-sm whitespace-nowrap">{item.price}</span>}
        </div>
        <p className="font-demo-body text-demo-muted text-xs leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}
