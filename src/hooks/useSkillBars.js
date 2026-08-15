import { useEffect } from 'react'

/**
 * Watches every element with class .skill-fill (data-width="N")
 * and animates the width when it scrolls into view.
 */
export function useSkillBars() {
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-fill')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            const width = target.dataset.width
            setTimeout(() => {
              target.style.width = width + '%'
            }, 200)
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.3 }
    )

    bars.forEach((bar) => observer.observe(bar))
    return () => observer.disconnect()
  })
}
