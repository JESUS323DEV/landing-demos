import { Link } from 'react-router-dom'
import { demos } from '../demos'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">Demo Platform</p>
        <h1 className="text-4xl font-bold mb-1">Demos disponibles</h1>
        <p className="text-gray-400 mb-12">Selecciona una demo para previsualizarla</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {demos.map(demo => (
            <Link
              key={demo.slug}
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
          ))}
        </div>
      </div>
    </div>
  )
}
