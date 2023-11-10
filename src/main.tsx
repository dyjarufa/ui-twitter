import React from 'react'
import ReactDOM from 'react-dom/client'

import './globals.css'

import { Sidebar } from './components/Sidebar'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <RouterProvider router={routers} />
      </div>
    </div>
  </React.StrictMode>
)
