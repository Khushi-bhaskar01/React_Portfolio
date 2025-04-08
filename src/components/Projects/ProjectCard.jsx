
import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { X } from "lucide-react"; 

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <img
          src="/log.jpg"
          alt="Project"
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <button
            onClick={() => setShowVideo(true)}
            className={styles.link}
          >
            Demo
          </button>
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Source
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setShowVideo(false)}
            >
              <X size={24} />
            </button>
            <video controls className={styles.video}>
              <source src={demo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};
