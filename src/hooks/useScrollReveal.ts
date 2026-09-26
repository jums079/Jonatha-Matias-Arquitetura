import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.12 })

    elements.forEach((element) => observer.observe(element))
    document.documentElement.classList.add('has-reveal')

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-reveal')
    }
  }, [])
}
