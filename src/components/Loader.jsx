import { useState, useEffect } from 'react'
import styles from './Loader.module.css'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className={styles.loader}>
      <div className={styles.text}>INITIALIZING PORTFOLIO...</div>
      <div className={styles.barWrap}>
        <div className={styles.bar} />
      </div>
    </div>
  )
}
