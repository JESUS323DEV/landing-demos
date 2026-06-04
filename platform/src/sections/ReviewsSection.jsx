export default function ReviewsSection({ config }) {
  return (
    <section id="reviews" className="py-20 bg-demo-bg">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10">
          {config.rating && (
            <h2 className="font-demo-heading text-demo-text text-4xl">
              {config.rating} <span className="text-demo-accent">★★★★★</span>
            </h2>
          )}
          {config.subtitle && (
            <p className="font-demo-body text-demo-muted text-sm mt-2">{config.subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {config.items.map((r, i) => (
            <div key={i} className="bg-demo-surface rounded-2xl p-6 border border-demo-primary/10">
              <div className="text-demo-accent text-sm mb-3">★★★★★</div>
              <p className="font-demo-body text-demo-muted text-sm leading-relaxed mb-5">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-demo-primary/20 flex items-center justify-center">
                  <span className="font-demo-heading text-demo-primary text-sm font-bold">{r.author[0]}</span>
                </div>
                <div>
                  <p className="font-demo-body text-demo-text text-sm font-semibold">{r.author}</p>
                  {r.location && <p className="font-demo-body text-demo-muted text-xs">{r.location}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
