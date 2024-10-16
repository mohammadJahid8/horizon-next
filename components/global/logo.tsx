import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Baskervville } from 'next/font/google';

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: ['400'],
});

const Logo = () => {
  return (
    <Link
      href='/'
      className={cn(
        `${baskervville.className} text-4xl font-bold text-primary`
      )}
    >
      Horizzon
    </Link>
  );
};

export default Logo;
