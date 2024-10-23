import React from 'react';
import Title from '../title';
import EditBtn from './edit-btn';
import { cn } from '@/lib/utils';

const PersonalInformation = () => {
  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title
          text='Personal information'
          className='mb-0 !text-lg md:!text-2xl'
        />
        <EditBtn />
      </div>
      <div className='space-y-6'>
        <div className='border-b pb-6 flex flex-col gap-1.5 md:gap-2.5'>
          <SectionTitle text='Bio' />
          <SectionDescription text='Floyd Miles is a magna cum laude Biomedical Engineering graduate from Gotham University. With experience as a Registered Nurse and a current role as a Health Educator, he brings expertise in patient care and health education. Certified in Patient Service Fundamentals by Johns Hopkins, he is based in Springfield, Illinois.' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border-b pb-6'>
          <div className='flex flex-col gap-1.5 md:gap-2.5'>
            <SectionTitle text='Name' />
            <SectionDescription text='Floyd Miles' />
          </div>
          <div className='flex flex-col gap-1.5 md:gap-2.5'>
            <SectionTitle text='Date of Birth' />
            <SectionDescription text='Feb. 1, 1995' />
          </div>
          <div className='flex flex-col gap-1.5 md:gap-2.5'>
            <SectionTitle text='Gender' />
            <SectionDescription text='Female' />
          </div>
        </div>
        <div className='border-b pb-6 flex flex-col gap-5'>
          <SectionTitle
            text='Contact Details'
            className='uppercase text-[#9E9E9E]'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='Email address' />
              <SectionDescription text='deanna.curtis@example.com' />
            </div>
            <div className='flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='Phone Number' />
              <SectionDescription text='(307) 555-0133' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <SectionTitle text='Address' className='uppercase text-[#9E9E9E]' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='Street Address' />
              <SectionDescription text='123 Maple Street' />
            </div>
            <div className='flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='City' />
              <SectionDescription text='Springfield' />
            </div>
            <div className='flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='State/Province' />
              <SectionDescription text='Illinois' />
            </div>
            <div className='flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='Postal/Zip Code' />
              <SectionDescription text='62704' />
            </div>
            <div className='flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='Country' />
              <SectionDescription text='United States' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

const SectionTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        'text-sm md:text-base font-medium text-[#6C6C6C]',
        className
      )}
    >
      {text}
    </h3>
  );
};
const SectionDescription = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p className={cn('text-sm md:text-xl text-[#1C1C1C]', className)}>{text}</p>
  );
};
