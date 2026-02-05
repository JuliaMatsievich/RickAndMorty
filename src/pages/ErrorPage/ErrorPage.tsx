import errorPageImg from '@/assets/images/errorPage.jpg';

import styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <img
        className={styles.errorPage_img}
        src={errorPageImg}
        alt='Error'
      />
      <p className={styles.errorPage_text}>
        Мм, похоже, я немного недопонял... фундаментальные законы этой
        реальности.
      </p>
      <p className={styles.errorPage_text}>Всё взрывается, короче</p>
    </div>
  );
};
