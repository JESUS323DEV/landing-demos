import { demos } from './index'

/* Orden en que se recorren las demos con las flechas: Editorial, Inmersivo y Base. */
export const GROUPS = [
  { key: 'editorial', title: 'Editorial', blurb: 'Tipografía y composición de revista.' },
  { key: 'inmersivo', title: 'Inmersivo', blurb: 'Foto a pantalla completa y mucho carácter.' },
  { key: 'interactivo', title: 'Interactivo', blurb: 'La web responde: pulsas y cambia.' },
  { key: 'base',      title: 'Base',      blurb: 'Estructura probada, adaptada a cada marca.' },
]

export const groupOf = demo => (demo.tier === 'base' ? 'base' : demo.group)

export const demoSequence = GROUPS.flatMap(g => demos.filter(d => groupOf(d) === g.key))
