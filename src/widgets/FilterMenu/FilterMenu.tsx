import { type ChangeEvent, useState } from 'react';

import { Search } from '@/assets/svg';
import { useDebouncedEffect } from '@/hooks/useDebounceEffect';
import { Input, Select, Status } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';
import type { Filters } from '@/shared/types';

import styles from './FilterMenu.module.scss';

const SEARCH_DEBOUNCE_DELAY = 1000;

interface IFilterMenuProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export const FilterMenu = ({ filters, setFilters }: IFilterMenuProps) => {
  const [searchName, setSearchName] = useState('');

  useDebouncedEffect(
    () => {
      setFilters((prev) => ({
        ...prev,
        name: searchName || null
      }));
    },
    [searchName],
    SEARCH_DEBOUNCE_DELAY
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  const handleFilter = (value: string | null, filter: keyof Filters) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: value
    }));
  };

  const handleSpeciesFilter = (value: string | null) => {
    handleFilter(value, 'species');
  };

  const handleGenderFilter = (value: string | null) => {
    handleFilter(value, 'gender');
  };

  const handleStatusFilter = (value: string | null) => {
    handleFilter(value, 'status');
  };

  return (
    <div className={styles.filters}>
      <Input
        value={searchName}
        name='search'
        onChange={handleSearch}
        placeholder={'Filter by name...'}
        icon={<Search />}
      />
      <Select
        options={SPECIES_OPTIONS}
        placeholder='Species'
        selected={filters.species}
        setSelected={handleSpeciesFilter}
      />
      <Select
        options={GENDER_OPTIONS}
        placeholder='Gender'
        selected={filters.gender}
        setSelected={handleGenderFilter}
      />
      <Select
        options={STATUS_OPTIONS}
        placeholder='Status'
        SelectOptionContentComponent={Status}
        selected={filters.status}
        setSelected={handleStatusFilter}
      />
    </div>
  );
};
