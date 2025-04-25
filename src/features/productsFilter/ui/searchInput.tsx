'use client';

import { useFilterSearchParams } from '@/features/productsFilter/model/useFilterSearchParams';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useLayoutEffect, useState } from 'react';

export const SearchInput = () => {
  const [search, setSearch] = useState('');

  const { query, setQuerySearchParam, resetFilter } = useFilterSearchParams();

  useLayoutEffect(() => {
    setSearch(query ?? '');
  }, [query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuerySearchParam(search);
  };

  const handleReset = () => {
    setSearch('');
    resetFilter();
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <Input
        placeholder="검색어를 입력해주세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2">
        <Button type="submit">검색</Button>
        <Button type="button" variant="outline" onClick={handleReset}>
          초기화
        </Button>
      </div>
    </form>
  );
};
