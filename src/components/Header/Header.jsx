import styles from './Header.module.css';
import logo from '../../assets/Main_logo.svg';
import analyticsIcon from '../../assets/analytics-icon.svg';
import generatorIcon from '../../assets/generator-icon.svg';
import historyIcon from '../../assets/history-icon.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoName}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <div className={styles.nameFrame}>
                    <span className={styles.nameText}>МЕЖГАЛАКТИЧЕСКАЯ АНАЛИТИКА</span>
                </div>
            </div>
            
            <nav className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
                    }
                >
                    <div className={styles.menuItemContent}>
                        <img
                            src={analyticsIcon}
                            alt="Analytics icon"
                            className={styles.menuIcon}
                        />
                        <span className={styles.menuText}>CSV Аналитик</span>
                    </div>
                    <div className={styles.underline} />
                </NavLink>
                
                <NavLink
                    to="/generator"
                    className={({ isActive }) =>
                        isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
                    }
                >
                    <div className={styles.menuItemContent}>
                        <img
                            src={generatorIcon}
                            alt="Generator icon"
                            className={styles.menuIcon}
                        />
                        <span className={styles.menuText}>CSV Генератор</span>
                    </div>
                    <div className={styles.underline} />
                </NavLink>
                
                <NavLink
                    to="/history"
                    className={({ isActive }) =>
                        isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
                    }
                >
                    <div className={styles.menuItemContent}>
                        <img
                            src={historyIcon}
                            alt="History icon"
                            className={styles.menuIcon}
                        />
                        <span className={styles.menuText}>История</span>
                    </div>
                    <div className={styles.underline} />
                </NavLink>
            </nav>
        </header>
    );
};