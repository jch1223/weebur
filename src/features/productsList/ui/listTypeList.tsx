'use client';

import { Product } from '@/entity/products/api/productsApi';
import { ListCard } from '@/entity/products/ui/listCard';

interface ListTypeListProps {
  data: Product[];
  isFetchingNextPage: boolean;
}

export const ListTypeList = ({
  data,
  isFetchingNextPage,
}: ListTypeListProps) => {
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
          <ListCard.Skeleton />
        </div>
      )}
    </div>
  );
};
