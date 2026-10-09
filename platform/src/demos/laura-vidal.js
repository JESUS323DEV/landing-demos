export default {
  slug: 'aura-estetica',
  name: 'Aura Estética',
  tagline: 'Belleza & Bienestar · Barcelona',
  category: 'Centro de Estética',
  tier: 'custom',
  group: 'editorial',
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
  social: [
    { platform: 'instagram', href: 'https://instagram.com/auraestetica' },
    { platform: 'facebook', href: 'https://facebook.com/auraestetica' },
    { platform: 'tiktok',    href: 'https://tiktok.com/@auraestetica' },
  ],
  sections: ['hero', 'about', 'services', 'gallery', 'contact'],
  nav: {
    initials: 'AE',
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
    layout: 'editorial',
    title: 'Aura',
    titleHighlight: 'Estética',
    description: 'Tratamientos faciales y corporales personalizados.',
    cta: { label: 'Reservar cita', href: '#contact' },
    ctaSecondary: { label: 'Ver tratamientos', href: '#services' },
    images: [
      { src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1400&h=1800&fit=crop&q=85', label: 'Tratamiento facial' },
      { src: 'https://images.pexels.com/photos/10999291/pexels-photo-10999291.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1800&fit=crop', label: 'Cuidado facial' },
      { src: 'https://images.pexels.com/photos/16120490/pexels-photo-16120490.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1800&fit=crop', label: 'Tratamiento en cabina' },
    ],
  },

  about: {
    label: 'Sobre el centro',
    title: 'Donde la ciencia y el bienestar se encuentran',
    paragraphs: [
      'En Aura Estética somos especialistas en belleza y cuidado personal con más de dos décadas de experiencia. En nuestro centro del Carrer de Provença combinamos las últimas tecnologías con un enfoque totalmente personalizado.',
      'Cada cuerpo es diferente. Por eso diseñamos planes adaptados a tus objetivos, tu ritmo y tus necesidades reales. Sin promesas vacías, con resultados visibles.',
    ],
    image: { src: 'https://images.pexels.com/photos/17570403/pexels-photo-17570403.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1300&fit=crop', alt: 'Sala de relajación del centro' },
    cta: { label: 'Conoce tu plan', href: '#contact' },
  },
  
  services: {
    label: 'Tratamientos',
    title: 'Lo que hacemos en cabina',
    subtitle: 'Cada tratamiento empieza con una consulta y se adapta a tu piel y a tu ritmo.',
    layout: 'cards',
    ctaCard: {
      label: 'Personalizado',
      title: '¿No sabes qué tratamiento es para ti?',
      description: 'Te orientamos sin compromiso. Primera consulta gratuita.',
      button: { label: 'Pedir asesoramiento', href: '#contact' },
    },
    items: [
      { category: 'Corporal',     title: 'HIFU Corporal',          image: { src: 'https://images.pexels.com/photos/18127465/pexels-photo-18127465.jpeg?auto=compress&cs=tinysrgb&w=700&h=525&fit=crop', alt: 'Tratamiento corporal con ultrasonidos' }, description: 'Ultrasonidos focalizados para reducir volumen y reafirmar sin cirugía.',                link: { label: 'Saber más', href: '#contact' } },
      { category: 'LPG',          title: 'Plan Corporal Completo', image: { src: 'https://images.pexels.com/photos/19641818/pexels-photo-19641818.jpeg?auto=compress&cs=tinysrgb&w=700&h=525&fit=crop', alt: 'Masaje corporal' }, description: 'Combinación de tratamientos LPG adaptados a tu plan personalizado.',                   link: { label: 'Saber más', href: '#contact' } },
      { category: 'Depilación',   title: 'Depilación Láser',       image: { src: 'https://images.pexels.com/photos/14438364/pexels-photo-14438364.jpeg?auto=compress&cs=tinysrgb&w=700&h=525&fit=crop', alt: 'Depilación en cabina' }, description: 'Resultados permanentes con tecnología segura para todo tipo de piel.',                  link: { label: 'Saber más', href: '#contact' } },
      { category: 'Circulación',  title: 'Piernas Cansadas',       image: { src: 'https://images.pexels.com/photos/10893343/pexels-photo-10893343.jpeg?auto=compress&cs=tinysrgb&w=700&h=525&fit=crop', alt: 'Masaje en las piernas' }, description: 'Tratamientos específicos para piernas hinchadas y pesadez circulatoria.',               link: { label: 'Saber más', href: '#contact' } },
      { category: 'Reafirmación', title: 'Reduce y Reafirma',      image: { src: 'https://images.pexels.com/photos/10893352/pexels-photo-10893352.jpeg?auto=compress&cs=tinysrgb&w=700&h=525&fit=crop', alt: 'Tratamiento reafirmante' }, description: 'Planes adaptados para moldear la silueta y recuperar firmeza visible.',                 link: { label: 'Saber más', href: '#contact' } },
    ],
  },
  gallery: {
    label: 'Galería',
    title: 'Nuestro centro',
    layout: 'editorial',
    images: [
      { src: 'https://images.pexels.com/photos/3865695/pexels-photo-3865695.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop', alt: 'Aceites esenciales y velas', caption: 'Aromaterapia', bg: 'linear-gradient(135deg,#EAE4DC,#D4B896)' },
      { src: 'https://images.pexels.com/photos/16571735/pexels-photo-16571735.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop', alt: 'Cabina de tratamientos', caption: 'Cabina de tratamientos', bg: 'linear-gradient(135deg,#E8EEE9,#B8CBBC)' },
      { src: 'https://images.pexels.com/photos/16571739/pexels-photo-16571739.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Cabina facial', caption: 'Cabina facial', bg: 'linear-gradient(135deg,#EAE4DC,#D4B896)' },
      { src: 'https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Velas, toallas y flores', caption: 'Detalles', bg: 'linear-gradient(135deg,#E8EEE9,#B8CBBC)' },
      { src: 'https://images.pexels.com/photos/12348288/pexels-photo-12348288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Zona de descanso con hamacas', caption: 'Zona de descanso', bg: 'linear-gradient(135deg,#EAE4DC,#D4B896)' },
      { src: 'https://images.pexels.com/photos/17570403/pexels-photo-17570403.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Sala de relajación', caption: 'Sala de relajación', bg: 'linear-gradient(135deg,#E8EEE9,#B8CBBC)' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: 'Da el primer paso hacia tu mejor versión',
    subtitle: 'Primera consulta gratuita. Te contactamos en menos de 24h.',
    phone: '612 345 678',
    email: 'hola@auraestetica.es',
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
    copy: '© 2026 Aura Estética · Belleza & Bienestar',
  },
}
