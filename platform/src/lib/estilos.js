import { demos } from '../demos'

/* Estilos de web que se enseñan en la portada: cada uno tiene su tarjeta y su página (/estilos/:key) */
export const TIER_TEXT = {
  custom: {
    title: 'A medida',
    description: 'Una web pensada desde cero para tu marca, con una portada que no se parece a ninguna otra.',
  },
  base: {
    title: 'Base',
    description: 'Una estructura que ya funciona, adaptada a los colores, los textos y el tono de tu negocio.',
  },
}

export const STYLES = [
  {
    key: 'editorial',
    tier: 'custom',
    title: 'Estilo revista',
    name: 'Editorial',
    summary: 'Letras grandes y diseño de revista, para marcas con mucha personalidad.',
  },
  {
    key: 'inmersivo',
    tier: 'custom',
    title: 'Mucha foto',
    name: 'Inmersivo',
    summary: 'Foto a pantalla completa y mucho carácter, para impresionar desde el primer segundo.',
  },
  {
    key: 'interactivo',
    tier: 'custom',
    title: 'Que reacciona',
    name: 'Interactivo',
    summary: 'La web responde: tocas y cambia. Quien la visita se queda jugando con ella.',
  },
  {
    key: 'base',
    tier: 'base',
    title: 'Sencilla y rápida',
    name: 'Base',
    summary: 'Texto a un lado e imagen al otro, adaptada a tu marca. Asequible y lista en poco tiempo.',
  },
]

export const getStyle = key => STYLES.find(s => s.key === key) ?? null

export const demosOf = style => demos.filter(d => (style.tier === 'base' ? d.tier === 'base' : d.tier === 'custom' && d.group === style.key))

export const captureOf = demo => `/capturas/${demo.slug}.webp`
