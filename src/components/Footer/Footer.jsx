import BeatstoreLogoText from "/assets/img/beatstore-textlogo-white.png"
import InstagramIcon from "/assets/img/instagram-icon.png"
import TwitterIcon from "/assets/img/twitter-icon.png"
import YoutubeIcon from "/assets/img/youtube-icon.png"
import SendIcon from "/assets/img/send-icon.png"
import { FooterContainer, FooterItem, FooterItemsContainer, FooterNewsletter, FooterRights, FooterSocial, FooterSocialIcon, FooterSocialIconContainer, LogoText } from "./styles"

const Footer = () => {
  const actualYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterItemsContainer>
        <FooterItem>
          <LogoText src={BeatstoreLogoText} alt="beatstore logo text" />
          <h2>Seguinos</h2>
          <FooterSocial>
            <FooterSocialIconContainer href="#">
              <FooterSocialIcon src={InstagramIcon} alt="icono instagram" />
            </FooterSocialIconContainer>
            <FooterSocialIconContainer href="#">
              <FooterSocialIcon src={TwitterIcon} alt="icono twitter" />
            </FooterSocialIconContainer>
            <FooterSocialIconContainer href="#">
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