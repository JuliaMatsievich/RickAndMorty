import { useState } from 'react';

import { Link } from 'react-router';

import { Check, Close, Pencil } from '@/assets/svg';
import { Input, Select, Status } from '@/shared/components';
import { STATUS_OPTIONS } from '@/shared/constants';
import { classNames } from '@/shared/helpers';
import type { ISelectOption } from '@/shared/types';

import styles from './CharacterCard.module.scss';

export const CharacterCard = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>('Rick Sanchez');
  const [location, setLocation] = useState<string>('Earth');
  const [selectedStatus, setSelectedStatus] = useState<ISelectOption>(
    STATUS_OPTIONS[0]
  );

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const saveEdit = () => {
    setIsEdit(false);
  };

  return (
    <div className={styles.characterCard}>
      <div className={styles.characterCard__img}>
        <img
          src={'../src/assets/images/rick.png'}
          alt='character'
        />
      </div>
      <div className={styles.characterCard__info}>
        <div className={styles.characterCard__name}>
          {isEdit ? (
            <Input
              value={name}
              onChange={(e) => {
                setName(e);
              }}
              size={'small'}
              classCustom={classNames({
                [styles.input_edit]: isEdit,
                [styles.input_noEdit]: !isEdit
              })}
            />
          ) : (
            <Link to={'/about'}>{name}</Link>
          )}
        </div>

        <div>
          <p className={styles.characterCard__label}>Gender</p>
          <p className={styles.characterCard__value}>Mail</p>
        </div>
        <div>
          <p className={styles.characterCard__label}>Species</p>
          <p className={styles.characterCard__value}>Human</p>
        </div>
        <div>
          <label className={styles.characterCard__label}>Location</label>
          <Input
            value={location}
            onChange={(e) => {
              setLocation(e);
            }}
            size={'small'}
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
              placeholder={'Status'}
              SelectOptionContentComponent={Status}
              size='small'
              selected={selectedStatus}
              setSelected={setSelectedStatus}
            />
          ) : (
            <Status
              option={selectedStatus}
              size={'small'}
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
            className={styles.characterCard__iconItem_pencil}
          />
        )}
      </div>
    </div>
  );
};
