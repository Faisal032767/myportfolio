import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Card3D from "./Card3D";
import { personal } from "../data/portfolioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ROLES = ["Md Faisal Alam", "Java Developer", "Full Stack Developer"];

// ✅ Fixed typing hook
function useTyping(
  roles,
  { typeSpeed = 100, deleteSpeed = 50, pauseMs = 1200 } = {}
) {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const current = roles[roleIndex];

    if (!isDeleting) {
      // Typing
      if (displayed.length < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        // Pause before deleting
        timer = setTimeout(() => setIsDeleting(true), pauseMs);
      }
    } else {
      // Deleting
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, deleteSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayed,
    isDeleting,
    roleIndex,
    roles,
    typeSpeed,
    deleteSpeed,
    pauseMs,
  ]);

  return displayed;
}

export default function Hero() {
  const typedText = useTyping(ROLES);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <span className={`${styles.eyebrow} reveal-up`}>
            // JAVA DEVELOPER & FULL STACK ENGINEER
          </span>

          <h1 className={`${styles.name} reveal-up`}>
            Hi <span>,</span>&nbsp;I'm&nbsp;
            <br />
            <span className={styles.typedRole}>
              {typedText}
              <span className={styles.cursor}>|</span>
            </span>
          </h1>

          <p className={`${styles.summary} reveal-up`}>
            {personal?.summary ||
              "I build scalable backend systems and modern web apps."}
          </p>

          <div className={`${styles.btns} reveal-up`}>
            <a href="#projects" className={styles.btnOutline}>
              VIEW PROJECTS
            </a>
            <a href="#contact" className={styles.btnOutline}>
              GET IN TOUCH
            </a>

            {/* ✅ New Resume Button */}
           {/* ✅ Updated Resume Button */}
           <a
  href="https://drive.google.com/uc?export=download&id=1JhW61jr4iNBmNK4Uj76TXfpok5FGHILl"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.btnPrimary}
>
  <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
  DOWNLOAD RESUME
</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={`${styles.right} reveal-right`}>
          <Card3D />
        </div>
      </div>
    </section>
  );
}
