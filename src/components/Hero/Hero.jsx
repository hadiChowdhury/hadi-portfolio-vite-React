import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Hero.module.css"
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hi! I'm Hadi</h1>
            <p className={styles.description}>I am a Front End Developer with React and NodeJS. Reach out if you'd like to learn more</p>
            <a href="mailto:chowdhuryhadiaiub20@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero Image of Hadi' className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
