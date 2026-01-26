import { type ChangeEvent, useState } from 'react';

import { Link } from 'react-router';

import { Check, Close, Pencil } from '@/assets/svg';
import { Input, Select, Status } from '@/shared/components';
import { STATUS_OPTIONS } from '@/shared/constants';
import { classNames } from '@/shared/helpers';
import type { ISelectOption } from '@/shared/types';
import type { Character } from '@/shared/types/api.types.ts';

import styles from './CharacterCard.module.scss';

interface ICharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: ICharacterCardProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>(character.name);
  const [location, setLocation] = useState<string>(character.location.name);
  const [selectedStatus, setSelectedStatus] = useState<ISelectOption>(
    STATUS_OPTIONS[0]
  );

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const saveEdit = () => {
    setIsEdit(false);
  };

  const handleSetName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSetLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className={styles.characterCard}>
      <div className={styles.characterCard__imgContainer}>
        <img
          className={styles.characterCard__img}
          src={character?.image}
          alt='character'
        />
      </div>
      <div className={styles.characterCard__info}>
        {isEdit ? (
          <Input
            name='name'
            value={name}
            onChange={handleSetName}
            size='small'
            classCustom={styles.input_edit}
          />
        ) : (
          <Link
            to='/about'
            className={styles.characterCard__name}
          >
            {name}
          </Link>
        )}

        <div>
          <p className={styles.characterCard__label}>Gender</p>
          <p className={styles.characterCard__value}>{character.gender}</p>
        </div>
        <div>
          <p className={styles.characterCard__label}>Species</p>
          <p className={styles.characterCard__value}>{character.species}</p>
        </div>
        <div>
          <label className={styles.characterCard__label}>Location</label>
          <Input
            value={location}
            name='location'
            onChange={handleSetLocation}
            size='small'
            classCustom={classNames(styles.input__location, {
              [styles.input_edit]: isEdit,
              [styles.input_noEdit]: !isEdit
            })}
          />
        </div>
        <div>
          <label className={styles.characterCard__label}>Status</label>
          {isEdit ? (
            <Select
              options={STATUS_OPTIONS}
              placeholder='Status'
              SelectOptionContentComponent={Status}
              size='small'
              selected={selectedStatus}
              setSelected={setSelectedStatus}
            />
          ) : (
            <Status
              option={selectedStatus}
              size='small'
            />
          )}
        </div>
      </div>
      <div className={styles.characterCard__icons}>
        {isEdit ? (
          <>
            <Check
              onClick={saveEdit}
              className={styles.characterCard__iconItem}
            />
            <Close
              onClick={handleEdit}
              className={styles.characterCard__iconItem}
            />
          </>
        ) : (
          <Pencil
            onClick={handleEdit}
            className={classNames(
              styles.characterCard__iconItem,
              styles.characterCard__iconItem_pencil
            )}
          />
        )}
      </div>
    </div>
  );
};
