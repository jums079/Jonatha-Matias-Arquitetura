import { useEffect, useRef, useState } from 'react'
import { siteImages } from '../data/site'

export function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const stats = statsRef.current
    if (!stats) return

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const elapsed = Math.min((now - start) / 1400, 1)
        setProgress(1 - (1 - elapsed) ** 3)
        if (elapsed < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.3 })

    observer.observe(stats)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title" tabIndex={-1}>
      <div className="about-image" data-reveal><img src={siteImages.portrait} alt="Retrato de Jonatha Matias" width="854" height="1280" loading="lazy" decoding="async" /></div>
      <div className="about-content">
        <h2 id="about-title" data-reveal>Projetar é pensar <em>além do desenho.</em></h2>
        <div className="about-stats" ref={statsRef} data-reveal>
          <div className="about-stat" role="group" aria-label="+100 Projetos executados">
            <span className="about-stat-value" aria-hidden="true">+{Math.round(progress * 100)}</span>
            <span className="about-stat-label" aria-hidden="true">Projetos executados</span>
          </div>
          <div className="about-stat" role="group" aria-label="2 Países atendidos">
            <span className="about-stat-value" aria-hidden="true">{Math.round(progress * 2)}</span>
            <span className="about-stat-label" aria-hidden="true">Países atendidos</span>
          </div>
        </div>
        <div className="about-copy" data-reveal><p>Ao longo de mais de 10 anos de atuação, entre projetos, obras, gestão e planejamento, aprendi que uma boa arquitetura precisa ir além da estética. Ela precisa funcionar, ser bem planejada, executada com responsabilidade e, principalmente, fazer sentido para quem irá vivê-la.</p><p>Sou Arquiteto e Urbanista formado pela Universidade Tiradentes, com especializações em Gestão de Obras e em Planejamento, Orçamento e Controle de Obras. Minha experiência foi construída dentro e fora do escritório, acompanhando de perto os desafios que transformam um projeto em uma obra real.</p><p>Foi nesse encontro entre arquitetura, gestão e execução que encontrei a minha forma de trabalhar. Hoje, atuo à frente de obras e negócios do setor, desenvolvendo projetos, coordenando equipes, tomando decisões e buscando transformar cada empreendimento em um processo mais organizado, transparente e eficiente.</p></div>
      </div>
    </section>
  )
}
