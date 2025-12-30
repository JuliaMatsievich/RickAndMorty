import { classNames } from '@/shared/helpers';
import type { ISelectOption } from '@/shared/types';

import styles from './Status.module.scss';

interface ISelectOptionContentProps {
  option: ISelectOption;
  size?: 'small' | 'big';
}

export const Status = ({ option, size = 'big' }: ISelectOptionContentProps) => {
  const statusClass = styles[`status__img_${option.value}`];
  return (
    <div className={styles.status}>
      <p
        className={classNames({
          [styles.status__text_big]: size === 'big',
          [styles.status__text_small]: size === 'small'
        })}
      >
        {option.label}
      </p>
      <div className={`${styles.status__img} ${statusClass}`}></div>
    </div>
  );
};
