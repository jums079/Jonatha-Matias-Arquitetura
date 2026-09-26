import { useScrollReveal } from './hooks/useScrollReveal'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { Projects } from './sections/Projects'
import { Practice } from './sections/Practice'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import './styles/layout.css'
import './styles/sections.css'
import './styles/responsive.css'

function App() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">Ir para o conteúdo</a>
      <Header />
      <main id="main">
        <Hero />
        <Manifesto />
        <Projects />
        <Practice />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
