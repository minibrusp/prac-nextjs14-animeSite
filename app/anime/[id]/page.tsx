import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import Anime from '@/app/components/ui/anime/Anime';
import Loading from '@/app/loading';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    template: '%s | MEOW',
    default: 'Anime',
  },
};

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
    </main>
  );
}
