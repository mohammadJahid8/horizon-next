import React from 'react';
import Container from '../container';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ExpandJob = () => {
  return (
    <div className='bg-[#6ADD8D] relative my-16 min-h-[500px]'>
      {/* <Image
        src='/vector-bottom.svg'
        alt=''
        width={689}
        height={512}
        className='absolute left-0 md:top-52 top-28 z-0 md:h-[512px] h-[316px] transition-transform duration-300'
      /> */}
      <Container className='py-20'>
        <div className='flex gap-12 lg:flex-row flex-col items-center'>
          <div className='flex flex-col md:gap-10 gap-6'>
            <h2 className='md:text-[45px] text-[31px] font-light text-green-900 md:leading-[49.5px] leading-[34.1px] text-center md:text-left transition-all duration-300'>
              <span className='font-medium'>
                Expand your jobs recruiting by
              </span>{' '}
              exploring pro CNA profiles in Horizzon
            </h2>

            <p className='md:text-lg text-sm text-[#1C1C1C] md:text-left text-center'>
              We’re here to help you streamline your hiring process, reduce
              turnover, and lower costs—allowing you to focus on what you do
              best
            </p>
          </div>
          <Image
            src='/expand.svg'
            alt=''
            width={643}
            height={515}
            className='w-[500px] xl:w-[643px]'
          />
        </div>

        <div className='mt-16 flex flex-col justify-center items-center md:text-left text-center'>
          <h3 className='text-lg md:text-[28px] text-secondary leading-[19.8px] md:leading-[30.8px] mb-6'>
            What are some CNA (Certified Nursing Assistant) responsibilities at
            Horizzon?
          </h3>
          <p className='md:text-lg text-sm text-[#1C1C1C] '>
            Join numerous healthcare CNAs who are already hired by employers.
            Sign up and start applying today if you are one of the below:
          </p>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-3 mt-9 w-full'>
            {[
              '<p>Home care agencies <br/> <span style="font-weight: 400; font-size: 16px;">focuses on assisting with daily living activities</span></p>',
              '<p>Home health agencies <br/> <span style="font-weight: 400; font-size: 16px;">provides medical care and therapy</span></p>',
            ].map((item, index) => (
              <div
                key={index}
                className={cn(
                  'rounded-[12px] p-4 text-center lg:min-h-[152px] min-h-[120px] flex items-center justify-center',
                  index === 0 ? 'bg-[#BBF8DC]' : 'bg-white'
                )}
              >
                <div
                  className='text-secondary text-lg font-medium'
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
          <Button className='px-9 h-14 rounded-[12px] w-fit text-base md:text-lg font-semibold mx-auto mt-10'>
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ExpandJob;
