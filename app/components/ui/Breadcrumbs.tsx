import { clsx } from 'clsx';
import Link from 'next/link';
import { dmSans } from './fonts';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label='Breadcrumb' className='mb-3 block '>
      <ol
        className={clsx(
          dmSans.className,
          'flex text-sm tracking-widest md:text-2xl'
        )}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(breadcrumb.active ? 'text-primary' : 'text-accent')}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className='mx-3 inline-block'>/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
