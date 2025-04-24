import { Catalog } from '@/widgets/catalog/ui/catalog';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Catalog type="grid" />
      </Suspense>
    </div>
  );
}
