import styled from "styled-components"
import { Button } from "../Navbar/styles"

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  gap: 30px;
  @media (max-width: 800px){
    align-items: center;
  }
`
export const HeroTitle = styled.h1`
  color: #FFF;
  font-weight: 400;
  font-size: 38px;
  span {
    font-weight: 700;
  }
  @media (max-width: 800px){
    text-align: center;
    font-size: 30px;
  }
  @media (max-width: 600px){
    font-size: 26px;
  }
`
export const HeroSearchbarContainer = styled.div`
  display: flex;
  background-color: #343a40;
  max-width: 500px;
  height: 64px;
  align-items: center;
  border-radius: 8px;
  padding: 0 20px;
  justify-content: space-between;
  @media (max-width: 500px){
    padding: 0 10px;
    height: 60px;
  }
`
export const HeroSearchbar = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 500px){
    gap: 12px;
  }
`
export const HeroSearchbarIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  filter: invert(1);
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 500px){
    width: 26px;
    height: 26px;
  }
  @media (max-width: 400px){
    width: 24px;
    height: 24px;
  }
`
export const HeroSearchbarInput = styled.input`
  color: #dee2e6;
  background-color: #343a40;
  border: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #adb5bd;
  }
  @media (max-width: 500px){
    font-size: 17px;
  }
  @media (max-width: 420px){
    max-width: 180px;
  }
  @media (max-width: 400px){
    font-size: 15px;
    max-width: 160px;
  }
`
export const HeroSearchbarSelect = styled.select`
  background-color: #343a40;
  border: none;
  outline: none;
  border-left: 1px solid #6c757d;
  padding: 3px 0 3px 8px;
  font-size: 18px;
  color: #dee2e6;
  @media (max-width: 500px){
    font-size: 17px;
  }
  @media (max-width: 400px){
    font-size: 15px;
  }
`
export const HeroTrends = styled.div`
  display: flex;
  color: #FFF;
  gap: 10px;
  font-size: 20px;
  align-items: center;
  margin-top: -6px;
  p {
    font-size: 18px;
  }
  @media (max-width: 600px){
    justify-content: center;
    flex-wrap: wrap;
  }
`
export const HeroTrend = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px 14px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration:underline;
  }
`
export const HeroButtons = styled.div`
  display: flex;
  gap: 14px;
`
export const HeroButton = styled(Button)`
  background-color: #B5179E;
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  &:hover {
    background-color: #a514a5;
  }
`