import styled from 'styled-components';

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
export const NavContainer = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
export const NavLogo = styled.img`
  width: 64px;
`
export const NavItems = styled.div`
  display: flex;
  gap: 100px;
  @media (max-width: 1100px){
    gap: 50px;
  }
  @media (max-width: 800px){
    gap: 30px;
  }
`
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 800px){
    display: none;
  }
`
export const NavLink = styled.a`
  font-size: 17px;
  color: #f8f9fa;
  &:hover {
    color: #e0aaff;
  }
`
export const NavButton = styled(Button)`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  padding-block: 8px;
`