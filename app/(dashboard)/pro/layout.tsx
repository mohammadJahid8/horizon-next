/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import Back from '@/components/global/back';
import Onboard from '@/components/global/onboard';
import OnboardSheet from '@/components/global/onboard-sheet';

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
        <div className=' bg-[#f9f9f9] overflow-y-auto px-4 py-6 lg:p-10'>
          <div className='flex items-center gap-3  mb-8'>
            <div className='lg:hidden'>
              <OnboardSheet />
            </div>
            <Back />
          </div>
          {children}
        </div>
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
