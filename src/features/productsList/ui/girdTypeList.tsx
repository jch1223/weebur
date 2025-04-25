'use client';

import { GridCard } from '@/entity/products/ui/gridCard';
import { Product } from '@/entity/products/api/productsApi';

interface GridTypeListProps {
  data: Product[];
  isFetchingNextPage: boolean;
}

export const GridTypeList = ({
  data,
  isFetchingNextPage,
}: GridTypeListProps) => {
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
    </div>
  );
};

const GridTypeListSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:grid-cols-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <GridCard.Skeleton key={index} />
      ))}
    </div>
  );
};

GridTypeList.Skeleton = GridTypeListSkeleton;
