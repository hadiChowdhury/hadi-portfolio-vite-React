import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/skills.png")}
          alt="Skills"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              className={styles.aboutItemImage}
              alt="FrontEnd Development"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a Frontend Developer, I specialize in creating responsive and optimized websites using React. My goal is to build seamless and engaging user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              className={styles.aboutItemImage}
              alt="UI/UX Design"
            />
            <div className={styles.aboutItemText}>
              <h3>UI/UX & Graphic Designer</h3>
              <p>
                With experience in UI/UX and graphic design, I focus on crafting visually appealing and user-friendly designs that enhance overall usability and aesthetic.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
