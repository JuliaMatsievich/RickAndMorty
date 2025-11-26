import { useEffect, useMemo, useRef, useState } from 'react';

import { ArrowDown, ArrowUp } from '@/assets/svg';
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
        className={`${styles.select__text} ${styles[`select__text_${size}`]} ${styles.select__listItem} ${styles[`select__listItem_${size}`]}`}
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
        className={`${styles.select__placeholder} ${styles[`select__placeholder_${size}`]}`}
        onClick={toggleOpen}
      >
        <p
          className={`${styles.select__text} ${styles[`select__text_${size}`]}`}
        >
          {selected ? (
            <SelectOptionContentComponent option={selected} />
          ) : (
            placeholder
          )}
        </p>
        {isOpen ? (
          <ArrowUp className={`${styles[`select__arrow_${size}`]}`} />
        ) : (
          <ArrowDown className={`${styles[`select__arrow_${size}`]}`} />
        )}
      </div>

      {isOpen && (
        <ul
          className={`${styles.select__list} ${styles[`select__list_${size}`]}`}
        >
          {optionsList}
        </ul>
      )}
    </div>
  );
};
