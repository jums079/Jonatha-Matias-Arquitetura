import { contact } from '../data/contact'
import { SocialIcon } from './SocialIcon'

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa com Jonatha Matias no WhatsApp">
      <SocialIcon name="whatsapp" />
    </a>
  )
}
