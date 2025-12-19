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
  const [nameCharacter, setNameCharacter] = useState<string>('');

  return (
    <div className={styles.filters}>
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e);
        }}
        placeholder={'Filter by name...'}
        icon={<Search />}
      />
      <Input
        value={nameCharacter}
        onChange={(e) => {
          setNameCharacter(e);
        }}
        size={'small'}
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
      <Select
        options={STATUS_OPTIONS}
        placeholder='Status'
        SelectOptionContentComponent={Status}
        size='small'
      />
    </div>
  );
};
