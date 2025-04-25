'use client';

import { ProductsFilter } from '@/entity/products/api/productsApi';
import { useSearchParams } from 'next/navigation';

interface UseFilterSearchParamsReturn extends ProductsFilter {
  createFilterQueryString: (filter: ProductsFilter) => string;
}

export const useFilterSearchParams = (): UseFilterSearchParamsReturn => {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('query') || '';
  const sortByParam = searchParams.get('sortBy') || '';
  const orderParam = searchParams.get('order') || '';

  const sortBy = sortByParam === 'rating' ? 'rating' : undefined;
  const order =
    orderParam === 'asc' || orderParam === 'desc' ? orderParam : undefined;

  const createFilterQueryString = ({
    query,
    sortBy,
    order,
  }: ProductsFilter) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (query) {
      newParams.set('query', query);
    }

    if (sortBy) {
      newParams.set('sortBy', sortBy);
    }

    if (order) {
      newParams.set('order', order);
    }
    return newParams.toString();
  };

  return {
    query: queryParam,
    sortBy,
    order,
    createFilterQueryString,
  };
};
