import { CTAButtons, StatsRow } from './shared'

/* ── Bottom (text at bottom, full-screen bg) — Brasa Viva style ── */
export default function HeroBottom({ config }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--demo-bg) 55%, var(--demo-primary) 45%) 0%, var(--demo-bg) 65%)' }} />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none opacity-25"
        style={{ background: 'var(--demo-primary)', filter: 'blur(120px)', borderRadius: '50%' }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 40%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.97) 100%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-20 w-full text-center flex flex-col items-center">
        <h1 className="font-demo-heading text-white leading-none mb-5 text-5xl md:text-7xl">
          <span className="text-demo-accent">{config.titleAccent}</span>
          {config.titleAccent && <br />}
          {config.title}
        </h1>
        <p className="font-demo-body text-white/70 text-base md:text-xl max-w-xl mb-8 leading-relaxed">{config.description}</p>
        <CTAButtons config={config} dark />
        <StatsRow stats={config.stats} dark />
      </div>
    </section>
  )
}
