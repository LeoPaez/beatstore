import styled from "styled-components"

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: ${props => props.$textCenter ? "center" : "left"};
`
const CategoryItemImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: ${props => props.$rounded ? "50%" : "10px"};
`
const CategoryItemTitle = styled.p`
  font-size: 17px;
  text-align: ${props => props.$titleCenter ? "center" : "left"};
  font-weight: 700;
  letter-spacing: 0.4px;
`

export const CategoryCard = ({ children, src, title, titleCenter, textCenter, rounded }) => {
  return (
    <CategoryItem
      $textCenter={textCenter}
    >
              <CategoryItemImg src={src} $rounded={rounded} />
              <CategoryItemTitle
                $titleCenter={titleCenter}
              >
                {title}
              </CategoryItemTitle>
              {children}
    </CategoryItem>
  )
}