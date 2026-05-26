const GRADIENTS = [
  'linear-gradient(135deg,#EAE4DC,#D4B896)',
  'linear-gradient(135deg,#E8EEE9,#B8CBBC)',
  'linear-gradient(135deg,#EDE8E1,#C9B8A2)',
  'linear-gradient(135deg,#EAE4DC,#D4B896)',
  'linear-gradient(135deg,#E8EEE9,#B8CBBC)',
  'linear-gradient(135deg,#D4B896,#A8896C)',
]

export default function GallerySection({ config }) {
  const editorial = config.layout === 'editorial'

  return (
    <section id="gallery" className="py-20 md:py-28 bg-demo-surface">
      <div className="max-w-6xl mx-auto px-5">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2">
            {config.label && (
              <span className="font-demo-body text-demo-primary text-xs font-medium tracking-[0.25em] uppercase">{config.label}</span>
            )}
            <h2 className="font-demo-heading text-demo-text text-3xl md:text-4xl">{config.title}</h2>
          </div>
        </div>

        {editorial ? (
          <>
            {/* Mobile: 2-col uniform */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {config.images.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl aspect-square overflow-hidden relative"
                  style={{ background: img.bg ?? GRADIENTS[i % GRADIENTS.length] }}
                >
                  {img.src && <img src={img.src} alt={img.alt ?? ''} className="absolute inset-0 w-full h-full object-cover" />}
                  <div className="absolute bottom-0 inset-x-0 p-3">
                    <span className="font-demo-body text-white/70 text-xs drop-shadow">0{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: editorial grid */}
            <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[480px]">
              {config.images.map((img, i) => {
                const spanClass =
                  i === 0 ? 'row-span-2' :
                  i === 1 ? 'col-span-2' : ''
                return (
                  <div
                    key={i}
                    className={`rounded-xl overflow-hidden relative ${spanClass}`}
                    style={{ background: img.bg ?? GRADIENTS[i % GRADIENTS.length] }}
                  >
                    {img.src && <img src={img.src} alt={img.alt ?? ''} className="absolute inset-0 w-full h-full object-cover" />}
                    <div className="absolute bottom-0 inset-x-0 p-4">
                      <span className="font-demo-body text-white/70 text-xs drop-shadow">0{i + 1}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {config.images.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group rounded-xl">
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: img.bg ?? `linear-gradient(135deg, var(--demo-surface), color-mix(in srgb, var(--demo-primary) 15%, var(--demo-surface)))` }}
                  >
                    <span className="font-demo-body text-demo-muted text-xs text-center px-4 opacity-60">{img.alt}</span>
                  </div>
                )}
                {img.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-demo-bg/80 backdrop-blur-sm px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-demo-body text-demo-text text-xs">{img.caption}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
