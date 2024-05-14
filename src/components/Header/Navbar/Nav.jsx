import { Wrapper } from "../../../App";
import { BurgerMenu } from "../../BurgerMenu/BurgerMenu";
import { NavButton, NavContainer, NavItems, NavLink, NavLinks, NavLogo } from "./styles";
import WhiteLogo from "/assets/img/beatstore-logo-white.png"

const Nav = () => {
  return (
    <>
      <Wrapper>
        <NavContainer>
          <a href="/">
            <NavLogo src={WhiteLogo} alt="beatstore logo" />
          </a>
          <NavItems>
            <NavLinks>
              <NavLink href="#">Inicio</NavLink>
              <NavLink href="#">Catalogo</NavLink>
              <NavLink href="#">Beats</NavLink>
            </NavLinks>
            <NavButton>Login</NavButton>

            <BurgerMenu />
          </NavItems>
        </NavContainer>
      </Wrapper>
    </>
  )
}

export default Nav