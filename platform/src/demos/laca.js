const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'laca',
  name: 'Laca',
  tagline: 'Estudio de uñas',
  category: 'Estudio de uñas',
  tier: 'custom',
  group: 'interactivo',
  theme: {
    colors: {
      bg:      '#FBF6F1',
      surface: '#F1E5DA',
      primary: '#8E2F45',
      accent:  '#D9A27A',
      text:    '#2B1A1F',
      muted:   '#7A6469',
    },
    fonts: {
      heading: {
        family: '"Bodoni Moda", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,600;1,400&display=swap',
      },
      body: {
        family: '"Manrope", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/lacaestudio' },
    { platform: 'facebook', href: 'https://facebook.com/lacaestudio' },
    { platform: 'tiktok',    href: 'https://tiktok.com/@lacaestudio' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'gallery', 'contact'],
  nav: {
    initials: 'L',
    subtitle: 'Estudio de uñas',
    transparent: false,
    cta: { label: 'Reservar cita', href: '#contact' },
    links: [
      { label: 'El estudio', href: '#about' },
      { label: 'Servicios',  href: '#services' },
      { label: 'Galería',    href: '#gallery' },
      { label: 'Contacto',   href: '#contact' },
    ],
  },

  hero: {
    layout: 'fullbleed',
    kicker: 'Estudio de uñas',
    title: 'Tu color,',
    titleHighlight: 'tu momento.',
    description: 'Manicura, esmaltado y nail art con el tiempo y el cuidado que merecen tus manos.',
    cta: { label: 'Reservar cita', href: '#contact' },
    ctaSecondary: { label: 'Ver servicios', href: '#services' },
    image: { src: px(34835304, 2000, 1300), alt: 'Manicura con diseño de uñas' },
    swatchLabel: 'Carta de esmaltes',
    swatches: [
      { name: 'Cereza',        color: '#E27C8B' },
      { name: 'Nude 04',       color: '#EBC5B0' },
      { name: 'Lila noche',    color: '#B9A3E0' },
      { name: 'Verde botella', color: '#8CC2A8' },
      { name: 'Coral vivo',    color: '#F7A598' },
      { name: 'Azul cobalto',  color: '#8FAEEB' },
      { name: 'Mantequilla',   color: '#F7E6A8' },
    ],
  },

  about: {
    label: 'El estudio',
    title: 'Manos cuidadas,',
    titleHighlight: 'color con intención.',
    paragraphs: [
      'En Laca trabajamos con calma y con producto de calidad. Cada manicura empieza por cuidar la uña y termina con el color que mejor te representa.',
      'Reservamos el tiempo justo para cada clienta, para que la cita sea un momento tranquilo y el resultado dure.',
    ],
    features: [
      { icon: 'sparkles',   title: 'Acabado impecable', description: 'Esmaltado preciso y duradero, uña por uña.', dark: false },
      { icon: 'hand-heart', title: 'Cuidado de la uña', description: 'Preparamos y protegemos la uña antes del color.', dark: false },
      { icon: 'clock',      title: 'Sin prisas',        description: 'Citas con tiempo reservado, sin esperas.', dark: false },
      { icon: 'heart',      title: 'Tu estilo',         description: 'Desde lo más natural hasta el nail art más atrevido.', dark: false },
    ],
    cta: { label: 'Reservar cita', href: '#contact' },
    image: { src: px(22668317, 900, 1200), alt: 'Manicura en el estudio' },
  },

  services: {
    label: 'Servicios',
    title: 'Elige tu manicura',
    subtitle: 'Todos los servicios incluyen el cuidado previo de la uña.',
    layout: 'cards',
    ctaCard: {
      tone: 'primary',
      label: 'Primera vez',
      title: '¿No sabes qué elegir?',
      description: 'Te asesoramos según tus uñas y tu día a día.',
      button: { label: 'Pedir consejo', href: '#contact' },
    },
    items: [
      { category: 'Clásico',    title: 'Manicura',                description: 'Limado, cutículas y esmaltado tradicional con un acabado cuidado.',   price: 'Desde 18 €', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Duración',   title: 'Semipermanente',          description: 'Color brillante que dura semanas, con la base cuidada y protegida.',   price: 'Desde 25 €', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Estructura', title: 'Uñas de gel',             description: 'Extensión y refuerzo con la forma y el largo que tú elijas.',          price: 'Desde 40 €', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Creativo',   title: 'Nail art',                description: 'Diseños a mano, desde un detalle sutil hasta una pieza completa.',     price: 'Desde 5 € por uña', link: { label: 'Reservar', href: '#contact' } },
      { category: 'Pies',       title: 'Pedicura',                description: 'Cuidado completo del pie con esmaltado a elegir.',                     price: 'Desde 28 €', link: { label: 'Reservar', href: '#contact' } },
    ],
  },

  gallery: {
    label: 'Galería',
    title: 'Color que se ve',
    layout: 'editorial',
    images: [
      { src: px(7066298, 600, 900),  alt: 'Nail art',          caption: 'Nail art',    bg: 'linear-gradient(135deg,#F1E5DA,#D9A27A)' },
      { src: px(34835304, 800, 400), alt: 'Diseño de uñas',    caption: 'Diseños',     bg: 'linear-gradient(135deg,#F1E5DA,#D9A27A)' },
      { src: px(2281695, 400, 400),  alt: 'Esmalte',           caption: 'Esmaltes',    bg: 'linear-gradient(135deg,#F1E5DA,#D9A27A)' },
      { src: px(16041439, 400, 400), alt: 'Cuidado de uñas',   caption: 'Cuidado',     bg: 'linear-gradient(135deg,#F1E5DA,#D9A27A)' },
      { src: px(4960359, 400, 400),  alt: 'Pedicura',          caption: 'Pedicura',    bg: 'linear-gradient(135deg,#F1E5DA,#D9A27A)' },
      { src: px(8867400, 400, 400),  alt: 'El estudio',        caption: 'El estudio',  bg: 'linear-gradient(135deg,#F1E5DA,#D9A27A)' },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Reserva tu cita',
    subtitle: 'Elige día y hora, y cuéntanos qué te apetece. Te confirmamos enseguida.',
    phone: '600 000 000',
    email: 'hola@laca.es',
    address: 'Calle Mayor, 12 · Tu ciudad',
    hours: 'Lu - Sa · 10:00 - 20:00',
    form: {
      title: 'Reservar cita',
      button: 'Reservar cita',
      message: 'Cuéntanos qué te gustaría (servicio, color, diseño)',
      people: false,
    },
  },

  footer: {
    dark: false,
    columns: [
      {
        brand: true,
        text: 'Estudio de uñas. Manicura, esmaltado y nail art con cuidado y color.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'El estudio', href: '#about' },
          { label: 'Servicios',  href: '#services' },
          { label: 'Galería',    href: '#gallery' },
          { label: 'Contacto',   href: '#contact' },
        ],
      },
      {
        title: 'Contacto',
        info: ['600 000 000', 'Calle Mayor, 12', 'Tu ciudad'],
      },
    ],
    copy: '© 2026 Laca · Estudio de uñas',
  },
}
