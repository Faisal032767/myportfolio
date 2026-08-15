import { useEffect } from 'react'
import Cursor        from './components/Cursor'
import Loader        from './components/Loader'
import ParticleCanvas from './components/ParticleCanvas'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Marquee       from './components/Marquee'
import Experience    from './components/Experience'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import Education     from './components/Education'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

import { useReveal }    from './hooks/useReveal'
import { useSkillBars } from './hooks/useSkillBars'
import { useCursor }    from './hooks/useCursor'

export default function App() {
  useReveal()
  useSkillBars()
  useCursor()

  return (
    <>
      {/* Overlays */}
      <Cursor />
      <Loader />
      <ParticleCanvas />

      {/* Layout */}
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
