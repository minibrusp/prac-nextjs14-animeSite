import React from 'react';
import { fetchAnime } from '../lib/actions';
import LoadMore from './LoadMore';

export default async function PopularAnimes({
  currentPage,
}: {
  currentPage: number;
}) {
  const result = await fetchAnime(currentPage);
  return (
    <div className='grid gap-10 my-0 p-4 mx-auto max-w-[1440px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {result}
      <LoadMore />
    </div>
  );
}
