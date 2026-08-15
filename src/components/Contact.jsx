import styles from './Contact.module.css'
import { personal } from '../data/portfolioData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'

// 👇 Import brand icons from free-brands-svg-icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const contactItems = [
  {
    icon: faEnvelope,
    label: 'EMAIL',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  
  {
    icon: faGithub, // 👈 Real GitHub logo
    label: 'GITHUB',
    value: 'github.com/Faisal032767',
    href: personal.github || 'https://github.com/Faisal032767',
    isExternal: true,
  },
  {
    icon: faLinkedin, // 👈 Real LinkedIn logo
    label: 'LINKEDIN',
    value: 'linkedin.com/in/faisal-g1-alam/',
    href: personal.linkedin || 'https://www.linkedin.com/in/faisal-g1-alam/',
    isExternal: true,
  },
  {
    icon: faPhone,
    label: 'PHONE',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: faLocationDot,
    label: 'LOCATION',
    value: personal.location,
  },
  {
    icon: faBriefcase,
    label: 'AVAILABILITY',
    value: personal.availability,
    highlight: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <div className={`${styles.header} reveal-up`}>
          <p className={styles.eyebrow}>// 05 CONTACT</p>
          <h2 className={styles.title}>
            GET IN<br /><span>TOUCH</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Contact cards */}
          <div className={`${styles.cards} reveal-left`}>
            {contactItems.map((item) => (
              <div key={item.label} className={styles.card}>
                {/* ✅ Render FontAwesomeIcon correctly */}
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <div className={styles.label}>{item.label}</div>
                  
                  {/* ✅ Wrap value in an <a> tag if href exists */}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : '_self'}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className={styles.value}
                      style={item.highlight ? { color: 'var(--cyan)' } : {}}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div
                      className={styles.value}
                      style={item.highlight ? { color: 'var(--cyan)' } : {}}
                    >
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pulsing avatar */}
          <div className={`${styles.avatarWrap} reveal-right`}>
            <div className={`${styles.ring} ${styles.ring1}`} />
            <div className={`${styles.ring} ${styles.ring2}`} />
            <div className={`${styles.ring} ${styles.ring3}`} />
            <div className={styles.avatar}>MFA</div>
          </div>
        </div>
      </div>
    </section>
  )
}