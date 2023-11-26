'use client';

import { useInView } from 'react-intersection-observer';
import Spinner from './ui/Spinner';
import { useCallback, useEffect, useState } from 'react';
import { fetchAnime } from '../lib/actions';
import { useSearchParams } from 'next/navigation';

let currentPage = 2;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const currentType = searchParams.get('kind') || 'tv,movie';

  useEffect(() => {
    setData([]);
  }, [currentType]);

  useEffect(() => {
    if (isLoading) return;
    if (inView) {
      fetchAnime(currentPage, currentType)
        .then((res) => {
          setData([...data, ...res]);
          currentPage++;
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [inView, data, isLoading, currentType]);

  return (
    <>
      {data}
      <div className='flex justify-center items-center w-full' ref={ref}>
        <Spinner />
      </div>
    </>
  );
}
