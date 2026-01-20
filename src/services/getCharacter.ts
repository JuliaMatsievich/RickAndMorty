import { apiClient } from '@/services/api.ts';
import type { Character } from '@/shared/types/api.types.ts';

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await apiClient.get(`/character/${id}`);
  return response.data;
};
