import { Logo } from '@/assets/svg';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo className={styles.header__logo} />
      </div>
    </header>
  );
};
