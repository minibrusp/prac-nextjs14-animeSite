import React from 'react';
import Spinner from '@/app/components/ui/Spinner';

export default function Loading({ text }: { text?: JSX.Element }) {
  return (
    <section className='flex justify-center items-center w-full min-h-screen'>
      <Spinner />
      {text && <h2>{text}</h2>}
    </section>
  );
}
