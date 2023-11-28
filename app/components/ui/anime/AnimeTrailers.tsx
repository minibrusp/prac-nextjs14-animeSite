import { fetchAnimeTrailersById } from '@/app/lib/actions';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { animeTrailer } from '@/app/lib/type';

export default async function AnimeTrailers({ id }: { id: string }) {
  const { promo: trailers } = await fetchAnimeTrailersById(id);

  return (
    <section className='my-4 mb-4'>
      <h1 className='text-2xl tracking-wide my-2 border-b border-primary'>
        Trailers
      </h1>
      <div className=''>
        <Accordion
          type='single'
          collapsible
          className='flex flex-col flex-wrap items-center justify-start gap-4 w-full'
        >
          {trailers.map((trailer: animeTrailer, index: number) => (
            <AccordionItem
              value={`trailer-${index}`}
              key={index}
              className='w-full'
            >
              <AccordionTrigger>{`Trailer #${index}`}</AccordionTrigger>
              <AccordionContent>
                <iframe
                  src={trailer.trailer.embed_url}
                  className='aspect-video h-[200px]'
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
