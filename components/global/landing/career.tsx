import React from 'react';
import Container from '../container';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Career = () => {
  return (
    <Container className='py-20 flex gap-12 lg:flex-row flex-col-reverse items-center'>
      <Image src='/career.svg' alt='' width={643} height={515} />

      <div className='flex flex-col md:gap-10 gap-6'>
        <div className='flex flex-col gap-2 justify-center items-center md:items-start'>
          <Button className='bg-[#BBF8DC] text-secondary text-sm rounded-[32px] w-fit'>
            PRO CNA
          </Button>
          <h2 className='md:text-[45px] text-[31px] font-light text-green-900 md:leading-[49.5px] leading-[34.1px] text-center md:text-left transition-all duration-300'>
            <span className='font-medium'>Expand your career by</span> building
            your profile with Horizzon
          </h2>
        </div>
        <p className='md:text-lg text-sm text-[#6C6C6C] md:text-left text-center'>
          Join numerous healthcare CNAs who are already hired by employers. Sign
          up and start applying today.
        </p>
        <Button
          href='/pro/signup'
          className='px-9 h-14 rounded-[12px] w-fit text-base md:text-lg font-semibold mx-auto md:mx-0'
        >
          Get Started
        </Button>
      </div>
    </Container>
  );
};

export default Career;
