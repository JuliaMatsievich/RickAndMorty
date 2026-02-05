import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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
  selected: string | null;
  setSelected: (value: string | null) => void;
}

export const Select = ({
  options,
  placeholder,
  SelectOptionContentComponent = DefaultSelectOptionContent,
  size = 'big',
  selected,
  setSelected
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === selected);

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

  const handleSelect = useCallback(
    (value: string | null) => {
      setSelected(value);
      setIsOpen(false);
    },
    [setSelected]
  );

  const optionsList = useMemo(() => {
    return options.map((option) => (
      <li
        key={option.value}
        className={classNames(styles.select__listItem, {
          [styles.listItem_big]: size === 'big',
          [styles.listItem_small]: size === 'small'
        })}
        onClick={() => handleSelect(option.value)}
      >
        <SelectOptionContentComponent
          option={option}
          size={size}
        />
      </li>
    ));
  }, [options, SelectOptionContentComponent, size, handleSelect]);

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
        <div
          className={classNames(styles.select__text, {
            [styles.text_big]: size === 'big',
            [styles.text_small]: size === 'small'
          })}
        >
          {selected && selectedOption ? (
            <SelectOptionContentComponent
              option={selectedOption}
              size={size}
            />
          ) : (
            placeholder
          )}
        </div>
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
