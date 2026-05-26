import selvaClube from './selva-clube'
import lauraVidal from './laura-vidal'
import laParrillaPaisa from './la-parrilla-paisa'
import brasaViva from './brasa-viva'
import intiStreet from './inti-street'
import dulceLima from './dulce-lima'

export const demos = [selvaClube, lauraVidal, laParrillaPaisa, brasaViva, intiStreet, dulceLima]

export function getDemoBySlug(slug) {
  return demos.find(d => d.slug === slug) ?? null
}
