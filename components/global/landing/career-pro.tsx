import React from 'react';
import Container from '../container';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const CareerPro = () => {
  return (
    <div className='bg-[#BBF8DC] relative md:mt-56 my-16 min-h-[500px]'>
      {/* <Image
        src='/vector-bottom.svg'
        alt=''
        width={689}
        height={512}
        className='absolute left-0 md:top-52 top-28 z-0 md:h-[512px] h-[316px] transition-transform duration-300'
      /> */}
      <Container className='pt-20 pb-28'>
        <div className='flex gap-12 lg:flex-row flex-col items-center relative md:bottom-36 bottom-24'>
          <div className='flex flex-col md:gap-10 gap-6 mt-16 md:mt-32 xl:mt-16'>
            <h2 className='md:text-[45px] text-[31px] font-light text-green-900 md:leading-[49.5px] leading-[34.1px] text-center md:text-left transition-all duration-300'>
              <span className='font-medium'>Expand your career by</span>{' '}
              building your profile with Horizzon
            </h2>

            <p className='md:text-lg text-sm text-[#6C6C6C] md:text-left text-center'>
              We’ve created a platform specifically for Certified Nursing
              Assistants like you—one that streamlines the registration and
              hiring process, so you can focus on what matters most: your
              patients and your career.
            </p>
          </div>
          <Image
            src='/career-pro.svg'
            alt=''
            width={643}
            height={515}
            className='w-[500px] xl:w-[643px]  xl:-mt-0'
          />
        </div>

        <div className='-mt-10 md:-mt-16 flex flex-col justify-center items-center md:text-left text-center'>
          <h3 className='text-lg md:text-[28px] text-secondary leading-[19.8px] md:leading-[30.8px] mb-6'>
            What are some CNA (Certified Nursing Assistant) responsibilities at
            Horizzon?
          </h3>
          <p className='md:text-lg text-sm text-[#6C6C6C] '>
            Join numerous healthcare CNAs who are already hired by employers.
            Sign up and start applying today if you are one of the below:
          </p>
          <div className='grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-3 mt-9'>
            {[
              'Personal Care Assistance',
              'Mobility Support',
              'Feeding Assistance',
              'Vital Signs Monitoring',
              'Maintenance',
              'Patient Observation',
            ].map((item) => (
              <div
                key={item}
                className='bg-white rounded-[12px] p-4 text-center lg:min-h-[240px] min-h-[180px] flex items-center justify-center'
              >
                <p className='text-secondary text-sm md:text-lg font-medium'>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <Button
            href='/pro/signup'
            className='px-9 h-14 rounded-[12px] w-fit text-base md:text-lg font-semibold mx-auto mt-10'
          >
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CareerPro;
