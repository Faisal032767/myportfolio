import styles from './Projects.module.css'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <div className={`${styles.header} reveal-up`}>
          <p className={styles.eyebrow}>// 03 PROJECTS</p>
          <h2 className={styles.title}>
            FEATURED<br /><span>BUILDS</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`${styles.card} reveal-up`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={styles.num}>{project.id}</div>
              <h3 className={styles.title2}>{project.title}</h3>
              <p className={styles.subtitle}>{project.subtitle}</p>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
