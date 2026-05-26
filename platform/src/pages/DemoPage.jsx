import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDemoBySlug } from '../demos'
import { applyTheme, resetTheme } from '../lib/applyTheme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  MenuTabsSection,
  GallerySection,
  DeliverySection,
  ReviewsSection,
  CTASection,
  ContactSection,
  RecipesSection,
} from '../sections'

const SECTION_MAP = {
  hero:     HeroSection,
  about:    AboutSection,
  services: ServicesSection,
  menu:     MenuTabsSection,
  gallery:  GallerySection,
  delivery: DeliverySection,
  reviews:  ReviewsSection,
  cta:      CTASection,
  contact:  ContactSection,
  recipes:  RecipesSection,
}

export default function DemoPage() {
  const { slug } = useParams()
  const demo = getDemoBySlug(slug)

  useEffect(() => {
    if (!demo) return
    applyTheme(demo.theme)
    return () => resetTheme()
  }, [demo])

  if (!demo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white gap-4">
        <p className="text-7xl font-bold text-gray-700">404</p>
        <p className="text-gray-400">Demo <code className="text-gray-300">{slug}</code> no encontrada.</p>
        <Link to="/" className="text-sm text-blue-400 hover:underline mt-2">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="bg-demo-bg">
      <Navbar demo={demo} />
      {demo.sections.map(key => {
        const Section = SECTION_MAP[key]
        if (!Section || !demo[key]) return null
        return <Section key={key} config={demo[key]} />
      })}
      <Footer demo={demo} />
    </div>
  )
}
