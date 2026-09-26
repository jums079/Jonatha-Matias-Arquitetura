import { siteImages } from '../data/site'

export function Hero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-image"><img src={siteImages.hero} alt="Perspectiva arquitetônica de residência contemporânea com piscina ao entardecer" width="1536" height="1024" fetchPriority="high" /></div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">ARQUITETURA · PLANEJAMENTO · OBRA</p>
        <h1 id="hero-title">Espaços que fazem <em>sentido.</em></h1>
        <div className="hero-foot"><p>Projetos presenciais e a distância.</p></div>
      </div>
    </section>
  )
}
