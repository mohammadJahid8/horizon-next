import React from 'react';
import Logo from './logo';
import Steps from './steps';

const Onboard = () => {
  return (
    <aside className='px-6 2xl:px-10 py-10 2xl:py-20 bg-white flex flex-col gap-[52px] overflow-y-auto scrollbar-hide'>
      <Logo />
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold'>Onboarding Page</h2>
          <p className='text-base'>
            Welcome To Healthcare! Let&apos;s Get Started With Setting Up Your
            Profile To Make Managing Your Employment Documents Easier.
          </p>
        </div>
        <Steps />
      </div>
    </aside>
  );
};

export default Onboard;
