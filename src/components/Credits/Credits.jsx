import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Credits.module.css';


function Credits() {
  return (
    <div className="main">
        <div className="resumeBody">
          <h2 className={styles.titleCredit}>Credits</h2>
          <h3 className={styles.wordsCredit}>This website was developed by Yuanman Mu. All Rights about the website reserved by Yuanman Mu.</h3>
        </div>
    </div>
  );
}

export default Credits;