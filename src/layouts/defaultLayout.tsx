import { Outlet } from 'react-router-dom'
import { Header } from '../components/index'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
