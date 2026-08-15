import { useEffect, useRef } from 'react'

/**
 * Custom glowing cursor with a lagging ring.
 * Attaches mousemove listener and runs a rAF loop.
 */
export function useCursor() {
  const rxRef = useRef(0)
  const ryRef = useRef(0)
  const mxRef = useRef(0)
  const myRef = useRef(0)

  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring   = document.getElementById('cursor-ring')

    const onMove = (e) => {
      mxRef.current = e.clientX
      myRef.current = e.clientY
    }

    document.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      if (cursor) {
        cursor.style.left = mxRef.current + 'px'
        cursor.style.top  = myRef.current + 'px'
      }
      rxRef.current += (mxRef.current - rxRef.current) * 0.14
      ryRef.current += (myRef.current - ryRef.current) * 0.14
      if (ring) {
        ring.style.left = rxRef.current + 'px'
        ring.style.top  = ryRef.current + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    // hover grow effect
    const growEls = document.querySelectorAll('a, button, .hover-grow')
    const grow = () => {
      if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(2)'
      if (ring) { ring.style.width = '54px'; ring.style.height = '54px'; ring.style.borderColor = 'var(--magenta)' }
    }
    const shrink = () => {
      if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(0,245,255,0.5)' }
    }
    growEls.forEach((el) => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      growEls.forEach((el) => { el.removeEventListener('mouseenter', grow); el.removeEventListener('mouseleave', shrink) })
    }
  }, [])
}
