import { fetchAnimeById } from '@/app/lib/actions';
import { Badge } from '../badge';
import { animeGenre } from '@/app/lib/type';
import Image from 'next/image';

export default async function Anime({ id }: { id: string }) {
  const anime = await fetchAnimeById(id);

  const markup = { __html: anime.description_html };

  return (
    <section>
      <h1 className='text-3xl tracking-wider'>{anime.name}</h1>
      <ul className='flex flex-wrap gap-2 py-2 uppercase font-bold text-xs'>
        <Badge>{anime.kind}</Badge>
        <Badge>{anime.status}</Badge>
      </ul>
      <div className='my-2 max-w-xs w-full h-[45vh] relative'>
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={'anime image'}
          fill
        />
      </div>
      <ul className='flex flex-wrap gap-2 py-4 text-xs'>
        {anime.genres.map((genre: animeGenre, index: number) => (
          <Badge key={genre.id} variant={'default'}>
            {genre.name}
          </Badge>
        ))}
      </ul>

      <div dangerouslySetInnerHTML={markup}></div>

      <div>
        <h2 className='text-lg capitalize tracking-wide font-semibold'>
          screenshots
        </h2>
        <ul className='flex flex-row gap-4 my-2'>
          {anime.screenshots.map((screenshot: string, index: number) => (
            <li key={index}>
              <Image
                src={`https://shikimori.one${screenshot.original}`}
                alt={`anime screenshot image ${index + 1}`}
                width={150}
                height={150}
                placeholder='blur'
                blurDataURL={`https://shikimori.one${screenshot.preview}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
