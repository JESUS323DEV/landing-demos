export default {
  slug: 'la-parrilla-paisa',
  name: 'La Parrilla Paisa',
  tagline: 'Cocina Colombiana · Barcelona',
  category: 'Restaurante',
  theme: {
    colors: {
      bg: '#FFF8EF',
      surface: '#FAF0E0',
      primary: '#C4872A',
      accent: '#2C1810',
      text: '#2C1810',
      muted: '#5C3520',
    },
    fonts: {
      heading: {
        family: 'Georgia, "Playfair Display", serif',
        google: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap',
      },
      body: {
        family: '"Lato", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      },
    },
  },
  sections: ['hero', 'about', 'services', 'menu', 'delivery', 'contact'],
  nav: {
    initials: 'LPP',
    subtitle: 'Cocina Colombiana',
    transparent: true,
    cta: { label: 'Reservar', href: '#contact' },
    links: [
      { label: 'Nosotros', href: '#about' },
      { label: 'Carta',    href: '#menu' },
      { label: 'Pedidos',  href: '#delivery' },
      { label: 'Contacto', href: '#contact' },
    ],
  },
  hero: {
    layout: 'centered',
    dark: true,
    badge: 'Cocina Paisa en Barcelona',
    title: 'El sabor de Colombia',
    titleHighlight: 'en tu mesa',
    description: 'Asados a la brasa, bandeja paisa y los platos más auténticos de Antioquia. En el corazón de Poblenou, Barcelona.',
    cta: { label: 'Pedir ahora', href: '#delivery' },
    ctaSecondary: { label: 'Ver menú', href: '#menu' },
  },

  about: {
    label: 'Nuestra historia',
    title: 'Del corazón de',
    titleHighlight: 'Antioquia a Barcelona',
    paragraphs: [
      'La Parrilla Paisa nació de una promesa: llevar la cocina de la abuela a cada plato. Vinimos de Medellín con recetas heredadas de generación en generación y un fogón que nunca se apaga.',
      'Cada bandeja, cada asado y cada arepa que servimos tiene el alma de la tierra paisa. Nada de atajos. Solo ingredientes frescos, brasas vivas y mucho sabor.',
    ],
    stats: [
      { value: '+10', label: 'Años de sabor en Barcelona' },
      { value: '100%', label: 'Recetas auténticas paisas' },
      { value: '4.8', label: 'Valoración en Google' },
    ],
    badge: { value: '15+', label: 'Platos típicos' },
    imagePlaceholder: 'Interior del restaurante',
  },

  services: {
    label: 'Lo que más nos piden',
    title: 'Nuestros platos estrella',
    layout: 'cards',
    cta: { label: 'Ver carta completa', href: '#menu' },
    items: [
      {
        title: 'Bandeja Paisa',
        badge: 'Clásico',
        description: 'Frijoles, chicharrón, carne molida, chorizo, arepa, huevo, arroz y aguacate. El plato completo de la tradición antioqueña.',
        price: 'Desde 13,90 €',
      },
      {
        title: 'Asado a la Brasa',
        featuredBadge: 'El más pedido',
        featured: true,
        badge: 'Parrilla',
        description: 'Carne seleccionada cocinada a fuego vivo. Con papa criolla, yuca y ají casero. El sabor que te lleva directo al rancho.',
        price: 'Desde 16,50 €',
      },
      {
        title: 'Sancocho Paisa',
        badge: 'Tradicional',
        description: 'El caldo que cura todo. Receta de la abuela con carne, plátano, yuca, mazorca y papa. Un abrazo en cada cucharada.',
        price: 'Desde 11,90 €',
      },
    ],
  },
  menu: {
    label: 'Todo lo que servimos',
    title: 'Nuestra carta',
    tabs: [
      {
        label: 'Entrantes',
        layout: 'rows',
        items: [
          { name: 'Arepas con hogao',       price: '4,50 €', description: 'Arepas de maíz caseras con salsa de tomate y cebolla caramelizada.' },
          { name: 'Chicharrón',             price: '5,90 €', description: 'Cerdo frito crujiente al estilo paisa, con limón y ají casero.' },
          { name: 'Patacones con guacamole', price: '5,50 €', description: 'Plátano verde aplastado y frito dos veces, con guacamole casero.' },
          { name: 'Empanadas paisas',       price: '6,50 €', description: 'Masa de maíz rellena de carne y papa. Ración de 3 unidades.' },
        ],
      },
      {
        label: 'Asados y Parrilladas',
        layout: 'rows',
        items: [
          { name: 'Asado a la brasa', price: '16,50 €', description: 'Carne seleccionada a fuego vivo. Con papa criolla, yuca y ají casero.' },
          { name: 'Pechuga parrilla', price: '13,90 €', description: 'Pollo marinado con especias paisas, arroz blanco y ensalada fresca.' },
          { name: 'Chuleta de cerdo', price: '15,50 €', description: 'Chuleta jugosa a las brasas con papas y plátano maduro frito.' },
          { name: 'Punta de anca',    price: '18,90 €', description: 'Corte de res madurado, jugoso y tierno. Con arroz y yuca frita.' },
        ],
      },
      {
        label: 'Lo más típico',
        layout: 'rows',
        items: [
          { name: 'Bandeja Paisa',     price: '13,90 €', description: 'Frijoles, chicharrón, carne molida, chorizo, arepa, huevo, arroz y aguacate.' },
          { name: 'Sancocho Paisa',    price: '11,90 €', description: 'Caldo con carne, plátano, yuca, mazorca y papa. Receta de la abuela.' },
          { name: 'Frijoles con garra', price: '10,90 €', description: 'Frijoles rojos cocinados a fuego lento con carne de cerdo y especias.' },
          { name: 'Mondongo',          price: '11,50 €', description: 'Sopa tradicional de callos con verduras y especias paisas.' },
        ],
      },
      {
        label: 'Bebidas',
        layout: 'rows',
        items: [
          { name: 'Limonada de coco', price: '4,50 €', description: 'Cremosa y refrescante, con leche de coco y limón recién exprimido.' },
          { name: 'Jugo natural',     price: '3,90 €', description: 'Mango, maracuyá, guanábana o lulo. Fruta natural, sin azúcar añadida.' },
          { name: 'Agua de panela',   price: '2,50 €', description: 'Bebida tradicional colombiana. Disponible fría o caliente.' },
          { name: 'Cerveza artesanal', price: '3,90 €', description: 'Selección de cervezas locales y de importación.' },
        ],
      },
    ],
  },

  delivery: {
    dark: true,
    label: 'Sin salir de casa',
    title: 'Llevamos el rancho a tu puerta',
    subtitle: 'Pide por tus plataformas favoritas y recibe tu comida paisa en menos de 45 minutos.',
    channels: [
      { name: 'Uber Eats', logo: 'UE', color: '#000000', description: 'Disponible en la app.', cta: 'Pedir ahora' },
      { name: 'Just Eat',  logo: 'JE', color: '#f96c0e', description: 'Busca La Parrilla Paisa.', cta: 'Pedir ahora' },
      { name: 'Glovo',     logo: 'G',  color: '#FFC244', description: 'Entrega en 30-45 min.', cta: 'Pedir ahora' },
    ],
    info: [
      { icon: '⚡', label: 'Entrega rápida', value: 'En 30 a 45 min' },
      { icon: '🛒', label: 'Pedido mínimo',  value: 'Desde 15 €' },
      { icon: '🕐', label: 'Horario reparto', value: '12:00 a 23:00' },
    ],
  },
  contact: {
    label: 'Encuéntranos',
    title: 'Ven a conocer el rancho',
    subtitle: 'Te esperamos con la mesa puesta. Reserva tu sitio o pásate sin más.',
    phone: '+34 634 210 987',
    email: 'hola@laparrillapaisa.com',
    address: 'Carrer del Taulat, 58 · Poblenou, Barcelona',
    hours: 'Lu - Vi: 12:00-16:00 / 20:00-23:30 · Sa - Do: 12:00-00:00',
  },
  footer: {
    dark: true,
    columns: [
      {
        brand: true,
        text: 'Sabor paisa en el corazón de Barcelona. Desde Medellín hasta Poblenou, con la receta de la abuela.',
      },
      {
        title: 'Navegación',
        links: [
          { label: 'Nosotros', href: '#about' },
          { label: 'Menú',     href: '#menu' },
          { label: 'Pedidos',  href: '#delivery' },
          { label: 'Contacto', href: '#contact' },
        ],
      },
      {
        title: 'Dónde estamos',
        info: ['Carrer del Taulat, 58', 'Poblenou, 08005 Barcelona', 'L-V: 12:00-16:00 / 20:00-23:30', 'S-D: 12:00-00:00'],
      },
    ],
    copy: '© 2026 La Parrilla Paisa. Todos los derechos reservados.',
  },
}
