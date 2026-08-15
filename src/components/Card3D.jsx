import styles from './Card3D.module.css'

export default function Card3D() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.inner}>
          {/* Avatar */}
          <div className={styles.avatar}>MFA</div>

          {/* Info */}
          <div>
            <div className={styles.name}>MD FAISAL ALAM</div>
            <div className={styles.role}>Java Developer · Hyderabad, IN</div>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Stats */}
          <div className={styles.statsRow}>
            {[['4+', 'PROJECTS'], ['3', 'CERTS'], ['8+M', 'EXP']].map(([val, label]) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statVal}>{val}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className={styles.badges}>
            {['SPRING BOOT', 'REACT', 'MYSQL'].map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
