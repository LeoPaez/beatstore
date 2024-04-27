import styled, { css } from "styled-components"
import ArrowLeftIcon from "/assets/img/arrow-left-icon.png"
import ArrowRightIcon from "/assets/img/arrow-right-icon.png"

//* Generos
import GenreImg1 from "/assets/img/genre-img-1.jpg"
import GenreImg2 from "/assets/img/genre-img-2.jpg"
import GenreImg3 from "/assets/img/genre-img-3.jpg"
import GenreImg4 from "/assets/img/genre-img-4.jpg"
import GenreImg5 from "/assets/img/genre-img-5.jpg"

//* Artistas
import TravisImg from "/assets/img/travis.jpg"
import DukiImg from "/assets/img/duki.jpg"
import DrakeImg from "/assets/img/drake.jpg"
import YsyImg from "/assets/img/ysy.jpg"
import HwiiImg from "/assets/img/hwii.jpg"

//* Beats
import BeatImg1 from "/assets/img/beat-img-1.png"
import BeatImg2 from "/assets/img/beat-img-2.png"
import BeatImg3 from "/assets/img/beat-img-3.png"
import BeatImg4 from "/assets/img/beat-img-4.png"
import BeatImg5 from "/assets/img/beat-img-5.png"

const CatalogueContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
`
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
  padding: 0 240px;
  position: relative;
  gap: 40px;
`
const CategoryInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const CategoryNavigation = styled.div`
  display: flex;
  gap: 10px;
`
const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 2px solid #FFF;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  &:first-of-type {
    opacity: 0.4;
  }
  img {
    width: 16px;
  }
`
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const CategoryItemImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: ${props => props.circle ? "50%" : "10px"};
`
const CategoryItemTitle = styled.p`
  position: relative;
  font-size: ${props => props.upper ? "40px" : "24px"};
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: ${props => props.upper ? "uppercase" : "none"};
  ${props => props.smallText && css`
    font-size: 30px;
  `}
  ${props => props.textCenter && css`
    text-align: center;
  `}

`
//* Generos
const CategoryItemBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: #000;
  position: relative;
  cursor: pointer;
  &::before {
    background-image: url(${props => props.url});
    background-position: center;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.8;
    border-radius: 10px;
  }
  &:hover {
    &::before {
    opacity: 0.7;
  }
  }
`
//* Artistas
const CategoryItemInfo = styled.p`
  font-size: ${props => props.size};
  margin: ${props => props.margin};
  font-weight: 400;
  color: #aaaaaa;
  ${props => props.textCenter && css`
    text-align: center;
  `}
  span {
    font-size: 15px;
    color: #FFF;
  }
