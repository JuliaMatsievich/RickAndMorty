import { type ReactNode, useEffect, useRef } from 'react';

import styles from './InfiniteScroll.module.scss';

interface InfiniteScrollProps {
  children: ReactNode;
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  handleLoadNextPage: () => void;
  loader: ReactNode;
}

export const InfiniteScroll = ({
  children,
  hasNextPage,
  isNextPageLoading,
  handleLoadNextPage,
  loader
}: InfiniteScrollProps) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current || !hasNextPage || isNextPageLoading) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          handleLoadNextPage();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isNextPageLoading, handleLoadNextPage]);

  return (
    <>
      {children}
      <div
        ref={sentinelRef}
        className={styles.infiniteScroll}
      >
        {isNextPageLoading ? loader : null}
      </div>
    </>
  );
};
