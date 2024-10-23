import React from 'react';
import styles from './Home.module.css'; 

function Home() {
  return (
    <main className="main">
      <section className="resumeBody">
        <div className={styles.profileContainer}>
          <div className={styles.imgContainer}>
            <img src="./public/profile.jpg" alt="Profile photo" className={styles.responsiveImg} />
          </div>

          <div className={styles.introWords}>
            <h2>Hi, I'm <b style={{ color: '#F68A7C' }}>Yuanman Mu!</b></h2>
            <p id="title">Senior Undergraduate</p>
            <p>Currently studying at Boston University.</p>
            <p>Major in Computer Science and minor in Statistics.</p>
          </div>
        </div>

        <h2
          style={{
            textAlign: 'left',
            marginLeft: 'calc(14vw)',
            marginTop: 'calc(4vh)',
            marginBottom: 'calc(5vh)',
            fontSize: 'calc(1vh + 2vw)',
            fontFamily: 'Lato',
            fontWeight: 100
          }}
        >
          PROFILE
        </h2>

        <div className={styles.intro}>
          <div className={styles.bulletpoints}>
            <img src="./public/number-1.png" alt="no.1" className={styles.bullet} />
            <div className={styles.qsas}>
              <p className={styles.qs}>FULL NAME</p>
              <p className={styles.as}>Yuanman Mu</p>
            </div>
          </div>

          <div className={styles.bulletpoints}>
            <img src="./public/number-2.png" alt="no.2" className={styles.bullet} />
            <div className={styles.qsas}>
              <p className={styles.qs}>SCHOOL</p>
              <p className={styles.as}>Boston University</p>
            </div>
          </div>

          <div className={styles.bulletpoints}>
            <img src="./public/number-3.png" alt="no.3" className={styles.bullet} />
            <div className={styles.qsas}>
              <p className={styles.qs}>LOCATION</p>
              <p className={styles.as}>Boston, MA</p>
            </div>
          </div>

          <div className={styles.bulletpoints}>
            <img src="./public/number-4.png" alt="no.4" className={styles.bullet} />
            <div className={styles.qsas}>
              <p className={styles.qs}>INTRO</p>
              <p className={styles.as}>
                I would like to further my academic and professional involvement in studying and research on Computer Science/Data Science topics such as Software Engineering, Web Development, Machine Learning, and Data Analysis, while I continue to advance towards an MS degree.
              </p>
              <p className={styles.as}>
                Welcome to my website, here you will find my educational history and the projects that I have done; as well as other information that might be of interest to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home