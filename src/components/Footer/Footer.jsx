import styled from "styled-components"

import BeatstoreLogoText from "/assets/img/beatstore-textlogo-white.png"
import InstagramIcon from "/assets/img/instagram-icon.png"
import TwitterIcon from "/assets/img/twitter-icon.png"
import YoutubeIcon from "/assets/img/youtube-icon.png"
import SendIcon from "/assets/img/send-icon.png"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`

const FooterItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #495057;
  border-bottom: 1px solid #495057;
  padding: 60px;
`

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  gap: 10px;
  &:first-of-type {
    gap: 0;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0 10px;
    opacity: 0.9;
  }
  h3 {
    font-weight: 600;
  }
  h4 {
    opacity: 0.8;
  }
  p, a {
    opacity: 0.8;
  }
  a:hover {
    text-decoration: underline;
  }
`

const LogoText = styled.img`
  height: 30px;
`
const FooterSocial = styled.div`
  display: flex;
  gap: 16px;
`
const FooterSocialIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #7209B7;
  border-radius: 50%;
`
const FooterSocialIcon = styled.img`
  width: 20px;
  height: 20px;
`

const FooterNewsletter = styled.form`
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
const FooterRights = styled.p`
  color: #FFF;
  text-align: center;
  padding: 20px;
  opacity: 0.8;
`

const Footer = () => {
  const actualYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterItemsContainer>
        <FooterItem>
          <LogoText src={BeatstoreLogoText} alt="beatstore logo text" />
          <h2>Seguinos</h2>
          <FooterSocial>
            <FooterSocialIconContainer>
              <FooterSocialIcon src={InstagramIcon} alt="icono instagram" />
            </FooterSocialIconContainer>
            <FooterSocialIconContainer>
              <FooterSocialIcon src={TwitterIcon} alt="icono twitter" />
            </FooterSocialIconContainer>
            <FooterSocialIconContainer>
              <FooterSocialIcon src={YoutubeIcon} alt="icono youtube" />
            </FooterSocialIconContainer>
          </FooterSocial>
        </FooterItem>
        <FooterItem>
          <h3>Empresa</h3>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Blog</a>
          <a href="#">Contactanos</a>
          <a href="#">Promociones</a>
        </FooterItem>
        <FooterItem>
          <h3>Privacidad</h3>
          <a href="#">Terminos y condiciones</a>
          <a href="#">Politicas de privacidad</a>
          <a href="#">Recargos</a>
          <a href="#">Devluciones</a>
        </FooterItem>
        <FooterItem>
          <h3>Contacto</h3>
          <p>+54 111 222 3333</p>
          <p>beatstore@contacto.com</p>
        </FooterItem>
        <FooterItem>
          <h3>Suscribite</h3>
          <h4>No te pierdas ninguna novedad</h4>
          <FooterNewsletter>
            <input type="text" placeholder="Tu Correo"/>
            <button>
              <img src={SendIcon} alt="icono enviar correo" />
            </button>
          </FooterNewsletter>
        </FooterItem>
      </FooterItemsContainer>
      <FooterRights>Copyright &copy; {actualYear} BeatStore</FooterRights>
    </FooterContainer>
  )
}

export default Footer