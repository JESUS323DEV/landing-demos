export default {
  slug: 'selva-clube',
  name: 'Selva Clube BCN',
  tagline: 'Private Social Club · Barcelona',
  category: 'Club Privado',
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
  sections: ['hero', 'about', 'cta', 'contact'],
  nav: {
    initials: '🌿',
    transparent: false,
    cta: { label: 'Unirte', href: '#contact' },
    links: [
      { label: 'El Club',    href: '#about' },
      { label: 'Membresía', href: '#cta' },
      { label: 'Contacto',  href: '#contact' },
    ],
  },
  hero: {
    layout: 'split',
    badge: '🏆 36x — Barcelona\'s finest',
    title: 'Stay Wild',
    titleGlow: 'Wild',
    description: 'Selva Clube BCN es un club social privado en el corazón de Barcelona. Un espacio exclusivo para quienes buscan algo diferente.',
    cta: { label: 'Solicitar acceso', href: '#contact' },
    ctaSecondary: { label: 'Conocer el club', href: '#about' },
    stats: [
      { value: '11K+', label: 'Comunidad' },
      { value: '36x',  label: 'Reconocido' },
      { value: 'BCN',  label: 'Ubicación' },
    ],
    images: [
      { bg: 'linear-gradient(135deg,#1a3d1a,#0d2610)', emoji: '🌿', label: 'Foto 1' },
      { bg: 'linear-gradient(135deg,#2a1f0d,#1a1208)', emoji: '🦁', label: 'Foto 2' },
      { bg: 'linear-gradient(135deg,#0f2a20,#0a1a14)', emoji: '🔥', label: 'Foto 3' },
      { bg: 'linear-gradient(135deg,#1a1a2e,#0f0f1a)', emoji: '🌙', label: 'Foto 4' },
      { bg: 'linear-gradient(135deg,#2a1a0d,#1a1008)', emoji: '✨', label: 'Foto 5' },
    ],
  },

  about: {
    flip: true,
    label: 'El Club',
    title: 'Más que un club.',
    titleHighlight: 'Una experiencia.',
    paragraphs: [
      'Selva Clube BCN es una asociación privada sin ánimo de lucro fundada en Barcelona. Somos una comunidad de personas que comparten valores de libertad, respeto y autenticidad.',
      'Nuestros socios acceden a un espacio único donde la privacidad y el bienestar son la prioridad. No somos un negocio, somos una selva propia.',
    ],
    pills: [
      { icon: '🔒', title: '100% Privado',    description: 'Acceso solo para socios registrados' },
      { icon: '🦁', title: 'Comunidad Wild',  description: '+11.000 personas que nos siguen' },
      { icon: '📍', title: 'Barcelona',       description: 'Dirección facilitada al hacerse socio' },
    ],
    stats: [
      { value: '11K+', label: 'Comunidad' },
      { value: '36x',  label: 'Reconocido' },
      { value: '+21',  label: 'Solo mayores' },
    ],
    imagePlaceholder: 'Interior del club',
  },
  
  cta: {
    label: 'Membresía',
    title: '¿Cómo unirte?',
    description: 'El acceso a Selva es privado. Necesitamos conocerte antes de darte la bienvenida a la jungla.',
    steps: [
      { icon: '📩', number: '01', title: 'Solicitud',    description: 'Rellena el formulario con tus datos. Cuéntanos quién eres y por qué quieres entrar.' },
      { icon: '🤙', number: '02', title: 'Entrevista',   description: 'Nos ponemos en contacto para una charla breve. Queremos saber que encajas con la comunidad.' },
      { icon: '🦁', number: '03', title: 'Bienvenido/a', description: 'Firmas el reglamento, recibes la dirección y pasas a formar parte de Selva. Welcome to the jungle.' },
    ],
    notice: 'Asociación privada sin ánimo de lucro. Acceso exclusivo para mayores de 21 años. Operamos conforme a la normativa vigente.',
    button: { label: 'Solicitar membresía', href: '#contact' },
  },
  contact: {
    label: 'Contacto',
    title: '¿Listo para entrar?',
    subtitle: 'Escríbenos y te respondemos en menos de 48h. Todo lo que compartas es estrictamente confidencial.',
    phone: '+34 931 000 000',
    email: 'acceso@selvaclub.bcn',
    address: 'Barcelona, Cataluña (dirección privada)',
    hours: '11:00 - 23:00 · Todos los días',
  },
  footer: {
    dark: false,
    copy: '© 2026 Selva Clube BCN — Asociación Privada. Solo mayores de 18.',
  },
}
