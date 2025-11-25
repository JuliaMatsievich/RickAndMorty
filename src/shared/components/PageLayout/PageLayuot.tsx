import { Outlet } from 'react-router';

import { Footer, Header } from '@shared/components';

import styles from './PageLayout.module.scss';

export const PageLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
