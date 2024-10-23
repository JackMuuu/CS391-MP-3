import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <p>Copyright &copy; 2024 Yuanman's Website. All Rights Reserved. <Link to="/credits" style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}>
                    Credits
                    </Link>
                </p>
            </footer>
        </div>
    )
}

export default Footer