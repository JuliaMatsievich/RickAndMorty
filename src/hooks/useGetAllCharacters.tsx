import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import type { AxiosError } from 'axios';

import { getAllCharacters } from '@/services';
import type { Character } from '@/shared/types/api.types.ts';

export const useGetAllCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadCharacters = async () => {
    getAllCharacters()
      .then((res) => {
        setCharacters(res.results);
      })
      .catch((err: AxiosError) => {
        console.error('error', err.message);
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return {
    loading,
    characters
  };
};
