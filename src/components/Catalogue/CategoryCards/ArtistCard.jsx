import styled from "styled-components"
import { CategoryCard } from "./CategoryCard"

export const CategoryCardText = styled.p`
  /* Estilos para texto adicional que requieran otras categorias */
  font-size: ${props => props.$textSize || "14px;"};
  font-weight: ${props => props.$fontWeight};
  color: ${props => props.$textColor};
  margin-top: ${props => props.$marginTop};
`
export const CategoryCardSpan = styled.span`
  opacity: ${props => props.$textOpacity};
  font-size: ${props => props.$textSize};
  font-weight: ${props => props.$fontWeight};
`

export const ArtistCard = ({ src, title, quantity }) => {
  return (
    <CategoryCard
      title={title}
      src={src}
      titleCenter
      textCenter
      rounded
    >
      <CategoryCardText $fontWeight="700">
        {quantity}
        <CategoryCardSpan
          $textOpacity="0.7"
          $fontWeight="400"
        > Type-Beats</CategoryCardSpan>
      </CategoryCardText>
    </CategoryCard>
  )
}
