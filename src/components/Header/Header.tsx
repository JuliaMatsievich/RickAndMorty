import styles from './Header.module.scss';
import Logo from '../../assets/images/logo.svg?react';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo className={styles.header__logo} />
      </div>
    </header>
  );
};
