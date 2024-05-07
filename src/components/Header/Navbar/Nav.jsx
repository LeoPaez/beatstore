import styled from 'styled-components';
import WhiteLogo from "/assets/img/beatstore-logo-white.png"
import { Wrapper } from "../../../App";

export const Button = styled.button`
  font-size: 22px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background-color: #7209b7;
  color: #FFF;
  cursor: pointer;
  &:hover {
    background-color: #640ab2;
  }
`
const NavContainer = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const NavLogo = styled.img`
  width: 66px;
`
const NavItems = styled.div`
  display: flex;
  gap: 100px;
`
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`
const NavLink = styled.a`
  font-size: 18px;
  color: #f8f9fa;
  &:hover {
    color: #e0aaff;
  }
`
const NavButton = styled(Button)`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  padding-block: 8px;
`

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
              <NavLink href="#">Generos</NavLink>
              <NavLink href="#">Beats</NavLink>
            </NavLinks>
            <NavButton>Login</NavButton>
          </NavItems>
        </NavContainer>
      </Wrapper>
    </>
  )
}

export default Nav