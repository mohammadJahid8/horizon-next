/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import FaqAccordion from './faq-accordion';
import Container from '../container';

const Faqs = () => {
  return (
    <Container className='md:py-32 py-16'>
      <div className='flex flex-col lg:flex-row md:gap-20 gap-6 justify-center items-center pb-12'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <h2 className='md:text-[45px] text-[31px] text-center md:text-left font-light text-green-900 md:leading-[54px] leading-[37.2px] max-w-[509px] mx-auto transition-all duration-300'>
            Frequently <br className='md:block hidden' /> Asked{' '}
            <span className='font-medium'>Questions</span>
          </h2>
          <Image src='/faqs.svg' alt='faqs' width={258} height={258} />
        </div>
        <FaqAccordion />
      </div>
    </Container>
  );
};

export default Faqs;