`

const Catalogue = () => {
  return (
    <>
      <CatalogueContainer>
        <CategoryContainer>
          <CategoryInfo>
            <h2>Generos Populares</h2>
            <CategoryNavigation>
              <CategoryButton>
                <img src={ArrowLeftIcon} alt="icono flecha izquierda" />
              </CategoryButton>
              <CategoryButton>
                <img src={ArrowRightIcon} alt="icono flecha derecha" />
              </CategoryButton>
            </CategoryNavigation>
          </CategoryInfo>
          <Category>
            <CategoryItem>
              <CategoryItemBg url={GenreImg1} >
                <CategoryItemTitle upper>Trap</CategoryItemTitle>
              </CategoryItemBg>
              <CategoryItemTitle>Trap</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemBg url={GenreImg2} >
                <CategoryItemTitle upper>R&B</CategoryItemTitle>
              </CategoryItemBg>
              <CategoryItemTitle>R&B</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemBg url={GenreImg3} >
                <CategoryItemTitle upper>House</CategoryItemTitle>
              </CategoryItemBg>
              <CategoryItemTitle>House</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemBg url={GenreImg4} >
                <CategoryItemTitle upper>Hip-Hop</CategoryItemTitle>
              </CategoryItemBg>
              <CategoryItemTitle>Hip-Hop</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemBg url={GenreImg5} >
                <CategoryItemTitle upper smallText>Electronica</CategoryItemTitle>
              </CategoryItemBg>
              <CategoryItemTitle>Electronica</CategoryItemTitle>
            </CategoryItem>
          </Category>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryInfo>
            <h2>Adaptate a su estilo</h2>
            <CategoryNavigation>
              <CategoryButton>
                <img src={ArrowLeftIcon} alt="icono flecha izquierda" />
              </CategoryButton>
              <CategoryButton>
                <img src={ArrowRightIcon} alt="icono flecha derecha" />
              </CategoryButton>
            </CategoryNavigation>
          </CategoryInfo>
          <Category>
            <CategoryItem>
              <CategoryItemImg circle src={TravisImg} />
              <CategoryItemInfo textCenter><span>265</span> Type Beats</CategoryItemInfo>
              <CategoryItemTitle textCenter>Travis Scott</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg circle src={DukiImg} />
              <CategoryItemInfo textCenter><span>388</span> Type Beats</CategoryItemInfo>
              <CategoryItemTitle textCenter>Duki</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg circle src={DrakeImg} />
              <CategoryItemInfo textCenter><span>257</span> Type Beats</CategoryItemInfo>
              <CategoryItemTitle textCenter>Drake</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg circle src={YsyImg} />
              <CategoryItemInfo textCenter><span>341</span> Type Beats</CategoryItemInfo>
              <CategoryItemTitle textCenter>Ysy A</CategoryItemTitle>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg circle src={HwiiImg} />
              <CategoryItemInfo textCenter><span>109</span> Type Beats</CategoryItemInfo>
              <CategoryItemTitle textCenter>Hwii</CategoryItemTitle>
            </CategoryItem>
          </Category>
        </CategoryContainer>

        <CategoryContainer>
          <CategoryInfo>
            <h2>Beats en Tendencia</h2>
            <CategoryNavigation>
              <CategoryButton>
                <img src={ArrowLeftIcon} alt="icono flecha izquierda" />
              </CategoryButton>
              <CategoryButton>
                <img src={ArrowRightIcon} alt="icono flecha derecha" />
              </CategoryButton>
            </CategoryNavigation>
          </CategoryInfo>
          <Category>
            <CategoryItem>
              <CategoryItemImg src={BeatImg1} />
              <CategoryItemTitle>Nombre</CategoryItemTitle>
              <CategoryItemInfo size="18px" margin="-4px 0 0">Usuario</CategoryItemInfo>
              <CategoryItemInfo size="14px" margin="-8px 0 0">170 BPM</CategoryItemInfo>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg src={BeatImg2} />
              <CategoryItemTitle>Nombre</CategoryItemTitle>
              <CategoryItemInfo size="18px" margin="-4px 0 0">Usuario</CategoryItemInfo>
              <CategoryItemInfo size="14px" margin="-8px 0 0">170 BPM</CategoryItemInfo>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg src={BeatImg3} />
              <CategoryItemTitle>Nombre</CategoryItemTitle>
              <CategoryItemInfo size="18px" margin="-4px 0 0">Usuario</CategoryItemInfo>
              <CategoryItemInfo size="14px" margin="-8px 0 0">170 BPM</CategoryItemInfo>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg src={BeatImg4} />
              <CategoryItemTitle>Nombre</CategoryItemTitle>
              <CategoryItemInfo size="18px" margin="-4px 0 0">Usuario</CategoryItemInfo>
              <CategoryItemInfo size="14px" margin="-8px 0 0">170 BPM</CategoryItemInfo>
            </CategoryItem>
            <CategoryItem>
              <CategoryItemImg src={BeatImg5} />
              <CategoryItemTitle>Nombre</CategoryItemTitle>
              <CategoryItemInfo size="18px" margin="-4px 0 0">Usuario</CategoryItemInfo>
              <CategoryItemInfo size="14px" margin="-8px 0 0">170 BPM</CategoryItemInfo>
            </CategoryItem>
          </Category>
        </CategoryContainer>
      </CatalogueContainer>
    </>
  )
}

export default Catalogue