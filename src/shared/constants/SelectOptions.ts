import type { ISelectOption } from '../types';

export const SPECIES_OPTIONS: ISelectOption[] = [
  { id: 'Human', value: 'Human' },
  { id: 'Alien', value: 'Alien' },
  { id: 'Humanoid', value: 'Humanoid' },
  { id: 'Animal', value: 'Animal' },
  { id: 'Robot', value: 'Robot' },
  { id: 'Cronenberg', value: 'Cronenberg' },
  { id: 'Mythology', value: 'Mythology' },
  { id: 'Disease', value: 'Disease' },
  { id: 'Unknown', value: 'Unknown' }
];

export const GENDER_OPTIONS: ISelectOption[] = [
  { id: 'female', value: 'Female' },
  { id: 'male', value: 'Male' },
  { id: 'genderless', value: 'Genderless' },
  { id: 'unknown', value: 'Unknown' }
];

export const STATUS_OPTIONS: ISelectOption[] = [
  { id: 'alive', value: 'Alive' },
  { id: 'dead', value: 'Dead' },
  { id: 'unknown', value: 'Unknown' }
];
