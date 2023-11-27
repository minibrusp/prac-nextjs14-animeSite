import { fetchAnimeById, fetchAnimePhotosById } from '@/app/lib/actions';
import { Badge } from '../badge';
import { Anime as TypeAnime } from '@/app/lib/type';
import Image from 'next/image';

export default async function Anime({ id }: { id: string }) {
  const anime: TypeAnime = await fetchAnimeById(id);

  return (
    <section>
      <h1 className='text-3xl tracking-wider'>{anime.title}</h1>
      <ul className='flex flex-wrap gap-2 py-2 uppercase font-bold text-xs'>
        <li>
          <Badge>{anime.type}</Badge>
        </li>
        <li>
          <Badge>{anime.status}</Badge>
        </li>
        <li>
          <Badge>{anime.rating}</Badge>
        </li>
        <li>
          <Badge>{anime.duration}</Badge>
        </li>
        <li>
          <Badge>{anime.episodes} Episodes</Badge>
        </li>
        <li>
          <Badge>{anime.year}</Badge>
        </li>
        <li>
          <Badge>{anime.season}</Badge>
        </li>
      </ul>
      <div className='my-2 max-w-xs w-full h-[45vh] relative'>
        <Image src={anime.images.webp.image_url} alt={'anime image'} fill />
      </div>
      <ul className='flex flex-wrap gap-2 py-4 text-xs'>
        {anime.genres.map((genre, index: number) => (
          <Badge key={genre.mal_id} variant={'default'}>
            {genre.name}
          </Badge>
        ))}
      </ul>

      <div>
        <p>{anime.synopsis}</p>
      </div>
    </section>
  );
}
