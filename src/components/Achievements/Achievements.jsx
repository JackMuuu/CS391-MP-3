import React from 'react';
import styles from './Achievements.module.css';

function Achievements() {
    const icon = <svg width='calc(0.8vh + 1.8vw)' height='calc(0.8vh + 1.8vw)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>

  return (
    <div className="main">
      <section className="resumeBody">

        <h2 className={styles.achieveH2}>Achievements</h2>

        <h3 className={styles.achieveH3}>
          {icon} 
          Certificate of Completion of Algorithms for Big Data Program
        </h3>
        <p className={styles.achieveP}>
          In August 2023, I participated in the "Innovative and International Talent Fostering Plan" in China, and successfully completed all of the requirements for the Algorithms for Big Data. I also produced a research paper in the Artificial Intelligence field.
        </p>

        <h3 className={styles.achieveH3}>
          {icon}
          Boston University Dean's List
        </h3>
        <p className={styles.achieveP}>Spring 2022</p>

        <h3 className={styles.achieveH3}>
        {icon}
          Boston University Dean's List
        </h3>
        <p className={styles.achieveP}>Fall 2022</p>

        <h3 className={styles.achieveH3}>
        {icon}
          Boston University Dean's List
        </h3>
        <p className={styles.achieveP}>Spring 2023</p>

        <h3 className={styles.achieveH3}>
        {icon}
          Boston University Dean's List
        </h3>
        <p className={styles.achieveP}>Fall 2023</p>

      </section>
    </div>
  );
}

export default Achievements;