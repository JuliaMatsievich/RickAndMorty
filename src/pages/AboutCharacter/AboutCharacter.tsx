import styles from './AbootCharacter.module.scss';
import ArrowBack from '../../assets/icons/arrow_back.svg?react';

export const AboutCharacter = () => {
  return (
    <>
      <div className={styles.about__container}>
        <div className={styles.about__goBack}>
          <ArrowBack />
          <p>GO BACK</p>
        </div>
        <div className={styles.about__content}>AboutCharacter</div>
      </div>
    </>
  );
};
