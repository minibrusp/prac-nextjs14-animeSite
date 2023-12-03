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
    await animeCharacterWithVoiceActors.filter(
      (char: animeCharacterWithVoiceActor, index: number) => {
        return limit >= index + 1;
      }
    );

  // console.log(animeCharacterWithVoiceActors);
  // console.log(filteredCharWithVoiceActors);

  return (
    <section className='my-4'>
      <div className='flex justify-between items-center my-4'>
        <h1 className='text-primary text-xl tracking-wider font-medium '>
          Characters
        </h1>
        <Link
          href={`/anime/${id}/characters`}
          className='text-xs font-normal text-accent'
        >{`> All characters (${animeCharacterWithVoiceActors.length})`}</Link>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-start gap-4 max-w-[450px] mx-auto my-4'>
        {filteredCharWithVoiceActors?.map(
          (char: animeCharacterWithVoiceActor, index: number) => (
            <div
              key={index}
              className='flex justify-between items-center w-full'
            >
              {/* char  */}
              <div className='text-center'>
                <Image
                  src={char.character.images!.webp.image_url}
                  alt={`image of ${char.character.name}`}
                  width={148.7}
                  height={200}
                  className=''
                />
                <h3 className='text-xl tracking-wider font-medium'>
                  {char.character.name}
                </h3>
                <p className='text-xs text-accent tracking-wider'>
                  {char.role}
                </p>
              </div>
              {/* vActor  */}
              <div className='text-center'>
                <Image
                  src={char.voice_actors[0]?.person.images!.jpg.image_url}
                  alt={`image of ${char.character.name}`}
                  width={148.7}
                  height={200}
                  className=''
                />
                <h3 className='text-xl tracking-wider font-medium max-w-[159px]'>
                  {char.voice_actors[0]?.person.name}
                </h3>
                <p className='text-xs text-accent tracking-wider'>
                  {char.voice_actors[0]?.language}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
