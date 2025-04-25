'use client';

import { useFilterSearchParams } from '@/entity/products/model/useFilterSearchParams';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchInput = () => {
  const [search, setSearch] = useState('');

  const router = useRouter();
  const { createFilterQueryString } = useFilterSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?${createFilterQueryString({ query: search })}`);
  };
  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <Input
        placeholder="검색어를 입력해주세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button type="submit">검색</Button>
    </form>
  );
};
