import { practice } from '../data/site'

export function Practice() {
  return (
    <section className="practice-section section-pad" id="atuacao" aria-labelledby="practice-title" tabIndex={-1}>
      <div className="practice-layout">
        <div className="practice-intro" data-reveal><h2 id="practice-title">Pensar o todo.<br /><em>Cuidar de cada etapa.</em></h2><p>Projeto, planejamento e obra se encontram em um processo mais organizado, transparente e eficiente.</p></div>
        <div className="practice-list">{practice.map((item) => <article className="practice-item" key={item.title} data-reveal><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
      </div>
    </section>
  )
}
