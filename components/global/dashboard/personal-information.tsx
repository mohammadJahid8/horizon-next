'use client';
import React from 'react';
import Title from '../title';
import EditBtn from './edit-btn';
import { cn } from '@/lib/utils';
import { useAppContext } from '@/lib/context';
import moment from 'moment';
import NoData from '../no-data';
import { useParams, usePathname } from 'next/navigation';

const PersonalInformation = ({ proUser }: { proUser?: any }) => {
  const { user } = useAppContext();
  const { id } = useParams();
  const pathname = usePathname();
  const isPublicProPage = pathname.includes('pro/') && id ? true : false;

  const userData = proUser ? proUser : user;

  const firstName = userData?.personalInfo?.firstName;
  const lastName = userData?.personalInfo?.lastName;
  const dateOfBirth = userData?.personalInfo?.dateOfBirth;
  const phone = userData?.personalInfo?.phone;
  const gender = userData?.personalInfo?.gender;
  const address = userData?.personalInfo?.address;
  const bio = userData?.personalInfo?.bio;

  const noData = !userData?.personalInfo;

  return (
    <div className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
      <div className='flex items-center justify-between border-b pb-4 mb-8'>
        <Title
          text='Personal information'
          className='mb-0 !text-lg md:!text-2xl'
        />
        <EditBtn href={`/pro/edit/personal-information?edit=true`} />
      </div>
      {!noData ? (
        <div className='space-y-6'>
          {bio && (
            <div className='border-b pb-6 flex flex-col gap-1.5 md:gap-2.5'>
              <SectionTitle text='Bio' />
              <SectionDescription text={bio} />
            </div>
          )}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border-b pb-6'>
            {(firstName || lastName) && (
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='Name' />
                <SectionDescription text={`${firstName} ${lastName}`} />
              </div>
            )}
            {dateOfBirth && (
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='Date of Birth' />
                <SectionDescription
                  text={moment(dateOfBirth).format('MMMM Do YYYY')}
                />
              </div>
            )}
            {gender && (
              <div className='flex flex-col gap-1.5 md:gap-2.5'>
                <SectionTitle text='Gender' />
                <SectionDescription text={gender} />
              </div>
            )}
          </div>
          <div
            className={cn(
              'border-b pb-6 flex flex-col gap-5',
              isPublicProPage && !user && 'blur-sm'
            )}
          >
            <SectionTitle
              text='Contact Details'
              className='uppercase text-[#9E9E9E]'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {userData?.email && (
                <div className='flex flex-col gap-1.5 md:gap-2.5'>
                  <SectionTitle text='Email address' />
                  <SectionDescription text={userData?.email} />
                </div>
              )}
              {phone && (
                <div className='flex flex-col gap-1.5 md:gap-2.5'>
                  <SectionTitle text='Phone Number' />
                  <SectionDescription text={phone || 'N/A'} />
                </div>
              )}
            </div>
          </div>
          <div
            className={cn(
              'flex flex-col gap-5',
              isPublicProPage && !user && 'blur-sm'
            )}
          >
            <SectionTitle text='Address' className='uppercase text-[#9E9E9E]' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {address?.street && (
                <div className='flex flex-col gap-1.5 md:gap-2.5'>
                  <SectionTitle text='Street Address' />
                  <SectionDescription text={address?.street} />
                </div>
              )}
              {address?.city && (
                <div className='flex flex-col gap-1.5 md:gap-2.5'>
                  <SectionTitle text='City' />
                  <SectionDescription text={address?.city} />
                </div>
              )}
              {address?.state && (
                <div className='flex flex-col gap-1.5 md:gap-2.5'>
                  <SectionTitle text='State/Province' />
                  <SectionDescription text={address?.state} />
                </div>
              )}
              {address?.zipCode && (
                <div className='flex flex-col gap-1.5 md:gap-2.5'>
                  <SectionTitle text='Postal/Zip Code' />
                  <SectionDescription text={address?.zipCode} />
                </div>
              )}
              {address?.country && (
                <div className='flex flex-col gap-1.5 md:gap-2.5'>
                  <SectionTitle text='Country' />
                  <SectionDescription text={address?.country} />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <NoData />
      )}
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
    <p
      className={cn('text-sm md:text-xl text-[#1C1C1C] font-medium', className)}
    >
      {text}
    </p>
  );
};
