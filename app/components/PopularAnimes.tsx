import React from 'react';
import { fetchAnime } from '../lib/actions';
import LoadMore from './LoadMore';
import Filter from './Filter';

export default async function PopularAnimes({
  currentPage,
  currentType,
}: {
  currentPage: number;
  currentType: string;
}) {
  const result = await fetchAnime(currentPage, currentType);
  return (
    <>
      <div className='p-4 mx-auto max-w-[1440px] border-b-2 border-accent mb-4 flex flex-col sm:flex-row justify-between items-center gap-4'>
        <h2 className='text-xl font-semibold tracking-wide'>Popular Animes</h2>
        <Filter currentType={currentType} />
      </div>
      <div className='grid gap-10 my-0 p-4 mx-auto max-w-[1440px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {result}
        <LoadMore />
      </div>
    </>
  );
}
