import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DemoPage from '../pages/DemoPage'
import StylePage from '../pages/StylePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/estilos/:key',
    element: <StylePage />,
  },
  {
    path: '/demo/:slug',
    element: <DemoPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
])
