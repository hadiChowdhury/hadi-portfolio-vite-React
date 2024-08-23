import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <div className={styles.section}>
        <h2 className={styles.title}>Education</h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.itemText}>
              <h3 className={styles.degreeTitle}>Bachelor of Science (BSc)</h3>
              <h4 className={styles.institution}>American International University- Bangladesh</h4>
              <p className={styles.degree}>Computer Science Engineering</p>
              <p className={styles.year}>2019-2023</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemText}>
              <h3 className={styles.degreeTitle}>Higher Secondary Certificate (HSC)</h3>
              <h4 className={styles.institution}>Mohammadpur Central University College</h4>
              <p className={styles.degree}>Science</p>
              <p className={styles.year}>2019</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemText}>
              <h3 className={styles.degreeTitle}>Secondary School Certificate (SSC)</h3>
              <h4 className={styles.institution}>Gulshan Model School and College</h4>
              <p className={styles.degree}>Science</p>
              <p className={styles.year}>2017</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Experience</h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <div className={styles.itemText}>
              <h3 className={styles.jobTitle}>SQA engineer</h3>
              <h4 className={styles.company}>Automation Solutionz (ZeuZ)</h4>
              <p className={styles.jobDescription}>As an SQA Automation Engineer intern at Automation Solutionz, I have been involved in developing and executing automated test scripts to ensure the quality and performance of software products. My role includes collaborating with development teams to identify testing requirements, creating detailed test cases, and utilizing automation tools to streamline testing processes. This experience has honed my skills in problem-solving, test automation, and quality assurance within a dynamic and fast-paced environment.</p>
              {/* <p className={styles.skills}>Skills: React, Node.js, JavaScript</p> */}
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.itemText}>
              <h3 className={styles.jobTitle}>Technical Support Engineer</h3>
              <h4 className={styles.company}>Beacon Pharmaceuticals Plc</h4>
              <p className={styles.jobDescription}>During my internship at Beacon Pharmaceuticals Plc, I gained hands-on experience as an IT Support Engineer, where I was responsible for maintaining and troubleshooting IT infrastructure. My role included managing server-side operations, performing system administration tasks, and providing technical support to ensure smooth business operations. This experience enhanced my ability to work with complex systems, resolve technical issues efficiently, and contribute to the overall IT infrastructure's stability and security.</p>
              {/* <p className={styles.skills}>Skills: HTML, CSS, JavaScript</p> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
