import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import Anime from '@/app/components/ui/anime/Anime';
import AnimePhotos from '@/app/components/ui/anime/AnimePhotos';
import AnimeTrailers from '@/app/components/ui/anime/AnimeTrailers';
import Loading from '@/app/loading';
import React, { Suspense } from 'react';

export default function page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main className='p-4 mx-auto max-w-[1440px] '>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'home', href: '/' },
          {
            label: `anime-${id}`,
            href: `/anime/${id}`,
            active: true,
          },
        ]}
      />

      <Suspense fallback={<Loading />}>
        <Anime id={id} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <AnimePhotos id={id} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AnimeTrailers id={id} />
      </Suspense>
    </main>
  );
}
