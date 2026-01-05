import { useState } from 'react';

import { Search } from '@/assets/svg';
import { Input, Select, Status } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';

import styles from './FilterMenu.module.scss';

export const FilterMenu = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.filters}>
      <Input
        value={searchValue}
        name='search'
        onChange={(e) => {
          setSearchValue(e);
        }}
        placeholder={'Filter by name...'}
        icon={<Search />}
      />
      <Select
        options={SPECIES_OPTIONS}
        placeholder='Species'
      />
      <Select
        options={GENDER_OPTIONS}
        placeholder='Gender'
      />
      <Select
        options={STATUS_OPTIONS}
        placeholder='Status'
        SelectOptionContentComponent={Status}
      />
    </div>
  );
};
