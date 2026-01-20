import { useGetAllCharacters } from '@/hooks';
import { Loading, ToasterCustom } from '@/shared/components';
import { CharacterCard, FilterMenu } from '@/widgets';

import styles from './Main.module.scss';

export const Main = () => {
  const { loading, characters } = useGetAllCharacters();

  return (
    <>
      <ToasterCustom />
      <img
        src='/src/assets/images/big-logo.png'
        alt='big-logo'
        className={styles.main__logo}
      />
      <div className={styles.filter}>
        <FilterMenu />
      </div>
      {loading ? (
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
