'use client';
import React from 'react';
import Logo from './logo';
import Steps from './steps';
import { useParams, useSearchParams } from 'next/navigation';

const Onboard = ({ source }: { source: 'partner' | 'pro' }) => {
  const searchParams = useSearchParams();
  const isEdit = searchParams.get('edit') === 'true';

  return (
    <aside className='px-6 2xl:px-10 py-10 2xl:py-20 bg-white flex flex-col gap-[52px] overflow-y-auto scrollbar-hide'>
      <Logo />
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold'>
            {isEdit ? 'Edit your profile' : 'Onboarding Page'}
          </h2>
          {!isEdit && (
            <p className='text-base'>
              Welcome To Healthcare! Let&apos;s Get Started With Setting Up Your
              Profile To Make Managing Your Employment Documents Easier.
            </p>
          )}
        </div>
        <Steps source={source} isEdit={isEdit} />
      </div>
    </aside>
  );
};

export default Onboard;
