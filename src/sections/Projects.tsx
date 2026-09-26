import { ProjectGallery } from '../components/ProjectGallery'

export function Projects() {
  return (
    <section className="projects-section section-pad" id="projetos" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="projects-heading" data-reveal><h2 id="projects-title">Projetos</h2></div>
      <ProjectGallery />
    </section>
  )
}
