'use client';

import { useProductInfiniteScroll } from '@/widgets/catalog/hooks/useProductInfiniteScroll';
import { GridTypeList } from '@/widgets/catalog/ui/girdTypeList';
import { ListTypeList } from '@/widgets/catalog/ui/listTypeList';

interface CatalogProps {
  type: 'list' | 'grid';
}

export const Catalog = ({ type }: CatalogProps) => {
  const { data, ref, hasNextPage, isFetchingNextPage } =
    useProductInfiniteScroll();

  switch (type) {
    case 'list':
      return (
        <div className="flex flex-col gap-10">
          <ListTypeList data={data} isFetchingNextPage={isFetchingNextPage} />
          {hasNextPage ? <div ref={ref} /> : <NoMoreProducts />}
        </div>
      );
    case 'grid':
      return (
        <div className="flex flex-col gap-10">
          <GridTypeList data={data} isFetchingNextPage={isFetchingNextPage} />
          {hasNextPage ? <div ref={ref} /> : <NoMoreProducts />}
        </div>
      );
    default:
      return null;
  }
};

const NoMoreProducts = () => {
  return (
    <div className="flex justify-center">
      <p>더 이상 불러올 수 없습니다.</p>
    </div>
  );
};
