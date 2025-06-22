import styles from './Uploader.module.css';
import { useState } from 'react';
import clearIcon from '../../assets/clear.svg';
import loaderIcon from '../../assets/loader.svg';

export const Uploader = () => {
    return (
    <div className={styles.uploader}>
        <p className={styles.uploaderText}>
            Загрузите
            <span className={styles.highlight}> csv </span>
            файл и получите
            <span className={styles.highlight}> полную информацию </span>
            о нём за сверхбыстрое время
        </p>
        <div className={styles.uploaderField}>
            <div className={styles.buttonUpload}>
                <button className={styles.uploadButton}>Загрузить файл</button>
                <p className={styles.uploadHint}>или перетащите сюда</p>
            </div>
        </div>
        <button className={styles.submitButton} disabled>
            Отправить
        </button>
    </div>
    );
};