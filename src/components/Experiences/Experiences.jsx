import React from 'react';
import styles from './Experiences.module.css';

function Experiences() {
    const arrow = <svg width='calc(0.8vh + 1.8vw)' height='calc(0.8vh + 1.8vw)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>

  return (
    <main className='main'>
      <section className='resumeBody'>
        <h2 className={styles.expH2}>Work Experiences</h2>

        <h3 className={styles.expH3}>
          <i> {arrow}</i>
          Client Services & Support
        </h3>
        <h4 className={styles.expH4}>BU IT Help Center IS&T</h4>
        <h4 className={styles.expH4}>Boston, MA</h4>
        <h4 className={styles.expH4}>Sept 2023 - May 2024</h4>
        <p className={styles.expP}>
          As part of the school's tech support team, I assist the school community in troubleshooting general issues with tech products through various channels, including phone, email, and in-person visits. My primary responsibility involves diagnosing hardware problems during walk-ins, creating support tickets, and ensuring that all relevant information is relayed to the repair department for further handling.
        </p>

        <h3 className={styles.expH3}>
          <i> {arrow}</i>
          Research: Analysis of Machine Learning Techs
        </h3>
        <h4 className={styles.expH4}>CIEI</h4>
        <h4 className={styles.expH4}>Nanjing, China</h4>
        <h4 className={styles.expH4}>Aug 2023</h4>
        <p className={styles.expP}>
          I collaborated on a group research project that involved analyzing the performance of various machine learning algorithms, including CNN, ANN, GRU, LSTM, ARIMA, and Transformer, in forecasting stock prices. My participation in the research helped reveal that LSTM outperformed the other algorithms in terms of accuracy. Additionally, I contributed to producing a paper titled “Comparative Analysis of Different Machine Learning Techniques in Forecasting Stock Price,” which summarized our findings and provided insights into the strengths and limitations of each technique.
        </p>
      </section>
    </main>
  );
}

export default Experiences;