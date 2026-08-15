import styles from './Education.module.css'
import { education, certifications, languages } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.wrap}>
        <div className={`${styles.header} reveal-up`}>
          <p className={styles.eyebrow}>// 04 EDUCATION &amp; CERTIFICATIONS</p>
          <h2 className={styles.title}>
            LEARNING<br /><span>JOURNEY</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Left – Degrees + Languages */}
          <div className={styles.leftCol}>
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className={`${styles.eduCard} reveal-left`}
                style={{ animationDelay: `${i * 0.12}s`, marginBottom: 20 }}
              >
                <div className={styles.eduIcon}>{edu.icon}</div>
                <div className={styles.degree}>{edu.degree}</div>
                <div className={styles.institution}>{edu.institution}</div>
                <div className={styles.year}>Graduated {edu.year}</div>
                <span className={styles.score}>SCORE: {edu.score}</span>
              </div>
            ))}

            {/* Languages */}
            <div className={`${styles.langBlock} reveal-left`}>
              <p className={styles.blockLabel}>// LANGUAGES</p>
              <div className={styles.langBadges}>
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className={`${styles.langBadge} ${lang.variant === 'secondary' ? styles.secondary : styles.primary}`}
                  >
                    {lang.name.toUpperCase()} ({lang.level.toUpperCase()})
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Certifications */}
          <div className={`${styles.rightCol} reveal-right`}>
            <p className={styles.blockLabel}>// CERTIFICATIONS</p>
            <div className={styles.certList}>
              {certifications.map((cert, i) => (
                <div key={i} className={styles.certItem}>
                  <span
                    className={styles.certDot}
                    style={{ background: cert.color, boxShadow: `0 0 8px ${cert.color}` }}
                  />
                  <div className={styles.certText}>
                    <div className={styles.certTitle}>{cert.title}</div>
                    <div className={styles.certInstitute}>{cert.institute}</div>
                  </div>
                  <div className={styles.certYear}>{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
