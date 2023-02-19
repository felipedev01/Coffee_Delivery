import Logo from '../assets/Logo.svg'
import { HeaderContainer, Actions } from './styles'
import Cart from '../assets/Cart.svg'
import Location from '../assets/Location.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <Actions>
        <img src={Location} alt="" />

        <img src={Cart} alt="" />
      </Actions>
    </HeaderContainer>
  )
}
