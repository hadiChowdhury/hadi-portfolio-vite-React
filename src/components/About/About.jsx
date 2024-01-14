import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./About.module.css"
export const About = () => {
  return (
    <section>
        <h2>About</h2>
        <div>
            <img src={getImageUrl("about/aboutImage.png")} alt="About" />
            <ul>
                <li><img src={getImageUrl("about/cursorIcon.png")} alt="" />
                <div>
                    <h3>FrontEnd Developer</h3>
                    <p>I am a Frontend Developer with experience in building responsive and optimized websites with React</p>
                </div>
                </li>
                <li><img src={getImageUrl("about/uiIcon.png")} alt="" />
                <div>
                    <h3>UI/UX Designer</h3>
                    <p>I have experience in Ui/Ux design </p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
