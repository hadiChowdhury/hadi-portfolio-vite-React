import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Hadi Chowdhury
      </a>
      <div className={styles.menu}>
        {/* the img code help to create that click option, if i click it show cross, if i click again it shows menu icon  */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">Expertise</a>
          </li>
          <li>
          <a href="#education">Education</a>
          </li>
          <li>
          <a href="#experience">Skills</a>
          </li>
          <li>
          <a href="#certificates">Certificate</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
