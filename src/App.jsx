import './App.css'
import styled from "styled-components"
import Header from "./components/Header/Header"
import Catalogue from "./components/Catalogue/Catalogue"
import Footer from "./components/Footer/Footer"

export const Wrapper = styled.div`
  padding: 0 240px;
`

function App() {
  return (
    <>
      <Header />
      <Catalogue />
      <Footer />
    </>
  )
}

export default App
