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

  const filteredAnimePhotos = await animePhotos.filter(
    (char: animeImage, index: number) => {
      return limit >= index + 1;
    }
  );

  return (
    <section className='my-4 mb-8'>
      <div className='flex justify-between items-center my-4'>
        <h1 className='text-primary text-xl tracking-wider font-medium '>
          Gallery
        </h1>
        <Link
          href={`/anime/${id}/photos`}
          className='text-xs font-normal text-accent'
        >{`> All photos (${animePhotos.length})`}</Link>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
        {filteredAnimePhotos?.map((photo: animeImage, index: number) => (
          <Image
            key={index}
            src={photo.webp.image_url}
            alt={'anime image'}
            width={150.41}
            height={240}
            className=''
          />
        ))}
      </div>
    </section>
  );
}
