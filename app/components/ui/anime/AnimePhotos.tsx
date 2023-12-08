import { fetchAnimePhotosById } from '@/app/lib/actions';
import { animeImage } from '@/app/lib/type';
import Image from 'next/image';
import Link from 'next/link';

export default async function AnimePhotos({
  id,
  limit,
}: {
  id: string;
  limit: number;
}) {
  const animePhotos: animeImage[] = await fetchAnimePhotosById(id);

  const filteredAnimePhotos = await animePhotos?.filter(
    (char: animeImage, index: number) => {
      return limit >= index + 1;
    }
  );

  if (filteredAnimePhotos?.length === undefined)
    return (
      <section className='my-4 mb-8'>
        <div className='flex justify-between items-center my-4'>
          <h2 className='text-primary text-xl tracking-wider font-medium '>
            Gallery
          </h2>
          <Link
            href={`/anime/${id}/photos`}
            className='text-xs font-normal text-accent'
          >{`> All photos (${animePhotos?.length})`}</Link>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
          {animePhotos?.length === undefined && (
            <>
              <p className='text-xs text-accent tracking-wider text-center'>
                could not load photos please reload the page...
              </p>
              <a
                href={`/anime/${id}`}
                className='text-xs font-normal text-accent'
              >{`> reload page`}</a>
            </>
          )}
        </div>
      </section>
    );

  if (filteredAnimePhotos?.length < 0)
    return (
      <section className='my-4 mb-8'>
        <div className='flex justify-between items-center my-4'>
          <h1 className='text-primary text-xl tracking-wider font-medium '>
            Gallery
          </h1>
          <Link
            href={`/anime/${id}/photos`}
            className='text-xs font-normal text-accent'
          >{`> All photos (${animePhotos?.length})`}</Link>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
          <p className='text-xs text-accent tracking-wider text-center'>
            no photos available
          </p>
        </div>
      </section>
    );

  return (
    <section className='my-4 mb-8 sm:grid-in-gallery sm:self-start sm:justify-self-center sm:mt-0 lg:justify-self-start lg:my-0'>
      <div className='flex justify-between items-center my-4'>
        <h2 className='text-primary text-xl tracking-wider font-medium '>
          Gallery
        </h2>
        <Link
          href={`/anime/${id}/photos`}
          className='text-xs font-normal text-accent'
        >{`> All photos (${animePhotos?.length})`}</Link>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center gap-2 lg:justify-start'>
        {animePhotos?.length === undefined && <div>could not load photos</div>}
        {filteredAnimePhotos?.length > 0 &&
          filteredAnimePhotos?.map((photo: animeImage, index: number) => (
            <Image
              key={index}
              src={photo.webp.image_url}
              alt={'anime image'}
              width={150.41}
              height={240}
              className='sm:max-w-[112px] sm:max-h-[165px]'
            />
          ))}
      </div>
    </section>
  );
}
