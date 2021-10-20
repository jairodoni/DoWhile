import { useEffect } from 'react';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

export function MessageList() {
  useEffect(() => {}, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Professor Sinistra time-turner steak and kidney pie. Cabbage Daily
            Prophet letters from no one Dervish and Banges leg.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://media.istockphoto.com/vectors/vintage-toons-retro-cartoon-smiling-duck-vector-id513605317?s=612x612"
                alt="Jairo Doni"
              />
            </div>
            <span>Pato</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Professor Sinistra time-turner steak and kidney pie. Cabbage Daily
            Prophet letters from no one Dervish and Banges leg.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://media.istockphoto.com/vectors/vintage-toons-retro-cartoon-smiling-duck-vector-id513605317?s=612x612"
                alt="Jairo Doni"
              />
            </div>
            <span>Pato</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Professor Sinistra time-turner steak and kidney pie. Cabbage Daily
            Prophet letters from no one Dervish and Banges leg.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/jairodoni.png" alt="Jairo Doni" />
            </div>
            <span>Jairo Doni</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
