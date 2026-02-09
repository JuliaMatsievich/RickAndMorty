import { useState } from 'react';

import bigLogo from '@/assets/images/big-logo.png';
import { useGetAllCharacters } from '@/hooks';
import { Loading, ToasterCustom } from '@/shared/components';
import type { Filters } from '@/shared/types';
import { CharacterCard, FilterMenu } from '@/widgets';

import styles from './Main.module.scss';

export const Main = () => {
  const initialFilters: Filters = {
    name: null,
    species: null,
    gender: null,
    status: null
  };
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const { isLoading, characters } = useGetAllCharacters(filters);

  return (
    <>
      <ToasterCustom />
      <img
        src={bigLogo}
        alt='big-logo'
        className={styles.main__logo}
      />
      <div className={styles.filter}>
        <FilterMenu
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      {isLoading ? (
        <Loading text={'Loading characters...'} />
      ) : (
        <div className={styles.main__characters}>
          {characters.length > 0 &&
            characters.map((character) => (
              <CharacterCard
                character={character}
                key={character.id}
              />
            ))}
        </div>
      )}
    </>
  );
};
