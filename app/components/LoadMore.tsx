'use client';

import { useInView } from 'react-intersection-observer';
import Spinner from './ui/Spinner';
import { useCallback, useEffect, useState } from 'react';
import { fetchAnime } from '../lib/actions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

let currentPage = 2;

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const currentPage = Number(searchParams.get('currentPage')) || 1;
  const [isLoading, setIsLoading] = useState(false);

  // # for useSearchParams but still got issues it would navigate the window to the top
  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set(name, value);

  //     setIsLoading(false);
  //     return params.toString();
  //   },
  //   [searchParams]
  // );

  // useEffect(() => {
  //   if (isLoading) return;
  //   if (inView) {
  //     setIsLoading(true);
  //     router.push(
  //       pathname + '?' + createQueryString('currentPage', `${currentPage + 1}`)
  //     );
  //   }
  // }, [inView, currentPage, pathname, router, createQueryString]);

  useEffect(() => {
    if (isLoading) return;
    if (inView) {
      fetchAnime(currentPage)
        .then((res) => {
          setData([...data, ...res]);
          currentPage++;
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [inView, data, isLoading]);

  return (
    <>
      {data}
      <div className='flex justify-center items-center w-full' ref={ref}>
        <Spinner />
      </div>
    </>
  );
}
