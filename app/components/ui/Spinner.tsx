import Image from 'next/image';

export default function Spinner() {
  return (
    <Image
      src='/spinner.svg'
      alt='spinner'
      width={56}
      height={56}
      className='object-contain fill-primary'
    />
  );
}
