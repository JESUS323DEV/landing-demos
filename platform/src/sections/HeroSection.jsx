import HeroCentered   from './hero/HeroCentered'
import HeroSplit      from './hero/HeroSplit'
import HeroBottom     from './hero/HeroBottom'
import HeroEditorial  from './hero/HeroEditorial'
import HeroImmersive  from './hero/HeroImmersive'
import HeroShowcase   from './hero/HeroShowcase'
import HeroGalleryTop from './hero/HeroGalleryTop'
import HeroCover      from './hero/HeroCover'
import HeroBanner     from './hero/HeroBanner'
import HeroVitrina    from './hero/HeroVitrina'

const LAYOUTS = {
  centered:      HeroCentered,
  split:         HeroSplit,
  bottom:        HeroBottom,
  editorial:     HeroEditorial,
  immersive:     HeroImmersive,
  showcase:      HeroShowcase,
  'gallery-top': HeroGalleryTop,
  cover:         HeroCover,
  banner:        HeroBanner,
  vitrina:       HeroVitrina,
}

/* layout: 'centered' (default) | 'split' | 'bottom' | 'editorial' | 'immersive' | 'showcase' | 'gallery-top' | 'cover' | 'banner' | 'vitrina' */
export default function HeroSection({ config }) {
  const Layout = LAYOUTS[config.layout] ?? HeroCentered
  return <Layout config={config} />
}
