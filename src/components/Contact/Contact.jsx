import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Contact.module.css"


const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach me out</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:chowdhuryhadiaiub20@gmail.com">chowdhuryhadiaiub20@gmail.com</a>
          </li>

          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
            <a href="https://www.linkedin.com/in/hadi-chowdhury-68a614278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin.com/hadi-chowdhury</a>
          </li>

          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
            <a href="https://github.com/hadiChowdhury">Github.com/hadiChowdhury</a>
          </li>
        </ul>
    </footer>
  )
}

export default Contact
