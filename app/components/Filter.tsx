'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Input } from '@/app/components/ui/input';
import { useDebouncedCallback } from 'use-debounce';
import { animeType } from '../lib/type';

export default function Filter({ currentType }: { currentType: string }) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectFilter = (selectedValue: animeType) => {
    const params = new URLSearchParams(searchParams);
    params.set('type', selectedValue);
    console.log(params.get('type'));

    replace(`${pathname}?${params.toString().replace('%2C', ',')}`);
  };

  const searchAnime = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString().replace('%2C', ',')}`);
  }, 300);

  return (
    <div className='flex flex-row justify-end items-center gap-4 w-full md:w-[unset]'>
      <Input
        type='text'
        placeholder='by name not working DEPRECATED in API'
        onChange={(e) => searchAnime(e.target.value)}
      />
      {/* "" | "tv" | "movie" | "ova" | "special" | "ona" | "music" */}
      <Select onValueChange={selectFilter} value={currentType}>
        <SelectTrigger className='w-[180px] uppercase border border-primary text-primary inline-flex'>
          <SelectValue placeholder='tv / movie' />
        </SelectTrigger>
        <SelectContent className='uppercase'>
          <SelectItem value='all'>TV / Movie</SelectItem>
          <SelectItem value='tv'>tv</SelectItem>
          <SelectItem value='movie'>movie</SelectItem>
          <SelectItem value='ova'>ova</SelectItem>
          <SelectItem value='special'>special</SelectItem>
          <SelectItem value='ona'>ona</SelectItem>
          <SelectItem value='music'>music</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
