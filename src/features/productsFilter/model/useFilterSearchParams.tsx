'use client';

import { ProductsFilter } from '@/entity/products/api/productsApi';
import { FILTERS } from '@/features/productsFilter/model/filter';
import { OrderBy } from '@/features/productsFilter/ui/orderByRatingSelect';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UseFilterSearchParamsReturn extends ProductsFilter {
  setQuerySearchParam: (query: string) => void;
  setRatingOrderBySearchParam: (sortBy: OrderBy) => void;
  resetFilter: () => void;
}

export const useFilterSearchParams = (): UseFilterSearchParamsReturn => {
  const [filter, setFilter] = useState<ProductsFilter>({});

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const filters = Object.values(FILTERS).reduce((acc, filter) => {
      const value = searchParams.get(filter.key) || filter.defaultValue;
      return {
        ...acc,
        [filter.key]: value,
      };
    }, {} as ProductsFilter);

    setFilter({
      query: filters.query,
      sortBy: filters.sortBy,
      order: filters.order,
    });
  }, [searchParams]);

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
    const newParams = new URLSearchParams();

    Object.values(FILTERS).forEach((filter) => {
      newParams.delete(filter.key);
    });

    router.push(`?${newParams.toString()}`);
  };

  return {
    query: filter.query,
    sortBy: filter.sortBy,
    order: filter.order,
    setQuerySearchParam,
    setRatingOrderBySearchParam,
    resetFilter,
  };
};
