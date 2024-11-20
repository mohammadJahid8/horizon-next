'use client';

import React from 'react';
import Container from '../container';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className='bg-[url("/banner-bg.svg")] bg-cover bg-center bg-no-repeat h-full w-full py-32'>
      <Container>
        <div className='max-w-md flex flex-col gap-9'>
          <h1 className='text-[50px] font-light text-green-900 leading-[55px]'>
            Build Your Profile,{' '}
            <span className='font-medium'>Find Your Next Job</span>
          </h1>
          <p className='text-lg text-[#15221F]'>
            Create your CNA profile and start exploring job opportunities. Share
            your profile link with potential employers to accelerate your job.
          </p>
          <Button className='px-9 h-14 rounded-[12px] w-fit text-lg font-semibold'>
            Register Now
          </Button>
          <div className='mt-4'>
            <p className='text-[#6C6C6C] text-base'>Download Now</p>
            <div className='flex space-x-6 pt-2'>
              <img
                src='/app-store.svg'
                alt='Download on the App Store'
                className='h-full'
              />
              <img
                src='/playstore.svg'
                alt='Get it on Google Play'
                className='h-full'
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
