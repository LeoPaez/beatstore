import { CategoryCards, CategoryContainer, CategoryInfo } from "./styles"

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