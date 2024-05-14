import { CategoryCard } from "./CategoryCard"
import { CategoryCardSpan, CategoryCardText } from "./styles"

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
