const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'brote',
  name: 'Brote',
  tagline: 'Psicología infantil',
  category: 'Psicología infantil',
  tier: 'custom',
  group: 'editorial',
  theme: {
    colors: {
      bg:      '#F5EFE3',
      surface: '#EADFCB',
      primary: '#2E6B68',
      accent:  '#C9A45C',
      text:    '#23373B',
      muted:   '#66797A',
    },
    fonts: {
      heading: {
        family: '"Young Serif", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=Young+Serif&display=swap',
      },
      body: {
        family: '"Figtree", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/brotepsicologia' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'contact'],
  nav: {
    initials: 'B',
    subtitle: 'Psicología infantil',
    cta: { label: 'Pedir cita', href: '#contact' },
    links: [
      { label: 'Cómo trabajamos', href: '#about' },
      { label: 'Servicios',       href: '#services' },
      { label: 'Contacto',        href: '#contact' },
    ],
  },

  hero: {
    layout: 'tiras',
    title: 'Crecer con calma,',
    titleHighlight: 'paso a paso.',
    description: 'Acompañamos a niños, niñas y familias con evaluación, apoyo y orientación cercana, a su ritmo.',
    cta: { label: 'Pedir primera consulta', href: '#contact' },
    ctaSecondary: { label: 'Cómo trabajamos', href: '#about' },
    images: [
      { src: px(3662630, 800, 1400), label: 'Niña dibujando' },
      { src: px(7447271, 800, 1400), label: 'Sesión de psicología infantil' },
      { src: px(7858887, 800, 1400), label: 'Terapia con arte' },
    ],
  },

  about: {
    label: 'Cómo trabajamos',
    title: 'Un espacio tranquilo',
    titleHighlight: 'para crecer.',
    paragraphs: [
      'Cada niño y cada familia tienen su propio ritmo. Por eso empezamos escuchando, y solo después diseñamos un plan a su medida.',
      'Trabajamos con juego, rutinas claras y mucha paciencia, y mantenemos informada a la familia en todo el proceso.',
    ],
    features: [
      { icon: 'heart',      title: 'Trato cercano',      description: 'Un ambiente amable donde los niños se sienten seguros.', dark: false },
      { icon: 'users',      title: 'Con la familia',     description: 'Las familias forman parte del proceso desde el primer día.', dark: false },
      { icon: 'sprout',     title: 'A su ritmo',         description: 'Objetivos pequeños y alcanzables, sin prisas.', dark: false },
      { icon: 'hand-heart', title: 'Apoyo en el colegio', description: 'Coordinación con los centros cuando la familia lo pide.', dark: false },
    ],
    cta: { label: 'Pedir primera consulta', href: '#contact' },
    image: { src: px(3662630, 900, 1200), alt: 'Niña dibujando' },
  },

  services: {
    label: 'Servicios',
    title: 'Cómo podemos ayudar',
    subtitle: 'Cada caso es distinto. Empezamos por una primera consulta para conocernos.',
    layout: 'cards',
    ctaCard: {
      tone: 'primary',
      label: 'Primera consulta',
      title: '¿No sabes por dónde empezar?',
      description: 'Cuéntanos qué os preocupa y te orientamos, sin compromiso.',
      button: { label: 'Pedir cita', href: '#contact' },
    },
    items: [
      { category: 'Valoración',  title: 'Evaluación',            description: 'Una valoración completa para entender las necesidades del niño o la niña.',        link: { label: 'Saber más', href: '#contact' } },
      { category: 'Apoyo',       title: 'Intervención',          description: 'Sesiones individuales con juego y estrategias adaptadas a cada edad.',            link: { label: 'Saber más', href: '#contact' } },
      { category: 'Familias',    title: 'Orientación familiar',  description: 'Pautas prácticas para acompañar en casa con más tranquilidad.',                   link: { label: 'Saber más', href: '#contact' } },
      { category: 'Escuela',     title: 'Colaboración con centros', description: 'Comunicación con colegios para que el apoyo llegue también al aula.',          link: { label: 'Saber más', href: '#contact' } },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Hablemos de vuestro caso',
    subtitle: 'Escríbenos y te respondemos para concertar una primera consulta.',
    phone: '600 000 000',
    email: 'hola@brote.es',
    address: 'Centro de la ciudad · Atención presencial y online',
    hours: 'Lu - Vi · 9:00 - 19:00',
    form: {
      title: 'Primera consulta',
      button: 'Pedir cita',
      message: 'Cuéntanos brevemente qué os preocupa',
      people: false,
    },
  },

  footer: {
    dark: false,
    columns: [
      {
        brand: true,
        text: 'Psicología infantil y juvenil. Acompañamiento cercano para niños y familias.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'Cómo trabajamos', href: '#about' },
          { label: 'Servicios',       href: '#services' },
          { label: 'Contacto',        href: '#contact' },
        ],
      },
      {
        title: 'Contacto',
        info: ['600 000 000', 'hola@brote.es', 'Atención presencial y online'],
      },
    ],
    copy: '© 2026 Brote · Psicología infantil',
  },
}
