import { useState, useEffect } from 'react'

export default function useSlideshow(count, ms) {
  const [idx, setIdx] = useState(0)

  // Con ?preview en la dirección (tarjetas de la portada) el slideshow se queda en la primera imagen
  const frozen = new URLSearchParams(window.location.search).has('preview')

  useEffect(() => {
    if (count < 2 || frozen) return
    const id = setInterval(() => setIdx(i => (i + 1) % count), ms)
    return () => clearInterval(id)
  }, [count, ms, frozen])

  return [idx, setIdx]
}
