import { MoreDropdown } from '@/components/global/dashboard/more-dropdown';
import { cn } from '@/lib/utils';
import { Check, FileCheck, FileClock, MoreHorizontal, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const offers = [
  {
    date: '05 Aug 2024 - 11:59 AM',
    company: 'DaVita Kidney Care',
    industry: 'Company Industry',
    established: 'July, 2006',
    size: '100 Employees',
    location: '60 Pleasant St, Lincoln, MA, 02464',
    status: 'New',
    requests: ['Proof letter of a certain experience', 'Signed NDA'],
    image: '/offer.svg',
    isAllGood: true,
    isAccepted: true,
  },
  {
    date: '05 Aug 2024 - 11:59 AM',
    company: 'DaVita Kidney Care',
    industry: 'Company Industry',
    established: 'July, 2006',
    size: '100 Employees',
    location: '60 Pleasant St, Lincoln, MA, 02464',
    status: 'New',
    requests: ['Proof letter of a certain experience', 'Signed NDA'],
    image: '/offer.svg',
    isAllGood: false,
    isAccepted: false,
  },
];

const Jobs = () => {
  return (
    <div className='flex flex-col gap-8'>
      {offers.map((offer, index) => (
        <div key={index} className='px-4 p-6 md:p-8 bg-white md:rounded-[16px]'>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-4'>
                <span
                  className={cn(
                    'text-[#6C6C6C80] text-sm flex items-center gap-2',
                    offer.isAccepted ? 'text-[#33B55B]' : 'text-[#FF5652]'
                  )}
                >
                  {offer.isAccepted ? (
                    <Check className='size-4' />
                  ) : (
                    <X className='size-4' />
                  )}
                  {offer.isAccepted ? 'ACCEPTED' : 'REJECTED'}
                </span>
                <span className='text-[#6C6C6C80] text-sm'>{offer.date}</span>
              </div>
              <MoreDropdown />
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
                <ul className='flex flex-wrap justify-between text-xs sm:text-sm text-[#1C1C1C] font-medium border border-[#DFE2E0] py-2 sm:px-4 sm:p-3 rounded-[12px] w-auto sm:w-max'>
                  {offer.requests.map((request, idx) => (
                    <li
                      key={idx}
                      className='text-start sm:text-center px-6 list-disc list-inside w-max'
                    >
                      {request}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
