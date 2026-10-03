export default {
  slug: 'liana-bar',
  name: 'Liana Bar',
  tagline: 'Coctelería tropical · Barcelona',
  category: 'Coctelería',
  tier: 'custom',
  group: 'inmersivo',
  theme: {
    colors: {
      bg:      '#0a0a0a',
      surface: '#111111',
      primary: '#43a047',
      accent:  '#c8a84b',
      text:    '#e8e8e8',
      muted:   '#888888',
    },
    fonts: {
      heading: {
        family: '"Bebas Neue", sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&display=swap',
      },
      body: {
        family: '"Inter", sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/lianabar' },
    { platform: 'tiktok',    href: 'https://tiktok.com/@lianabar' },
  ],
  sections: ['hero', 'about', 'cta', 'contact'],
  nav: {
    initials: 'LB',
    transparent: false,
    cta: { label: 'Reservar mesa', href: '#contact' },
    links: [
      { label: 'El bar',    href: '#about' },
      { label: 'Reservas',  href: '#cta' },
      { label: 'Contacto',  href: '#contact' },
    ],
  },
  hero: {
    layout: 'split',
    imageStyle: 'background',
    badge: 'Coctelería de autor',
    title: 'Noches',
    titleGlow: 'de selva.',
    description: 'Coctelería de autor en un rincón verde y a media luz, en pleno corazón de Barcelona. Ven a probar algo distinto.',
    cta: { label: 'Reservar mesa', href: '#contact' },
    ctaSecondary: { label: 'Conocer el bar', href: '#about' },
    stats: [
      { value: '30+',   label: 'Cócteles de autor' },
      { value: '4.8',   label: 'Valoración media' },
      { value: '19:00', label: 'Abrimos cada día' },
    ],
    images: [
      { src: 'https://images.pexels.com/photos/16722390/pexels-photo-16722390.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop', label: 'La selva' },
      { src: 'https://images.pexels.com/photos/18473577/pexels-photo-18473577.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop', label: 'Rincones' },
      { src: 'https://images.pexels.com/photos/17109093/pexels-photo-17109093.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop', label: 'El salón' },
      { src: 'https://images.pexels.com/photos/2442891/pexels-photo-2442891.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop', label: 'Neón' },
      { src: 'https://images.pexels.com/photos/12366583/pexels-photo-12366583.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop', label: 'La entrada' },
    ],
  },

  about: {
    flip: true,
    label: 'El bar',
    title: 'Más que un bar.',
    titleHighlight: 'Una selva urbana.',
    paragraphs: [
      'Liana Bar nace con una idea sencilla: un sitio donde desconectar de la ciudad entre plantas, luz cálida y buena música. Cócteles de autor hechos al momento, con producto fresco y destilados cuidados.',
      'La carta cambia con la temporada. Trabajamos con frutas tropicales, hierbas frescas y ginebras y rones de pequeñas destilerías.',
    ],
    pills: [
      { icon: 'martini', title: 'Cócteles de autor', description: 'Una carta que cambia con la temporada' },
      { icon: 'leaf',    title: 'Ambiente selva',    description: 'Plantas, luz cálida y buena música' },
      { icon: 'map-pin', title: 'Barcelona centro',  description: 'Cerca del metro y abierto cada día' },
    ],
    stats: [
      { value: '30+', label: 'Cócteles' },
      { value: '7/7', label: 'Abierto' },
      { value: '+18', label: 'Solo mayores' },
    ],
    imagePlaceholder: 'Interior del bar',
  },

  cta: {
    label: 'Reservas',
    title: '¿Cómo reservar?',
    description: 'Reservar es rápido. Dinos cuándo vienes y te guardamos la mejor mesa.',
    steps: [
      { icon: 'calendar',       number: '01', title: 'Reserva',     description: 'Elige día, hora y número de personas. También puedes escribirnos por WhatsApp.' },
      { icon: 'message-circle', number: '02', title: 'Confirmamos', description: 'Te respondemos para confirmar tu mesa y resolver cualquier duda.' },
      { icon: 'martini',        number: '03', title: 'Disfruta',    description: 'Llega, siéntate entre las plantas y deja que elijamos el primer cóctel por ti. Welcome to the jungle.' },
    ],
    notice: 'Consumo responsable. Prohibida la venta de alcohol a menores de 18 años.',
    button: { label: 'Reservar mesa', href: '#contact' },
  },
  contact: {
    label: 'Contacto',
    title: '¿Te guardamos mesa?',
    subtitle: 'Reserva online o escríbenos. Te confirmamos la mesa enseguida.',
    phone: '+34 931 000 000',
    email: 'hola@lianabar.es',
    address: 'Carrer de Mallorca, 120 · Barcelona',
    hours: '19:00 - 02:00 · Todos los días',
  },
  footer: {
    dark: false,
    copy: '© 2026 Liana Bar · Coctelería tropical. Consumo responsable. Solo mayores de 18.',
  },
}
