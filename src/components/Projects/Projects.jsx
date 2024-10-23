import React, { useState } from 'react';
import styles from './Projects.module.css';

function Projects() {

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState('');
    const arrow = <svg width='calc(0.8vh + 1.8vw)' height='calc(0.8vh + 1.8vw)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>

    const getValues = () => {
        return {
            firstNumber: parseFloat(firstNumber),
            secondNumber: parseFloat(secondNumber),
        };
    };

    const addition = () => {
        const { firstNumber, secondNumber } = getValues();
        setResult(firstNumber + secondNumber);
    };

    const minus = () => {
        const { firstNumber, secondNumber } = getValues();
        setResult(firstNumber - secondNumber);
    };

    const multiply = () => {
        const { firstNumber, secondNumber } = getValues();
        setResult(firstNumber * secondNumber);
    };

    const divide = () => {
        const { firstNumber, secondNumber } = getValues();
        if (secondNumber !== 0) {
            setResult(firstNumber / secondNumber);
        } else {
            setResult("Error: Division by zero");
        }
    };

    const power = () => {
        const { firstNumber, secondNumber } = getValues();
        let result = 1;
        for (let i = 0; i < secondNumber; i++) {
            result *= firstNumber;
        }
        setResult(result);
    };

    const clearFunction = () => {
        setFirstNumber('');
        setSecondNumber('');
        setResult('');
    };

    return (
        <main className='main'>
            <section className='resumeBody'>
                <h2 className={styles.proH2}>Projects</h2>

                <h3 className={styles.proH3}>
                    <i>{arrow}</i> Impact Analysis
                </h3>
                <h4 className={styles.proH4}>Client Based Project</h4>
                <h4 className={styles.proH4}>May 2024</h4>
                <p className={styles.proP}>
                I worked with the Mayor's Office of Returning Citizens (ORC) in the City of Boston, developing a comprehensive web dashboard that analyzed the office's impact for fiscal years 2022-2024. As a team leader, I spearheaded weekly internal and client meetings, led data analysis, oversaw the development of the dashboard's backend, and designed the database schema. I employed technologies such as Python, JavaScript, MongoDB, React, Trello, and Slack throughout the project. Additionally, I analyzed the statistical performance of the ORC and contributed to generating interactive graphs for their annual report.
                </p>

                <h3 className={styles.proH3}>
                    <i>{arrow}</i> Spotify Library-Based Web Application
                </h3>
                <h4 className={styles.proH4}>School Project</h4>
                <h4 className={styles.proH4}>Dec 2023</h4>
                <p className={styles.proP}>
                I collaborated with a team of four to develop a fully functional web application, featuring a dynamic JavaScript-based front-end, an Express.js back-end, and a MongoDB database to manage the back-end application state. My primary contributions included coding the majority of the back-end, handling API integration, and managing database interactions to ensure smooth functionality and data flow within the application.
                </p>

                <h3 className={styles.proH3}>
                    <i>{arrow}</i> Get Some Maths Done with My Calculator!
                </h3>

                <div className={styles.calWrap}>
                    <div className={styles.row}>
                        <input
                            id="first_number"
                            type="text"
                            placeholder="1st"
                            value={firstNumber}
                            onChange={(e) => setFirstNumber(e.target.value)}
                            className={styles.inputField}
                        />
                        <button className={styles.button} onClick={addition}>
                            <img src="./public/plus.png" alt="plus" className={styles.icon} />
                        </button>
                        <button className={styles.button} onClick={multiply}>
                            <img src="./public/multiply.png" alt="multiply" className={styles.icon} />
                        </button>
                        <button className={styles.button} onClick={power}>
                            <img src="./public/power.png" alt="power" className={styles.icon} />
                        </button>
                    </div>

                    <div className={styles.row}>
                        <input
                            id="second_number"
                            type="text"
                            placeholder="2nd"
                            value={secondNumber}
                            onChange={(e) => setSecondNumber(e.target.value)}
                            className={styles.inputField}
                        />
                        <button className={styles.button} onClick={minus}>
                            <img src="./public/minus.png" alt="minus" className={styles.icon} />
                        </button>
                        <button className={styles.button} onClick={divide}>
                            <img src="./public/divide.png" alt="divide" className={styles.icon} />
                        </button>
                        <button className={styles.button} onClick={clearFunction}>
                            <img src="./public/clear.png" alt="clear" className={styles.icon} />
                        </button>
                    </div>

                    <h3 id="output" className={styles.result}>
                        {result}
                    </h3>
                </div>
            </section>
        </main>
    );
}

export default Projects;