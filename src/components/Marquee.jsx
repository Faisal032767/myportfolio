import styles from './Marquee.module.css'
import { marqueeItems } from '../data/portfolioData'

// Double items for seamless infinite loop
const items = [...marqueeItems, ...marqueeItems]

export default function Marquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
