'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '../container';
import { BriefcaseIcon, FileIcon, IdCardIcon, UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GetStarted({
  images,
}: {
  images: Record<string, string>;
}) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      step: 'Step 1',
      icon: <IdCardIcon className='size-[18px]' />,
      text: 'Personal information',
      description:
        'Register with your email and create a secure profile. Provide your personal and professional details to get started.',
    },
    {
      step: 'Step 2',
      icon: <FileIcon className='size-[18px]' />,
      text: 'Upload Documents',
      description:
        'Showcase your educational degree, add experiences with licences and certifications',
    },
    {
      step: 'Step 3',
      icon: <UserIcon className='size-[18px]' />,
      text: 'Complete Profile',
      description:
        'Easily upload your CV, certifications, licenses, and other important documents. Keep everything organized and easily accessible.',
    },
    {
      step: 'Step 4',
      icon: <BriefcaseIcon className='size-[18px]' />,
      text: 'Share your profile and Get Hired',
      description:
        'Create secure, shareable links to your documents. Share these links with potential employers or during job applications.',
    },
  ];

  const stepsBgColor = {
    0: 'bg-[#87e4a5]',
    1: 'bg-[#c9f9e3]',
    2: 'bg-[#87e4a5]',
    3: 'bg-[#c9f9e3]',
  };

  return (
    <div
      className={cn(
        'relative bg-[#bcf8dc] md:pt-28 pb-40 pt-16 overflow-hidden transition-colors duration-300',
        stepsBgColor[activeStep as keyof typeof stepsBgColor]
      )}
    >
      <Container>
        <h2 className='md:text-[45px] text-[31px] font-light text-green-900 md:leading-[54px] leading-[37.2px] text-center max-w-[509px] mx-auto transition-all duration-300'>
          Get started in just a few{' '}
          <span className='font-medium'>simple steps</span>
        </h2>
        <Image
          src='/vector-top.svg'
          alt=''
          width={689}
          height={512}
          className='absolute -right-28 md:-right-16 md:top-52 top-28 z-0 md:h-[512px] h-[316px] transition-transform duration-300'
        />

        <div className='relative grid md:gap-24 gap-12 lg:grid-cols-2 mt-16'>
          <div className='relative mx-auto max-w-xl w-full order-2 lg:order-none'>
            <Image
              src={images[activeStep as unknown as keyof typeof images]}
              alt='Healthcare professional with tablet'
              width={660}
              height={500}
              className={cn(
                'relative z-20 w-full transition-all duration-300',
                activeStep !== null && 'max-w-[300px] mx-auto'
              )}
              priority
            />
            <Image
              src='/vector-bottom.svg'
              alt='Healthcare professional with tablet'
              width={400}
              height={500}
              className='absolute bottom-0 right-6 top-24 z-0 w-full transition-transform duration-300'
              priority
            />
          </div>
          {/* Steps section */}
          <div className='flex flex-col justify-center md:gap-2'>
            {steps.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-3 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? `${
                        stepsBgColor[index as keyof typeof stepsBgColor]
                      } md:p-6 p-4 border-2 border-white`
                    : `md:p-6 p-4 border-2 border-transparent`
                }`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                <span
                  className={`md:text-xl text-sm transition-colors duration-300 ${
                    activeStep === index
                      ? 'text-green-800 font-bold'
                      : 'text-[#1C1C1C]'
                  }`}
                >
                  {item.step}
                </span>

                <div className='flex items-center gap-3'>
                  <span
                    className={`flex size-10 items-center justify-center rounded-full text-sm border border-secondary transition-colors duration-300`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`md:text-2xl text-lg font-normal transition-colors duration-300 ${
                      activeStep === index
                        ? 'text-green-800'
                        : 'text-secondary hover:text-green-800'
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
                {activeStep === index && (
                  <p className='text-sm md:text-base text-[#1C1C1C] transition-all duration-300'>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}