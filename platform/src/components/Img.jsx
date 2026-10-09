import { useEffect, useState } from 'react'

/* Imagen que, si no carga (enlace roto o foto retirada), enseña el hueco de siempre con la palabra "Imagen" y no la imagen rota.
   Se usa igual que un <img>: conserva sus clases, así que el hueco ocupa el mismo sitio. */
export default function Img({ className = '', style, alt = '', ...props }) {
  const [failed, setFailed] = useState(false)

  // Si cambia la foto, se vuelve a intentar
  useEffect(() => { setFailed(false) }, [props.src])

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex items-center justify-center`}
        style={{
          ...style,
          background: 'linear-gradient(135deg, var(--demo-surface), color-mix(in srgb, var(--demo-primary) 18%, var(--demo-surface)))',
        }}
      >
        <span className="font-demo-body text-demo-muted text-xs opacity-40">Imagen</span>
      </div>
    )
  }

  return <img {...props} alt={alt} className={className} style={style} onError={() => setFailed(true)} />
}
