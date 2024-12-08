'use client';

import React from 'react';
import Container from '../container';
import { Button } from '@/components/ui/button';

const Banner = ({
  appStoreLink,
  buttonText,
  googlePlayLink,
  titleLight,
  titleBold,
  description,
}: any) => {
  return (
    <div className='bg-[url("/banner-bg.png")] bg-cover bg-left md:bg-center bg-no-repeat h-full w-full py-32'>
      <Container>
        <div className='max-w-md flex flex-col gap-9 text-center md:text-left mx-auto md:mx-0'>
          <h1 className='md:text-[50px] text-[31px] font-light text-green-900 md:leading-[55px] leading-[34.1px]'>
            {titleLight} <span className='font-medium'>{titleBold}</span>
          </h1>
          <p className='md:text-lg text-sm text-[#6C6C6C]'>{description}</p>
          <Button
            href='/pro/signup'
            className='px-9 h-14 rounded-[12px] w-fit text-base md:text-lg font-semibold mx-auto md:mx-0'
          >
            {buttonText}
          </Button>
          <div className='mt-4'>
            <p className='text-[#6C6C6C] md:text-base text-sm'>Download Now</p>
            <div className='flex md:space-x-6 pt-2 md:flex-row flex-col justify-center items-center'>
              <a href={appStoreLink} target='_blank'>
                <img
                  src='/app-store.svg'
                  alt='Download on the App Store'
                  className='w-[174px] h-[72px] md:w-full md:h-full'
                />
              </a>
              <a href={googlePlayLink} target='_blank'>
                <img
                  src='/playstore.svg'
                  alt='Get it on Google Play'
                  className='w-[174px] h-[72px] md:w-full md:h-full'
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
