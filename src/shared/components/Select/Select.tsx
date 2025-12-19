import { useEffect, useMemo, useRef, useState } from 'react';

import { ArrowDown, ArrowUp } from '@/assets/svg';
import { classNames } from '@/shared/helpers';
import type { ISelectOption, ISelectOptionContentProps } from '@/shared/types';

import styles from './Select.module.scss';

export const DefaultSelectOptionContent = (
  props: ISelectOptionContentProps
) => {
  return <>{props.option.label}</>;
};

interface ISelectProps {
  options: ISelectOption[];
  placeholder: string;
  SelectOptionContentComponent?: React.FC<ISelectOptionContentProps>;
  size?: 'big' | 'small';
}

export const Select = ({
  options,
  placeholder,
  SelectOptionContentComponent = DefaultSelectOptionContent,
  size = 'big'
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<ISelectOption>();

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutSideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: ISelectOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  const optionsList = useMemo(() => {
    return options.map((option) => (
      <li
        key={option.value}
        className={classNames(styles.select__listItem, {
          [styles.listItem_big]: size === 'big',
          [styles.listItem_small]: size === 'small'
        })}
        onClick={() => handleSelect(option)}
      >
        <SelectOptionContentComponent option={option} />
      </li>
    ));
  }, [options, SelectOptionContentComponent, size]);

  return (
    <div
      className={styles.select}
      ref={selectRef}
    >
      <div
        className={classNames(styles.select__placeholder, {
          [styles.placeholder_big]: size === 'big',
          [styles.placeholder_small]: size === 'small'
        })}
        onClick={toggleOpen}
      >
        <p
          className={classNames(styles.select__text, {
            [styles.text_big]: size === 'big',
            [styles.text_small]: size === 'small'
          })}
        >
          {selected ? (
            <SelectOptionContentComponent option={selected} />
          ) : (
            placeholder
          )}
        </p>
        {isOpen ? (
          <ArrowUp
            className={classNames({
              [styles.arrow_big]: size === 'big',
              [styles.arrow_small]: size === 'small'
            })}
          />
        ) : (
          <ArrowDown
            className={classNames({
              [styles.arrow_big]: size === 'big',
              [styles.arrow_small]: size === 'small'
            })}
          />
        )}
      </div>

      {isOpen && (
        <ul
          className={classNames(styles.select__list, {
            [styles.list_big]: size === 'big',
            [styles.list_small]: size === 'small'
          })}
        >
          {optionsList}
        </ul>
      )}
    </div>
  );
};
