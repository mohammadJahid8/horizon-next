'use client';

import React from 'react';
import Container from '../container';
import { Button } from '@/components/ui/button';

const Grow = () => {
  return (
    <div className='bg-[url("/grow.svg")] bg-cover bg-center bg-no-repeat h-full w-full py-32'>
      <Container>
        <div className='max-w-xl flex flex-col gap-9 text-center md:text-left mx-auto md:mx-0'>
          <div>
            <h1 className='md:text-[50px] text-[34px] text-white md:leading-[60px] leading-[43.2px] font-semibold mb-3'>
              Horizzon keeps the CNA’s available in one place and grow
            </h1>
            <p className='md:text-lg text-sm text-[#FAFAFA]'>
              Join numerous healthcare CNAs who are already hired by employers.
              Sign up and start applying today.
            </p>
          </div>
          <Button className='px-9 h-14 rounded-[12px] w-fit text-base md:text-lg font-semibold mx-auto md:mx-0'>
            Register Now
          </Button>
          <div>
            <p className='text-[#FAFAFA] text-base'>Download Now</p>
            <div className='flex md:space-x-6 pt-2 md:flex-row flex-col items-center'>
              <img
                src='/appstore-white.svg'
                alt='Download on the App Store'
                className='w-[174px] h-[72px] md:w-[223px] md:h-full'
              />
              <img
                src='/playstore-white.svg'
                alt='Get it on Google Play'
                className='w-[174px] h-[72px] md:w-[223px] md:h-full'
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Grow;
