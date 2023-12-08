import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import { fetchAnimeStaffs } from '@/app/lib/actions';
import { animeStaff as typeAnimeStaff } from '@/app/lib/type';
import Image from 'next/image';

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const animeStaffs: typeAnimeStaff[] = await fetchAnimeStaffs(id);

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
            label: `staffs`,
            href: `/anime/${id}/staffs`,
            active: true,
          },
        ]}
      />
      <section className='max-w-[1440px] mx-auto my-4'>
        <h1 className='text-2xl tracking-widest leading-6 font-medium py-2 sm:py-1'>
          Staffs
        </h1>
        <div className='flex flex-row flex-wrap items-start justify-center gap-2 mx-auto my-4'>
          {animeStaffs?.map((staff: typeAnimeStaff, index: number) => (
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
                    <p
                      className='text-xs text-accent tracking-wider'
                      key={index}
                    >
                      {position}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
