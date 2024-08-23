import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AboutCard.module.css";

const AboutCard = ({ project: { title, imageSrc, description, skills } }) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutCard;
