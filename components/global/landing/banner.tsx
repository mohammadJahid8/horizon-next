'use client';

import React from 'react';
import Container from '../container';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className='bg-[url("/banner-bg.png")] bg-cover bg-left md:bg-center bg-no-repeat h-full w-full py-32'>
      <Container>
        <div className='max-w-md flex flex-col gap-9 text-center md:text-left mx-auto md:mx-0'>
          <h1 className='md:text-[50px] text-[31px] font-light text-green-900 md:leading-[55px] leading-[34.1px]'>
            Build Your Profile,{' '}
            <span className='font-medium'>Find Your Next Job</span>
          </h1>
          <p className='md:text-lg text-sm text-[#6C6C6C]'>
            Create your CNA profile and start exploring job opportunities. Share
            your profile link with potential employers to accelerate your job.
          </p>
          <Button
            href='/pro/signup'
            className='px-9 h-14 rounded-[12px] w-fit text-base md:text-lg font-semibold mx-auto md:mx-0'
          >
            Register Now
          </Button>
          <div className='mt-4'>
            <p className='text-[#6C6C6C] md:text-base text-sm'>Download Now</p>
            <div className='flex md:space-x-6 pt-2 md:flex-row flex-col justify-center items-center'>
              <img
                src='/app-store.svg'
                alt='Download on the App Store'
                className='w-[174px] h-[72px] md:w-full md:h-full'
              />
              <img
                src='/playstore.svg'
                alt='Get it on Google Play'
                className='w-[174px] h-[72px] md:w-full md:h-full'
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
