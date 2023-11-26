'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Filter({ currentType }: { currentType: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectFilter = (selectedValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('kind', selectedValue);
    console.log(params.get('kind'));

    router.push(
      `${pathname}?kind=${
        selectedValue === 'tv,movie' ? 'tv,movie' : selectedValue
      }`
    );
  };

  return (
    <div>
      <Select onValueChange={selectFilter} defaultValue={currentType}>
        <SelectTrigger className='w-[180px] uppercase border border-primary text-primary inline-flex'>
          <SelectValue placeholder='tv / movie' />
        </SelectTrigger>
        <SelectContent className='uppercase'>
          <SelectItem value='tv,movie'>TV / Movie</SelectItem>
          <SelectItem value='tv'>tv</SelectItem>
          <SelectItem value='movie'>movie</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
