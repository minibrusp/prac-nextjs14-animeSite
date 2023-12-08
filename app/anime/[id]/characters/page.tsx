import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import { fetchCharacterWithVActorByAnimeId } from '@/app/lib/actions';
import {
  animeCharacterWithVoiceActor,
  animeImage,
  voiceActor,
} from '@/app/lib/type';
import Image from 'next/image';

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const animeChars: animeCharacterWithVoiceActor[] =
    await fetchCharacterWithVActorByAnimeId(id);

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
            label: `characters`,
            href: `/anime/${id}/characters`,
            active: true,
          },
        ]}
      />
      <section className='max-w-[1440px] mx-auto my-4'>
        <h1 className='text-2xl tracking-widest leading-6 font-medium py-2 sm:py-1'>
          Characters
        </h1>
        <div className='flex flex-row flex-wrap items-start justify-center gap-2 mx-auto my-4'>
          {animeChars?.length > 0 && (
            <div className='flex flex-row items-start justify-start flex-wrap gap-4 max-w-[350px] mx-auto my-4 sm:max-w-none sm:justify-center sm:gap-8'>
              {animeChars?.map(
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
                      <div className='flex flex-col gap-2'>
                        {char.voice_actors.map(
                          (voice: voiceActor, index: number) => (
                            <div className='text-center' key={index}>
                              <Image
                                src={voice.person.images!.jpg.image_url}
                                alt={`image of ${char.character.name}`}
                                width={148.7}
                                height={200}
                                className='sm:max-w-[120px] sm:max-h-[161px]'
                              />
                              <h3 className='text-xl tracking-wider font-medium max-w-[159px] sm:max-w-[120px]'>
                                {voice.person.name}
                              </h3>
                              <p className='text-xs text-accent tracking-wider sm:max-w-[120px]'>
                                {voice.language}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
