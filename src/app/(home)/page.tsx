import { Test } from '@/widget/Test';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    </div>
  );
}
