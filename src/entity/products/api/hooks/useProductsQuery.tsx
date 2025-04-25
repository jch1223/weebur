'use client';

import { productsApi, ProductsFilter } from '@/entity/products/api/productsApi';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

const productsQueryKey = {
  all: ['products'],
  filter: (filter: ProductsFilter) => [...productsQueryKey.all, filter],
};

const DEFAULT_LIMIT = 20;
const DEFAULT_SKIP = 0;

export const useProductsQuery = ({
  query = '',
  order,
  sortBy,
}: ProductsFilter) => {
  return useSuspenseInfiniteQuery({
    initialPageParam: DEFAULT_SKIP,
    queryKey: productsQueryKey.filter({ query, order, sortBy }),
    queryFn: ({ pageParam }) =>
      productsApi.getProducts({
        limit: DEFAULT_LIMIT,
        skip: pageParam,
        filter: { query, order, sortBy },
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.total <= lastPage.skip + lastPage.limit) {
        return null;
      }
      return lastPage.skip + lastPage.limit;
    },
    select: (data) => data.pages.flatMap((page) => page.products),
  });
};
