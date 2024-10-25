import { CircleHelp, Star } from 'lucide-react';
import React from 'react';

const PartnerAccountInfo = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      <div className='flex flex-col gap-1'>
        <p className='text-[#6C6C6C] text-sm md:text-base flex items-center gap-2'>
          Offers Sent{' '}
          <Star className='size-5 fill-[#FAB607] stroke-[#FAB607]' />
        </p>
        <p className='text-[#1C1C1C] font-medium text-lg md:text-2xl'>12</p>
      </div>
      <div className='flex flex-col gap-1'>
        <p className='text-[#6C6C6C] text-sm md:text-base flex items-center gap-2'>
          Jobs Conversion <CircleHelp className='size-5' />
        </p>
        <p className='text-[#1C1C1C] font-medium text-lg md:text-2xl'>0.18%</p>
      </div>
    </div>
  );
};

export default PartnerAccountInfo;
