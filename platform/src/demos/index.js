import lianaBar from './liana-bar'
import lauraVidal from './laura-vidal'
// import laParrillaPaisa from './la-parrilla-paisa' // oculta
import animaTattoo from './anima-tattoo'
import brasaViva from './brasa-viva'
import intiStreet from './inti-street'
import dulceLima from './dulce-lima'
import senorio from './senorio'
// import atenciaHomes from './atencia-homes' // oculta a propósito: proyecto real, no encaja en el escaparate (ver disenos_ocultos.md en la memoria)
import elSaborDeCasa from './el-sabor-de-casa'
import barberia from './barberia'
import caramela from './caramela'
import brote from './brote'
import laca from './laca'
// import hinode from './hinode' // oculta a propósito: hero de rueda ligado a la cocina japonesa; falta una versión genérica (ver disenos_ocultos.md en la memoria)
import almendra from './almendra'
import mirada from './mirada'
export const demos = [lauraVidal, animaTattoo, senorio, lianaBar, laca, almendra, mirada, barberia, caramela, brote, brasaViva, intiStreet, dulceLima, elSaborDeCasa]

export function getDemoBySlug(slug) {
  return demos.find(d => d.slug === slug) ?? null
}
