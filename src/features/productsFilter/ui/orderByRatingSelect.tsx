'use client';

import { OrderBy } from '@/features/productsFilter/model/types';
import { useFilterSearchParams } from '@/features/productsFilter/model/useFilterSearchParams';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { useState } from 'react';

export const OrderByRatingSelect = () => {
  const { order, setRatingOrderBySearchParam } = useFilterSearchParams();
  const [selectSortBy, setSelectSortBy] = useState<OrderBy>(order ?? 'default');

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
