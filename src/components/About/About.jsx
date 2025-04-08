import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/aboutImage.jpg"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a frontend developer in the learning phase, focused on creating responsive and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I'm currently learning backend development, focusing on building efficient and scalable web applications using the MERN Stack (MongoDB, Express.js, React, and Node.js).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/cursorIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I've crafted engaging UIs for websites using design tools like Figma and Canva
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};