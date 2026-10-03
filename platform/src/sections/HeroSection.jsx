import HeroCentered   from './hero/HeroCentered'
import HeroSplit      from './hero/HeroSplit'
import HeroBottom     from './hero/HeroBottom'
import HeroEditorial  from './hero/HeroEditorial'
import HeroImmersive  from './hero/HeroImmersive'
import HeroShowcase   from './hero/HeroShowcase'
import HeroBold       from './hero/HeroBold'
import HeroGalleryTop from './hero/HeroGalleryTop'

const LAYOUTS = {
  centered:      HeroCentered,
  split:         HeroSplit,
  bottom:        HeroBottom,
  editorial:     HeroEditorial,
  immersive:     HeroImmersive,
  showcase:      HeroShowcase,
  bold:          HeroBold,
  'gallery-top': HeroGalleryTop,
}

/* layout: 'centered' (default) | 'split' | 'bottom' | 'editorial' | 'immersive' | 'showcase' | 'bold' | 'gallery-top' */
export default function HeroSection({ config }) {
  const Layout = LAYOUTS[config.layout] ?? HeroCentered
  return <Layout config={config} />
}
