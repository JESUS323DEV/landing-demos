const DARK_BG = [
  'linear-gradient(135deg,#1A1A1A,#2E2E2E)',
  'linear-gradient(135deg,#222222,#3A3A3A)',
  'linear-gradient(135deg,#161616,#2A2A2A)',
]

const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'navaja-y-tijera',
  name: 'Navaja & Tijera',
  tagline: 'Barbería clásica · Barcelona',
  category: 'Barbería',
  tier: 'custom',
  group: 'editorial',
  theme: {
    colors: {
      bg:      '#0E0E0E',
      surface: '#181818',
      primary: '#F4F4F2',
      accent:  '#E6E4DF',
      text:    '#F4F4F2',
      muted:   '#9A9A96',
    },
    fonts: {
      heading: {
        family: '"Playfair Display", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
      },
      body: {
        family: '"Inter", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/navajaytijera' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'gallery', 'contact'],
  nav: {
    initials: 'N&T',
    subtitle: 'Barbería',
    cta: { label: 'Reservar cita', href: '#contact' },
    links: [
      { label: 'Nosotros',  href: '#about' },
      { label: 'Servicios', href: '#services' },
      { label: 'Galería',   href: '#gallery' },
      { label: 'Contacto',  href: '#contact' },
    ],
  },

  hero: {
    layout: 'editorial',
    title: 'El corte,',
    titleHighlight: 'bien hecho.',
    description: 'Barbería clásica en Barcelona. Corte, barba y afeitado con navaja, sin prisas y con cita previa.',
    cta: { label: 'Reservar cita', href: '#contact' },
    ctaSecondary: { label: 'Ver servicios', href: '#services' },
    images: [
      { src: px(2775272, 1000, 1300), label: 'Corte clásico', bg: DARK_BG[0] },
      { src: px(1319459, 1000, 1300), label: 'Herramientas', bg: DARK_BG[1] },
      { src: px(16474397, 1000, 1300), label: 'Poste de barbero', bg: DARK_BG[2] },
    ],
  },

  about: {
    label: 'La barbería',
    title: 'Oficio de barbero, trato de siempre',
    paragraphs: [
      'En Navaja & Tijera trabajamos como se ha hecho siempre: con tiempo, con buena herramienta y con atención a cada detalle. Un buen corte no se hace con prisa.',
      'Aquí no hay colas ni cortes en cadena. Reservas tu hora, te sientas y te vas con el look que querías, y con una toalla caliente de regalo.',
    ],
    features: [
      { icon: 'scissors', title: 'Corte a medida',      description: 'Tijera y máquina según tu cabello, tu cara y tu estilo.', dark: false },
      { icon: 'slice', title: 'Afeitado con navaja', description: 'Toalla caliente, espuma y acabado limpio como manda la tradición.', dark: true },
      { icon: 'clock', title: 'Siempre con cita',    description: 'Sin esperas. Tu hora es tu hora.', dark: false },
      { icon: 'map-pin', title: 'Barcelona centro',    description: 'Carrer d\'Aragó, 210. Cerca del metro Universitat.', dark: false },
    ],
    cta: { label: 'Reservar mi hora', href: '#contact' },
  },

  services: {
    label: 'Servicios',
    title: 'Lo que hacemos',
    subtitle: 'Pocos servicios, todos bien hechos.',
    layout: 'cards',
    ctaCard: {
      label: 'Reservas',
      title: '¿Primera vez por aquí?',
      description: 'Escríbenos y te buscamos hueco esta misma semana.',
      button: { label: 'Pedir cita', href: '#contact' },
    },
    items: [
      { category: 'Pelo',     title: 'Corte clásico',        description: 'Tijera o máquina, lavado y peinado incluidos.',             price: '15 €', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Barba',    title: 'Arreglo de barba',     description: 'Perfilado, recorte y toalla caliente con aceites.',         price: '10 €', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Navaja',   title: 'Afeitado con navaja',  description: 'El afeitado de toda la vida, con espuma y toalla caliente.', price: '14 €', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Combo',    title: 'Corte + barba',        description: 'El servicio completo en una sola sesión.',                  price: '22 €', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Infantil', title: 'Corte infantil',       description: 'Para los menores de 12 años, con paciencia incluida.',      price: '12 €', link: { label: 'Reservar', href: '#contact' } },
    ],
  },

  gallery: {
    label: 'Galería',
    title: 'El trabajo se ve',
    layout: 'editorial',
    images: [
      { src: px(14011984, 600, 900), alt: 'Escaparate de la barbería', caption: 'La barbería', bg: DARK_BG[0] },
      { src: px(1319459, 800, 400), alt: 'Navajas y brocha', caption: 'Herramientas',    bg: DARK_BG[1] },
      { src: px(16474397, 400, 400), alt: 'Poste de barbero', caption: 'Tradición',   bg: DARK_BG[2] },
      { src: px(2061820, 400, 400), alt: 'Barbero trabajando', caption: 'Ambiente',     bg: DARK_BG[1] },
      { src: px(11683960, 400, 400), alt: 'Interior del local', caption: 'El local',    bg: DARK_BG[0] },
      { src: px(2775272, 400, 400), alt: 'Corte de pelo', caption: 'El corte',  bg: DARK_BG[2] },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Reserva tu hora',
    subtitle: 'Te confirmamos por WhatsApp en menos de una hora.',
    phone: '600 000 000',
    email: 'hola@navajaytijera.es',
    address: 'Carrer d\'Aragó, 210 · Barcelona',
    hours: 'Ma - Vi · 10:00 - 20:00 · Sa · 9:00 - 16:00',
  },

  footer: {
    dark: true,
    columns: [
      {
        brand: true,
        text: 'Barbería clásica en Barcelona. Corte, barba y afeitado con navaja.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'Nosotros',  href: '#about' },
          { label: 'Servicios', href: '#services' },
          { label: 'Galería',   href: '#gallery' },
          { label: 'Contacto',  href: '#contact' },
        ],
      },
      {
        title: 'Contacto',
        info: ['600 000 000', 'Carrer d\'Aragó, 210', 'Barcelona'],
      },
    ],
    copy: '© 2026 Navaja & Tijera · Barbería clásica',
  },
}
