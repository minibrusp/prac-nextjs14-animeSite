import { fetchAnimePhotosById } from '@/app/lib/actions';
import { animeImage } from '@/app/lib/type';
import Image from 'next/image';

export default async function AnimePhotos({ id }: { id: string }) {
  const animePhotos: animeImage[] = await fetchAnimePhotosById(id);

  return (
    <div className='flex flex-row flex-wrap items-center justify-start gap-4 my-4'>
      {animePhotos?.map((photo: animeImage, index: number) => (
        <Image
          key={index}
          src={photo.webp.image_url}
          alt={'anime image'}
          width={200}
          height={200}
          className='max-w-[150px] max-h-[150px]'
        />
      ))}
    </div>
  );
}
