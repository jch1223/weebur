'use client';

import { ListCard } from '@/entity/products/ui/listCard';
import { useProductInfiniteScroll } from '@/features/productsList/hooks/useProductInfiniteScroll';

export const ListTypeList = () => {
  const { data, ref, hasNextPage, isFetchingNextPage } =
    useProductInfiniteScroll();
  console.log(isFetchingNextPage);

  return (
    <div className="flex flex-col gap-4">
      {data.map((product) => (
        <ListCard
          key={product.id}
          title={product.title}
          description={product.description}
          thumbnail={product.thumbnail}
          rating={product.rating}
          reviews={product.reviews}
        />
      ))}

      {isFetchingNextPage && (
        <div className="flex justify-center">
          <p>데이터를 불러오고 있습니다...</p>
        </div>
      )}

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
