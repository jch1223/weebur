'use client';

import { useProductsQuery } from '@/entity/products/api/hooks/useProductsQuery';
import { useFilterSearchParams } from '@/entity/products/model/useFilterSearchParams';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

export const useProductInfiniteScroll = () => {
  const { query, sortBy, order } = useFilterSearchParams();

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useProductsQuery({
      query,
      sortBy,
      order,
    });

  const ref = useIntersectionObserver({
    onIntersect: ([entry]) => {
      if (entry.isIntersecting) {
        if (hasNextPage && !isFetching) {
          fetchNextPage();
        }
      }
    },
  });

  return { data, hasNextPage, ref, isFetchingNextPage };
};
