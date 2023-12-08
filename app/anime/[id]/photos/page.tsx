import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import { fetchAnimePhotosById } from '@/app/lib/actions';
import { animeImage } from '@/app/lib/type';
import Image from 'next/image';

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const animePhotos: animeImage[] = await fetchAnimePhotosById(id);

  return (
    <main className='p-4 mx-auto min-h-[80vh] max-w-[1440px] '>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'home', href: '/' },
          {
            label: `anime-${id}`,
            href: `/anime/${id}`,
          },
          {
            label: `photos`,
            href: `/anime/${id}/photos`,
            active: true,
          },
        ]}
      />
      <section className='max-w-[1440px] mx-auto my-4'>
        <h1 className='text-2xl tracking-widest leading-6 font-medium py-2 sm:py-1'>
          Photos
        </h1>
        <div className='flex flex-row flex-wrap items-start justify-center gap-2 mx-auto my-4'>
          {animePhotos?.length === undefined && (
            <div>could not load photos</div>
          )}
          {animePhotos?.length > 0 &&
            animePhotos?.map((photo: animeImage, index: number) => (
              <Image
                key={index}
                src={photo.webp.large_image_url}
                alt={'anime image'}
                width={350}
                height={470}
                className='sm:max-w-[250px] sm:max-h-[370px] sm:min-h-[370px] md:max-w-[350px] md:max-h-[470px]'
              />
            ))}
        </div>
      </section>
    </main>
  );
}
