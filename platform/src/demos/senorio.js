export default {
  slug: 'senorio',
  name: 'Señorío',
  tagline: 'Cocina Peruana · Barcelona',
  category: 'Restaurante',
  theme: {
    colors: {
      bg:      '#08060A',
      surface: '#120D18',
      primary: '#B8261A',
      accent:  '#C9870A',
      text:    '#F0EBE3',
      muted:   '#7A6C60',
    },
    fonts: {
      heading: {
        family: '"Anton", Impact, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
      },
      body: {
        family: '"Lato", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      },
    },
  },
  social: [
    { platform: 'instagram', href: 'https://instagram.com/senoriobcn' },
    { platform: 'tiktok',    href: 'https://tiktok.com/@senoriobcn' },
    { platform: 'whatsapp',  href: 'https://wa.me/34625348917' },
  ],
  sections: ['hero', 'about', 'services', 'menu', 'gallery', 'reviews', 'contact'],
  nav: {
    initials: 'SÑ',
    subtitle: 'Cocina Peruana',
    transparent: true,
    cta: { label: 'Reservar', href: '#contact' },
    links: [
      { label: 'Nosotros', href: '#about' },
      { label: 'Carta',    href: '#menu' },
      { label: 'Galería',  href: '#gallery' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  hero: {
    layout: 'bold',
    title: 'Sabor',
    titleHighlight: 'que no se olvida.',
    description: 'Ceviche, lomo saltado y los platos más auténticos de Lima y Cusco. Cocina peruana de verdad en el corazón de El Born.',
    cta:          { label: 'Reservar por WhatsApp', href: 'https://wa.me/34625348917' },
    ctaSecondary: { label: 'Ver la carta', href: '#menu' },
    images: [
      { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&h=800&fit=crop&q=80', label: 'Ceviche clásico' },
      { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=800&fit=crop&q=80', label: 'Plato principal' },
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=800&fit=crop&q=80', label: 'Interior' },
    ],
    features: [
      { icon: '🐟', title: 'Pescado fresco del día',    description: 'Del mercado a tu plato. Sin congelados, sin atajos.' },
      { icon: '🌶️', title: 'Ají traído de Perú',        description: 'Amarillo, panca y rocoto originales. El sabor que no se replica.' },
      { icon: '🤝', title: 'Tres generaciones de receta', description: 'La cocina de la abuela, sin trampa ni cartón.' },
    ],
    quickInfo: [
      { icon: '📍', label: 'Dirección', value: 'Carrer de la Ribera, 19 · El Born, Barcelona' },
      { icon: '📞', label: 'Teléfono',  value: '+34 625 348 917' },
      { icon: '🕐', label: 'Horario',   value: 'Mar - Dom: 13:00-16:00 / 20:00-23:30 · Lu: cerrado' },
    ],
  },

  about: {
    label: 'Nuestra historia',
    title: 'De Lima a Barcelona,',
    titleHighlight: 'con las recetas de siempre.',
    paragraphs: [
      'Llegamos al Born en 2019 con una maleta llena de recetas y la certeza de que Barcelona merecía comer ceviche de verdad. Recetas heredadas de tres generaciones de cocineras limeñas, sin adaptar, sin suavizar.',
      'Nuestro ceviche lleva el ají amarillo que traemos directamente de Perú. El lomo saltado se hace con solomillo fresco y salsa de soya oscura, igual que en casa. No hay atajos en nuestra cocina.',
    ],
    features: [
      { icon: '🐟', title: 'Pescado fresco cada mañana', description: 'Compramos en la lonja. Si no hay buen pescado, no hay ceviche ese día.', dark: false },
      { icon: '🌶️', title: 'Ají importado de Perú',      description: 'Amarillo, panca, rocoto. La trilogía que define la cocina peruana.', dark: true  },
      { icon: '🍋', title: 'Limón de Murcia, no de bote', description: 'El leche de tigre se hace al momento, con limón recién exprimido.',    dark: false },
      { icon: '🪴', title: 'Sin colorantes ni espesantes', description: 'La cremosidad del ají de gallina viene del pan y la leche. Solo eso.', dark: false },
    ],
    badge: { value: '20+', label: 'platos de cocina peruana auténtica' },
    imagePlaceholder: 'Foto del local / equipo',
  },

  services: {
    label: 'Lo que más piden',
    title: 'Nuestros platos estrella',
    subtitle: 'Tres recetas que resumen quiénes somos y de dónde venimos.',
    layout: 'cards',
    ctaCard: {
      label: 'Personalizado',
      title: '¿Primera vez en nuestra cocina?',
      description: 'Te recomendamos el menú degustación. Cuatro platos para entender Perú en una mesa.',
      button: { label: 'Consultar menú degustación', href: '#contact' },
    },
    items: [
      {
        category: 'Cevichería',
        title: 'Ceviche Clásico',
        description: 'Corvina del día macerada en leche de tigre, cebolla morada, ají limo y maíz tostado. El plato que define nuestro criterio.',
        link: { label: 'Preguntar disponibilidad', href: '#contact' },
      },
      {
        category: 'De la plancha',
        title: 'Lomo Saltado',
        description: 'Solomillo de ternera salteado con tomate, cebolla, soya oscura y patatas fritas. Directo del wok al plato.',
        link: { label: 'Reservar mesa', href: '#contact' },
      },
      {
        category: 'Clásico limeño',
        title: 'Ají de Gallina',
        description: 'Pollo deshilachado en salsa cremosa de ají amarillo, pan y nueces. Sobre arroz blanco y papa amarilla.',
        link: { label: 'Reservar mesa', href: '#contact' },
      },
    ],
  },

  menu: {
    label: 'Todo lo que servimos',
    title: 'Nuestra carta',
    subtitle: 'Precios orientativos. La carta cambia según el pescado del día. Consúltanos.',
    tabs: [
      {
        label: 'Ceviches',
        layout: 'rows',
        items: [
          { name: 'Ceviche clásico',        price: '14,90 €', description: 'Corvina, leche de tigre, cebolla morada, ají limo y choclo.' },
          { name: 'Tiradito de atún',        price: '16,50 €', description: 'Láminas de atún con salsa de ají amarillo y aceite de sésamo.' },
          { name: 'Ceviche mixto',           price: '17,90 €', description: 'Pescado blanco, gambas y calamar con leche de tigre picante.' },
          { name: 'Causa limeña',            price: '10,90 €', description: 'Terrina de patata amarilla con relleno de pollo y aguacate.' },
        ],
      },
      {
        label: 'De la plancha',
        layout: 'rows',
        items: [
          { name: 'Lomo saltado',           price: '18,90 €', description: 'Solomillo salteado con tomate, cebolla, soya y patatas.' },
          { name: 'Arroz con mariscos',      price: '19,90 €', description: 'Arroz meloso con gambas, mejillones y calamares al pisco.' },
          { name: 'Pollo a la brasa',        price: '14,90 €', description: 'Con adobo de especias andinas, papas y ensalada criolla.' },
          { name: 'Anticuchos de ternera',   price: '12,90 €', description: 'Brochetas de corazón de ternera marinado en ají panca. Ración de 4.' },
        ],
      },
      {
        label: 'Clásicos',
        layout: 'rows',
        items: [
          { name: 'Ají de gallina',          price: '15,90 €', description: 'Pollo en salsa de ají amarillo, pan y nueces. Con arroz y papa.' },
          { name: 'Sopa a la minuta',        price: '11,90 €', description: 'Caldo de res con fideos, carne picada y hierbabuena fresca.' },
          { name: 'Papa a la huancaína',     price: '8,90 €',  description: 'Entrada fría. Papa cocida con salsa de ají amarillo y queso.' },
          { name: 'Tacu tacu con lomo',      price: '17,90 €', description: 'Tortita de arroz y frijoles con solomillo salteado encima.' },
        ],
      },
      {
        label: 'Postres y bebidas',
        layout: 'rows',
        items: [
          { name: 'Suspiro a la limeña',     price: '6,50 €',  description: 'Crema de yema con merengue de oporto. Postre nacional peruano.' },
          { name: 'Mazamorra morada',        price: '5,90 €',  description: 'Pudín de maíz morado con frutas secas y canela.' },
          { name: 'Pisco Sour',              price: '8,90 €',  description: 'Pisco quebranta, limón, clara de huevo y amargo de angostura.' },
          { name: 'Chicha morada',           price: '3,50 €',  description: 'Bebida tradicional de maíz morado con piña y canela. Sin alcohol.' },
        ],
      },
    ],
  },

  gallery: {
    label: 'Galería',
    title: 'La cocina entra por los ojos',
    layout: 'editorial',
    images: [
      { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=900&fit=crop&q=80', alt: 'Ceviche clásico',  caption: 'Ceviche clásico', bg: 'linear-gradient(135deg,#1A0D0A,#2C1008)' },
      { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop&q=80', alt: 'Plato principal', caption: 'De la plancha',   bg: 'linear-gradient(135deg,#120E06,#1E1408)' },
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop&q=80', alt: 'Interior',        caption: 'El Born',         bg: 'linear-gradient(135deg,#0E0A14,#1A1220)' },
      { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop&q=80',    alt: 'Ensalada',        caption: 'Ingredientes',    bg: 'linear-gradient(135deg,#0A100A,#0E1A0E)' },
      { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&q=80', alt: 'Plato',           caption: 'Presentación',    bg: 'linear-gradient(135deg,#120810,#1C0A18)' },
      { src: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=400&fit=crop&q=80', alt: 'Mariscos',        caption: 'Del mar',         bg: 'linear-gradient(135deg,#080C14,#101828)' },
    ],
  },

  reviews: {
    label: 'Lo que dicen',
    rating: '4.7',
    subtitle: 'Basado en +180 reseñas en Google y TripAdvisor',
    items: [
      {
        quote: 'El ceviche es mejor que en muchos sitios de Lima. El ají limo tiene la acidez exacta y la leche de tigre pide ser bebida sola. Volvemos seguro.',
        author: 'Andrés V.',
        location: 'Barcelona',
      },
      {
        quote: 'El lomo saltado tenía el punto de soya perfecto y la carne estaba increíblemente tierna. El ambiente oscuro y íntimo le da mucho carácter al local.',
        author: 'Marta R.',
        location: 'El Born, Barcelona',
      },
      {
        quote: 'El pisco sour estaba perfectamente equilibrado, y el ají de gallina era cremoso y profundo. Una cocina muy honesta, sin trucos.',
        author: 'Diego C.',
        location: 'Sant Pere, Barcelona',
      },
    ],
  },

  contact: {
    label: 'Encuéntranos',
    title: 'Reserva tu sitio en El Born.',
    subtitle: 'Te esperamos. Escríbenos por WhatsApp o pásate sin reserva de lunes a jueves al mediodía.',
    phone:   '+34 625 348 917',
    email:   'hola@senoriobcn.com',
    address: 'Carrer de la Ribera, 19 · El Born, Barcelona',
    hours:   'Mar - Dom: 13:00-16:00 / 20:00-23:30 · Lu: cerrado',
  },

  footer: {
    dark: true,
    columns: [
      {
        brand: true,
        text: 'Cocina peruana auténtica en el corazón de El Born. Recetas de Lima y Cusco desde 2019.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'Nosotros', href: '#about' },
          { label: 'Carta',    href: '#menu' },
          { label: 'Galería',  href: '#gallery' },
          { label: 'Contacto', href: '#contact' },
        ],
      },
      {
        title: 'Dónde estamos',
        info: [
          'Carrer de la Ribera, 19',
          'El Born · 08003 Barcelona',
          'Mar-Dom: 13:00-16:00 / 20:00-23:30',
          'Lunes cerrado',
        ],
      },
    ],
    copy: '© 2026 Señorío · Cocina Peruana · Barcelona.',
  },
}
