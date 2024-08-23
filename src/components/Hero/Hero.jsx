import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm Hadi</h1>
        <p className={styles.description}>
        A recent graduate in Computer Science and Engineering from AIUB, currently working as a Software Quality Assurance professional. Alongside my technical career, I have a keen interest in web design and UI/UX design. I value creativity, continuous learning, and a balanced approach to personal and professional growth. Reach out if you’d like to collaborate or learn more about my work.
        </p>
        <div className={styles.btn}>
          <a
            href="mailto:chowdhuryhadiaiub20@gmail.com"
            className={styles.button}
          >
            Contact Me
          </a>
          {/* <a href={resume} download={resume} className={styles.button}>Resume</a> */}
        </div>
      </div>
      <img
        src={getImageUrl("hero/profilepic.png")}
        alt="Hero Image of Hadi"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
    </section>
  );
};
