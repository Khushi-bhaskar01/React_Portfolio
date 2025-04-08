import React from "react";
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Khushi Bhaskar</h1>
        <p className={styles.description}>
        I'm a BTech CSE (AI) student and budding full-stack developer currently working with the MERN stack and React. 
        Always up for learning, building, and growing with the community!
        </p>
        <a href="https://www.linkedin.com/in/khushi-bhaskar-b00586324/" className={styles.contactBtn}>
          Let's Connect!! 🫱🏻‍🫲🏻
        </a>
      </div>
      <img
        src="/heroImage.jpg"
        alt="Hero image of me"
        className={styles.heroImg}
       />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};