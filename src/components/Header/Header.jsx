import Nav from "./Navbar/Nav"
import Hero from "./Hero/Hero"
import { HeaderContainer } from "./styles"

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