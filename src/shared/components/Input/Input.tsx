import type { ReactNode } from 'react';

import { classNames } from '@/shared/helpers';

import styles from './Input.module.scss';

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  size?: 'big' | 'small';
  placeholder?: string;
  icon?: ReactNode;
}

export const Input = ({
  value,
  onChange,
  size = 'big',
  placeholder = '',
  icon
}: IInputProps) => {
  return (
    <div className={styles.input}>
      {icon !== undefined && (
        <div className={styles.input__icon_left}>{icon}</div>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={classNames({
          [styles.input__big]: size === 'big',
          [styles.input__small]: size === 'small',
          [styles.input__withIcon]: icon !== undefined
        })}
        placeholder={placeholder}
      />
    </div>
  );
};
