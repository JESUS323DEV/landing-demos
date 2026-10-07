const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'hinode',
  name: 'Hinode',
  tagline: 'Cocina japonesa',
  category: 'Restaurante japonés',
  tier: 'custom',
  group: 'interactivo',
  theme: {
    colors: {
      bg:      '#110E0C',
      surface: '#1D1814',
      primary: '#E2472C',
      accent:  '#E3B866',
      text:    '#F4EDE2',
      muted:   '#A89E91',
    },
    fonts: {
      heading: {
        family: '"Shippori Mincho", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&display=swap',
      },
      body: {
        family: '"Zen Kaku Gothic New", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/hinodebcn' },
    { platform: 'tiktok',    href: 'https://tiktok.com/@hinodebcn' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'menu', 'gallery', 'contact'],
  nav: {
    initials: '日',
    subtitle: 'Cocina japonesa',
    transparent: false,
    cta: { label: 'Reservar mesa', href: '#contact' },
    links: [
      { label: 'La casa',  href: '#about' },
      { label: 'Carta',    href: '#menu' },
      { label: 'Galería',  href: '#gallery' },
      { label: 'Contacto', href: '#contact' },
    ],
  },

  hero: {
    layout: 'rueda',
    kicker: 'Cocina japonesa · Barcelona',
    title: 'Gira la mesa,',
    titleHighlight: 'elige tu plato.',
    description: 'Cocina japonesa de producto, pensada para compartir. Cinco platos que resumen la casa.',
    cta: { label: 'Reservar mesa', href: '#contact' },
    ctaSecondary: { label: 'Ver la carta', href: '#menu' },
    hub: '日の出',
    dishes: [
      { name: 'Ramen de ternera', price: '13,50 €', description: 'Caldo de huesos de doce horas, fideos al momento, huevo marinado y cebolleta.', src: px(15298810, 500, 500) },
      { name: 'Tempura de gamba', price: '9,90 €',  description: 'Gamba roja en tempura fina y crujiente, con sal y limón.', src: px(10449355, 500, 500) },
      { name: 'Sashimi de salmón', price: '14,50 €', description: 'Cortes gruesos de salmón fresco con rábano y lima.', src: px(13065181, 500, 500) },
      { name: 'Tartar de salmón', price: '12,90 €', description: 'Salmón aliñado con sésamo, cebolleta y salsa de soja ligera.', src: px(2451082, 500, 500) },
      { name: 'Mochi de chocolate', price: '5,90 €', description: 'Masa de arroz rellena de crema de chocolate y avellana.', src: px(14164667, 500, 500) },
    ],
  },

  about: {
    label: 'La casa',
    title: 'Poco ruido,',
    titleHighlight: 'mucho producto.',
    paragraphs: [
      'Hinode significa amanecer. Abrimos una cocina pequeña, con barra y pocas mesas, para trabajar el producto con calma y sin atajos.',
      'El pescado llega cada mañana, los caldos se cuecen durante horas y la carta cambia con la temporada. Platos para compartir, a un ritmo tranquilo.',
    ],
    features: [
      { icon: 'fish',       title: 'Pescado del día',   description: 'Compramos cada mañana. Si no es bueno, no se sirve.', dark: false },
      { icon: 'cooking-pot', title: 'Caldos de horas',  description: 'Doce horas de cocción para un ramen con cuerpo.', dark: false },
      { icon: 'leaf',       title: 'Carta de temporada', description: 'Cambia con el mercado, sin congelados.', dark: false },
      { icon: 'users',      title: 'Para compartir',    description: 'Platos pensados para pedir varios y probarlo todo.', dark: false },
    ],
    image: { src: px(1860196, 900, 1200), alt: 'Mesa con platos japoneses' },
  },

  services: {
    label: 'La casa recomienda',
    title: 'Tres imprescindibles',
    subtitle: 'Si es tu primera vez, empieza por aquí.',
    layout: 'cards',
    ctaCard: {
      tone: 'primary',
      label: 'Menú degustación',
      title: '¿No sabes qué pedir?',
      description: 'Déjanos elegir por ti. Siete pases para recorrer la carta en una sola mesa.',
      button: { label: 'Reservar degustación', href: '#contact' },
    },
    items: [
      { category: 'Caldo',  title: 'Ramen de ternera',  description: 'Caldo de doce horas, fideos al momento y huevo marinado.', price: '13,50 €', link: { label: 'Reservar mesa', href: '#contact' } },
      { category: 'Crudo',  title: 'Sashimi de salmón', description: 'Cortes gruesos de salmón fresco, rábano y lima.',          price: '14,50 €', link: { label: 'Reservar mesa', href: '#contact' } },
      { category: 'Frito',  title: 'Tempura de gamba',  description: 'Rebozado fino y crujiente, con sal y limón.',              price: '9,90 €',  link: { label: 'Reservar mesa', href: '#contact' } },
    ],
  },

  menu: {
    label: 'Todo lo que servimos',
    title: 'La carta',
    subtitle: 'Precios orientativos. La carta cambia según el mercado.',
    tabs: [
      {
        label: 'Para empezar',
        layout: 'rows',
        items: [
          { name: 'Edamame con sal',      price: '4,50 €', description: 'Vainas de soja al vapor con sal en escamas.' },
          { name: 'Gyoza de cerdo',       price: '7,50 €', description: 'Seis piezas a la plancha con salsa de ponzu.' },
          { name: 'Tempura de gamba',     price: '9,90 €', description: 'Gamba roja en tempura fina, con sal y limón.' },
          { name: 'Ensalada de algas',    price: '6,50 €', description: 'Wakame, sésamo y vinagreta de yuzu.' },
        ],
      },
      {
        label: 'Crudo',
        layout: 'rows',
        items: [
          { name: 'Sashimi de salmón',    price: '14,50 €', description: 'Cortes gruesos de salmón fresco con rábano y lima.' },
          { name: 'Tartar de salmón',     price: '12,90 €', description: 'Salmón aliñado con sésamo y cebolleta.' },
          { name: 'Nigiri variado',       price: '13,90 €', description: 'Seis piezas de pescado del día sobre arroz tibio.' },
          { name: 'Maki de anguila',      price: '11,50 €', description: 'Ocho piezas con aguacate y salsa kabayaki.' },
        ],
      },
      {
        label: 'Calientes',
        layout: 'rows',
        items: [
          { name: 'Ramen de ternera',     price: '13,50 €', description: 'Caldo de doce horas, huevo marinado y cebolleta.' },
          { name: 'Ramen vegetal',        price: '12,50 €', description: 'Caldo de kombu y shiitake con verduras de temporada.' },
          { name: 'Yakitori de pollo',    price: '8,90 €',  description: 'Tres brochetas a la brasa con salsa tare.' },
          { name: 'Katsu de cerdo',       price: '14,90 €', description: 'Empanado crujiente con arroz y col fina.' },
        ],
      },
      {
        label: 'Postres y bebidas',
        layout: 'rows',
        items: [
          { name: 'Mochi de chocolate',   price: '5,90 €', description: 'Masa de arroz rellena de crema de chocolate y avellana.' },
          { name: 'Helado de té matcha',  price: '5,50 €', description: 'Dos bolas con pasta de judía dulce.' },
          { name: 'Sake de la casa',      price: '6,00 €', description: 'Servido frío o caliente, según el plato.' },
          { name: 'Té verde',             price: '2,50 €', description: 'Sencha en tetera, para dos.' },
        ],
      },
    ],
  },

  gallery: {
    label: 'Galería',
    title: 'Se come con los ojos',
    layout: 'editorial',
    images: [
      { src: px(17592743, 600, 900), alt: 'Ramen con huevo',      caption: 'Ramen',    bg: 'linear-gradient(135deg,#1D1814,#3A2A20)' },
      { src: px(28701099, 800, 400), alt: 'Sashimi variado',      caption: 'Sashimi',  bg: 'linear-gradient(135deg,#1D1814,#3A2A20)' },
      { src: px(11661139, 400, 400), alt: 'Gyoza con palillos',   caption: 'Gyoza',    bg: 'linear-gradient(135deg,#1D1814,#3A2A20)' },
      { src: px(17942039, 400, 400), alt: 'Mochi abierto',        caption: 'Mochi',    bg: 'linear-gradient(135deg,#1D1814,#3A2A20)' },
      { src: px(10449355, 400, 400), alt: 'Tempura de gamba',     caption: 'Tempura',  bg: 'linear-gradient(135deg,#1D1814,#3A2A20)' },
      { src: px(1860196, 400, 400),  alt: 'Mesa japonesa',        caption: 'La mesa',  bg: 'linear-gradient(135deg,#1D1814,#3A2A20)' },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Reserva tu mesa',
    subtitle: 'Pocas mesas y mucha demanda. Escríbenos y te confirmamos enseguida.',
    phone: '600 000 000',
    email: 'hola@hinode.es',
    address: 'Calle Mayor, 12 · Tu ciudad',
    hours: 'Ma - Do · 13:00 - 16:00 / 20:00 - 23:30',
  },

  footer: {
    dark: false,
    columns: [
      {
        brand: true,
        text: 'Cocina japonesa de producto, para compartir y sin prisas.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'La casa',  href: '#about' },
          { label: 'Carta',    href: '#menu' },
          { label: 'Galería',  href: '#gallery' },
          { label: 'Contacto', href: '#contact' },
        ],
      },
      {
        title: 'Dónde estamos',
        info: ['Calle Mayor, 12', 'Tu ciudad', 'Ma - Do · 13:00 - 23:30'],
      },
    ],
    copy: '© 2026 Hinode · Cocina japonesa',
  },
}
