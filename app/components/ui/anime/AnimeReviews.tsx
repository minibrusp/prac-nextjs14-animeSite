import { fetchAnimeReviews } from '@/app/lib/actions';
import { animeReview as TypeAnimeReview } from '@/app/lib/type';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../badge';
import { formatDate } from '@/lib/utils';

export default async function AnimeReviews({
  id,
  limit,
}: {
  id: string;
  limit: number;
}) {
  const animeReviews = await fetchAnimeReviews(id);

  const filteredAnimeReviews = await animeReviews?.filter(
    (review: TypeAnimeReview, index: number) => {
      return limit >= index + 1;
    }
  );

  // console.log(animeReviews[0]);

  if (filteredAnimeReviews?.length === undefined)
    return (
      <section className='my-4 mb-8'>
        <div className='flex justify-between items-center my-4'>
          <h2 className='text-primary text-xl tracking-wider font-medium '>
            Reviews
          </h2>
          <Link
            href={`/anime/${id}/photos`}
            className='text-xs font-normal text-accent'
          >{`> All photos (${animeReviews?.length})`}</Link>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center gap-2'>
          {animeReviews?.length === undefined && (
            <>
              <p className='text-xs text-accent tracking-wider text-center'>
                could not load reviews please reload the page...
              </p>
              <a
                href={`/anime/${id}`}
                className='text-xs font-normal text-accent'
              >{`> reload page`}</a>
            </>
          )}
        </div>
      </section>
    );

  return (
    <>
      {filteredAnimeReviews?.length > 0 && (
        <section className='my-4 mb-8'>
          <div className='flex justify-between items-center my-2 border-b border-accent p-2'>
            <h2 className='text-primary text-xl tracking-wider font-medium '>
              Reviews
            </h2>
            <Link
              href={`/anime/${id}/reviews`}
              className='text-xs font-normal text-accent'
            >{`> All reviews (${animeReviews?.length || 0})`}</Link>
          </div>
          <div className='flex flex-col flex-wrap items-center justify-start gap-4 w-full'>
            {filteredAnimeReviews?.map(
              (review: TypeAnimeReview, index: number) => (
                <div key={index} className='border-b border-accent pb-4'>
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
                  <p className='text-xs text-primary tracking-widest'>{`${review.review.slice(
                    0,
                    450
                  )}...`}</p>
                </div>
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}
