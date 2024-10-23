import React from 'react';
import styles from './Education.module.css';

function Education() {
    const arrow = <svg width='calc(0.5vh + 1vw)' height='calc(0.5vh + 1vw)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>


  return (
    <main className='main'>
      <section className='resumeBody'>
        <h2 className={styles.educationH2}>Education</h2>

        <h3 className={styles.educationH3}>Boston University | Boston, MA</h3>
        <h4 className={styles.educationH4}>B.S. in Computer Science</h4>
        <h4 className={styles.educationH4}>Minor in Statistics</h4>
        <h4 className={styles.educationH4}>GPA 3.6</h4>
        <h4 className={styles.marginTop}>Relevant Courses:</h4>
        <p classname={styles.educationP}>
          <i className={styles.educationI}>{arrow}</i>Software Engineering<br />
          <i className={styles.educationI}>{arrow}</i>MEAN Stack Application Development<br />
          <i className={styles.educationI}>{arrow}</i>Data Science for Goods<br />
          <i className={styles.educationI}>{arrow}</i>Foundations of Data Science<br />
          <i className={styles.educationI}>{arrow}</i>Introduction to Database Systems<br />
          <i className={styles.educationI}>{arrow}</i>Theory of Computation<br />
          <i className={styles.educationI}>{arrow}</i>Analysis of Algorithms<br />
          <i className={styles.educationI}>{arrow}</i>Computer Systems<br />
          <i className={styles.educationI}>{arrow}</i>Combinatoric Structures<br />
          <i className={styles.educationI}>{arrow}</i>Probability in Computing<br />
          <i className={styles.educationI}>{arrow}</i>Data Science in R<br />
          <i className={styles.educationI}>{arrow}</i>Modern Regression Analysis in R<br />
          <i className={styles.educationI}>{arrow}</i>Linear Algebra
        </p>
      </section>
    </main>
  );
}

export default Education;