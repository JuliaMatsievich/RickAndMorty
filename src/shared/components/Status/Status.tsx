import styles from './Status.module.scss';

interface ISelectOptionContentProps {
  value: string;
}

export const Status = ({ value }: ISelectOptionContentProps) => {
  const statusModifer = value.toLowerCase();
  const statusClass = styles[`status__img_${statusModifer}`];
  return (
    <div className={styles.status}>
      {value}
      <div className={`${styles.status__img} ${statusClass}`}></div>
    </div>
  );
};
