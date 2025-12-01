import { Select, Status } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';

import styles from './FilterMenu.module.scss';

export const FilterMenu = () => {
  return (
    <div className={styles.filters}>
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
