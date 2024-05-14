import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`

export const FooterItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #495057;
  border-bottom: 1px solid #495057;
  padding: 60px;

  @media (max-width: 1300px){
    padding-inline: 20px;
  }
  @media (max-width: 1200px){
    padding-inline: 0px;
  }
  @media (max-width: 1100px){
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  @media (max-width: 550px){
    flex-direction: column;
  }
`

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  gap: 10px;
  &:first-of-type {
    gap: 0;
    a {
      opacity: 1;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0 10px;
    opacity: 0.9;
  }
  h3 {
    font-size: 17px;
    font-weight: 700;
  }
  h4 {
    font-size: 15px;
    opacity: 0.8;
  }
  p, a {
    opacity: 0.8;
    font-size: 15px;
  }
  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 550px){
    align-items: center;
  }
`

export const LogoText = styled.img`
  height: 26px;
  width: fit-content;
`
export const FooterSocial = styled.div`
  display: flex;
  gap: 16px;
`
export const FooterSocialIconContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: #7209B7;
  border-radius: 50%;
`
export const FooterSocialIcon = styled.img`
  width: 18px;
  height: 18px;
`

export const FooterNewsletter = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #B5179E;
  max-width: 230px;
  padding: 4px 6px;
  input, button {
    background-color: transparent;
    border: none;
    color: #FFF;
  }
  input:focus {
    outline: none;
  }
  button {
    cursor: pointer;
  }
  button img {
    height: 16px;
    opacity: 0.7;
  }
  button img:hover {
    opacity: 0.6;
  }
`
export const FooterRights = styled.p`
  font-size: 14px;
  color: #FFF;
  text-align: center;
  padding: 20px;
  opacity: 0.8;
`