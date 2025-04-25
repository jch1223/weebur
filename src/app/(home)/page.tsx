'use client';

import { SearchInput } from '@/features/productsFilter/ui/searchInput';
import { OrderByRatingSelect } from '@/features/productsFilter/ui/orderByRatingSelect';
import { Catalog } from '@/widgets/catalog/ui/catalog';
import { Suspense } from 'react';
import { useABTestList } from './model/useABTestList';
import { GridTypeList } from '@/features/productsList/ui/girdTypeList';
import { ListTypeList } from '@/features/productsList/ui/listTypeList';

export default function Home() {
  const { listType } = useABTestList();

  return (
    <div>
      <div className="mb-10">
        <SearchInput />
      </div>

      <div className="mb-4 flex justify-end">
        <OrderByRatingSelect />
      </div>

      <Suspense
        fallback={
          listType === 'grid' ? (
            <GridTypeList.Skeleton />
          ) : (
            <ListTypeList.Skeleton />
          )
        }
      >
        {listType && <Catalog type={listType} />}
      </Suspense>
    </div>
  );
}
