import styles from './Skills.module.css'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <div className={`${styles.header} reveal-up`}>
          <p className={styles.eyebrow}>// 02 SKILLS</p>
          <h2 className={styles.title}>
            TECHNICAL<br /><span>ARSENAL</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`${styles.card} reveal-up`}
              style={{ animationDelay: `${gi * 0.12}s` }}
            >
              <p className={styles.cardTitle}>{group.category.toUpperCase()}</p>
              {group.items.map((skill) => (
                <div key={skill.name} className={styles.barItem}>
                  <div className={styles.barLabel}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div
                      className={`${styles.barFill} skill-fill`}
                      data-width={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
