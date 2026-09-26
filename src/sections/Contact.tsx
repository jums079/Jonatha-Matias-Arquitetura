import { contact } from '../data/contact'

export function Contact() {
  return (
    <section className="contact-section section-pad" id="contato" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-grid" data-reveal>
        <p className="contact-overline">No fim, tudo continua tendo o mesmo propósito:</p>
        <h2 id="contact-title">Criar, transformar e construir <em>com identidade.</em></h2>
        <a className="contact-cta" href={contact.whatsapp.url} target="_blank" rel="noopener noreferrer">Iniciar uma conversa <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
