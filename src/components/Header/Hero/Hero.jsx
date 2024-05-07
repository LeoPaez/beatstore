import styled from "styled-components"
import { Button } from "../Navbar/Nav"

import SearchIcon from "/assets/img/search-icon.png"
import { Wrapper } from "../../../App"

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  gap: 30px;
`
const HeroTitle = styled.h1`
  color: #FFF;
  font-weight: 400;
  font-size: 50px;
  span {
    font-weight: 700;
  }
`
const HeroSearchbarContainer = styled.div`
  display: flex;
  background-color: #FFF;
  width: 600px;
  height: 70px;
  align-items: center;
  border-radius: 8px;
  padding: 0 20px;
  justify-content: space-between;
`
const HeroSearchbar = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`
const HeroSearchbarIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`
const HeroSearchbarInput = styled.input`
  border: none;
  font-size: 22px;
  &:focus {
    outline: none;
  }
`
const HeroSearchbarSelect = styled.select`
  border: none;
  outline: none;
  border-left: 1px solid grey;
  padding: 3px 0 3px 8px;
  font-size: 20px;
`
const HeroSearchbarOption = styled.option`

`
const HeroTrends = styled.div`
  display: flex;
  color: #FFF;
  gap: 18px;
  font-size: 20px;
  align-items: center;
  margin-top: -6px;
`
const HeroTrend = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px 14px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 19px;
  cursor: pointer;
  &:hover {
    text-decoration:underline;
  }
`
const HeroButtons = styled.div`
  display: flex;
  gap: 14px;
`
const HeroButton = styled(Button)`
  background-color: #B5179E;
  padding: 14px 50px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  &:hover {
    background-color: #a514a5;
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <HeroContainer>
        <HeroTitle>
          <span>Compra</span> y <span>Vende Beats</span> <br />
          de manera sencilla desde <span>Argentina</span>
        </HeroTitle>
        <HeroSearchbarContainer>
          <HeroSearchbar>
            <HeroSearchbarIcon src={SearchIcon} />
            <HeroSearchbarInput type="text" placeholder="Busca tú genero favorito" />
          </HeroSearchbar>
          <HeroSearchbarSelect>
            <HeroSearchbarOption>Generos</HeroSearchbarOption>
            <HeroSearchbarOption>Beats</HeroSearchbarOption>
            <HeroSearchbarOption>Artistas</HeroSearchbarOption>
          </HeroSearchbarSelect>
        </HeroSearchbarContainer>
        <HeroTrends>
          <p>Tendencias:</p>
          <HeroTrend>plugg</HeroTrend>
          <HeroTrend>detroit</HeroTrend>
          <HeroTrend>trap</HeroTrend>
          <HeroTrend>reggaeton</HeroTrend>
          <HeroTrend>rkt</HeroTrend>
        </HeroTrends>
        <HeroButtons>
          <HeroButton>Explorar</HeroButton>
          <HeroButton>Vender</HeroButton>
        </HeroButtons>
      </HeroContainer>
    </Wrapper>
  )
}

export default Hero