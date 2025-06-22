import styles from './History.module.css';
import { Header } from '../../components/Header/Header';

export const History = () => {
    
    return (
        <div className={styles.page}>
            <Header />
                <div className={styles.body}>
                    <div className={styles.buttons}>
                        <button className={styles.submitButton}>Загрузить файл</button>
                        <button className={styles.clearButton}>Загрузить файл</button>
                    </div>  
            </div>
        </div>
    );
}