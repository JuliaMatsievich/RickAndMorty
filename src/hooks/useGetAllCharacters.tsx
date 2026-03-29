import { useCallback, useEffect, useRef, useState } from 'react';

import toast from 'react-hot-toast';

import type { AxiosError } from 'axios';

import { getAllCharacters } from '@/services';
import type { Filters } from '@/shared/types';
import type { Character } from '@/shared/types/api.types';

type LoadMode = 'initialMode' | 'nextPageMode';

const INITIAL_FILTERS: Filters = {
  name: null,
  species: null,
  gender: null,
  status: null
};

export const useGetAllCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNextPageLoading, setIsNextPageLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const abortControllerRef = useRef<AbortController | null>(null);
  const retryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPendingRetry = () => {
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  };

  const startLoading = (mode: LoadMode) => {
    if (mode === 'initialMode') {
      setIsLoading(true);
    } else {
      setIsNextPageLoading(true);
    }
  };

  const stopLoading = (mode: LoadMode) => {
    if (mode === 'initialMode') {
      setIsLoading(false);
    } else {
      setIsNextPageLoading(false);
    }
  };

  const loadCharacters = useCallback(
    async (page: number, loadMode: LoadMode) => {
      clearPendingRetry();

      if (loadMode === 'initialMode') {
        toast.dismiss();
      }

      if (abortControllerRef.current) abortControllerRef.current.abort();

      const controller = new AbortController();
      abortControllerRef.current = controller;

      startLoading(loadMode)

      const params = {
        ...filters,
        page
      };

      let shouldKeepLoader = false;

      try {
        const res = await getAllCharacters(params, {
          signal: controller.signal
        });

        if (controller.signal.aborted) return;

        setHasNextPage(res.info.next !== null);
        setCurrentPage(page);

        if (loadMode === 'initialMode') {
          setCharacters(res.results);
        } else {
          setCharacters((prev) => [...prev, ...res.results]);
        }
      } catch (err) {
        const error = err as AxiosError & { name?: string };

        if (error.name === 'AbortError' || error.code === 'ERR_CANCELED')
          return;

        const shouldRetrySilently =
          error.response?.status === 429 ||
          (loadMode === 'nextPageMode' && !error.response);

        if (shouldRetrySilently) {
          shouldKeepLoader = true;
          retryTimeoutRef.current = setTimeout(() => {
            void loadCharacters(page, loadMode);
          }, 1500);
          return;
        }

        console.error('error', error.message);
        toast.error(error.message || 'Something went wrong');
      } finally {
        if (!controller.signal.aborted && !shouldKeepLoader) {
          stopLoading(loadMode)
        }
      }
    },
    [filters]
  );


  const loadNextPage = useCallback(() => {
    if (isLoading || !hasNextPage || isNextPageLoading) {
      return;
    }

    void loadCharacters(currentPage + 1, 'nextPageMode');
  }, [currentPage, hasNextPage, isLoading, isNextPageLoading, loadCharacters]);

  useEffect(() => {
    void loadCharacters(1, 'initialMode');

    return () => {
      clearPendingRetry();
      abortControllerRef.current?.abort();
    };
  }, [loadCharacters]);

  return {
    isLoading,
    characters,
    hasNextPage,
    isNextPageLoading,
    loadNextPage,
    filters,
    setFilters
  };
};
