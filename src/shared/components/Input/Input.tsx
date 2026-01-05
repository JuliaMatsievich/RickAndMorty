import type { ChangeEvent, ReactNode } from 'react';

import { classNames } from '@/shared/helpers';

import styles from './Input.module.scss';

interface IInputProps {
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: 'big' | 'small';
  placeholder?: string;
  icon?: ReactNode;
  classCustom?: string;
}

export const Input = ({
  value,
  name,
  onChange,
  size = 'big',
  placeholder = '',
  icon,
  classCustom
}: IInputProps) => {
  return (
    <div className={styles.input}>
      {icon !== undefined && (
        <div className={styles.input__icon_left}>{icon}</div>
      )}
      <input
        value={value}
        name={name}
        onChange={onChange}
        className={classNames(
          {
            [styles.input_big]: size === 'big',
            [styles.input_small]: size === 'small',
            [styles.input_withIcon]: icon !== undefined
          },
          classCustom
        )}
        placeholder={placeholder}
      />
    </div>
  );
};
