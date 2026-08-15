import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { name: "experience", href: "#experience" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "education", href: "#education" },
  { name: "contact", href: "#contact" },
  { 
    name: "live project", 
    href: "https://instadrivers.netlify.app/", 
    isExternal: true 
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>MD FAISAL ALAM</div>

      {/* Nav Actions (Always visible on Desktop & Mobile) */}
      <div className={styles.navActions}>
        {/* Always Visible "HIRE ME" Button */}
        <a href="#contact" className={styles.hireMeBtn} onClick={closeMenu}>
          <FontAwesomeIcon icon={faBriefcase} />
          <span>HIRE ME</span>
        </a>

        {/* Mobile Hamburger Toggle (3 Lines) */}
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation Menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Collapsible Links Menu */}
      <div className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            target={link.isExternal ? "_blank" : "_self"}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className={link.isExternal ? styles.liveDemoBtn : styles.link}
          >
            {link.name.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}