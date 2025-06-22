import styles from './AnalyticsPage.module.css';
import { Header } from '../../components/Header/Header';
import { Uploader } from '../../components/Uploader/Uploader';

export const AnalyticsPage = () => {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.body}>
                <Uploader />
                <p className={styles.bottomText}>Здесь появится хайлайт</p>
            </div>
        </div>
    );
};