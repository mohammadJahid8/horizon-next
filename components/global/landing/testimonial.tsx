import React from 'react';
import Container from '../container';
import Image from 'next/image';
import { Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <Container className='py-28 px-0 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='md:text-[48px] text-[31px] font-light text-green-900 md:leading-[57.6px] leading-[37.2px] max-w-[680px] mx-auto transition-all duration-300 relative'>
          <span className='font-medium'>
            <img
              src='/quote.svg'
              alt='quote'
              className='absolute bottom-[90px] md:bottom-[70px] md:size-[unset] w-20 h-12'
            />
            Trusted by many
          </span>
          <br />
          certified nursing assistants
        </h2>
        <div className='relative mt-16'>
          <Image
            src='/testimonial-phone.svg'
            alt='testimonial phone'
            width={300}
            height={600}
            className='mx-auto'
          />
          <div
            className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 p-4 w-full min-h-[242px] flex items-center justify-center flex-col testimonial-gradient'
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 128, 0, 0) 0%, rgba(0, 128, 0, 0.475) 16.67%, rgba(0, 128, 0, 0.76) 33.33%, rgba(0, 128, 0, 0.95) 50%, rgba(0, 128, 0, 0.76) 66.67%, rgba(0, 128, 0, 0.475) 83.33%, rgba(0, 128, 0, 0) 100%)',
            }}
          >
            <div className='max-w-[426px] mx-auto flex items-center justify-center flex-col md:gap-9 gap-4'>
              <p className='text-white font-normal md:text-base text-sm'>
                Holistic made my job search so much easier. The site is
                user-friendly and I found tons of relevant opportunities. Highly
                recommend for CNAs!
              </p>
              <div className='flex items-center gap-3'>
                <Image
                  src='/user.png'
                  alt='Profile picture'
                  width={60}
                  height={60}
                  className='rounded-full md:size-[60px] size-[48px] object-cover'
                />

                <div className='flex flex-col gap-1'>
                  <h3 className='text-white font-semibold md:text-xl text-sm'>
                    Leslie Alexander
                  </h3>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='md:size-4 size-3 fill-[#FF9100] stroke-[#FF9100]'
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
