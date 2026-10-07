const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'almendra',
  name: 'Almendra',
  tagline: 'Cocina de mercado',
  category: 'Restaurante',
  tier: 'custom',
  group: 'interactivo',
  theme: {
    colors: {
      bg:      '#F6F0E6',
      surface: '#EADFCD',
      primary: '#3E5A3B',
      accent:  '#B8622F',
      text:    '#241E18',
      muted:   '#6E6458',
    },
    fonts: {
      heading: {
        family: '"Fraunces", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;1,400&display=swap',
      },
      body: {
        family: '"DM Sans", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/almendrarestaurante' },
    { platform: 'tiktok',    href: 'https://tiktok.com/@almendrarestaurante' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'menu', 'gallery', 'contact'],
  nav: {
    initials: 'A',
    subtitle: 'Cocina de mercado',
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
    layout: 'apetece',
    kicker: 'Cocina de mercado',
    title: 'Hoy me apetece',
    description: 'Producto de temporada, cocina sin artificios y una mesa para cada ganas. Dinos qué te apetece y te enseñamos el plato.',
    cta: { label: 'Reservar mesa', href: '#contact' },
    ctaSecondary: { label: 'Ver la carta', href: '#menu' },
    moodLabel: '¿Qué te apetece hoy?',
    moodHint: 'Toca una opción',
    moods: [
      { label: 'Ligero',          highlight: 'algo ligero.',     name: 'Ensalada',              price: '9,90 €',  description: 'Verduras del mercado, queso fresco, aceitunas y aliño de limón.',       src: px(14089635, 1400, 1400) },
      { label: 'Compartir',       highlight: 'compartir.',       name: 'Mesa de tapas',         price: '22,00 €', description: 'Croquetas, albóndigas, embutidos y aceitunas, para picar entre todos.',  src: px(14009277, 1400, 1400) },
      { label: 'Potente',         highlight: 'algo contundente.', name: 'Solomillo a la brasa',  price: '21,50 €', description: 'Ternera a la brasa con hierbas frescas y salsa de la casa.',             src: px(1639561, 1400, 1400) },
      { label: 'Dulce',           highlight: 'algo dulce.',      name: 'Coulant de chocolate',  price: '6,90 €',  description: 'Corazón fundido con helado de vainilla y cacao.',                         src: px(20522414, 1400, 1400) },
    ],
  },

  about: {
    label: 'La casa',
    title: 'Cocina sencilla,',
    titleHighlight: 'producto de cada día.',
    paragraphs: [
      'En Almendra cocinamos con lo que trae el mercado cada mañana. La carta es corta y cambia con la temporada, para que todo llegue a la mesa en su mejor momento.',
      'Un local pequeño, platos para compartir y un servicio sin prisas. Venir a comer aquí es sentarse a gusto.',
    ],
    features: [
      { icon: 'leaf',        title: 'Producto de temporada', description: 'Compramos en el mercado cada mañana.', dark: false },
      { icon: 'flame',       title: 'Brasa y horno',         description: 'Cocciones sencillas que respetan el producto.', dark: false },
      { icon: 'users',       title: 'Para compartir',        description: 'Platos pensados para pedir varios y probar de todo.', dark: false },
      { icon: 'chef-hat',    title: 'Carta corta',           description: 'Pocos platos, bien hechos, que cambian con el mercado.', dark: false },
    ],
    image: { src: px(14009279, 900, 1200), alt: 'Mesa del restaurante' },
  },

  services: {
    label: 'La casa recomienda',
    title: 'Tres para empezar',
    subtitle: 'Si es tu primera vez, empieza por aquí.',
    layout: 'cards',
    ctaCard: {
      tone: 'primary',
      label: 'Menú del día',
      title: '¿Comes entre semana?',
      description: 'De lunes a viernes, menú de mercado con primero, segundo y postre.',
      button: { label: 'Reservar mesa', href: '#contact' },
    },
    items: [
      { category: 'Para compartir', title: 'Mesa de tapas',         description: 'Croquetas, albóndigas, embutidos y aceitunas.', price: '22,00 €', link: { label: 'Reservar mesa', href: '#contact' } },
      { category: 'A la brasa',     title: 'Solomillo a la brasa',  description: 'Ternera con hierbas frescas y salsa de la casa.', price: '21,50 €', link: { label: 'Reservar mesa', href: '#contact' } },
      { category: 'Postre',         title: 'Coulant de chocolate',  description: 'Corazón fundido con helado de vainilla.', price: '6,90 €',  link: { label: 'Reservar mesa', href: '#contact' } },
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
          { name: 'Ensalada de temporada', price: '9,90 €',  description: 'Verduras del mercado, queso fresco y aliño de limón.' },
          { name: 'Croquetas caseras',     price: '8,50 €',  description: 'Seis piezas de jamón o de setas, rebozadas al momento.' },
          { name: 'Albóndigas en salsa',   price: '9,00 €',  description: 'De ternera, con salsa de tomate y hierbas.' },
          { name: 'Tabla de embutidos',    price: '12,50 €', description: 'Selección de embutidos con pan de cristal.' },
        ],
      },
      {
        label: 'Principales',
        layout: 'rows',
        items: [
          { name: 'Solomillo a la brasa',  price: '21,50 €', description: 'Ternera con hierbas frescas y salsa de la casa.' },
          { name: 'Pescado del día',       price: '19,00 €', description: 'Al horno, con verduras de temporada.' },
          { name: 'Arroz meloso',          price: '16,50 €', description: 'Con verduras y alcachofa. Mínimo dos personas.' },
          { name: 'Pollo de corral',       price: '14,50 €', description: 'Asado despacio, con patatas panadera.' },
        ],
      },
      {
        label: 'Postres',
        layout: 'rows',
        items: [
          { name: 'Coulant de chocolate',  price: '6,90 €', description: 'Corazón fundido con helado de vainilla y cacao.' },
          { name: 'Panna cotta',           price: '5,90 €', description: 'Con menta y crujiente de almendra.' },
          { name: 'Tarta de queso',        price: '6,50 €', description: 'Cremosa, al horno, con frutos rojos.' },
        ],
      },
      {
        label: 'Bebidas',
        layout: 'rows',
        items: [
          { name: 'Vino de la casa',       price: '3,50 €', description: 'Tinto, blanco o rosado, por copa.' },
          { name: 'Cerveza artesana',      price: '3,80 €', description: 'De barril, de elaboración local.' },
          { name: 'Limonada casera',       price: '3,20 €', description: 'Con limón exprimido y menta.' },
        ],
      },
    ],
  },

  gallery: {
    label: 'Galería',
    title: 'Se come con los ojos',
    layout: 'editorial',
    images: [
      { src: px(14009277, 600, 900), alt: 'Tapas para compartir', caption: 'Tapas',     bg: 'linear-gradient(135deg,#EADFCD,#B8622F)' },
      { src: px(1639561, 800, 400),  alt: 'Solomillo',            caption: 'A la brasa', bg: 'linear-gradient(135deg,#EADFCD,#B8622F)' },
      { src: px(14089635, 400, 400), alt: 'Ensalada',             caption: 'Mercado',    bg: 'linear-gradient(135deg,#EADFCD,#B8622F)' },
      { src: px(20522414, 400, 400), alt: 'Coulant',              caption: 'Postres',    bg: 'linear-gradient(135deg,#EADFCD,#B8622F)' },
      { src: px(18261826, 400, 400), alt: 'Panna cotta',          caption: 'Dulce',      bg: 'linear-gradient(135deg,#EADFCD,#B8622F)' },
      { src: px(14009279, 400, 400), alt: 'La mesa',              caption: 'La casa',    bg: 'linear-gradient(135deg,#EADFCD,#B8622F)' },
    ],
  },

  contact: {
    label: 'Contacto',
    title: 'Reserva tu mesa',
    subtitle: 'Escríbenos y te confirmamos enseguida. También puedes pasarte sin reserva entre semana.',
    phone: '600 000 000',
    email: 'hola@almendra.es',
    address: 'Calle Mayor, 12 · Tu ciudad',
    hours: 'Ma - Do · 13:00 - 16:00 / 20:00 - 23:30',
  },

  footer: {
    dark: false,
    columns: [
      {
        brand: true,
        text: 'Cocina de mercado, producto de temporada y platos para compartir.',
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
    copy: '© 2026 Almendra · Cocina de mercado',
  },
}
