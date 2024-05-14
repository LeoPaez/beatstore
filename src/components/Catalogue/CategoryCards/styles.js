import styled from "styled-components"

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: ${props => props.$textCenter ? "center" : "left"};
`
export const CategoryItemImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: ${props => props.$rounded ? "50%" : "10px"};
  cursor: pointer;
`
export const CategoryItemTitle = styled.p`
  font-size: 17px;
  text-align: ${props => props.$titleCenter ? "center" : "left"};
  font-weight: 700;
  letter-spacing: 0.4px;
  cursor: pointer;
`

export const CategoryCardText = styled.p`
  /* Estilos para texto adicional que requieran otras categorias */
  font-size: ${props => props.$textSize || "14px;"};
  font-weight: ${props => props.$fontWeight};
  color: ${props => props.$textColor};
  margin-top: ${props => props.$marginTop};
  cursor: ${props => props.$cursorPointer ? "pointer" : null};
`

export const CategoryCardSpan = styled.span`
  opacity: ${props => props.$textOpacity};
  font-size: ${props => props.$textSize};
  font-weight: ${props => props.$fontWeight};
`