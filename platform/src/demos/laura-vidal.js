export default {
  slug: 'laura-vidal',
  name: 'Laura Vidal',
  tagline: 'Belleza & Bienestar · Barcelona',
  category: 'Centro de Estética',
  theme: {
    colors: {
      bg:      '#F7F3EE',
      surface: '#EAE4DC',
      primary: '#7A9C84',
      accent:  '#2C1B0E',
      text:    '#2C1B0E',
      muted:   '#a08070',
    },
    fonts: {
      heading: {
        family: '"Playfair Display", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
      },
      body: {
        family: '"DM Sans", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap',
      },
    },
  },
  sections: ['hero', 'about', 'services', 'gallery', 'contact'],
  nav: {
    initials: 'LV',
    subtitle: 'Estética',
    cta: { label: 'Reservar cita', href: '#contact' },
    links: [
      { label: 'Sobre mí',    href: '#about' },
      { label: 'Servicios',   href: '#services' },
      { label: 'Galería',     href: '#gallery' },
      { label: 'Contacto',    href: '#contact' },
    ],
  },

  hero: {
    layout: 'split',
    badge: 'Centro de Belleza · Barcelona',
    title: 'Más de 20 años',
    titleHighlight: 'cuidando tu bienestar',
    description: 'Tratamientos corporales y faciales personalizados en el corazón de Barcelona. Tecnología LPG, HIFU corporal y depilación láser con resultados reales.',
    cta: { label: 'Pedir cita', href: '#contact' },
    ctaSecondary: { label: 'Ver tratamientos', href: '#services' },
    stats: [
      { value: '20+', label: 'años de exp.' },
      { value: '594', label: 'seguidoras' },
      { value: 'LPG', label: 'autorizado' },
    ],
    images: [
      { bg: 'linear-gradient(135deg,#EAE4DC,#D4B896)', label: 'Foto 01' },
      { bg: 'linear-gradient(135deg,#E8EEE9,#B8CBBC)', label: 'Foto 02' },
      { bg: 'linear-gradient(135deg,#EDE8E1,#C9B8A2)', label: 'Foto 03' },
    ],
  },

  about: {
    label: 'Sobre el centro',
    title: 'Donde la ciencia y el bienestar se encuentran',
    paragraphs: [
      'Soy Laura Vidal, especialista en belleza y cuidado personal con más de dos décadas de experiencia. En mi centro del Carrer de Provença combino las últimas tecnologías con un enfoque totalmente personalizado.',
      'Cada cuerpo es diferente. Por eso diseño planes adaptados a tus objetivos, tu ritmo y tus necesidades reales. Sin promesas vacías, con resultados visibles.',
    ],
    features: [
      { icon: '✅', title: '+20 años de experiencia', description: 'Formación continua y dominio de las técnicas más avanzadas del sector.', dark: false },
      { icon: '⚡', title: 'Tecnología LPG',          description: 'Centro autorizado por LPG, líder mundial en tratamientos corporales.', dark: true },
      { icon: '💛', title: 'Trato personalizado',     description: 'Planes 100% adaptados a tu cuerpo, tus objetivos y tu momento de vida.', dark: false },
      { icon: '📍', title: 'Barcelona centro',        description: 'Carrer de Provença, 87. Fácil acceso en transporte público.', dark: false },
    ],
    cta: { label: 'Conoce tu plan', href: '#contact' },
  },
  
  services: {
    label: 'Tratamientos',
    title: 'Resultados reales para cada objetivo',
    subtitle: 'Tecnología de última generación con la cercanía de un trato artesanal.',
    layout: 'cards',
    ctaCard: {
      label: 'Personalizado',
      title: '¿No sabes qué tratamiento es para ti?',
      description: 'Te orientamos sin compromiso. Primera consulta gratuita.',
      button: { label: 'Pedir asesoramiento', href: '#contact' },
    },
    items: [
      { category: 'Corporal',     title: 'HIFU Corporal',          description: 'Ultrasonidos focalizados para reducir volumen y reafirmar sin cirugía.',                link: { label: 'Saber más', href: '#contact' } },
      { category: 'LPG',          title: 'Plan Corporal Completo', description: 'Combinación de tratamientos LPG adaptados a tu plan personalizado.',                   link: { label: 'Saber más', href: '#contact' } },
      { category: 'Depilación',   title: 'Depilación Láser',       description: 'Resultados permanentes con tecnología segura para todo tipo de piel.',                  link: { label: 'Saber más', href: '#contact' } },
      { category: 'Circulación',  title: 'Piernas Cansadas',       description: 'Tratamientos específicos para piernas hinchadas y pesadez circulatoria.',               link: { label: 'Saber más', href: '#contact' } },
      { category: 'Reafirmación', title: 'Reduce y Reafirma',      description: 'Planes adaptados para moldear la silueta y recuperar firmeza visible.',                 link: { label: 'Saber más', href: '#contact' } },
    ],
  },
  gallery: {
    label: 'Galería',
    title: 'Nuestro trabajo habla',
    layout: 'editorial',
    images: [
      { src: null, alt: 'Sala de tratamientos', caption: 'Sala principal',    bg: 'linear-gradient(135deg,#EAE4DC,#D4B896)' },
      { src: null, alt: 'Cosmética natural',    caption: 'Cosmética natural', bg: 'linear-gradient(135deg,#E8EEE9,#B8CBBC)' },
      { src: null, alt: 'Zona relax',           caption: 'Facial premium',    bg: 'linear-gradient(135deg,#EDE8E1,#C9B8A2)' },
      { src: null, alt: 'Tratamiento facial',   caption: 'Facial premium',    bg: 'linear-gradient(135deg,#EAE4DC,#D4B896)' },
      { src: null, alt: 'Aromaterapia',         caption: 'Aromaterapia',      bg: 'linear-gradient(135deg,#E8EEE9,#B8CBBC)' },
      { src: null, alt: 'Recepción',            caption: 'Bienvenida',        bg: 'linear-gradient(135deg,#D4B896,#A8896C)' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: 'Da el primer paso hacia tu mejor versión',
    subtitle: 'Primera consulta gratuita. Te contactamos en menos de 24h.',
    phone: '612 345 678',
    email: 'hola@lauravidal.es',
    address: 'Carrer de Provença, 87 · Barcelona',
    hours: 'Lu - Vi · 9:00 - 20:00 · Sa · 10:00 - 15:00',
  },
  footer: {
    dark: true,
    columns: [
      {
        brand: true,
        text: 'Centro de belleza y bienestar en Barcelona. Más de 20 años transformando cuerpos y vidas.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'Sobre mí',  href: '#about' },
          { label: 'Servicios', href: '#services' },
          { label: 'Galería',   href: '#gallery' },
          { label: 'Contacto',  href: '#contact' },
        ],
      },
      {
        title: 'Contacto',
        info: ['612 345 678', 'Carrer de Provença, 87', 'Barcelona'],
      },
    ],
    copy: '© 2026 Laura Vidal · Belleza & Bienestar',
  },
}
