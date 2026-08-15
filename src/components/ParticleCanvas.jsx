import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W, H, particles = [], raf

    const mouse = { x: -999, y: -999 }

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY })

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x  = Math.random() * W
        this.y  = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.r  = Math.random() * 1.5 + 0.5
        this.a  = Math.random() * 0.5 + 0.2
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) { this.x += (dx / d) * 1.5; this.y += (dy / d) * 1.5 }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,255,${this.a})`
        ctx.fill()
      }
    }

    const init = () => {
      const count = Math.floor((W * H) / 18000)
      particles = Array.from({ length: count }, () => new Particle())
    }
    init()

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p) => { p.update(); p.draw() })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,245,255,${(1 - d / 130) * 0.18})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 0, pointerEvents: 'none', opacity: 0.55,
      }}
    />
  )
}
