import { SearchInput } from '@/features/productsFilter/ui/searchInput';
import { OrderByRatingSelect } from '@/features/productsFilter/ui/orderByRatingSelect';
import { Catalog } from '@/widgets/catalog/ui/catalog';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <div className="mb-10">
        <SearchInput />
      </div>

      <div className="mb-4 flex justify-end">
        <OrderByRatingSelect />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Catalog type="grid" />
      </Suspense>
    </div>
  );
}
