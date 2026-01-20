import { apiClient } from '@/services/api.ts';
import type { GetAllCharactersResponse } from '@/shared/types';

export const getAllCharacters = async (): Promise<GetAllCharactersResponse> => {
  const response = await apiClient.get(`/character`);
  return response.data;
};
