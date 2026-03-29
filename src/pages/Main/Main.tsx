import bigLogo from '@/assets/images/big-logo.png';
import { useGetAllCharacters } from '@/hooks';
import { InfiniteScroll, Loading, ToasterCustom } from '@/shared/components';
import { CharacterCard, FilterMenu } from '@/widgets';

import styles from './Main.module.scss';

export const Main = () => {
  
  const {
    isLoading,
    characters,
    hasNextPage,
    isNextPageLoading,
    loadNextPage,
    filters,
    setFilters
  } = useGetAllCharacters();

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
        <InfiniteScroll
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          handleLoadNextPage={loadNextPage}
          loader={
            <Loading
              text={'Loading characters...'}
              size='Small'
            />
          }
        >
          <div className={styles.main__characters}>
            {characters.length > 0 &&
              characters.map((character) => (
                <CharacterCard
                  character={character}
                  key={character.id}
                />
              ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
