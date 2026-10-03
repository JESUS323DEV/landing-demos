const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'anima-tattoo',
  name: 'Ánima Tattoo Studio',
  tagline: 'Estudio de tatuajes · Barcelona',
  category: 'Estudio de tatuajes',
  tier: 'custom',
  group: 'inmersivo',
  theme: {
    colors: {
      bg:      '#0E0E10',
      surface: '#17171A',
      primary: '#A78BFA',
      accent:  '#0A0A0C',
      text:    '#F2F0F7',
      muted:   '#8E8A9A',
    },
    fonts: {
      heading: {
        family: '"Syne", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&display=swap',
      },
      body: {
        family: '"DM Sans", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/animatattoostudio' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'gallery', 'contact'],
  nav: {
    initials: 'AT',
    subtitle: 'Tattoo Studio',
    transparent: true,
    cta: { label: 'Pedir cita', href: '#contact' },
    links: [
      { label: 'El estudio', href: '#about' },
      { label: 'Estilos',    href: '#services' },
      { label: 'Trabajos',   href: '#gallery' },
      { label: 'Contacto',   href: '#contact' },
    ],
  },

  hero: {
    layout: 'immersive',
    title: 'Tinta que cuenta',
    titleHighlight: 'tu historia.',
    description: 'Estudio de tatuajes en Barcelona. Diseño propio, higiene total y un trato cercano de principio a fin.',
    cta: { label: 'Pedir cita', href: '#contact' },
    ctaSecondary: { label: 'Ver trabajos', href: '#gallery' },
    images: [
      { src: px(32225186, 1400, 1200), label: 'Tatuaje en proceso' },
      { src: px(32225192, 1400, 1200), label: 'Sesión' },
      { src: px(17758997, 1400, 1200), label: 'El artista' },
    ],
    features: [
      { icon: 'pen-tool',     title: 'Diseño propio',   description: 'Cada pieza se dibuja para ti' },
      { icon: 'shield-check', title: 'Higiene total',   description: 'Material nuevo y esterilizado' },
      { icon: 'heart',        title: 'Trato cercano',   description: 'Te acompañamos en todo el proceso' },
    ],
  },

  about: {
    label: 'El estudio',
    title: 'Arte sobre piel,',
    titleHighlight: 'sin prisas.',
    paragraphs: [
      'Ánima nace de una idea sencilla: que tu tatuaje sea una decisión pensada y no un impulso. Antes de coger la máquina hablamos, dibujamos y ajustamos hasta que el diseño es justo lo que buscabas.',
      'Trabajamos con cita previa en un estudio privado, con material nuevo en cada sesión y artistas especializados en distintos estilos.',
    ],
    stats: [
      { value: '+8',     label: 'Años de oficio' },
      { value: '+2.000', label: 'Piezas realizadas' },
      { value: '4.9',    label: 'Valoración en Google' },
    ],
    badge: { value: '5', label: 'Estilos' },
    image: { src: px(20531496, 900, 1200), alt: 'Tatuador trabajando en el estudio' },
  },

  services: {
    label: 'Estilos',
    title: 'Elige tu estilo',
    subtitle: 'Cada artista domina un estilo. Te asignamos al que mejor encaja con tu idea.',
    layout: 'cards',
    ctaCard: {
      label: 'Primera vez',
      tone: 'primary',
      title: '¿Aún no sabes qué quieres?',
      description: 'Cuéntanos tu idea y la convertimos en un diseño. La primera consulta es gratuita.',
      button: { label: 'Pedir consulta', href: '#contact' },
    },
    items: [
      { category: 'Detalle',     title: 'Fine line',   description: 'Trazo fino y delicado, ideal para piezas pequeñas, letras y símbolos.',          price: 'Desde 60 €',  link: { label: 'Pedir cita', href: '#contact' } },
      { category: 'Contraste',   title: 'Blackwork',   description: 'Negro sólido, geometría y composiciones de gran impacto visual.',               price: 'Desde 90 €',  link: { label: 'Pedir cita', href: '#contact' } },
      { category: 'Clásico',     title: 'Tradicional', description: 'Líneas gruesas, colores planos y los motivos de siempre, bien hechos.',          price: 'Desde 80 €',  link: { label: 'Pedir cita', href: '#contact' } },
      { category: 'Detalle',     title: 'Realismo',    description: 'Retratos y escenas con sombras y volumen, como una fotografía sobre la piel.',  price: 'Desde 150 €', link: { label: 'Pedir cita', href: '#contact' } },
      { category: 'Renovación',  title: 'Cover up',    description: 'Cubrimos o transformamos un tatuaje antiguo en una pieza nueva.',                price: 'Consultar',   link: { label: 'Pedir cita', href: '#contact' } },
    ],
  },

  gallery: {
    label: 'Trabajos',
    title: 'Piezas que hablan solas',
    layout: 'editorial',
    images: [
      { src: px(32225193, 600, 900), alt: 'Dragón en color',        caption: 'Color',    bg: 'linear-gradient(135deg,#17171A,#2A2A30)' },
      { src: px(25998494, 800, 400), alt: 'Tatuaje en el hombro',   caption: 'Hombro',   bg: 'linear-gradient(135deg,#17171A,#2A2A30)' },
      { src: px(29674850, 400, 400), alt: 'Manga en blanco y negro', caption: 'Manga',    bg: 'linear-gradient(135deg,#17171A,#2A2A30)' },
      { src: px(12639945, 400, 400), alt: 'Piernas tatuadas',       caption: 'Piernas',  bg: 'linear-gradient(135deg,#17171A,#2A2A30)' },
      { src: px(28321511, 400, 400), alt: 'Sesión de tatuaje',      caption: 'Sesión',   bg: 'linear-gradient(135deg,#17171A,#2A2A30)' },
      { src: px(30284677, 400, 400), alt: 'Detalle del trabajo',    caption: 'Detalle',  bg: 'linear-gradient(135deg,#17171A,#2A2A30)' },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Cuéntanos tu idea',
    subtitle: 'Escríbenos con la zona, el tamaño aproximado y el estilo que te gusta. Te respondemos con un presupuesto.',
    phone: '600 000 000',
    email: 'hola@animatattoo.es',
    address: 'Carrer de Verdi, 40 · Barcelona',
    hours: 'Ma - Sa · 11:00 - 20:00 · Con cita previa',
    form: {
      title: 'Pedir cita',
      button: 'Pedir cita',
      message: 'Cuéntanos tu idea: zona, tamaño y estilo',
      people: false,
    },
  },

  footer: {
    dark: false,
    columns: [
      {
        brand: true,
        text: 'Estudio de tatuajes en Barcelona. Diseño propio, higiene total y trato cercano.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'El estudio', href: '#about' },
          { label: 'Estilos',    href: '#services' },
          { label: 'Trabajos',   href: '#gallery' },
          { label: 'Contacto',   href: '#contact' },
        ],
      },
      {
        title: 'Contacto',
        info: ['600 000 000', 'Carrer de Verdi, 40', 'Barcelona'],
      },
    ],
    copy: '© 2026 Ánima Tattoo Studio · Solo mayores de 18 años.',
  },
}
