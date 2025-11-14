import { Outlet } from 'react-router';
import { Footer } from '../Footer/Footer.tsx';
import { Header } from '../Header/Header.tsx';
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
