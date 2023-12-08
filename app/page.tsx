import { Suspense } from 'react';
import PopularAnimes from './components/PopularAnimes';
import Loading from './loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | MEOW',
    default: 'MEOW',
  },
  description: 'The official MEOW anime review app',
  metadataBase: new URL('https://delicate-bubblegum-8544e9.netlify.app/'),
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { currentPage?: string; type?: string; search?: string };
}) {
  const currentPage = Number(searchParams?.currentPage) || 1;
  const currentType = searchParams?.type || 'all';
  const currentSearch = searchParams?.search || '';

  return (
    <main>
      <h1 className='flex justify-center items-center flex-col text-3xl text-primary font-bold py-4 text-center mx-auto'>
        Animes
      </h1>

      <Suspense
        fallback={
          <Loading
            text={
              <p className='text-primary tracking-widest'>loading animes</p>
            }
          />
        }
      >
        <PopularAnimes
          currentPage={currentPage}
          currentType={currentType}
          currentSearch={currentSearch}
        />
      </Suspense>
    </main>
  );
}
