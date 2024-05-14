import { CategoryItem, CategoryItemImg, CategoryItemTitle } from "./styles"

export const CategoryCard = ({ children, src, title, titleCenter, textCenter, rounded }) => {
  return (
    <CategoryItem
      $textCenter={textCenter}
    >
              <CategoryItemImg src={src} $rounded={rounded} alt={title} />
              <CategoryItemTitle
                $titleCenter={titleCenter}
              >
                {title}
              </CategoryItemTitle>
              {children}
    </CategoryItem>
  )
}