import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DemoPage from '../pages/DemoPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
