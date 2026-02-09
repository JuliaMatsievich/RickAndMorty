import { apiClient } from '@/services/api.ts';
import type { GetAllCharactersResponse } from '@/shared/types';
import type { GetAllCharactersParams } from '@/shared/types/api.types';

export interface GetAllCharactersOptions {
  signal?: AbortSignal;
}

export const getAllCharacters = async (
  params: GetAllCharactersParams,
  options?: GetAllCharactersOptions
): Promise<GetAllCharactersResponse> => {
  const response = await apiClient.get(`/character`, {
    params,
    signal: options?.signal
  });
  return response.data;
};
