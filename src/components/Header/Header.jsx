import styled from "styled-components"
import Nav from "./Navbar/Nav"
import Hero from "./Hero/Hero"

const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  background-color: #000;
  position: relative;
  &::before {
    background-image: url("/assets/img/studio-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: top;
    background-position-x: center;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 70%);
    mask-image: linear-gradient(to top, transparent 0%, black 70%);
  }
`

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Nav />
        <Hero />
      </HeaderContainer>
    </>
  )
}

export default Header