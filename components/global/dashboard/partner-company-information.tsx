'use client';

import React from 'react';
import Title from '../title';
import EditBtn from './edit-btn';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/lib/context';
import moment from 'moment';
import NoData from '../no-data';

const PartnerCompanyInformation = () => {
  const { user } = useAppContext();

  const bio = user?.companyInfo?.bio;
  const dateEstablished = user?.companyInfo?.dateEstablished;
  const address = user?.companyInfo?.address;
  const { street, city, state, zipCode, country } = address || {};

  const noData = !bio && !dateEstablished && !address;

  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title
          text='Company information'
          className='mb-0 !text-lg md:!text-2xl'
        />
        <EditBtn href='/partner/onboard/company-info' />
      </div>
      {!noData ? (
        <div className='space-y-6'>
          <div className='border-b pb-6 flex flex-col gap-1.5 md:gap-2.5'>
            <SectionTitle text='Bio' />
            <SectionDescription text={bio} />
          </div>

          <div className='border-b pb-6 flex flex-col gap-5'>
            <SectionTitle
              text='Company Details'
              className='uppercase text-[#9E9E9E]'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='Date Established' />
                <SectionDescription
                  text={moment(dateEstablished).format('MMMM Do YYYY')}
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <SectionTitle text='Address' className='uppercase text-[#9E9E9E]' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='Street Address' />
                <SectionDescription text={street} />
              </div>
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='City' />
                <SectionDescription text={city} />
              </div>
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='State/Province' />
                <SectionDescription text={state} />
              </div>
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='Postal/Zip Code' />
                <SectionDescription text={zipCode} />
              </div>
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='Country' />
                <SectionDescription text={country} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default PartnerCompanyInformation;

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
    <p
      className={cn('text-sm md:text-xl text-[#1C1C1C] font-medium', className)}
    >
      {text}
    </p>
  );
};
