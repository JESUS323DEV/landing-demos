export default {
  slug: 'inti-street',
  name: 'Inti Street Food',
  tagline: 'Street Food Peruano · Madrid',
  category: 'Street Food',
  theme: {
    colors: {
      bg:      '#FFFFFF',
      surface: '#FFF5F0',
      primary: '#ff7033',
      accent:  '#00B4A6',
      text:    '#1A0A10',
      muted:   '#8A6070',
    },
    fonts: {
      heading: {
        family: '"Righteous", sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
      },
      body: {
        family: '"Nunito", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap',
      },
    },
  },
  sections: ['hero', 'about', 'services', 'menu', 'delivery', 'reviews', 'contact'],
  nav: {
    initials: 'IS',
    subtitle: 'Street Food Peruano',
    transparent: false,
    links: [
      { label: 'Nosotros', href: '#about' },
      { label: 'Platos',   href: '#services' },
      { label: 'Carta',    href: '#menu' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  hero: {
    layout: 'split',
    badge: 'Street Food Peruano en Madrid',
    title: 'Brasa,',
    titleGlow: 'ceviche y chaufa.',
    description: 'Cocina peruana de verdad, en el corazón de Madrid. Pollo marinado 12 horas, ceviche del día y arroz de wok. Sin fusión, sin atajos.',
    cta: { label: 'Ver la carta', href: '#menu' },
    ctaSecondary: { label: 'Ubicación', href: '#contact' },
    stats: [
      { value: '+5 años', label: 'cocinando peruano' },
      { value: '4.9 ★',  label: 'valoración media' },
      { value: '+500',   label: 'reseñas' },
    ],
    images: [
      { emoji: '🍗', label: 'Brasa',   bg: 'linear-gradient(135deg, #C8005A22, #C8005A55)' },
      { emoji: '🍋', label: 'Ceviche', bg: 'linear-gradient(135deg, #00B4A622, #00B4A655)' },
      { emoji: '🍳', label: 'Chaufa',  bg: 'linear-gradient(135deg, #FFB80022, #FFB80055)' },
      { emoji: '🌶',  label: 'Ají',    bg: 'linear-gradient(135deg, #C8005A22, #C8005A44)' },
      { emoji: '🇵🇪', label: 'Perú',  bg: 'linear-gradient(135deg, #00B4A622, #00B4A633)' },
    ],
  },
  about: {
    label: 'Quiénes somos',
    title: 'Nació en Lima,',
    titleHighlight: 'aterrizó en Madrid.',
    paragraphs: [
      'Todo empezó en el barrio de Barranco, Lima, donde el chef Carlos Huayta aprendió que la comida peruana no entiende de categorías. La brasa, el limón y el ají lo explican todo.',
      'En 2019 abrimos en Vallecas con una misión simple: que cada plato supiera exactamente como debe saber. Sin fusión, sin atajos. Cocina peruana de verdad, en el corazón de Madrid.',
    ],
    features: [
      { icon: '🍗', title: 'Pollo a la brasa diario',    description: 'Marinado desde la noche anterior con adobo peruano. Asado lentamente en brasa de carbón.', dark: false },
      { icon: '🍋', title: 'Ceviche fresco cada día',    description: 'El pescado llega por la mañana. El limón lo termina en el momento. Así de sencillo.', dark: false },
      { icon: '🍳', title: 'Chaufa de wok, no de micro', description: 'Arroz salteado a fuego alto, con el punto que solo da un wok bien caliente.', dark: false },
      { icon: '🌶',  title: 'Salsas de la casa',         description: 'Ají amarillo, huancaína, criolla. Cada salsa hecha aquí. Sin bote, sin trampa.', dark: false },
    ],
    badge: { value: 'Lima', label: 'en cada receta' },
    imagePlaceholder: 'Foto del local o del equipo',
  },
  services: {
    label: 'Lo más pedido',
    title: 'Los tres pilares',
    layout: 'cards',
    cta: { label: 'Ver carta completa', href: '#menu' },
    items: [
      {
        title: 'Pollo a la Brasa',
        badge: 'Brasa',
        description: 'Marinado 12 horas con adobo peruano de ajo, comino y ají panca. Asado lento sobre carbón. Crujiente por fuera, jugoso por dentro.',
        price: 'Desde 4,50 €',
      },
      {
        title: 'Ceviche Clásico',
        badge: 'Firma',
        featured: true,
        featuredBadge: 'El más pedido',
        description: 'Corvina fresca del día, limón, ají limo, cebolla morada y cancha serrana. Leche de tigre hecha al momento.',
        price: 'Desde 11,90 €',
      },
      {
        title: 'Arroz Chaufa',
        badge: 'Wok',
        description: 'La fusión chino-peruana en su forma más pura. Arroz salteado en wok a fuego vivo con pollo, huevo, cebolleta y soja.',
        price: 'Desde 9,90 €',
      },
    ],
  },
  menu: {
    label: 'Todo lo que servimos',
    title: 'Nuestra carta',
    subtitle: 'Precios orientativos. Consulta combos y disponibilidad en el local.',
    tabs: [
      {
        label: 'Brasa',
        layout: 'cards',
        items: [
          { name: 'Pollo entero a la brasa', price: '10,90€', description: 'Marinado con adobo peruano 12 horas. Asado a la brasa. El clásico que nunca falla.' },
          { name: 'Medio pollo',             price: '6,50€',  description: 'Con papas fritas y ensalada criolla.', badge: 'Bestseller' },
          { name: 'Cuarto de pollo',         price: '4,50€',  description: 'Muslo o pechuga, a elegir. Con guarnición y ají de la casa.' },
          { name: 'Brochetas de pollo',      price: '7,90€',  description: 'Pechuga marinada con cebolla morada y pimiento. Directo de la brasa.' },
          { name: 'Combo Familiar',          price: '22,90€', description: 'Pollo entero + papas grandes + 2 salsas + 4 bebidas. Para 3-4 personas.', badge: 'Familia' },
        ],
      },
      {
        label: 'Ceviche',
        layout: 'cards',
        items: [
          { name: 'Ceviche clásico',  price: '11,90€', description: 'Corvina fresca, limón, ají limo, cebolla morada y cancha serrana.', badge: 'Firma' },
          { name: 'Ceviche mixto',    price: '13,90€', description: 'Pescado, langostinos y calamar. Leche de tigre con ají amarillo.' },
          { name: 'Causa limeña',     price: '8,90€',  description: 'Puré de papa amarilla con atún, aguacate y mayonesa de ají. Fría y cremosa.' },
          { name: 'Tiradito peruano', price: '12,50€', description: 'Rodajas de pescado en salsa amarilla. Más suave que el ceviche, igual de bueno.' },
        ],
      },
      {
        label: 'Arroces',
        layout: 'cards',
        items: [
          { name: 'Arroz chaufa de pollo',   price: '9,90€',  description: 'El clásico de la fusión chino-peruana. Arroz de wok con pollo, huevo y cebolleta.', badge: 'Clásico' },
          { name: 'Chaufa de mariscos',      price: '13,90€', description: 'Arroz de wok con langostinos, calamar y mejillones.' },
          { name: 'Arroz con leche peruano', price: '4,50€',  description: 'Postre casero. Cremoso, con canela y coco rallado.' },
        ],
      },
      {
        label: 'Extras y Bebidas',
        layout: 'simple',
        items: [
          { name: 'Papas fritas',     price: '3,00€', description: 'Con ají amarillo o huancaína de la casa.' },
          { name: 'Ensalada criolla', price: '3,50€', description: 'Cebolla morada, tomate, cilantro y limón.' },
          { name: 'Cancha serrana',   price: '2,00€', description: 'Maíz tostado peruano. Para picar.' },
          { name: 'Chicha morada',    price: '3,50€', description: 'Bebida típica de maíz morado. Fría y sin alcohol.' },
          { name: 'Inca Kola',        price: '2,50€', description: 'La bebida nacional del Perú. Dulce y única.' },
          { name: 'Cerveza Cusqueña', price: '3,00€', description: 'La cerveza peruana. Bien fría.' },
        ],
      },
    ],
  },
  delivery: {
    label: 'Ven a vernos',
    title: 'Sin reserva, sin esperas.',
    subtitle: 'Tenemos sitio para ti. Ven cuando quieras, como quieras y con quién quieras.',
    channels: [
      { name: 'Parking gratuito',  logo: '🅿',  color: '#C8005A', description: 'Aparca sin coste justo al lado. Sin vueltas, sin preocupaciones.' },
      { name: 'Zona infantil',     logo: '🎠',  color: '#00B4A6', description: 'Los niños juegan, vosotros coméis tranquilos. Así de bien.' },
      { name: 'Mesas sin reserva', logo: '🪑',  color: '#F5A800', description: 'Gran disponibilidad todos los días. Pásate sin avisar.' },
    ],
    info: [
      { icon: '📍', label: 'Dónde estamos', value: 'Vallecas, Madrid' },
      { icon: '🕐', label: 'Horario',        value: 'Todos los días 13:00-23:00' },
      { icon: '📞', label: 'Teléfono',       value: '612 33 47 89' },
    ],
  },
  reviews: {
    label: 'Lo que dicen',
    rating: '4.9',
    subtitle: 'Basado en +500 reseñas de Google y TripAdvisor',
    items: [
      { quote: 'El mejor ceviche que he comido fuera de Lima. La leche de tigre tiene un punto que no había encontrado en ningún sitio de Madrid. Ya es mi lugar de cabecera.', author: 'Ana R.', location: 'Vallecas, Madrid' },
      { quote: 'El pollo a la brasa es una locura. Jugoso, con ese adobo tan característico. Pedimos el combo familiar y repetí al día siguiente. Eso lo dice todo.', author: 'David L.', location: 'Getafe, Madrid' },
      { quote: 'El chaufa de mariscos me recordó al que comía en Lima. No esperaba encontrar esto en Madrid. El sitio es acogedor y el trato es genial. Volveremos seguro.', author: 'Sofía M.', location: 'Leganés, Madrid' },
    ],
  },
  contact: {
    label: 'Dónde estamos',
    title: 'Ven a comer Perú.',
    subtitle: 'Amplia disponibilidad de mesas. Sin reserva previa. Parking gratuito y zona infantil.',
    phone: '+34 612 33 47 89',
    email: 'hola@intistreetfood.es',
    address: 'Calle del Pacífico, 27 · Vallecas, Madrid',
    hours: 'Todos los días: 13:00 - 23:00',
    map: {
      embedUrl: 'https://maps.google.com/maps?q=Vallecas,Madrid&output=embed',
    },
  },
  footer: {
    dark: false,
    copy: 'Inti Street Food © 2024. Vallecas, Madrid.',
  },
}
