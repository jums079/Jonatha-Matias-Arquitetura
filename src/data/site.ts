import projectOne from '../assets/images/img17.webp'
import projectTwo from '../assets/images/gallery-replacement-1.webp'
import projectThree from '../assets/images/img19.webp'
import projectFour from '../assets/images/gallery-replacement-2.webp'
import projectFive from '../assets/images/img21.jpeg'
import galleryOne from '../assets/images/img18.webp'
import galleryTwo from '../assets/images/img22.webp'
import galleryThree from '../assets/images/img10.webp'
import galleryFour from '../assets/images/img7.jpeg'
import galleryFive from '../assets/images/gallery-replacement-3.jpg'
import gallerySix from '../assets/images/img6.jpeg'
import portrait from '../assets/images/person1.webp'
import residenceSlopedRoof from '../assets/images/residence-sloped-roof.jpeg'
import residenceGreenBalcony from '../assets/images/residence-green-balcony.jpeg'
import bedroomNeutral from '../assets/images/bedroom-neutral.webp'
import residenceTileRoof from '../assets/images/residence-tile-roof.jpeg'
import gallerySeven from '../assets/images/img23.jpeg'
import galleryEight from '../assets/images/img24.jpeg'
import galleryNine from '../assets/images/img25.jpeg'
import galleryTen from '../assets/images/img26.jpeg'

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
  { image: residenceSlopedRoof, alt: 'Residência de dois pavimentos com telhado inclinado, pedra e jardim', width: 1182, height: 1476, shape: 'portrait' },
  { image: residenceGreenBalcony, alt: 'Residência contemporânea com varanda verde, madeira e garagem para dois carros', width: 1179, height: 1179, shape: 'square' },
  { image: bedroomNeutral, alt: 'Quarto em tons neutros com armário espelhado e iluminação embutida', width: 1364, height: 768, shape: 'wide' },
  { image: residenceTileRoof, alt: 'Casa térrea com telhado de cerâmica, fachada em pedra e caminho ajardinado', width: 1182, height: 1476, shape: 'portrait' },
  { image: gallerySeven, alt: 'Perspectiva de residência contemporânea com telhados inclinados, madeira e concreto, garagem e jardim ao entardecer', width: 2213, height: 1652, shape: 'wide' },
  { image: galleryEight, alt: 'Perspectiva de loja comercial com fachada em pedra travertino, painéis de tela metálica, vitrine de vidro e paisagismo com oliveiras', width: 1322, height: 877, shape: 'wide' },
  { image: galleryNine, alt: 'Perspectiva de edifício comercial de dois pavimentos com painéis em aço corten, vidro curvo, painel vazado e pergolado de madeira', width: 1332, height: 861, shape: 'wide' },
  { image: galleryTen, alt: 'Perspectiva de residência contemporânea de dois pavimentos com lajes curvas, ripado de madeira, parede de pedra e jardim tropical', width: 712, height: 877, shape: 'portrait' },
] as const

export const practice = [
  { title: 'Projeto', detail: 'Projetos de construção, reforma, interiores e levantamentos cadastrais.' },
  { title: 'Planejamento', detail: 'Elaboração de cronogramas, orçamento de obras e processos de liberação de alvarás.' },
  { title: 'Gestão & obra', detail: 'Coordenação de equipes, acompanhamento e responsabilidade técnica de obras.' },
] as const
