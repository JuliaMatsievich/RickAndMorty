import type { ISelectOption } from '@/shared/types';

import styles from './Status.module.scss';

interface ISelectOptionContentProps {
  option: ISelectOption;
}

export const Status = ({ option }: ISelectOptionContentProps) => {
  const statusClass = styles[`status__img_${option.value}`];
  return (
    <div className={styles.status}>
      {option.label}
      <div className={`${styles.status__img} ${statusClass}`}></div>
    </div>
  );
};
