import { fetchAnimeTrailersById } from '@/app/lib/actions';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { animeTrailer } from '@/app/lib/type';

export default async function AnimeTrailers({ id }: { id: string }) {
  // const { promo: trailers }: { promo: animeTrailer[] } =
  //   await fetchAnimeTrailersById(id);
  const data = await fetchAnimeTrailersById(id);
  const trailers = data?.promo;

  if (trailers?.length === 0) return <div></div>;

  if (trailers?.length > 0)
    return (
      <section className='my-4 mb-8 sm:grid-in-sneekp sm:min-h-[400px] sm:my-0 lg:min-h-fit'>
        <div className='my-4'>
          <h2 className='text-primary text-xl tracking-wider font-medium '>
            Video sneek peaks
          </h2>
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
                className='w-full border-b border-accent'
              >
                <AccordionTrigger className='text-xs tracking-wider font-normal text-primary px-4'>{`${trailer.title}`}</AccordionTrigger>
                <AccordionContent>
                  <iframe
                    src={trailer.trailer.embed_url}
                    className='aspect-video w-full sm:max-w-xl sm:mx-auto'
                    allowFullScreen={true}
                    title={`${trailer.title}'s video sneek peak`}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
}
