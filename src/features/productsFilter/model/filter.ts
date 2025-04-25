import { ProductsFilter } from '@/entity/products/api/productsApi';

type FilterKey = keyof ProductsFilter;
type FilterValue<T extends FilterKey> = T extends 'query'
  ? string
  : T extends 'sortBy'
    ? 'rating'
    : T extends 'order'
      ? 'asc' | 'desc'
      : never;

type Filter<T extends FilterKey> = {
  [K in T]: {
    key: K;
    defaultValue?: FilterValue<K> | '';
  };
};

export const FILTERS: Filter<FilterKey> = {
  query: { key: 'query', defaultValue: '' },
  sortBy: { key: 'sortBy', defaultValue: '' },
  order: { key: 'order', defaultValue: '' },
};
