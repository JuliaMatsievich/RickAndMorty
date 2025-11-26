import styles from './Loading.module.scss';

interface ILoadingProps {
  size?: 'Small' | 'Large';
  text: string;
}

export const Loading = ({ size = 'Large', text }: ILoadingProps) => {
  return (
    <div className={styles.loading__container}>
      <div className={styles.loading__imgContainer}>
        <div className={styles.loading__inner}></div>
        <img
          src={
            size === 'Large'
              ? '/src/assets/images/Loading-large.png'
              : '/src/assets/images/Loading-small.png'
          }
          className={styles.loading__img}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};
