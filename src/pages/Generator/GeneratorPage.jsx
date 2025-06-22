import styles from './GeneratorPage.module.css';
import { Header } from '../../components/Header/Header';

export const GeneratorPage = () => {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.body}>
                <p className={styles.generatorText}>Сгенерируйте готовый csv-файл нажатием одной кнопки</p>
                <button className={styles.submitButton}>
                    Начать генерацию
                </button>
            </div>
        </div>
    );
};