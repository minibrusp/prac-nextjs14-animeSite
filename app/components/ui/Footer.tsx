export default function Footer() {
  return (
    <div className='w-full'>
      <div className='w-full lg:border-t xl:border-accent text-center py-2 max-w-[300px] mx-auto'>
        <p className='text-xs text-accent tracking-widest'>
          &copy; 2023 by
          <a
            className='ml-1 text-primary underline'
            href='https://perezbruce.neocities.org/'
            target='_blank'
            title="to dev's personal website"
          >
            XIII
          </a>
          , please don&apos;t steal my shit.
        </p>
      </div>
    </div>
  );
}
