import { fetchAnimeTrailersById } from '@/app/lib/actions';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { animeTrailer } from '@/app/lib/type';

export default async function AnimeTrailers({ id }: { id: string }) {
  const { promo: trailers }: { promo: animeTrailer[] } =
    await fetchAnimeTrailersById(id);

  if (trailers.length === 0) return <div></div>;

  if (trailers.length > 0)
    return (
      <section className='my-4 mb-8'>
        <div className='my-4'>
          <h1 className='text-primary text-xl tracking-wider font-medium '>
            Video sneek peaks
          </h1>
        </div>
        <div className=''>
          <Accordion
            type='single'
            collapsible
            className='flex flex-col flex-wrap items-center justify-start gap-4 w-full'
          >
            {trailers.map((trailer: animeTrailer, index: number) => (
              <AccordionItem
                value={`${trailer.title}`}
                key={index}
                className='w-full border-b border-accent px-4'
              >
                <AccordionTrigger className='text-xs tracking-wider font-normal text-primary'>{`${trailer.title}`}</AccordionTrigger>
                <AccordionContent>
                  <iframe
                    src={trailer.trailer.embed_url}
                    className='aspect-video h-[200px]'
                    allowFullScreen={true}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
}
