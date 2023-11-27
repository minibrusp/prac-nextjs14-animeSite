'use client';

import { useInView } from 'react-intersection-observer';
import Spinner from './ui/Spinner';
import React, { useEffect, useState } from 'react';
import { fetchAnime } from '../lib/actions';
import { useSearchParams } from 'next/navigation';

let currentPage = 2;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const currentType = searchParams.get('type') || 'all';
  const currentSearch = searchParams.get('search') || '';
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setData([]);
    setIsEnd(false);
    setIsLoading(false);
  }, [currentType, currentSearch]);

  useEffect(() => {
    if (isLoading) return;
    if (inView) {
      fetchAnime(currentPage, currentType, currentSearch)
        .then((res: JSX.Element[]) => {
          if (res?.length > 0) {
            setData([...data, ...res]);
          } else {
            setData([...data]);
            setIsEnd(true);
          }
          currentPage++;
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch((e) => {
          throw new Error(e.message);
        });
    }
  }, [inView, data, isLoading, currentType, currentSearch]);

  return (
    <>
      {data}
      <div className='flex justify-center items-center w-full' ref={ref}>
        {!isEnd && <Spinner />}
      </div>
    </>
  );
}
