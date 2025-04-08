import React from "react";

import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/emailIcon.png" alt="Email icon" />
          <a href="mailto:khushibhaskar.2006@gmail.com">Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src="/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/khushi-bhaskar-b00586324/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src="/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/Khushi-bhaskar01">Github</a>
        </li>
      </ul>
    </footer>
  );
};