import styled from "styled-components"
import { CategorySlider } from "./CategorySlider/CategorySlider"
import categories from "../../data/categories.json"
import { CategoryCard } from "./CategoryCard/CategoryCard"

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
            return <CategoryCard
              key={item.id}
              title={item.title}
              src={item.img}
            />
          })
        }
      </CategorySlider>
      <CategorySlider
        title="Adaptate a su estilo"
      >
        {
          artists.map((item) => {
            return <CategoryCard
              key={item.id}
              title={item.title}
              src={item.img}
              rounded
              textCenter
            />
          })
        }
      </CategorySlider>
      <CategorySlider
        title="Beats en tendencias"
      >
        {
          beatsInTendencies.map((item) => {
            return <CategoryCard
              key={item.id}
              title={item.title}
              src={item.img}
            />
          })
        }
      </CategorySlider>
    </CatalogueContainer>
  )
}
