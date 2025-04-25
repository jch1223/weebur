'use client';

import { useFilterSearchParams } from '@/features/productsFilter/model/useFilterSearchParams';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { useLayoutEffect, useState } from 'react';

export type OrderBy = 'default' | 'asc' | 'desc';

export const OrderByRatingSelect = () => {
  const [selectSortBy, setSelectSortBy] = useState<OrderBy>('default');

  const { order, setRatingOrderBySearchParam } = useFilterSearchParams();

  useLayoutEffect(() => {
    if (!order) {
      setSelectSortBy('default');
      return;
    }

    setSelectSortBy(order);
  }, [order]);

  const handleSortBy = (value: OrderBy) => {
    setSelectSortBy(value);
    setRatingOrderBySearchParam(value);
  };

  return (
    <Select
      defaultValue="default"
      value={selectSortBy}
      onValueChange={(value: OrderBy) => {
        handleSortBy(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">정렬 없음</SelectItem>
        <SelectItem value="asc">낮은 평점순</SelectItem>
        <SelectItem value="desc">높은 평점순</SelectItem>
      </SelectContent>
    </Select>
  );
};
