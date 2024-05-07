import styled from "styled-components"
import { CategorySlider } from "./CategorySlider/CategorySlider"
import categories from "../../data/categories.json"
import { CategoryCard } from "./CategoryCards/CategoryCard"
import { ArtistCard } from "./CategoryCards/ArtistCard"
import { BeatCard } from "./CategoryCards/BeatCard"

const CatalogueContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
`

export const Catalogue = () => {
  const genres = categories.genres
  const artists = categories.artists
  const beatsInTendencies = categories.beatsInTendencies


  return (
    <CatalogueContainer>
      <CategorySlider
        title="Generos Populares"
      >
        {
          genres.map((item) => {
            // CategoryCard es la card de cada item de una categoria,
            // se adapta a cada categoria, como por ej: ArtistCard
            return <CategoryCard
              key={item.id}
              src={item.img}
              title={item.title}
            />
          })
        }
      </CategorySlider>
      <CategorySlider
        title="Adaptate a su estilo"
      >
        {
          artists.map((item) => {
            return <ArtistCard
              key={item.id}
              src={item.img}
              title={item.title}
              quantity={item.typeBeatsQuantity}
            />
          })
        }
      </CategorySlider>
      <CategorySlider
        title="Beats en tendencias"
      >
        {
          beatsInTendencies.map((item) => {
            return <BeatCard
              key={item.id}
              src={item.img}
              title={item.title}
              user={item.user}
              price={item.price}
              bpm={item.bpm}
            />
          })
        }
      </CategorySlider>
    </CatalogueContainer>
  )
}
