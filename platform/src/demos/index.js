import selvaClube from './selva-clube'
import lauraVidal from './laura-vidal'
import laParrillaPaisa from './la-parrilla-paisa'
import brasaViva from './brasa-viva'
import intiStreet from './inti-street'
import dulceLima from './dulce-lima'
import senorio from './senorio'
// import atenciaHomes from './atencia-homes' // oculta
import elSaborDeCasa from './el-sabor-de-casa'
export const demos = [selvaClube, lauraVidal, laParrillaPaisa, brasaViva, intiStreet, dulceLima, senorio, elSaborDeCasa]

export function getDemoBySlug(slug) {
  return demos.find(d => d.slug === slug) ?? null
}
