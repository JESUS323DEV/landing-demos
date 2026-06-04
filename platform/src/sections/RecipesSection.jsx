import { useState } from 'react'

export default function RecipesSection({ config }) {
  const [open, setOpen] = useState(null)

  return (
    <section id="recipes" className="py-20 md:py-28 bg-demo-bg">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-demo-heading text-demo-text text-3xl md:text-5xl leading-tight">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="font-demo-body text-demo-muted text-base max-w-xl mx-auto mt-4">{config.subtitle}</p>
          )}
        </div>

        {/* Recipe cards */}
        <div className="flex flex-col gap-4">
          {config.items.map((recipe, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="border border-demo-primary/15 rounded-3xl overflow-hidden transition-all"
                style={{ background: 'var(--demo-surface)' }}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center gap-5 hover:bg-demo-primary/5 transition-colors"
                >
                  {recipe.emoji && (
                    <span className="text-3xl flex-shrink-0">{recipe.emoji}</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-demo-heading text-demo-text text-xl leading-tight">{recipe.name}</h3>
                    <p className="font-demo-body text-demo-muted text-sm mt-0.5 line-clamp-1">{recipe.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
                    {recipe.time && (
                      <span className="font-demo-body text-demo-muted text-xs flex items-center gap-1.5">
                        <span>⏱</span> {recipe.time}
                      </span>
                    )}
                    {recipe.difficulty && (
                      <span className="font-demo-body text-xs px-3 py-1 rounded-full bg-demo-primary/10 text-demo-primary font-medium">
                        {recipe.difficulty}
                      </span>
                    )}
                  </div>
                  <span className={`text-demo-primary text-lg flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-6 pb-7 border-t border-demo-primary/10">
                    {/* Mobile meta */}
                    <div className="flex sm:hidden gap-3 mt-4 mb-5">
                      {recipe.time && (
                        <span className="font-demo-body text-demo-muted text-xs flex items-center gap-1">⏱ {recipe.time}</span>
                      )}
                      {recipe.servings && (
                        <span className="font-demo-body text-demo-muted text-xs flex items-center gap-1">🍽 {recipe.servings}</span>
                      )}
                      {recipe.difficulty && (
                        <span className="font-demo-body text-xs px-2.5 py-0.5 rounded-full bg-demo-primary/10 text-demo-primary font-medium">{recipe.difficulty}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      {/* Ingredientes */}
                      <div>
                        <h4 className="font-demo-heading text-demo-text text-base mb-3 flex items-center gap-2">
                          <span>🛒</span> Ingredientes
                          {recipe.servings && (
                            <span className="font-demo-body text-demo-muted text-xs font-normal ml-1">({recipe.servings})</span>
                          )}
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {recipe.ingredients.map((ing, j) => (
                            <li key={j} className="font-demo-body text-demo-muted text-sm flex items-start gap-2">
                              <span className="text-demo-primary mt-0.5 flex-shrink-0">·</span>
                              {ing}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Preparación */}
                      <div>
                        <h4 className="font-demo-heading text-demo-text text-base mb-3 flex items-center gap-2">
                          <span>👩‍🍳</span> Preparación
                        </h4>
                        <ol className="flex flex-col gap-3">
                          {recipe.steps.map((step, j) => (
                            <li key={j} className="font-demo-body text-demo-muted text-sm flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-demo-primary/15 text-demo-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                {j + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {recipe.tip && (
                      <div className="mt-6 p-4 rounded-2xl bg-demo-primary/8 border border-demo-primary/15">
                        <p className="font-demo-body text-demo-muted text-sm">
                          <span className="text-demo-primary font-semibold">Tip: </span>{recipe.tip}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
