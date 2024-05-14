import { CategoryCard } from "./CategoryCard"
import { CategoryCardSpan, CategoryCardText } from "./styles"

export const BeatCard = ({ src, title, user, price, bpm }) => {
  return (
    <CategoryCard
      src={src}
      title={title}
    >
      <CategoryCardText
        $textColor="#B5179E"
        $textSize="15px"
        $fontWeight="700"
        $marginTop="-2px"
        $cursorPointer
      >{user}</CategoryCardText>
      <CategoryCardText $fontWeight="700" $marginTop="-4px">
        ${price}
        <CategoryCardSpan $textOpacity="0.4"> - </CategoryCardSpan>
        <CategoryCardSpan
          $textOpacity="0.7"
          $fontWeight="400"
        >{bpm} BPM</CategoryCardSpan>
      </CategoryCardText>
    </CategoryCard>
  )
}
