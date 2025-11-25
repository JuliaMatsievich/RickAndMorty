import { ArrowBack } from '@assets/svg';

import styles from './AboutCharacter.module.scss';

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
