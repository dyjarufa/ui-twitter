import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

/**
 *
 * @link https://reactrouter.com/en/main/components/outlet
 * Um <Outlet> deve ser usado em elementos de rota pai para renderizar seus elementos de rota filho.
 * Isso permite que a UI aninhada apareça quando as rotas secundárias são renderizadas.
 * Se a rota pai corresponder exatamente, ela renderizará uma rota de índice filho ou nada se não houver rota de índice.
 */

export function Default() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
