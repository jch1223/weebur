'use client';

import { ProductsFilter } from '@/entity/products/api/productsApi';
import { OrderBy } from '@/features/productsFilter/model/types';
import { useRouter, useSearchParams } from 'next/navigation';

interface UseFilterSearchParamsReturn extends ProductsFilter {
  setQuerySearchParam: (query: string) => void;
  setRatingOrderBySearchParam: (sortBy: OrderBy) => void;
  resetFilter: () => void;
}

export const useFilterSearchParams = (): UseFilterSearchParamsReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query') || '';
  const sortByParam = searchParams.get('sortBy') || '';
  const orderParam = searchParams.get('order') || '';

  const sortBy = sortByParam === 'rating' ? 'rating' : undefined;
  const order =
    orderParam === 'asc' || orderParam === 'desc' ? orderParam : undefined;

  const setQuerySearchParam = (query: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('query', query);
    router.push(`?${newParams.toString()}`);
  };

  const setRatingOrderBySearchParam = (sortBy: OrderBy) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (sortBy === 'default') {
      newParams.delete('sortBy');
      newParams.delete('order');
    } else {
      newParams.set('sortBy', 'rating');
      newParams.set('order', sortBy);
    }

    router.push(`?${newParams.toString()}`);
  };

  const resetFilter = () => {
    router.push('/');
  };

  return {
    query: queryParam,
    sortBy,
    order,
    setQuerySearchParam,
    setRatingOrderBySearchParam,
    resetFilter,
  };
};
