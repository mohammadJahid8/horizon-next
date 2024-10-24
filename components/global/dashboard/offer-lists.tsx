import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FileCheck, FileClock, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { RequestModal } from './request-modal';

const offers = [
  {
    date: '05 Aug 2024 - 11:59 AM',
    company: 'DaVita Kidney Care',
    industry: 'Company Industry',
    established: 'July, 2006',
    size: '100 Employees',
    location: '60 Pleasant St, Lincoln, MA, 02464',
    status: 'New',
    actions: ['Reject', 'Accept'],
    requests: ['Proof letter of a certain experience', 'Signed NDA'],
    image: '/offer.svg',
    isAllGood: true,
  },
  {
    date: '05 Aug 2024 - 11:59 AM',
    company: 'DaVita Kidney Care',
    industry: 'Company Industry',
    established: 'July, 2006',
    size: '100 Employees',
    location: '60 Pleasant St, Lincoln, MA, 02464',
    status: 'New',
    actions: ['Reject', 'Respond'],
    requests: ['Proof letter of a certain experience', 'Signed NDA'],
    image: '/offer.svg',
    isAllGood: false,
  },
];

const OfferLists = () => {
  return (
    <div className='flex flex-col gap-8'>
      {offers.map((offer, index) => (
        <div key={index} className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex justify-between items-center'>
              <span className='text-[#6C6C6C80] text-sm'>{offer.date}</span>
              <MoreHorizontal className='w-6 h-6' />
            </div>

            <div className='flex items-center gap-3'>
              <Image
                src={offer.image}
                alt={offer.company}
                width={58}
                height={58}
                className='w-12 h-12 sm:size-[58px]'
              />
              <div>
                <h2 className='text-base sm:text-lg text-[#1C1C1C] inline-flex items-center gap-2 sm:pb-1'>
                  {offer.company}{' '}
                  <span className='text-[8px] sm:text-sm bg-[#BBF8DC] px-2 font-semibold rounded-full'>
                    {offer.status}
                  </span>
                </h2>
                <p className='text-[#6C6C6C] text-xs sm:text-sm'>
                  {offer.industry}
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-auto xl:w-max'>
              <div className='flex flex-col gap-1'>
                <p className='text-[#6C6C6C] text-sm'>Date Established:</p>
                <p className='text-[#1C1C1C] font-medium text-sm'>
                  {offer.established}
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-[#6C6C6C] text-sm'>Company Size:</p>
                <p className='text-[#1C1C1C] font-medium text-sm'>
                  {offer.size}
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-[#6C6C6C] text-sm'>Location:</p>
                <p className='text-[#1C1C1C] font-medium text-sm'>
                  {offer.location}
                </p>
              </div>
            </div>
            <div className='flex justify-between mt-4 gap-3'>
              {offer.actions.map((action, idx) => (
                <Button
                  key={idx}
                  className={cn(
                    'h-[40px] sm:h-[50px] 2xl:h-[71px] w-full rounded-[12px] text-xs sm:text-base font-semibold',
                    action === 'Reject' &&
                      'bg-accent text-[#1C1C1C] hover:bg-accent/80'
                  )}
                >
                  {action}
                </Button>
              ))}
            </div>

            {offer.isAllGood ? (
              <div className='mt-3 flex items-center gap-2 text-[#6C6C6C80]'>
                <FileCheck className='w-6 h-6 text-[#6C6C6C80]' />
                <p className='text-xs'>
                  All good! No need for any more requirements.
                </p>
              </div>
            ) : (
              <div className='mt-3 flex flex-col gap-3'>
                <p className='text-base text-[#1C1C1C] flex items-center gap-2'>
                  <FileClock className='w-6 h-6 text-[#6C6C6C]' />
                  The client is requesting:
                </p>
                <RequestModal offer={offer} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferLists;
