import { createBrowserRouter } from 'react-router-dom'
import { Timeline } from './pages/Timeline'
import { Status } from './pages/Status'
import { Default } from './layouts/Default'

// Nested Routes - Rotas encadeadas:  reaproveitar partes da interface(layouts) entre várias páginas

// children: as rotas que estão contidas no layout (<Default />), quais rotas terão o comp Sidebar na esquerda

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />,
      },

      {
        path: '/status',
        element: <Status />,
      },
    ],
  },
])
