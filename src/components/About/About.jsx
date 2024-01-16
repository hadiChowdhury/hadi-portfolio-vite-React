import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./About.module.css"
export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="About"className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="" />
                <div className={styles.aboutItemText}>
                    <h3>FrontEnd Developer</h3>
                    <p>I am a Frontend Developer with experience in building responsive and optimized websites with React</p>
                </div>
                </li >
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="" />
                <div className={styles.aboutItemText}>
                    <h3>UI/UX Designer</h3>
                    <p>I have experience in Ui/Ux design </p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
