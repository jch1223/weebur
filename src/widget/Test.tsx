'use client';

import { useProductsQuery } from '@/entity/products/api/hooks/useProductsQuery';

export const Test = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProductsQuery({ search: '' });

  console.log(data);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>Load more</button>
      )}
    </div>
  );
};
