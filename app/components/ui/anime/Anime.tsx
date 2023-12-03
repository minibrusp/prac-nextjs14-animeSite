import { fetchAnimeById, fetchAnimePhotosById } from '@/app/lib/actions';
import { Badge } from '../badge';
import {
  Anime as TypeAnime,
  Producer as TypeProducer,
  Lincensor as TypeLicensor,
  Studio as TypeStudio,
  Genre as TypeGenre,
} from '@/app/lib/type';
import Image from 'next/image';
import { addComma, formatDate } from '@/lib/utils';

export default async function Anime({ id }: { id: string }) {
  const anime: TypeAnime = await fetchAnimeById(id);

  // console.log(anime);

  return (
    <section>
      <div className='my-2 max-w-xs w-full h-[480px] relative'>
        <Image
          src={anime.images.webp.large_image_url}
          alt={'anime image'}
          fill
        />
      </div>
      <ul className='flex flex-wrap gap-2 py-2 uppercase font-bold text-xs'>
        <li>
          <Badge className='text-xs'>{anime.type}</Badge>
        </li>
        <li>
          <Badge className='text-xs'>
            {anime.season}
            {anime.year}
          </Badge>
        </li>
        <li>
          <Badge className='text-xs'>{anime.status}</Badge>
        </li>
      </ul>
      <h1 className='text-2xl tracking-wide leading-6 font-medium py-2'>
        {anime.title}
      </h1>
      <div>
        <p className='text-xs tracking-widest'>{anime.synopsis}</p>
      </div>

      <div>
        <h2 className='py-4 text-xl tracking-wider font-medium'>Trailer</h2>
        <iframe
          src={anime.trailer.embed_url}
          className='aspect-video h-[200px] block w-full'
          allowFullScreen={true}
        />
      </div>

      <div>
        <h2 className='py-4 text-xl tracking-wider font-medium'>More Info</h2>
        <div className='text-[10px]'>
          <dl className='grid grid-cols-[93.23px_1fr] tracking-widest leading-4 '>
            {/* main title */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center min-w-[93.23px] border-b border-accent'>
              Main Title
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-accent'>
              {anime.title}
            </dd>
            {/* official title */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Official Title
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-accent'>
              {anime.title}
            </dd>
            {/* japanses title */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Japanese Title
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-accent'>
              {anime.title_japanese}
            </dd>
            {/* type  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Type
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {anime.type}
            </dd>
            {/* episodes  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Episodes
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {anime.episodes}
            </dd>
            {/* status  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Status
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {anime.status}
            </dd>
            {/* aired  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Aired
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {formatDate(anime.aired.from)} to {formatDate(anime.aired.to)}
            </dd>
            {/* premiered  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Premiered
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {anime.season.toUpperCase()} {anime.year}
            </dd>
            {/* boradcast  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Broadcast
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {anime.broadcast.string}
            </dd>
            {/* producers  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Producers
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {anime.producers.map((producer: TypeProducer, index: number) => (
                <span key={index}>
                  {producer.name}
                  {addComma(index, anime.producers.length)}
                </span>
              ))}
            </dd>
            {/* licensors  */}
            {anime.licensors.length > 0 && (
              <>
                <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
                  Licensors
                </dt>
                <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
                  {anime.licensors.map(
                    (licensor: TypeLicensor, index: number) => (
                      <span key={index}>
                        {licensor.name}
                        {addComma(index, anime.licensors.length)}
                      </span>
                    )
                  )}
                </dd>
              </>
            )}

            {/* studios  */}
            {anime.studios.length > 0 && (
              <>
                <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
                  Studios
                </dt>
                <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
                  {anime.studios.map((studio: TypeStudio, index: number) => (
                    <span key={index}>
                      {studio.name}
                      {addComma(index, anime.studios.length)}
                    </span>
                  ))}
                </dd>
              </>
            )}

            {/* duration  */}
            {anime.source && (
              <>
                <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
                  Source
                </dt>
                <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
                  {anime.source}
                </dd>
              </>
            )}

            {/* genres  */}
            <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
              Genres
            </dt>
            <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
              {anime.genres.map((genre: TypeGenre, index: number) => (
                <span key={index}>
                  {genre.name}
                  {addComma(index, anime.genres.length)}
                </span>
              ))}
            </dd>

            {/* duration  */}
            {anime.duration && (
              <>
                <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
                  Duration
                </dt>
                <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
                  {anime.duration}
                </dd>
              </>
            )}

            {/* rating  */}
            {anime.rating && (
              <>
                <dt className='text-center bg-primary text-secondary px-3 py-2 flex justify-center items-center border-b border-accent'>
                  Rating
                </dt>
                <dd className='bg-secondary text-primary px-3 py-2 border-b border-primary'>
                  {anime.rating}
                </dd>
              </>
            )}
          </dl>
        </div>
      </div>

      {/* <ul className='flex flex-wrap gap-2 py-2 uppercase font-bold text-xs'>
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

      <ul className='flex flex-wrap gap-2 py-4 text-xs'>
        {anime.genres.map((genre, index: number) => (
          <Badge key={genre.mal_id} variant={'default'}>
            {genre.name}
          </Badge>
        ))}
      </ul> */}
    </section>
  );
}
