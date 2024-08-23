import React from "react";
import styles from "./Certificate.module.css";

// Importing images
import certificate1 from "../../../assets/certificates/UiUxGreatLearning.jpg";
import certificate2 from "../../../assets/certificates/Bncc.jpg";
import certificate3 from "../../../assets/certificates/Webdesign10min.jpg";


const certificates = [
  { title: "Ui/Ux for begineers", imageSrc: certificate1 },
  { title: "BNCC", imageSrc: certificate2 },
  { title: "Web Design Basic", imageSrc: certificate3 },
  


  // Add more certificates as needed
];

export const Certificate = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>My Certifications</h2>
      <div className={styles.grid}>
        {certificates.map((certificate, index) => (
          <div key={index} className={styles.card}>
            <img
              src={certificate.imageSrc}
              alt={certificate.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <p className={styles.text}>{certificate.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
