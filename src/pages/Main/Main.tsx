import { FilterMenu } from '@/widgets';

import styles from './Main.module.scss';

export const Main = () => {
  return (
    <>
      <img
        src='/src/assets/images/big-logo.png'
        alt='big-logo'
        className={styles.main__logo}
      />
      <FilterMenu />
    </>
  );
};
