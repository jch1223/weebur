'use client';

import { useLayoutEffect, useState } from 'react';

const getRandomListType = () => {
  const random = Math.random();
  let listType: 'list' | 'grid' = 'list';

  if (random < 0.5) {
    listType = 'grid';
  }

  return listType;
};

export const useABTestList = () => {
  const [listType, setListType] = useState<'list' | 'grid' | null>(null);

  useLayoutEffect(() => {
    if (!localStorage.getItem('listType')) {
      const newType = getRandomListType();
      localStorage.setItem(
        'listType',
        JSON.stringify({
          listType: newType,
          createdAt: new Date().getTime(),
        })
      );
      setListType(newType);
      return;
    }

    const stored = JSON.parse(localStorage.getItem('listType') || '{}');

    // 24시간이 지나지 않은 경우 - 저장된 값 사용
    if (new Date().getTime() - stored.createdAt < 24 * 60 * 60 * 1000) {
      setListType(stored.listType);
      return;
    }

    // 24시간이 지난 경우 - 새 값 설정
    const newType = getRandomListType();
    localStorage.setItem(
      'listType',
      JSON.stringify({
        listType: newType,
        createdAt: new Date().getTime(),
      })
    );

    setListType(newType);
  }, []);

  return { listType };
};
