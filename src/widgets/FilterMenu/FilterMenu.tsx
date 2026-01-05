import { type ChangeEvent, useState } from 'react';

import { Search } from '@/assets/svg';
import { Input, Select, Status } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';
import type { ISelectOption } from '@/shared/types';

import styles from './FilterMenu.module.scss';

export const FilterMenu = () => {
  const [searchValue, setSearchValue] = useState('');
  const [species, setSpecies] = useState<ISelectOption>();
  const [gender, setGender] = useState<ISelectOption>();
  const [status, setStatus] = useState<ISelectOption>();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.filters}>
      <Input
        value={searchValue}
        name='search'
        onChange={handleSearch}
        placeholder={'Filter by name...'}
        icon={<Search />}
      />
      <Select
        options={SPECIES_OPTIONS}
        placeholder='Species'
        selected={species}
        setSelected={setSpecies}
      />
      <Select
        options={GENDER_OPTIONS}
        placeholder='Gender'
        selected={gender}
        setSelected={setGender}
      />
      <Select
        options={STATUS_OPTIONS}
        placeholder='Status'
        SelectOptionContentComponent={Status}
        selected={status}
        setSelected={setStatus}
      />
    </div>
  );
};
