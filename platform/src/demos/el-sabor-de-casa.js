export default {
  slug: 'el-pollastre-d-horta',
  name: "El Pollastre d'Horta",
  tagline: 'Pollastres a l\'Ast · Barcelona',
  category: 'Menjars preparats',
  tier: 'base',
  theme: {
    colors: {
      bg:      '#FBF6E7',
      surface: '#F1E6C8',
      primary: '#1E4B32',
      accent:  '#B8862E',
      text:    '#26231A',
      muted:   '#6E6754',
    },
    fonts: {
      heading: {
        family: '"Fraunces", Georgia, serif',
        google: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&display=swap',
      },
      body: {
        family: '"Nunito", system-ui, sans-serif',
        google: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap',
      },
    },
  },
  social: [],
  sections: ['hero', 'about', 'menu', 'order', 'contact'],
  nav: {
    initials: 'EPH',
    subtitle: 'Pollastres a l\'Ast',
    transparent: false,
    cta: { label: 'Fes la comanda', href: '#order' },
    links: [
      { label: 'Qui som',  href: '#about' },
      { label: 'Carta',    href: '#menu' },
      { label: 'Comanda',  href: '#order' },
      { label: 'Contacte', href: '#contact' },
    ],
  },
  hero: {
    layout: 'showcase',
    badge: 'A l\'ast, com sempre',
    titleAccent: 'El pollastre',
    title: 'que fa ',
    titleHighlight: 'olor',
    titleSuffix: ' a casa.',
    description: 'Pollastre a l\'ast amanit amb romaní, cruixent per fora i sucós per dins. Cuina casolana de tota la vida, al barri d\'Horta-Guinardó.',
    cta: { label: 'Fes la comanda', href: '#order' },
    ctaSecondary: { label: 'Veure la carta', href: '#menu' },
    images: [
      { src: 'https://images.unsplash.com/photo-1712579733874-c3a79f0f9d12?w=900&h=700&fit=crop&q=80', label: 'Pollastre a l\'ast' },
      { src: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=900&h=700&fit=crop&q=80', label: 'A la brasa' },
      { src: 'https://images.unsplash.com/photo-1727280376746-b89107a5b0df?w=900&h=700&fit=crop&q=80', label: 'Cruixent' },
    ],
  },
  about: {
    label: 'La nostra història',
    title: 'Cuina casolana',
    titleHighlight: 'al cor d\'Horta-Guinardó',
    paragraphs: [
      'El Pollastre d\'Horta porta anys al barri oferint menjar per emportar de tota la vida. El pollastre a l\'ast amanit amb romaní és la nostra carta de presentació, però la cuina casolana de cada dia és el que ens fa tornar-hi.',
      'Cap cap de setmana falta la cua per recollir el pollastre. Preparem cada plat com a casa, sense presses, amb els ingredients de sempre.',
    ],
    features: [
      { icon: 'drumstick', title: 'Pollastre a l\'ast amb romaní', description: 'Cruixent per fora, sucós per dins. El més demanat del local.', dark: false },
      { icon: 'rabbit', title: 'Conill a l\'ast sota comanda', description: 'Si el vols, només cal demanar-lo amb antelació.', dark: true },
      { icon: 'soup', title: 'Plats casolans cada dia', description: 'Croquetes, canelons, mandonguilles, cua de bou i molt més.', dark: false },
      { icon: 'euro', title: 'Menú entre setmana', description: 'Dos plats a un preu molt ajustat, de dilluns a divendres.', dark: false },
    ],
    imagePlaceholder: 'Façana del local',
  },
  menu: {
    label: 'La nostra carta',
    title: 'Què cuinem',
    subtitle: 'Preus orientatius. Confirma disponibilitat trucant a la botiga.',
    tabs: [
      {
        label: 'Pollastre i conill',
        layout: 'cards',
        items: [
          { name: 'Pollastre a l\'ast (sencer)', price: 'Consulta preu', description: 'Amanit amb romaní, cruixent per fora i sucós per dins. El nostre clàssic de cap de setmana.' },
          { name: 'Mig pollastre',               price: 'Consulta preu', description: 'El mateix sabor, la meitat de quantitat.' },
          { name: 'Conill a l\'ast',             price: 'Consulta preu', description: 'Sota comanda prèvia. Demana\'l amb antelació.', badge: 'Sota comanda' },
        ],
      },
      {
        label: 'Plats casolans',
        layout: 'rows',
        items: [
          { name: 'Patates braves',        description: 'Amb salsa brava casolana.' },
          { name: 'Patates al caliu',      description: 'Al forn, a la manera de sempre.' },
          { name: 'Croquetes de pollastre', description: 'Fetes a casa, cremoses per dins.' },
          { name: 'Croquetes de bacallà',  description: 'Recepta tradicional.' },
          { name: 'Amanida russa',         description: 'La clàssica de tota la vida.' },
          { name: 'Mandonguilles',         description: 'Amb la seva salsa casolana.' },
          { name: 'Canelons',              description: 'Farcits com els de la iaia.' },
          { name: 'Xampinyons',            description: 'Saltats a la planxa.' },
          { name: 'Cua de bou',            description: 'Cuita a foc lent, ben melosa.' },
          { name: 'Seitons',               description: 'En vinagre, a punt de servir.' },
        ],
      },
      {
        label: 'Menú entre setmana',
        layout: 'simple',
        items: [
          { name: 'Menú del dia (2 plats)', price: 'Des de 6,95 €', description: 'De dilluns a divendres. Consulta els plats del dia a la botiga.' },
        ],
      },
    ],
  },
  order: {
    label: 'Comanda',
    title: 'Demana per WhatsApp',
    subtitle: 'Omple les dades i t\'obrim WhatsApp amb la comanda ja escrita, llesta per enviar.',
    whatsapp: '34695078648',
    dishes: ['Pollastre sencer', 'Mig pollastre', 'Menú del dia', 'Conill a l\'ast'],
  },
  contact: {
    label: 'On som',
    title: 'Vine a buscar el teu pollastre',
    subtitle: null,
    phone: '93 435 58 16',
    address: 'Av. Mare de Déu de Montserrat, 148 · Horta-Guinardó, Barcelona',
    map: {
      embedUrl: 'https://www.google.com/maps?q=Av.+Mare+de+D%C3%A9u+de+Montserrat+148,+Barcelona&output=embed',
    },
  },
  footer: {
    dark: true,
    copy: 'El Pollastre d\'Horta © 2026. Horta-Guinardó, Barcelona.',
  },
}
