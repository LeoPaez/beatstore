import styled from "styled-components"
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
import YsyImg from "/assets/img/ysy.jpg"

//* Beats
import BeatImg1 from "/assets/img/beat-img-1.png"
import BeatImg2 from "/assets/img/beat-img-2.png"
import BeatImg3 from "/assets/img/beat-img-3.png"
import BeatImg4 from "/assets/img/beat-img-4.png"
import BeatImg5 from "/assets/img/beat-img-5.png"

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
  padding: 0 300px;
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
const CategoryCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export const CategorySlider = ({ children, title }) => {
  return (
    <>
      <CategoryContainer>
        <CategoryInfo>
          <h2>{title}</h2>
          <CategoryNavigation>
            <CategoryButton>
              <img src={ArrowLeftIcon} alt="icono flecha izquierda" />
            </CategoryButton>
            <CategoryButton>
              <img src={ArrowRightIcon} alt="icono flecha derecha" />
            </CategoryButton>
          </CategoryNavigation>
        </CategoryInfo>
        <CategoryCards>
          {children}
        </CategoryCards>
      </CategoryContainer>
    </>
  )
}