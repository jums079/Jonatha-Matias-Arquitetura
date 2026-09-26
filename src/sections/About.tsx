import { siteImages } from '../data/site'

export function About() {
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title" tabIndex={-1}>
      <div className="about-image" data-reveal><img src={siteImages.portrait} alt="Retrato de Jonatha Matias" width="854" height="1280" loading="lazy" decoding="async" /></div>
      <div className="about-content">
        <h2 id="about-title" data-reveal>Projetar é pensar <em>além do desenho.</em></h2>
        <p className="about-lead" data-reveal>“Desde que escolhi a arquitetura, entendi que meu trabalho nunca seria apenas desenhar espaços.”</p>
        <div className="about-copy" data-reveal><p>Ao longo de mais de 10 anos de atuação, entre projetos, obras, gestão e planejamento, aprendi que uma boa arquitetura precisa ir além da estética. Ela precisa funcionar, ser bem planejada, executada com responsabilidade e, principalmente, fazer sentido para quem irá vivê-la.</p><p>Sou Arquiteto e Urbanista formado pela Universidade Tiradentes, com especializações em Gestão de Obras e em Planejamento, Orçamento e Controle de Obras. Minha experiência foi construída dentro e fora do escritório, acompanhando de perto os desafios que transformam um projeto em uma obra real.</p><p>Foi nesse encontro entre arquitetura, gestão e execução que encontrei a minha forma de trabalhar. Hoje, atuo à frente de obras e negócios do setor, desenvolvendo projetos, coordenando equipes, tomando decisões e buscando transformar cada empreendimento em um processo mais organizado, transparente e eficiente.</p></div>
      </div>
    </section>
  )
}
