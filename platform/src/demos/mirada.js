const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'mirada',
  name: 'Mirada',
  tagline: 'Social media',
  category: 'Social media',
  tier: 'custom',
  group: 'interactivo',
  theme: {
    colors: {
      bg:      '#F3EFE7',
      surface: '#E7E1D4',
      primary: '#2B3BFF',
      accent:  '#C9E64A',
      text:    '#16130F',
      muted:   '#5E574C',
    },
    fonts: {
      heading: {
        family: '"Bricolage Grotesque", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&display=swap',
      },
      body: {
        family: '"Figtree", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/miradasocial' },
    { platform: 'facebook', href: 'https://facebook.com/miradasocial' },
    { platform: 'tiktok',    href: 'https://tiktok.com/@miradasocial' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'contact'],
  nav: {
    initials: 'M',
    subtitle: 'Social media',
    transparent: false,
    cta: { label: 'Hablemos', href: '#contact' },
    links: [
      { label: 'Sobre mí',  href: '#about' },
      { label: 'Servicios', href: '#services' },
      { label: 'Contacto',  href: '#contact' },
    ],
  },

  hero: {
    layout: 'rueda',
    title: 'Tu marca',
    description: 'Estrategia y contenido pensados para cada red. Gira la rueda y mira qué haría tu marca en cada una.',
    cta: { label: 'Hablemos', href: '#contact' },
    ctaSecondary: { label: 'Ver servicios', href: '#services' },
    hub: 'M',
    dishes: [
      { name: 'Instagram', highlight: 'se ve.',       color: 'linear-gradient(45deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)', accent: '#DD2A7B', badge: 'instagram', description: 'Un feed con estilo propio, con carruseles y reels que se reconocen.',          src: px(11843396, 500, 500) },
      { name: 'TikTok',    highlight: 'se mueve.',    color: '#010101', badge: 'tiktok',    description: 'Vídeo corto con guion, para llegar a quien todavía no te conoce.',              src: px(10102521, 500, 500) },
      { name: 'Facebook',  highlight: 'se encuentra.', color: '#0866FF', badge: 'facebook',  description: 'Página, grupos y anuncios para que te encuentre la gente de tu zona.',          src: px(1140825, 500, 500) },
      { name: 'YouTube',   highlight: 'se cuenta.',   color: '#FF0000', badge: 'youtube',   description: 'Vídeos más largos para explicar con calma lo que haces y cómo lo haces.',      src: px(20040022, 500, 500) },
    ],
  },

  about: {
    label: 'Sobre mí',
    title: 'Redes con criterio,',
    titleHighlight: 'sin humo.',
    paragraphs: [
      'Trabajo con marcas pequeñas y medianas que quieren que sus redes tengan un objetivo y no solo publicaciones sueltas.',
      'Empiezo por escuchar a qué te dedicas y a quién quieres llegar, y de ahí salen el estilo, el tono y el calendario. Sin promesas de seguidores de la noche a la mañana.',
    ],
    features: [
      { icon: 'sparkles',       title: 'Estilo propio',  description: 'Una imagen reconocible, no plantillas de otros.', dark: false },
      { icon: 'calendar',       title: 'Calendario',     description: 'Cada semana sabes qué se publica y por qué.', dark: false },
      { icon: 'message-circle', title: 'Comunidad',      description: 'Respondo y conecto con quien te escribe.', dark: false },
      { icon: 'heart',          title: 'Trato cercano',  description: 'Hablas siempre con la misma persona.', dark: false },
    ],
  },

  services: {
    label: 'Servicios',
    title: 'Lo que puedo hacer por tu marca',
    subtitle: 'Se puede contratar todo junto o solo lo que necesites.',
    layout: 'cards',
    ctaCard: {
      tone: 'primary',
      label: 'Primera vez',
      title: '¿Por dónde empiezo?',
      description: 'Revisamos tu perfil juntos y te cuento qué cambiaría primero.',
      button: { label: 'Pedir una revisión', href: '#contact' },
    },
    items: [
      { category: 'Base',      title: 'Estrategia', image: { src: 'https://images.pexels.com/photos/11216260/pexels-photo-11216260.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop', alt: 'Estrategia' },      description: 'Objetivo, público, tono de voz y líneas de contenido.', price: 'Desde 150 €', link: { label: 'Consultar', href: '#contact' } },
      { category: 'Cada mes',  title: 'Contenido', image: { src: 'https://images.pexels.com/photos/27467541/pexels-photo-27467541.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop', alt: 'Contenido' },       description: 'Calendario, diseño de publicaciones y redacción de textos.', price: 'Desde 300 € al mes', link: { label: 'Consultar', href: '#contact' } },
      { category: 'Día a día', title: 'Comunidad', image: { src: 'https://images.pexels.com/photos/29130200/pexels-photo-29130200.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop', alt: 'Comunidad' },       description: 'Respuesta a comentarios y mensajes, y cuidado de la audiencia.', price: 'Desde 120 € al mes', link: { label: 'Consultar', href: '#contact' } },
      { category: 'Reels',     title: 'Vídeo corto', image: { src: 'https://images.pexels.com/photos/17614477/pexels-photo-17614477.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop', alt: 'Vídeo corto' },     description: 'Guion, grabación y edición de vídeos para Instagram y TikTok.', price: 'Desde 60 € por pieza', link: { label: 'Consultar', href: '#contact' } },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Cuéntame sobre tu marca',
    subtitle: 'Escríbeme con tu perfil y qué te gustaría conseguir. Te respondo en un día.',
    phone: '600 000 000',
    email: 'hola@mirada.es',
    address: 'Trabajo en remoto · Tu ciudad',
    hours: 'Lu - Vi · 9:00 - 18:00',
    form: {
      title: 'Hablemos',
      button: 'Enviar mensaje',
      message: 'Cuéntame sobre tu marca y qué te gustaría conseguir en redes',
      people: false,
    },
  },

  footer: {
    dark: false,
    columns: [
      {
        brand: true,
        text: 'Estrategia y contenido para marcas que quieren que sus redes tengan un plan.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'Sobre mí',  href: '#about' },
          { label: 'Servicios', href: '#services' },
          { label: 'Contacto',  href: '#contact' },
        ],
      },
      {
        title: 'Contacto',
        info: ['600 000 000', 'hola@mirada.es', 'Lu - Vi · 9:00 - 18:00'],
      },
    ],
    copy: '© 2026 Mirada · Social media',
  },
}
