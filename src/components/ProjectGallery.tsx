import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { galleryImages } from '../data/site'

export function ProjectGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<Array<HTMLDivElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (index: number) => {
    const track = trackRef.current
    const first = slideRefs.current[0]
    const target = slideRefs.current[index]
    if (!track || !first || !target) return

    track.scrollTo({
      left: target.offsetLeft - first.offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
    setActiveIndex(index)
  }

  const syncActiveIndex = () => {
    const track = trackRef.current
    const first = slideRefs.current[0]
    if (!track || !first) return

    if (track.scrollWidth - track.clientWidth - track.scrollLeft <= 2) {
      setActiveIndex(galleryImages.length - 1)
      return
    }

    const nearest = slideRefs.current.reduce((best, slide, index) => {
      if (!slide) return best
      const distance = Math.abs(slide.offsetLeft - first.offsetLeft - track.scrollLeft)
      return distance < best.distance ? { index, distance } : best
    }, { index: 0, distance: Number.POSITIVE_INFINITY })

    setActiveIndex(nearest.index)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(Math.min(activeIndex + 1, galleryImages.length - 1))
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(Math.max(activeIndex - 1, 0))
    }
  }

  return (
    <div className="project-gallery">
      <div className="gallery-controls">
        <button type="button" aria-label="Projeto anterior" disabled={activeIndex === 0} onClick={() => goTo(activeIndex - 1)}>←</button>
        <button type="button" aria-label="Próximo projeto" disabled={activeIndex === galleryImages.length - 1} onClick={() => goTo(activeIndex + 1)}>→</button>
      </div>
      <div className="gallery-track" ref={trackRef} role="region" aria-label="Galeria de imagens de projetos" tabIndex={0} onScroll={syncActiveIndex} onKeyDown={handleKeyDown}>
        {galleryImages.map((item, index) => (
          <div className={`gallery-slide ${item.shape}`} key={item.image} ref={(node) => { slideRefs.current[index] = node }}>
            <img src={item.image} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </div>
  )
}
