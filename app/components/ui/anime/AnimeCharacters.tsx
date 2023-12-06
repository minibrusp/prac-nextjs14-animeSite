import {
  fetchAnimePhotosById,
  fetchCharacterWithVActorByAnimeId,
} from '@/app/lib/actions';
import { animeCharacterWithVoiceActor, animeImage } from '@/app/lib/type';
import Image from 'next/image';
import Link from 'next/link';

export default async function AnimeCharacters({
  id,
  limit,
}: {
  id: string;
  limit: number;
}) {
  const animeCharacterWithVoiceActors: animeCharacterWithVoiceActor[] =
    await fetchCharacterWithVActorByAnimeId(id);

  const filteredCharWithVoiceActors =
    await animeCharacterWithVoiceActors?.filter(
      (char: animeCharacterWithVoiceActor, index: number) => {
        return limit >= index + 1;
      }
    );

  // console.log(animeCharacterWithVoiceActors);
  // console.log(filteredCharWithVoiceActors);

  if (filteredCharWithVoiceActors?.length === undefined)
    return (
      <section className='my-4'>
        <div className='flex justify-between items-center my-4'>
          <h2 className='text-primary text-xl tracking-wider font-medium '>
            Characters
          </h2>
          <Link
            href={`/anime/${id}/characters`}
            className='text-xs font-normal text-accent'
          >{`> All characters (${animeCharacterWithVoiceActors?.length})`}</Link>
        </div>
        <div className='flex flex-col justify-center items-center my-4'>
          <p className='text-xs text-accent tracking-wider text-center'>
            could not load characters please reload the page...
          </p>
          <a
            href={`/anime/${id}`}
            className='text-xs font-normal text-accent'
          >{`> reload page`}</a>
        </div>
      </section>
    );

  return (
    <>
      {filteredCharWithVoiceActors?.length > 0 && (
        <section className='my-4'>
          <div className='flex justify-between items-center my-4'>
            <h1 className='text-primary text-xl tracking-wider font-medium '>
              Characters
            </h1>
            <Link
              href={`/anime/${id}/characters`}
              className='text-xs font-normal text-accent'
            >{`> All characters (${animeCharacterWithVoiceActors?.length})`}</Link>
          </div>
          <div className='flex flex-row items-start justify-start flex-wrap gap-4 max-w-[350px] mx-auto my-4 sm:max-w-none sm:justify-center sm:gap-8'>
            {filteredCharWithVoiceActors?.map(
              (char: animeCharacterWithVoiceActor, index: number) => (
                <div
                  key={index}
                  className='flex justify-between items-start w-full sm:justify-start sm:w-auto sm:items-start sm:gap-2'
                >
                  {/* char  */}
                  <div className='text-center'>
                    <Image
                      src={char.character.images!.webp.image_url}
                      alt={`image of ${char.character.name}`}
                      width={148.7}
                      height={200}
                      className='sm:max-w-[120px] sm:max-h-[161px]'
                    />
                    <h3 className='text-xl tracking-wider font-medium max-w-[159px] sm:max-w-[120px]'>
                      {char.character.name}
                    </h3>
                    <p className='text-xs text-accent tracking-wider sm:max-w-[120px]'>
                      {char.role}
                    </p>
                  </div>
                  {/* vActor  */}
                  {char.voice_actors.length > 0 && (
                    <div className='text-center'>
                      <Image
                        src={char.voice_actors[0]?.person.images!.jpg.image_url}
                        alt={`image of ${char.character.name}`}
                        width={148.7}
                        height={200}
                        className='sm:max-w-[120px] sm:max-h-[161px]'
                      />
                      <h3 className='text-xl tracking-wider font-medium max-w-[159px] sm:max-w-[120px]'>
                        {char.voice_actors[0]?.person.name}
                      </h3>
                      <p className='text-xs text-accent tracking-wider sm:max-w-[120px]'>
                        {char.voice_actors[0]?.language}
                      </p>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}
