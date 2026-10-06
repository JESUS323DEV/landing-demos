import { useEffect, useRef, useState } from 'react'

/* Controles que se desvanecen solos para no estorbar a la demo.
   - Se ven al abrir la demo y se esconden `ms` después, estés donde estés.
   - Reaparecen al tocar la pantalla o al hacer scroll hacia arriba.
   `resetKey` hace que vuelvan a verse al cambiar de demo. */
export default function useAutoHide(resetKey, ms = 1500) {
  const [visible, setVisible] = useState(true)
  const timer = useRef(null)
  const lastY = useRef(0)

  useEffect(() => {
    const arm = () => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        timer.current = null
        setVisible(false)
      }, ms)
    }
    const show = () => {
      setVisible(true)
      arm()
    }
    const onScroll = () => {
      const y = window.scrollY
      if (y < lastY.current - 6) show()
      else if (!timer.current) arm()
      lastY.current = y
    }

    lastY.current = window.scrollY
    show()
    window.addEventListener('touchstart', show, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer.current)
      timer.current = null
      window.removeEventListener('touchstart', show)
      window.removeEventListener('scroll', onScroll)
    }
  }, [resetKey, ms])

  return visible
}
