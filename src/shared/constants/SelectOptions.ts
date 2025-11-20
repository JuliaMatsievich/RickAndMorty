import type { ISelectOption } from "../types";

export const SPECIES_OPTIONS: ISelectOption[] = [
    { id: 'species-1', value: 'Human' },
    { id: 'species-2', value: 'Alien' },
    { id: 'species-3', value: 'Humanoid' },
    { id: 'species-4', value: 'Animal' },
    { id: 'species-5', value: 'Robot' }
]

export const GENDER_OPTIONS: ISelectOption[] = [
    {id: 'gender-1', value: 'Female'},
    {id: 'gender-2', value: 'Male'},
    {id: 'gender-3', value: 'Genderless'},
    {id: 'gender-4', value: 'Unknown'}
]

export const STATUS_OPTIONS: ISelectOption[] = [
    {id: 'status-1', value: 'Alive'},
    {id: 'status-2', value: 'Dead'},
    {id: 'status-3', value: 'Unknown'}
]