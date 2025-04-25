'use client';

import { SearchInput } from '@/features/productsFilter/ui/searchInput';
import { OrderByRatingSelect } from '@/features/productsFilter/ui/orderByRatingSelect';
import { Catalog } from '@/widgets/catalog/ui/catalog';
import { Suspense } from 'react';
import { useABTestList } from './model/useABTestList';

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

      <Suspense fallback={<div>Loading...</div>}>
        <Catalog type={listType} />
      </Suspense>
    </div>
  );
}
