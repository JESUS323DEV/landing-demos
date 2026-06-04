export default function CTASection({ config }) {
  return (
    <section id="cta" className="relative py-20 lg:py-28 bg-demo-bg overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-9">

        <h2 className="font-demo-heading text-4xl md:text-5xl lg:text-6xl text-demo-text mb-4 text-center">
          {config.title}
        </h2>
        <p className="font-demo-body text-demo-muted text-base leading-relaxed mb-10 text-center max-w-lg mx-auto">
          {config.description}
        </p>

        {config.steps && (
          <div className="flex flex-col gap-4 mb-8 md:grid md:grid-cols-3">
            {config.steps.map((step, i) => (
              <div
                key={i}
                className="relative p-7 bg-demo-surface border border-white/[.07] rounded-2xl overflow-hidden hover:border-demo-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="text-[1.6rem] mb-3">{step.icon}</div>
                <div
                  className="font-demo-heading text-[2.5rem] text-demo-primary/20 absolute top-4 right-5 leading-none"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <h3 className="font-demo-body text-[.95rem] font-bold text-demo-text mb-2">{step.title}</h3>
                <p className="font-demo-body text-[.85rem] text-demo-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        )}

        {config.notice && (
          <div className="flex gap-3 items-start bg-demo-accent/5 border border-demo-accent/15 rounded-2xl p-4 md:p-5 mb-8">
            <span className="text-base flex-shrink-0">⚠️</span>
            <p className="font-demo-body text-[.82rem] text-demo-muted leading-relaxed">{config.notice}</p>
          </div>
        )}

        {config.button && (
          <div className="text-center">
            <a
              href={config.button.href}
              className="inline-block font-demo-body px-10 py-4 rounded-full bg-demo-primary text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              {config.button.label}
            </a>
          </div>
        )}

      </div>
    </section>
  )
}
