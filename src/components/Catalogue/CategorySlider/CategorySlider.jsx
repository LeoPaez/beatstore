import styled from "styled-components"
import ArrowLeftIcon from "/assets/img/arrow-left-icon.png"
import ArrowRightIcon from "/assets/img/arrow-right-icon.png"

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
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