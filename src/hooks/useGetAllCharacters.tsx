import { getAllCharacters } from '@/services';
import type { Character } from '@/shared/types/api.types.ts';

import type { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

export const useGetAllCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadCharacters = async () => {
    getAllCharacters()
      .then((res) => {
        setCharacters(res.results);
      })
      .catch((err: AxiosError) => {
        console.error('error', err.message);
        toast.error(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return {
    isLoading,
    characters
  };
};
