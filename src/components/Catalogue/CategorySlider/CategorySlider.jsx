import styled from "styled-components"

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
  align-items: end;
  h2 {
    font-size: 21px;
  }
  a {
    font-weight: bold;
    opacity: 0.7;
    font-size: 14px;
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
          <a href="#">Mostrar todo</a>
        </CategoryInfo>
        <CategoryCards>
          {children}
        </CategoryCards>
      </CategoryContainer>
    </>
  )
}