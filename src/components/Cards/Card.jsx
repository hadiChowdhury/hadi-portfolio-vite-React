import React from "react";
import styles from "./Card.module.css";
import projects from "../../data/projects.json";
import AboutCard from "./AboutCard";

export const Card = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Expertise</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <AboutCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
