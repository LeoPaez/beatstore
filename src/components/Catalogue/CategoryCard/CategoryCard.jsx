import styled from "styled-components"

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* Estilos para texto adicional que requieran otras categorias */
  p {
    font-size: ${props => props.textSize};
  }
`
const CategoryItemImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: ${props => props.rounded ? "50%" : "10px"};
`
const CategoryItemTitle = styled.p`
  font-size: ${props => props.textSize ? props.titleSize : "18px"};
  text-align: ${props => props.textCenter ? "center" : "left"};
  font-weight: 700;
  letter-spacing: 0.4px;
`

export const CategoryCard = ({ children, src, title, titleSize, textSize, textCenter, rounded }) => {
  return (
    <CategoryItem>
              <CategoryItemImg src={src} rounded={rounded} />
              <CategoryItemTitle
                titleSize={titleSize}
                textSize={textSize}
                textCenter={textCenter}
              >
                {title}
              </CategoryItemTitle>
              {children}
    </CategoryItem>
  )
}
