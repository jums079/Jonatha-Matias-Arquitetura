import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { navigation } from '../data/site'
import brandMark from '../assets/images/brand-mark.png'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const brandRef = useRef<HTMLAnchorElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById('inicio')
      setScrolled(hero ? hero.getBoundingClientRect().bottom <= 80 : window.scrollY > 24)
    }
    const updateOnResize = () => {
      update()
      if (window.innerWidth > 760) setMenuOpen(false)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', updateOnResize)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', updateOnResize)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    document.documentElement.classList.add('menu-locked')
    document.body.classList.add('menu-locked')

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }

      if (event.key !== 'Tab') return
      const focusable = [brandRef.current, menuButtonRef.current, ...Array.from(mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter((element): element is HTMLAnchorElement | HTMLButtonElement => element !== null)
      const currentIndex = focusable.indexOf(document.activeElement as HTMLAnchorElement | HTMLButtonElement)
      let nextIndex = currentIndex + (event.shiftKey ? -1 : 1)
      if (nextIndex < 0) nextIndex = focusable.length - 1
      if (nextIndex >= focusable.length) nextIndex = 0
      event.preventDefault()
      focusable[nextIndex]?.focus()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.documentElement.classList.remove('menu-locked')
      document.body.classList.remove('menu-locked')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const navigateFromMenu = (href: string) => {
    setMenuOpen(false)
    requestAnimationFrame(() => document.querySelector<HTMLElement>(href)?.focus({ preventScroll: true }))
  }

  return (
    <>
      <header className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <a ref={brandRef} className="brand" href="#inicio" aria-label="Jonatha Matias Arquitetura, início" onClick={() => setMenuOpen(false)}>
          <img className="brand-mark" src={brandMark} width="1020" height="724" alt="" />
          <span className="brand-name">JONATHA MATIAS<span>ARQUITETURA</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((value) => !value)}>
          <span /><span />
        </button>
      </header>
      {createPortal(
        <nav ref={mobileNavRef} className={`mobile-nav${menuOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-label="Navegação mobile" aria-hidden={!menuOpen} inert={!menuOpen}>
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => navigateFromMenu(item.href)}>{item.label}</a>)}
        </nav>,
        document.body,
      )}
    </>
  )
}
