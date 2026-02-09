import { useEffect, useRef, useState } from 'react';

import toast from 'react-hot-toast';

import type { AxiosError } from 'axios';

import { getAllCharacters } from '@/services';
import type { Filters } from '@/shared/types';
import type { Character } from '@/shared/types/api.types';

export const useGetAllCharacters = (filters: Filters) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    
    const params = {
      ...filters,
      page: 1,
    };

    getAllCharacters(params, { signal: controller.signal })
      .then((res) => {
        setCharacters(res.results ?? []);
      })
      .catch((err: AxiosError & { name?: string }) => {
        if (err.name === 'AbortError' || err.code === 'ERR_CANCELED') return;
        console.error('error', err.message);
        toast.error(err.message);
        setCharacters([]);
      })
      .finally(() => {
        if (abortControllerRef.current === controller) {
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [filters.name, filters.species, filters.gender, filters.status]);

  return {
    isLoading,
    characters
  };
};
