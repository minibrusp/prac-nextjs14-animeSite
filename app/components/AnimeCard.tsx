import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/app/components/ui/card';

import { Badge } from '@/app/components/ui/badge';
import { Anime } from '../lib/type';
import { MotionCard } from './AnimeCard.motion';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function AnimeCard({
  anime,
  index,
}: {
  anime: Anime;
  index: number;
}) {
  return (
    <MotionCard
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className='rounded pb-4 relative w-full border border-transparent hover:border hover:border-primary-foreground hover:shadow-md'
    >
      <CardHeader className='rounded rounded-b-none relative w-full h-[45vh] overflow-hidden'>
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt='anime image'
          fill
          className='rounded-md rounded-b-none aspect-auto hover:scale-[1.1] transition-[transform] duration-1000'
        />
      </CardHeader>
      <CardContent className='my-4 flex justify-between items-center capitalize p-0 px-2'>
        <CardTitle>{anime.name}</CardTitle>
        <Badge variant='default'>
          <CardDescription className='text-secondary'>
            {anime.kind}
          </CardDescription>
        </Badge>
      </CardContent>
      <CardFooter className='flex justify-between items-center p-0 px-2'>
        <div className='flex flex-row gap-2 justify-center items-center'>
          <Image
            src='./episodes.svg'
            alt='episodes'
            width={20}
            height={20}
            className='object-contain'
          />
          <p className='text-base font-bold'>
            {anime.episodes || anime.episodes_aired}
          </p>
        </div>
        <div className='flex flex-row gap-2 justify-center items-center'>
          <Image
            src='./star.svg'
            alt='star'
            width={18}
            height={18}
            className='object-contain'
          />
          <p className='text-base font-bold text-primary'>{anime.score}</p>
        </div>
      </CardFooter>
    </MotionCard>
  );
}
