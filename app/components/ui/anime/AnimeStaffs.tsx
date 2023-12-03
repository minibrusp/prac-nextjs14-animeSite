import { fetchAnimeStaffs } from '@/app/lib/actions';
import { animeStaff as typeAnimeStaff } from '@/app/lib/type';
import Image from 'next/image';
import Link from 'next/link';

export default async function AnimeStaffs({
  id,
  limit,
}: {
  id: string;
  limit: number;
}) {
  const animeStaffs = await fetchAnimeStaffs(id);

  const filteredAnimeStaffs = await animeStaffs.filter(
    (char: typeAnimeStaff, index: number) => {
      return limit >= index + 1;
    }
  );

  // console.log(animeStaffs);

  return (
    <section className='my-4 mb-8'>
      <div className='flex justify-between items-center my-4'>
        <h1 className='text-primary text-xl tracking-wider font-medium '>
          Staffs
        </h1>
        <Link
          href={`/anime/${id}/staffs`}
          className='text-xs font-normal text-accent'
        >{`> All staffs (${animeStaffs.length})`}</Link>
      </div>
      <div className='flex flex-row flex-wrap items-stretch justify-center gap-4'>
        {filteredAnimeStaffs?.map((staff: typeAnimeStaff, index: number) => (
          <div key={index}>
            <div className='text-center'>
              <Image
                src={staff.person.images!.jpg.image_url}
                alt={'anime image'}
                width={148.7}
                height={200}
                className=''
              />
              <h3 className='text-xl tracking-wider font-medium max-w-[148.69px]'>
                {staff.person.name}
              </h3>
              <div>
                {staff.positions.map((position, index) => (
                  <p className='text-xs text-accent tracking-wider' key={index}>
                    {position}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
