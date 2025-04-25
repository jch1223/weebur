import { SearchInput } from '@/features/productsFilter/ui/searchInput';
import { Catalog } from '@/widgets/catalog/ui/catalog';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <div className="mb-20">
        <SearchInput />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Catalog type="grid" />
      </Suspense>
    </div>
  );
}
