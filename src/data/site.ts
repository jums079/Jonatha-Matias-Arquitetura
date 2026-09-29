import projectOne from '../assets/images/img17.jpeg'
import projectTwo from '../assets/images/gallery-replacement-1.jpg'
import projectThree from '../assets/images/img19.jpeg'
import projectFour from '../assets/images/gallery-replacement-2.jpg'
import projectFive from '../assets/images/img21.jpeg'
import galleryOne from '../assets/images/img18.jpeg'
import galleryTwo from '../assets/images/img22.jpeg'
import galleryThree from '../assets/images/img10.jpeg'
import galleryFour from '../assets/images/img7.jpeg'
import galleryFive from '../assets/images/gallery-replacement-3.jpg'
import gallerySix from '../assets/images/img6.jpeg'
import portrait from '../assets/images/person1.jpeg'

export const siteImages = {
  hero: projectOne,
  portrait,
}

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Serviços', href: '#atuacao' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const

export const galleryImages = [
  { image: projectTwo, alt: 'Perspectiva de casa contemporânea com carro e palmeira', width: 912, height: 916, shape: 'square' },
  { image: projectFour, alt: 'Perspectiva de fachada clara com cortinas, jardim e piscina', width: 1184, height: 864, shape: 'wide' },
  { image: projectThree, alt: 'Perspectiva de residência contemporânea com pedra, madeira e iluminação ao entardecer', width: 1536, height: 1024, shape: 'wide' },
  { image: projectFive, alt: 'Perspectiva de área externa com piscina e volumes brancos', width: 1600, height: 1600, shape: 'square' },
  { image: galleryOne, alt: 'Perspectiva de residência com varanda e iluminação ao entardecer', width: 1554, height: 1012, shape: 'wide' },
  { image: galleryTwo, alt: 'Perspectiva de pavilhão aberto junto à piscina', width: 1600, height: 1600, shape: 'square' },
  { image: galleryThree, alt: 'Perspectiva frontal de residência contemporânea de dois pavimentos', width: 1592, height: 1600, shape: 'square' },
  { image: galleryFour, alt: 'Perspectiva de área externa com piscina e espaço de convivência durante o dia', width: 1600, height: 900, shape: 'wide' },
  { image: galleryFive, alt: 'Perspectiva de ambiente de spa com piscina ao entardecer', width: 1280, height: 720, shape: 'wide' },
  { image: gallerySix, alt: 'Perspectiva de espaço de trabalho com marcenaria e iluminação embutida', width: 1600, height: 900, shape: 'wide' },
] as const

export const practice = [
  { title: 'Projeto', detail: 'Projetos de construção, reforma, interiores e levantamentos cadastrais.' },
  { title: 'Planejamento', detail: 'Elaboração de cronogramas, orçamento de obras e processos de liberação de alvarás.' },
  { title: 'Gestão & obra', detail: 'Coordenação de equipes, acompanhamento e responsabilidade técnica de obras.' },
] as const
