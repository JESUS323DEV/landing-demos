import { useState, useEffect } from 'react'

export default function useSlideshow(count, ms) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (count < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % count), ms)
    return () => clearInterval(id)
  }, [count, ms])

  return [idx, setIdx]
}
