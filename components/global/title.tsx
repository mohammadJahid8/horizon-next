import React from 'react';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <h1
      className={cn(
        'text-xl md:text-2xl font-bold leading-[33px] mb-8',
        inter.className,
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Title;
