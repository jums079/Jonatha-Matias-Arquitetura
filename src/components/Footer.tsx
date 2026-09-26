import { contact } from '../data/contact'
import { navigation } from '../data/site'
import brandMark from '../assets/images/brand-mark.png'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img className="footer-monogram" src={brandMark} width="1020" height="724" alt="" loading="lazy" />
          <p>Jonatha Matias<br />Arquitetura</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Navegação</span>
          <nav aria-label="Navegação do rodapé">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div className="footer-column">
          <span className="footer-label">Conecte-se</span>
          <a className="footer-social" href={contact.instagram.url} target="_blank" rel="noopener noreferrer"><SocialIcon name="instagram" /><span>Instagram<small>{contact.instagram.username}</small></span></a>
          <a className="footer-social footer-whatsapp" href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer"><SocialIcon name="whatsapp" /><span>WhatsApp<small>{contact.whatsapp.display}</small></span></a>
          <a className="footer-social" href={contact.email.url} target="_blank" rel="noopener noreferrer"><SocialIcon name="email" /><span>E-mail<small>{contact.email.display}</small></span></a>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Jonatha Matias Arquitetura</span><a href="#inicio">Voltar ao topo ↑</a></div>
    </footer>
  )
}
