import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import { Badge } from '@/app/components/ui/badge';
import Review from '@/app/components/ui/review';
import { fetchAnimeReviews } from '@/app/lib/actions';
import { animeReview as TypeAnimeReview } from '@/app/lib/type';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const animeReviews: TypeAnimeReview[] = await fetchAnimeReviews(id);

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
            label: `reviews`,
            href: `/anime/${id}/reviews`,
            active: true,
          },
        ]}
      />
      <section className='max-w-[1440px] mx-auto my-4'>
        <h1 className='text-2xl tracking-widest leading-6 font-medium py-2 sm:py-1'>
          Reviews
        </h1>
        <div className='flex flex-col flex-wrap items-center justify-start gap-4 w-full'>
          {animeReviews?.map((review: TypeAnimeReview, index: number) => (
            <div
              key={index}
              className='border-b border-accent pb-4 last-of-type:border-transparent'
            >
              <div className='flex flex-row justify-between items-start w-full py-2'>
                <div className='flex flex-row justify-stretch gap-2 items-stretch w-full'>
                  <div>
                    <Image
                      src={`${review.user.images.jpg.image_url}`}
                      alt={`${review.user.username}'s avatar`}
                      width={56.51}
                      height={80}
                      className='min-h-[80px]'
                    />
                  </div>
                  <div className='flex flex-col justify-between items-start'>
                    <div className='flex flex-col justify-start items-start'>
                      <h3 className='text-xl text-primary font-medium tracking-wider'>
                        {review.user.username}
                      </h3>
                      <p className='text-xs font-normal text-accent'>
                        {formatDate(review.date).slice(3)}
                      </p>
                    </div>
                    <div className='flex flex-row justify-start items-center flex-wrap gap-1'>
                      {review.tags.map((tag: string, index: number) => (
                        <Badge className='text-xs' key={index}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <span className='whitespace-nowrap text-xs font-normal text-accent'>{`Rating: ${review.score}`}</span>
              </div>
              <Review review={review.review} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
