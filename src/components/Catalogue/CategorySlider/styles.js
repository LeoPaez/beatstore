import styled from "styled-components"

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFF;
  position: relative;
  gap: 40px;
`

export const CategoryInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  h2 {
    font-size: 21px;
  }
  a {
    font-weight: bold;
    opacity: 0.7;
    font-size: 14px;
  }
  a:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px){
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 450px){
    h2 {
      font-size: 16px;
    }
    a {
      font-size: 13px;
    }
  }
`

export const CategoryCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  @media (max-width: 1220px){
    justify-content: flex-start;
    overflow-x: scroll;
    padding-bottom: 10px;
    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #343a40;
      border-radius: 5px;
    }
  }
`