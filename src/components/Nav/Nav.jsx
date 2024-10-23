import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav() {

  const icon = <svg width='calc(10px + 0.2vw + 0.2vh)' height='calc(10px + 0.2vw + 0.2vh)' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
  const download = <svg width='calc(10px + 0.2vw + 0.2vh)' height='calc(10px + 0.2vw + 0.2vh)' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
  const email = <svg width='calc(10px + 0.2vw + 0.2vh)' height='calc(10px + 0.2vw + 0.2vh)' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>

  return (
    <nav>
      <ul className={styles.navList}>
        <li id="me" className={styles.me}>
          <p>YUANMAN <b>MU</b></p>
        </li>
        <li id="senior" className={styles.senior}>
          <p>Senior Undergraduate</p>
        </li>
        <li id="home">
          <Link className={styles.nav} to="/">
            {icon} HOME
          </Link>
        </li>
        <li>
          <Link className={styles.nav} to="/education">
            {icon} EDUCATION
          </Link>
        </li>
        <li>
          <Link className={styles.nav} to="/experiences">
            {icon} WORK EXPERIENCE
          </Link>
        </li>
        <li>
          <Link className={styles.nav} to="/skills">
            {icon} SKILLS
          </Link>
        </li>
        <li>
          <Link className={styles.nav} to="/achievements">
            {icon} ACHIEVEMENTS
          </Link>
        </li>
        <li>
          <Link className={styles.nav} to="/projects">
            {icon} PROJECTS
          </Link>
        </li>
        <li>
          <Link className={styles.nav} to="/contact">
            {icon} CONTACT
          </Link>
        </li>
        <li id="cv" className={styles.cv}>
          <a href="../../download/yuanman_mu_cv.pdf" download="Yuanman_Mu_CV.pdf">
            {download} DOWNLOAD MY RESUME
          </a>
        </li>
        <li id="msg" className={styles.msg}>
          <a href="mailto:ymmu@bu.edu?subject=Message from Yuanman's Website&body=Hello, I would like to get in touch with you.">
            {email} SEND ME A MESSAGE
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;