import { useEffect } from 'react'

/* Título y descripción de la pestaña para una página; al salir se restauran los de antes */
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title
    const tag = document.querySelector('meta[name="description"]')
    const prevDescription = tag?.getAttribute('content')
    document.title = title
    if (tag && description) tag.setAttribute('content', description)
    return () => {
      document.title = prevTitle
      if (tag && prevDescription !== undefined) tag.setAttribute('content', prevDescription)
    }
  }, [title, description])
}
