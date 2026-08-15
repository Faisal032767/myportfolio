import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all .reveal-up / .reveal-left / .reveal-right
 * elements and adds the .visible class when they enter the viewport.
 * Call this once in App or a layout component.
 */
export function useReveal() {
  useEffect(() => {
    const selectors = '.reveal-up, .reveal-left, .reveal-right'
    const elements = document.querySelectorAll(selectors)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}
