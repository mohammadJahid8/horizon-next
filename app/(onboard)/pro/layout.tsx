/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import Onboard from '@/components/global/onboard';
import OnboardContentLayout from '@/components/global/onboard-layout';

interface OnboardLayoutProps {
  children: ReactNode;
}

const OnboardLayout: React.FC<OnboardLayoutProps> = ({ children }) => {
  return (
    <main>
      <div className='grid grid-rows-1 lg:grid-cols-[26%_auto] h-screen'>
        <div className='hidden lg:block'>
          <Onboard />
        </div>
        <OnboardContentLayout>{children}</OnboardContentLayout>
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
