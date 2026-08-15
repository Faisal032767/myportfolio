import styles from './Experience.module.css'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.wrap}>
        <div className={`${styles.header} reveal-up`}>
          <p className={styles.eyebrow}>// 01 EXPERIENCE</p>
          <h2 className={styles.title}>
            WORK<br /><span>HISTORY</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.id} className={`${styles.item} reveal-left`}>
              <div className={styles.dot} />
              <div className={styles.date}>{job.period}</div>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.company}>{job.company} · {job.location}</p>
              <p className={styles.desc}>{job.description}</p>
              <ul className={styles.list}>
                {job.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {job.tags.map((tag) => (
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
