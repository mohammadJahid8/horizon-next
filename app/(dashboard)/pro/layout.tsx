/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { Baskervville } from 'next/font/google';
import { cn } from '@/lib/utils';
import Logo from '@/components/global/logo';
import { Edit, FileText, IdCard, PencilLine, User } from 'lucide-react';
import Steps from '@/components/global/steps';

const baskervville = Baskervville({
  subsets: ['latin'],
  weight: ['400'],
});

interface OnboardLayoutProps {
  children: ReactNode;
}

const OnboardLayout: React.FC<OnboardLayoutProps> = ({ children }) => {
  return (
    <main>
      <div className='grid grid-rows-1 md:grid-cols-[26%_auto] h-screen'>
        <aside className='px-10 py-20 bg-white flex flex-col gap-[52px] overflow-y-auto scrollbar-hide'>
          <Logo />
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl font-semibold'>Onboarding Page</h2>
              <p className='text-base'>
                Welcome To Healthcare! Let&apos;s Get Started With Setting Up
                Your Profile To Make Managing Your Employment Documents Easier.
              </p>
            </div>
            <Steps />
          </div>
        </aside>
        <div className=' bg-[#f9f9f9] overflow-y-auto'>{children}</div>
      </div>
      <div className='fixed bottom-4 right-8 p-2.5 cursor-pointer hover:underline'>
        <span className='flex items-center'>
          <img src='/info.svg' alt='help' />
          <span className='ml-2 text-sm'>Need help?</span>
        </span>
      </div>
    </main>
  );
};

export default OnboardLayout;
