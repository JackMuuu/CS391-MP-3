import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    const arrow = <svg width='calc(0.8vh + 1.8vw)' height='calc(0.8vh + 1.8vw)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
  return (
    <main className='main'>
      <section className='resumeBody'>
        <h2 classname={styles.skillH2}>Skills</h2>

        <h3 classname={styles.skillH3}>
          {arrow} Programming Languages:
        </h3>
        <p classname={styles.skillP}>
          Java (Advanced)<br />
          Python (Advanced)<br />
          R (Advanced)<br />
          JavaScript (Intermediate)<br />
          HTML (Intermediate)<br />
          Kotlin (Intermediate)<br />
          C (Intermediate)
        </p>

        <h3 classname={styles.skillH3}>
          {arrow} Familiar with:
        </h3>
        <p classname={styles.skillP}>
          SQL<br />
          noSQL<br />
          XML<br />
          Node.js<br />
          MongoDB<br />
          DBMS<br />
          Jetpack Compose<br />
          Linux
        </p>
      </section>
    </main>
  );
}

export default Skills;