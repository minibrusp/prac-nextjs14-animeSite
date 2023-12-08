import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/components/Header';
import { dmSans } from '@/app/components/ui/fonts';
import clsx from 'clsx';
import Footer from './components/ui/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(dmSans.className, 'bg-secondary text-primary')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
