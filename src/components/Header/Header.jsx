import styles from './Header.module.css';

function Header(){
    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.headerh1}>YUANMAN MU</h1>
                <p className={styles.headerp}>Welcome to Yuanman's Resume Website</p>
            </header>
        </div>
    );
};

export default Header;