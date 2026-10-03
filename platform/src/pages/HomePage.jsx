import { Link } from 'react-router-dom'
import { demos } from '../demos'

const TIERS = [
  {
    key: 'custom',
    title: 'A medida',
    description: 'Hero propio y diseño personalizado para la marca.',
    groups: [
      { key: 'editorial', title: 'Editorial' },
      { key: 'inmersivo', title: 'Inmersivo' },
    ],
  },
  {
    key: 'base',
    title: 'Base',
    description: 'Misma estructura, adaptada al tono y los colores de cada marca.',
  },
]

function DemoCard({ demo }) {
  return (
    <Link
      to={`/demo/${demo.slug}`}
      className="group block p-5 border border-gray-800 hover:border-gray-600 rounded-xl transition-colors"
    >
      <div className="flex gap-2 mb-5">
        {Object.values(demo.theme.colors).slice(0, 4).map((color, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border border-white/10"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{demo.category}</p>
      <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">{demo.name}</p>
      <p className="text-gray-500 text-xs mt-1">{demo.tagline}</p>
    </Link>
  )
}

function DemoGrid({ demos }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {demos.map(demo => <DemoCard key={demo.slug} demo={demo} />)}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">Demo Platform</p>
        <h1 className="text-4xl font-bold mb-1">Demos disponibles</h1>
        <p className="text-gray-400 mb-12">Selecciona una demo para previsualizarla</p>

        {TIERS.map(tier => {
          const items = demos.filter(d => d.tier === tier.key)
          if (!items.length) return null
          return (
            <section key={tier.key} className="mb-14">
              <h2 className="text-2xl font-semibold">{tier.title}</h2>
              <p className="text-gray-500 text-sm mt-1 mb-6">{tier.description}</p>
              {tier.groups ? tier.groups.map(group => {
                const groupItems = items.filter(d => d.group === group.key)
                if (!groupItems.length) return null
                return (
                  <div key={group.key} className="mb-8 last:mb-0">
                    <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-3">{group.title}</h3>
                    <DemoGrid demos={groupItems} />
                  </div>
                )
              }) : <DemoGrid demos={items} />}
            </section>
          )
        })}
      </div>
    </div>
  )
}
