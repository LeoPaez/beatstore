import { Wrapper } from "../../../App"
import SearchIcon from "/assets/img/search-icon.png"
import { HeroButton, HeroButtons, HeroContainer, HeroSearchbar, HeroSearchbarContainer, HeroSearchbarIcon, HeroSearchbarInput, HeroSearchbarSelect, HeroTitle, HeroTrend, HeroTrends } from "./styles"

const trends = [
  "plugg",
  "detroit",
  "trap",
  "reggaeton",
  "drill"
]

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
            <HeroSearchbarIcon src={SearchIcon} alt="icono busqueda" />
            <HeroSearchbarInput type="text" placeholder="¿Qué deseas buscar?" />
          </HeroSearchbar>
          <HeroSearchbarSelect>
            <option>Generos</option>
            <option>Beats</option>
            <option>Artistas</option>
          </HeroSearchbarSelect>
        </HeroSearchbarContainer>
        <HeroTrends>
          <p>Tendencias:</p>
          {
            trends.map((trend, i) => (
              <HeroTrend key={i}>{trend}</HeroTrend>
            ))
          }
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