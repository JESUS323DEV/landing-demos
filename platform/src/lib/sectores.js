/* Negocios que el visitante puede escribir en el buscador del hero y la demo que se le enseña.
   keywords: [palabra que se compara, cómo se lee en el titular después de "Tu"] */
export const SECTORS = [
  {
    slug: 'aura-estetica', chip: 'Estética', query: 'estética',
    keywords: [['estética', 'centro de estética'], ['belleza', 'negocio de belleza'], ['spa', 'spa'], ['masajes', 'centro de masajes'], ['masaje', 'centro de masajes']],
  },
  {
    slug: 'navaja-y-tijera', chip: 'Barbería', query: 'barbería',
    keywords: [['barbería', 'barbería'], ['barbero', 'barbería'], ['peluquería', 'peluquería'], ['peluquero', 'peluquería']],
  },
  {
    slug: 'almendra', chip: 'Restaurante', query: 'restaurante',
    keywords: [['restaurante', 'restaurante'], ['cafetería', 'cafetería'], ['bar', 'bar'], ['pizzería', 'pizzería'], ['tapas', 'bar de tapas'], ['marisquería', 'marisquería'], ['taberna', 'taberna'], ['comida', 'negocio de comida'], ['cocina', 'restaurante']],
  },
  {
    slug: 'senorio', chip: 'Peruano', query: 'peruano',
    keywords: [['peruano', 'restaurante peruano'], ['peruana', 'restaurante peruano'], ['cevichería', 'cevichería'], ['ceviche', 'cevichería']],
  },
  {
    slug: 'brasa-viva', chip: 'Pollería', query: 'pollería',
    keywords: [['pollería', 'pollería'], ['pollo', 'pollería'], ['asador', 'asador'], ['brasa', 'asador']],
  },
  {
    slug: 'caramela', chip: 'Pastelería', query: 'pastelería',
    keywords: [['pastelería', 'pastelería'], ['repostería', 'repostería'], ['panadería', 'panadería'], ['dulces', 'tienda de dulces'], ['tartas', 'pastelería']],
  },
  {
    slug: 'brote', chip: 'Psicólogo', query: 'psicólogo',
    keywords: [['psicólogo', 'psicólogo'], ['psicóloga', 'psicóloga'], ['psicología', 'centro de psicología'], ['terapia', 'centro de terapia'], ['logopeda', 'logopeda'], ['infantil', 'centro infantil']],
  },
  {
    slug: 'anima-tattoo', chip: 'Tatuajes', query: 'tatuajes',
    keywords: [['tatuajes', 'estudio de tatuajes'], ['tatuador', 'estudio de tatuajes'], ['tattoo', 'estudio de tatuajes'], ['piercing', 'estudio de piercing']],
  },
  {
    slug: 'laca', chip: 'Uñas', query: 'uñas',
    keywords: [['uñas', 'centro de uñas'], ['manicura', 'centro de uñas'], ['nail', 'centro de uñas']],
  },
  {
    slug: 'liana-bar', chip: 'Coctelería', query: 'coctelería',
    keywords: [['coctelería', 'coctelería'], ['cócteles', 'coctelería'], ['copas', 'bar de copas'], ['pub', 'pub']],
  },
  {
    slug: 'mirada', chip: 'Redes sociales', query: 'redes sociales',
    keywords: [['redes', 'servicio de redes sociales'], ['social media', 'servicio de social media'], ['community manager', 'servicio de community manager']],
  },
]

const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim()

/* Busca el sector del texto escrito: primero palabras exactas, luego mientras se va escribiendo.
   Devuelve { sector, noun } o null si no hay ejemplo de ese negocio. */
export function matchSector(query) {
  const q = norm(query)
  if (!q) return null
  const tokens = q.split(/\s+/)

  for (const sector of SECTORS) {
    for (const [word, noun] of sector.keywords) {
      const k = norm(word)
      if (q === k || tokens.includes(k) || (k.includes(' ') && q.includes(k))) return { sector, noun }
    }
  }
  for (const sector of SECTORS) {
    for (const [word, noun] of sector.keywords) {
      const k = norm(word)
      if (tokens.some(t => (t.length >= 3 && k.startsWith(t)) || (k.length >= 5 && t.startsWith(k)))) return { sector, noun }
    }
  }
  return null
}
