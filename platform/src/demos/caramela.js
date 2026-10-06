const px = (id, w, h) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

export default {
  slug: 'caramela',
  name: 'Caramela',
  tagline: 'Pastelería artesanal',
  category: 'Pastelería',
  tier: 'custom',
  group: 'editorial',
  theme: {
    colors: {
      bg:      '#F7EFE3',
      surface: '#EBDCC4',
      primary: '#9A5B2E',
      accent:  '#1F3A5F',
      text:    '#3A2416',
      muted:   '#8A6F5B',
    },
    fonts: {
      heading: {
        family: '"DM Serif Display", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap',
      },
      body: {
        family: '"Jost", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/caramelapasteleria' },
    { platform: 'whatsapp',  href: 'https://wa.me/34600000000' },
  ],
  sections: ['hero', 'about', 'services', 'gallery', 'contact'],
  nav: {
    initials: 'C',
    subtitle: 'Pastelería',
    cta: { label: 'Hacer un pedido', href: '#contact' },
    links: [
      { label: 'Nosotros',  href: '#about' },
      { label: 'Dulces',    href: '#services' },
      { label: 'Galería',   href: '#gallery' },
      { label: 'Contacto',  href: '#contact' },
    ],
  },

  hero: {
    layout: 'vitrina',
    kicker: 'Pastelería artesanal',
    meta: 'Obrador propio · Pedidos por encargo',
    title: 'Hecho a mano,',
    titleHighlight: 'cada mañana.',
    description: 'Dulces, panes y tortas elaborados cada día con ingredientes de verdad, sin prisas y sin atajos.',
    shelfLabel: 'Hoy en vitrina',
    products: [
      { name: 'Medialunas', image: px(30403209, 600, 800) },
      { name: 'Torta de chocolate', image: px(18613262, 600, 800) },
      { name: 'Galletas', image: px(35156663, 600, 800) },
      { name: 'Tarta de queso', image: px(28835210, 600, 800) },
      { name: 'Brownie', image: px(15106329, 600, 800) },
    ],
    cta: { label: 'Hacer un pedido', href: '#contact' },
    ctaSecondary: { label: 'Ver los dulces', href: '#services' },
  },

  about: {
    label: 'Nuestra obra',
    title: 'Dulce de verdad,',
    titleHighlight: 'sin prisas.',
    paragraphs: [
      'En Caramela elaboramos cada día todo lo que ves en la vitrina. Masas reposadas, mantequilla de verdad y recetas que se cuidan hasta el último detalle.',
      'No hacemos grandes tiradas ni usamos atajos. Cuando se acaba lo del día, se acaba, y mañana volvemos a empezar desde cero.',
    ],
    features: [
      { icon: 'hand-heart', title: 'Hecho a mano',      description: 'Cada pieza se elabora y se decora a mano en nuestro obrador.', dark: false },
      { icon: 'leaf',       title: 'Ingredientes reales', description: 'Mantequilla, huevos y chocolate de calidad, sin sustitutos.', dark: true },
      { icon: 'clock',      title: 'Frescura diaria',   description: 'Elaboramos cada mañana, para que todo llegue en su punto.', dark: false },
      { icon: 'cake-slice', title: 'Por encargo',       description: 'Tortas para cumpleaños, bodas y celebraciones.', dark: false },
    ],
    cta: { label: 'Hacer un pedido', href: '#contact' },
    image: { src: px(18656839, 900, 1200), alt: 'Vitrina de la pastelería' },
  },

  services: {
    label: 'Nuestros dulces',
    title: 'De la vitrina a tu mesa',
    subtitle: 'Lo de siempre, bien hecho. Y si quieres algo especial, lo preparamos por encargo.',
    layout: 'cards',
    ctaCard: {
      label: 'Encargos',
      title: '¿Una celebración?',
      description: 'Tortas y mesas dulces para cumpleaños, bodas y eventos, a tu medida.',
      button: { label: 'Pedir presupuesto', href: '#contact' },
    },
    items: [
      { category: 'Bollería',  title: 'Medialunas',         description: 'Hojaldradas, ligeras y recién horneadas cada mañana.',        price: '1,80 €',     link: { label: 'Pedir', href: '#contact' } },
      { category: 'Tortas',    title: 'Torta de chocolate', description: 'Esponjosa, con crema de chocolate y un toque de sal.',          price: '4,50 € / porción', link: { label: 'Pedir', href: '#contact' } },
      { category: 'Galletas',  title: 'Galletas de mantequilla', description: 'Crujientes por fuera y tiernas por dentro. En cajas para regalar.', price: '2,20 €', link: { label: 'Pedir', href: '#contact' } },
      { category: 'Tartas',    title: 'Tarta de queso',     description: 'Cremosa y suave, sobre una base de galleta casera.',            price: '4,20 € / porción', link: { label: 'Pedir', href: '#contact' } },
      { category: 'Chocolate', title: 'Brownie',            description: 'Denso, con chocolate negro y nueces.',                          price: '2,80 €',     link: { label: 'Pedir', href: '#contact' } },
    ],
  },

  gallery: {
    label: 'Galería',
    title: 'Se ve rico, y lo es',
    layout: 'editorial',
    images: [
      { src: px(17057406, 600, 900), alt: 'Surtido de pastelería', caption: 'Surtido',   bg: 'linear-gradient(135deg,#EBDCC4,#D9B98D)' },
      { src: px(18656839, 800, 400), alt: 'Vitrina de pastelería', caption: 'La vitrina', bg: 'linear-gradient(135deg,#EBDCC4,#D9B98D)' },
      { src: px(4981623, 400, 400),  alt: 'Cupcake',               caption: 'Cupcakes',  bg: 'linear-gradient(135deg,#EBDCC4,#D9B98D)' },
      { src: px(33759172, 400, 400), alt: 'Tarta',                 caption: 'Tortas',    bg: 'linear-gradient(135deg,#EBDCC4,#D9B98D)' },
      { src: px(5662362, 400, 400),  alt: 'Rollos de canela',      caption: 'Rollos',    bg: 'linear-gradient(135deg,#EBDCC4,#D9B98D)' },
      { src: px(18784859, 400, 400), alt: 'Postres',               caption: 'Postres',   bg: 'linear-gradient(135deg,#EBDCC4,#D9B98D)' },
    ],
  },

  contact: {
    label: 'Contacto',
    title: '¿Algo dulce para hoy?',
    subtitle: 'Cuéntanos qué te apetece y te lo preparamos. Para encargos grandes, escríbenos con unos días de antelación.',
    phone: '600 000 000',
    email: 'hola@caramela.es',
    address: 'Calle Mayor, 12 · Tu ciudad',
    hours: 'Lu - Sa · 8:00 - 20:00 · Do · 9:00 - 14:00',
    form: {
      title: 'Hacer un pedido',
      button: 'Hacer pedido',
      message: 'Cuéntanos qué te gustaría: productos, cantidad y fecha',
      people: false,
    },
  },

  footer: {
    dark: true,
    columns: [
      {
        brand: true,
        text: 'Pastelería artesanal. Dulces, panes y tortas hechos a mano cada día.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'Nosotros', href: '#about' },
          { label: 'Dulces',   href: '#services' },
          { label: 'Galería',  href: '#gallery' },
          { label: 'Contacto', href: '#contact' },
        ],
      },
      {
        title: 'Contacto',
        info: ['600 000 000', 'Calle Mayor, 12', 'Tu ciudad'],
      },
    ],
    copy: '© 2026 Caramela · Pastelería artesanal',
  },
}
