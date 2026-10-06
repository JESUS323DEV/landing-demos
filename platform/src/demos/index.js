import lianaBar from './liana-bar'
import lauraVidal from './laura-vidal'
// import laParrillaPaisa from './la-parrilla-paisa' // oculta
import animaTattoo from './anima-tattoo'
import brasaViva from './brasa-viva'
import intiStreet from './inti-street'
import dulceLima from './dulce-lima'
import senorio from './senorio'
// import atenciaHomes from './atencia-homes' // oculta
import elSaborDeCasa from './el-sabor-de-casa'
import barberia from './barberia'
import caramela from './caramela'
export const demos = [lauraVidal, animaTattoo, senorio, lianaBar, barberia, caramela, brasaViva, intiStreet, dulceLima, elSaborDeCasa]

export function getDemoBySlug(slug) {
  return demos.find(d => d.slug === slug) ?? null
}
