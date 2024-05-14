import './App.css'
import styled from "styled-components"
import Header from "./components/Header/Header"
import { Catalogue } from "./components/Catalogue/Catalogue"
import Footer from "./components/Footer/Footer"

export const Wrapper = styled.div`
  padding: 0 300px;

  @media (max-width: 1700px){
    padding: 0 200px;
  }
  @media (max-width: 1500px){
    padding: 0 160px;
  }
  @media (max-width: 1400px){
    padding: 0 120px;
  }
  @media (max-width: 1300px){
    padding: 0 80px;
  }
  @media (max-width: 1000px){
    padding: 0 60px;
  }
  @media (max-width: 800px){
    padding: 0 30px;
  }
  @media (max-width: 600px){
    padding: 0 20px;
  }
`

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Catalogue />
        <Footer />
      </Wrapper>
    </>
  )
}

export default App
