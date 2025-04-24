'use client';

import { GridCard } from '@/entity/products/ui/gridCard';
import { useProductInfiniteScroll } from '@/features/productsList/hooks/useProductInfiniteScroll';

export const GridTypeList = () => {
  const { data, ref, hasNextPage, isFetchingNextPage } =
    useProductInfiniteScroll();

  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:grid-cols-4">
      {data.map((product) => (
        <GridCard
          key={product.id}
          title={product.title}
          description={product.description}
          thumbnail={product.thumbnail}
          rating={product.rating}
          reviews={product.reviews}
        />
      ))}

      {isFetchingNextPage &&
        Array.from({ length: 4 }).map((_, index) => (
          <GridCard.Skeleton key={index} />
        ))}

      {hasNextPage ? (
        <div ref={ref} />
      ) : (
        <div className="flex justify-center">
          <p>더 이상 불러올 수 없습니다.</p>
        </div>
      )}
    </div>
  );
};
