'use client';

import { useProductsQuery } from '@/entity/products/api/hooks/useProductsQuery';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useSearchParams } from 'next/navigation';

export const useProductInfiniteScroll = () => {
  const params = useSearchParams();
  const searchParam = params.get('search') || '';
  const sortByParam = params.get('sortBy') || '';
  const orderParam = params.get('order') || '';

  const sortBy = sortByParam === 'rating' ? 'rating' : undefined;
  const order =
    orderParam === 'asc' || orderParam === 'desc' ? orderParam : undefined;

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useProductsQuery({
      search: searchParam,
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
