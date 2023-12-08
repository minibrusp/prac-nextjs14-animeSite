'use client';

import { useState } from 'react';

export default function Review({ review }: { review: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((old) => !isOpen);
  };

  return (
    <div>
      {!isOpen ? (
        <p className='text-xs text-primary tracking-widest'>{`${review.slice(
          0,
          450
        )}...`}</p>
      ) : (
        <p className='text-xs text-primary tracking-widest'>{review}</p>
      )}
      <button
        className='my-2 text-center mx-auto block text-xs underline'
        onClick={clickHandler}
      >
        {!isOpen ? 'See more' : 'See less'}
      </button>
    </div>
  );
}
