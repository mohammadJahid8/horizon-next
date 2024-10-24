import { Button } from '@/components/ui/button';
import { ChevronRight, Info, MoveUpRight, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const notis = [
  {
    message: 'You have a new Offer from',
    companyName: 'Company Name',
    time: '10:37AM, 12 Sep, 2024',
  },
  {
    message: 'You have a new Offer from',
    companyName: 'Company Name',
    time: '10:37AM, 12 Sep, 2024',
  },
  {
    message: 'You have a new Offer from',
    companyName: 'Company Name',
    time: '10:37AM, 12 Sep, 2024',
  },
  {
    message: 'You have a new Offer from',
    companyName: 'Company Name',
    time: '10:37AM, 12 Sep, 2024',
  },
];

const Notifications = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col bg-white rounded-lg p-6 gap-2.5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#1C1C1C] text-xl md:text-2xl'>
            Complete Survey!
          </h1>
          <X className='size-5 cursor-pointer' />
        </div>
        <p className='text-[#6C6C6C] text-sm md:text-base'>
          We are launching this survey for the pro to gather more information On
          how to help you build the best portfolio for your career{' '}
        </p>
        <Button
          variant='outline'
          className='h-10 md:h-12 rounded-[12px] w-fit text-xs md:text-base'
        >
          Submit
          <MoveUpRight className='size-4 ml-2' />
        </Button>
      </div>
      <div className='flex flex-col bg-white rounded-lg p-6 gap-5'>
        {notis.map((noti, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 justify-between p-2.5`}
          >
            <div className='flex justify-between items-start gap-6'>
              <div className=''>
                <span className='text-[#1C1C1C] text-sm'>{noti.message}</span>
                <span className='text-primary text-sm ml-1'>
                  {noti.companyName}
                </span>
              </div>
              <X className='size-5 cursor-pointer' />
            </div>
            <span className='text-[#6C6C6C] text-xs'>{noti.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
