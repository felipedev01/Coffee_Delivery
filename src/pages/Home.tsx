import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <nav>
      <NavLink to="/" title="Timer">
        <Timer size={24} />
      </NavLink>

      <NavLink to="/Checkout">
        <Scroll size={24} />
      </NavLink>
    </nav>
  )
}
